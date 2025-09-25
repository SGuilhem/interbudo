Avec ce code ci: "
<template>
  <!-- Desktop -->
  <div class="container lg:pt-12 pt-16">
    <h1>Horaires</h1>
    <div class="flex justify-center font-semibold text-xl text-gray-800">
      Format à afficher:
    </div>

    <!-- Boutons de sélection -->
    <div class="flex justify-center gap-4 lg:pt-4 pt-4">
      <button
        @click="selectTextView"
        :class="`lg:ml-4 ml-0 border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer ${textIsSelected ? 'bg-red-custom border-red-custom text-white' : ''}`"
      >
        Format texte
      </button>
      <button
        @click="selectPlanningView"
        :class="`lg:ml-4 ml-0 border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer ${planningIsSelected ? 'bg-red-custom border-red-custom text-white' : ''}`"
      >
        Format Planning
      </button>
    </div>
    <!-- Version desktop Planning -->
    <div v-if="planningIsSelected && !isMobile" class="overflow-x-auto pt-4">
      <table class="w-full border-collapse border border-gray-300 text-center">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2">Lundi</th>
            <th class="border border-gray-300 px-4 py-2">Mercredi</th>
            <th class="border border-gray-300 px-4 py-2">Vendredi</th>
            <th class="border border-gray-300 px-4 py-2">Samedi</th>
            <th class="border border-gray-300 px-4 py-2">Samedi 1 fois par mois</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in desktopPlanning" :key="i">
            <td
              v-for="(cell, j) in row"
              :key="j"
              class="border border-gray-300 px-4 py-3 align-top"
              :class="`border border-gray-300 px-4 py-3 align-top ${cell ? 'bg-white' : ''}`"
            >
              <div v-if="cell">
                <h3 class="font-semibold">{{ cell.title }}</h3>
                <p>{{ cell.time }}</p>
                <p>{{ cell.prof }}</p>
                <router-link
                  :to="{ path: '/dojos', hash: getGymHash(cell.gym) }"
                  class="text-blue-600 underline"
                >
                  {{ cell.gym }}
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Version mobile Planning -->
    <div class="relative w-full overflow-hidden">
      <div v-if="viewMode === 'planning' && isMobile" class="pt-8 relative">
        <!-- Flèches -->
        <div
          v-if="currentIndex > 0"
          class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 shadow-md"
          @click="slideToPrevious"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 text-gray-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div
          v-if="currentIndex < mobilePlanning.length - 1"
          class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 shadow-md"
          @click="slideToNext"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 text-gray-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <!-- Slider -->
        <div
          ref="slider"
          class="flex transition-transform duration-500 ease-in-out gap-5"
          :style="{
            transform: `translateX(-${currentIndex * (cardWidth + 20)}px)`,
            paddingLeft: sideGap + 'px',
          }"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
        >
          <div
            v-for="(day, i) in mobilePlanning"
            :key="i"
            class="flex-shrink-0"
            :style="{ width: cardWidth + 'px' }"
          >
            <div class="shadow-sm bg-white">
              <h2 class="text-lg font-bold text-center mb-4 day-title">{{ day.name }}</h2>
              <div v-for="(cours, j) in day.courses" :key="j" class="p-4 mb-4 border-b pb-2">
                <p v-if="cours.regroupement" class="text-lg font-bold text-center mb-4 day-title -p-4">
                  {{ cours.titleBis }}
                </p>
                <h3 class="font-semibold">{{ cours.title }}</h3>
                <p>{{ cours.time }}</p>
                <p>{{ cours.prof }}</p>
                <router-link
                  :to="{ path: './dojosmaps'}"
                  class="text-blue-600 underline"
                >
                  {{ cours.gym }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vue Texte -->
    <div v-if="textIsSelected" class="grid md:grid-cols-2 gap-6 pt-8">
      <div v-for="(cours, index) in textData" :key="index" class="p-4 shadow-sm bg-white">
        <h3 class="text-lg font-bold">{{ cours.title }}</h3>
        <p v-if="cours.age" class="italic text-gray-600">{{ cours.age }}</p>
        <div v-for="(seance, i) in cours.courses" :key="i" class="mt-2">
          <p>- {{ seance.day }} de {{ seance.time }}</p>
          <p>
            <router-link
              :to="{ path: './dojosmaps'}"
              class="text-blue-600 underline"
            >
              {{ seance.gym }}
            </router-link>
          </p>
          <p v-if="seance.prof">{{ seance.prof }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css'

export default {
  name: 'times',
  data() {
    return {
      isMobile: null,
      toggleMobileMenu: false,
      viewMode: 'text',
      isSelected: null,
      textIsSelected: true,
      planningIsSelected: false,
      currentIndex: 0,
      cardWidth: 0,
      sideGap: 0,
      touchStartX: 0,
      threshold: 30,
      // Planning Desktop
      desktopPlanning: [
        // Rangée 1
        [
          null,
          {
            title: 'Baby Judo (4-6 ans)',
            time: '14h00 - 14h45',
            prof: 'avec Charly',
            gym: 'Gymnase Stadium',
          },
          null,
          {
            title: 'Baby Judo (4-6 ans)',
            time: '15h30 - 16h30',
            prof: 'avec Romane',
            gym: 'Stade Charlety',
          },
          null,
        ],
        // Rangée 2
        [
          null,
          {
            title: 'Judo Enfant (7-9 ans)',
            time: '15h00 - 16h00',
            prof: 'avec Charly',
            gym: 'Gymnase Stadium',
          },
          {
            title: 'Judo Enfant (7-9 ans)',
            time: '17h00 - 18h00',
            prof: 'avec Charly',
            gym: 'Gymnase Caillaux',
          },
          null,
          null,
        ],
        // Rangée 3
        [
          null,
          {
            title: 'Judo Enfant (10-14 ans)',
            time: '16h00 - 17h15',
            prof: 'avec Charly',
            gym: 'Gymnase Stadium',
          },
          {
            title: 'Judo Enfant (10-14 ans)',
            time: '18h00 - 19h00',
            prof: 'avec Charly',
            gym: 'Gymnase Caillaux',
          },
          null,
          {
            title: 'Judo Adulte (Ado >10 ans)',
            time: '16h30 - 18h30',
            prof: 'Regroupements Interclubs',
            gym: 'Stade Charlety',
          },
        ],
        // Rangée 4
        [
          {
            title: 'Judo Adultes',
            time: '19h15 - 20h45',
            prof: 'avec Charly',
            gym: 'Gymnase Caillaux',
          },
          {
            title: 'Judo Adultes',
            time: '19h00 - 20h20',
            prof: 'avec Romane',
            gym: 'Gymnase Stadium',
          },
          {
            title: 'Judo Ados (Adultes)',
            time: '19h00 - 20h15',
            prof: 'avec Charly',
            gym: 'Gymnase Caillaux',
          },
          null,
          null,
        ],
      ],

      // Planning Mobile
      mobilePlanning: [
        {
          name: 'Lundi',
          courses: [
            {
              title: 'Judo Adultes',
              time: '19h15 - 20h45',
              prof: 'avec Charly',
              gym: 'Gymnase Caillaux',
            },
          ],
        },
        {
          name: 'Mercredi',
          courses: [
            {
              title: 'Baby Judo (4-6 ans)',
              time: '14h00 - 14h45',
              prof: 'avec Charly',
              gym: 'Gymnase Stadium',
            },
            {
              title: 'Judo Enfant (7-9 ans)',
              time: '15h00 - 16h00',
              prof: 'avec Charly',
              gym: 'Gymnase Stadium',
            },
            {
              title: 'Judo Enfant (10-14 ans)',
              time: '16h00 - 17h15',
              prof: 'avec Charly',
              gym: 'Gymnase Stadium',
            },
            {
              title: 'Judo Adultes',
              time: '19h00 - 20h20',
              prof: 'avec Romane',
              gym: 'Gymnase Stadium',
            },
          ],
        },
        {
          name: 'Vendredi',
          courses: [
            {
              title: 'Judo Enfant (7-9 ans)',
              time: '17h00 - 18h00',
              prof: 'avec Charly',
              gym: 'Gymnase Stadium',
            },
            {
              title: 'Judo Enfant (10-14 ans)',
              time: '18h00 - 19h00',
              prof: 'avec Charly',
              gym: 'Gymnase Stadium',
            },
            {
              title: 'Judo Adultes',
              time: '19h00 - 20h15',
              prof: 'avec Charly',
              gym: 'Gymnase Caillaux',
            },
          ],
        },
        {
          name: 'Samedi',
          courses: [
            {
              title: 'Baby Judo (4-6 ans)',
              time: '15h30 - 16h30',
              prof: 'avec Romane',
              gym: 'Stade Charlety',
            },
            {
              title: 'Judo Adulte (Ado >10 ans)',
              titleBis: 'Samedi 1 fois par mois',
              regroupement: 'Regroupement interclubs',
              time: '16h30 - 18h30',
              gym: 'Stade Charlety',
            },
          ],
        },
      ],

      // Données format texte
      textData: [
        {
          title: 'Baby Judo',
          age: '(de 4 à 6 ans)',
          courses: [
            {
              day: 'Mercredi',
              time: '14h00 - 14h45',
              gym: 'Gymnase Stadium',
              prof: 'avec Charly',
            },
            {
              day: 'Samedi',
              time: '15h30 - 16h30',
              gym: 'Stade Charlety',
              prof: 'avec Romane',
            },
          ],
        },
        {
          title: 'Judo Enfant',
          age: '(de 7 à 9 ans)',
          courses: [
            {
              day: 'Mercredi',
              time: '15h00 - 16h00',
              gym: 'Gymnase Stadium',
              prof: 'avec Charly',
            },
            {
              day: 'Vendredi',
              time: '17h00 - 18h00',
              gym: 'Gymnase Caillaux',
              prof: 'avec Charly',
            },
          ],
        },
        {
          title: 'Judo Enfant',
          age: '(de 10 à 14 ans)',
          courses: [
            {
              day: 'Mercredi',
              time: '16h00 - 17h15',
              gym: 'Gymnase Stadium',
              prof: 'avec Charly',
            },
            {
              day: 'Vendredi',
              time: '18h00 - 19h00',
              gym: 'Gymnase Caillaux',
              prof: 'avec Charly',
            },
            {
              day: 'Samedi 1 fois par mois',
              time: '16h30 - 18h30',
              gym: 'Stade Charlety',
              prof: 'Regroupement interclubs',
            },
          ],
        },
        {
          title: 'Judo Adolescents concernés par le cours Adultes',
          courses: [
            {
              day: 'Vendredi',
              time: '19h00 - 20h15',
              gym: 'Gymnase Caillaux',
              prof: 'avec Charly',
            },
            {
              day: 'Samedi 1 fois par mois',
              time: '16h30 - 18h30',
              gym: 'Stade Charlety',
              prof: 'Regroupement interclubs',
            },
          ],
        },
        {
          title: 'Judo Adultes',
          courses: [
            {
              day: 'Lundi',
              time: '19h15 - 20h45',
              gym: 'Gymnase Caillaux',
              prof: 'avec Charly',
            },
            {
              day: 'Mercredi',
              time: '19h00 - 20h20',
              gym: 'Gymnase Stadium',
              prof: 'avec Romane',
            },
            {
              day: 'Vendredi',
              time: '19h00 - 20h15',
              gym: 'Gymnase Caillaux',
              prof: 'avec Charly',
            },
            {
              day: 'Samedi 1 fois par mois',
              time: '16h30 - 18h30',
              gym: 'Stade Charlety',
              prof: 'Regroupement interclubs',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    this.isMobile = this.checkIfMobile()
    this.viewportWidth = window.innerWidth
    window.addEventListener('resize', this.handleResize)
    this.$nextTick(() => {
      this.updateCardWidth()
    })

    window.addEventListener('resize', this.updateCardWidth)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateCardWidth)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.viewportWidth = window.innerWidth
      const newIsMobile = this.checkIfMobile()
      if (newIsMobile !== this.isMobile) {
        this.isMobile = newIsMobile
      }
      this.updateCardWidth()
    },
    checkIfMobile() {
      return window.innerWidth <= 1024
    },
    selectTextView() {
      this.viewMode = 'text'
      this.textIsSelected = true
      this.planningIsSelected = false
    },
    selectPlanningView() {
      this.viewMode = 'planning'
      this.planningIsSelected = true
      this.textIsSelected = false
    },
    updateCardWidth() {
      const width = window.innerWidth
      this.cardWidth = Math.floor(width * 0.75)
      this.sideGap = Math.floor(width * 0.09)
    },
    sliderTransform() {
      const slideSize = this.cardWidth + this.sideGap
      const offset =
        this.currentIndex === 0 ? this.sideGap : (this.viewportWidth - this.cardWidth) / 2
      return `translateX(${offset - this.currentIndex * slideSize}px)`
    },
    slideToNext() {
      if (this.currentIndex < this.mobilePlanning.length - 1) {
        this.currentIndex++
      }
    },
    slideToPrevious() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    onTouchStart(e) {
      this.touchStartX = e.touches[0].clientX
    },
    onTouchEnd(e) {
      const touchEndX = e.changedTouches[0].clientX
      const swipeDistance = this.touchStartX - touchEndX

      if (swipeDistance > this.threshold && this.currentIndex < this.mobilePlanning.length - 1) {
        this.currentIndex++
      } else if (swipeDistance < -this.threshold && this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    getGymHash(gym) {
      switch (gym) {
        case 'Gymnase Caillaux':
          return '#caillaux'
        case 'Gymnase Stadium':
          return '#stadium'
        case 'Stade Charlety':
          return '#charlety'
        default:
          return ''
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
}
button {
  width: 80%;
  font-size: 20px;
}
button:hover {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}
.day-title {
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #f5f5f5;
  border-color: #ddd;
}
</style>
