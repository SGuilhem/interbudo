<template>
  <!-- Desktop -->
  <div class="container lg:pt-14 py-12" id="horaires">
    <h1 class="text-2xl font-bold text-center">Horaires</h1>

    <!-- Boutons de sélection -->
    <div class="flex justify-center gap-4 pt-8">
      <button
         @click="selectPlanningView"
        :class="`lg:ml-4 ml-0 border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer ${ planningIsSelected ? 'bg-red-custom border-red-custom text-white' : '' }`"
      >
        Format Planning
      </button>
      <button
        @click="selectTextView"
        :class="`lg:ml-4 ml-0 border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer ${ textIsSelected ? 'bg-red-custom border-red-custom text-white' : '' }`"
      >
        Format texte
      </button>
    </div>

     <!-- Version desktop Planning -->
    <div v-if="viewMode === 'planning' && !isMobile" class="overflow-x-auto mt-10">
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
          <tr v-for="(row, i) in planningData" :key="i">
            <td
              v-for="(cell, j) in row"
              :key="j"
              class="border border-gray-300 px-4 py-3 align-top"
              :class="`border border-gray-300 px-4 py-3 align-top ${
              cell ? 'bg-white' : ''
            }`"
            >
              <div v-if="cell">
                <h3 class="font-semibold">{{ cell.title }}</h3>
                <p>{{ cell.time }}</p>
                <a href="/gymnase" class="text-blue-600 underline">{{
                  cell.gym
                }}</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Version mobile Planning : Carrousel -->
    <div v-if="viewMode === 'planning' && isMobile" class="mt-10">
      <swiper :slides-per-view="1" :space-between="20" class="h-full">
        <swiper-slide v-for="(day, i) in planningByDay" :key="i">
          <div class="p-4 border rounded-lg shadow-sm bg-white">
            <h2 class="text-lg font-bold text-center mb-4">{{ day.name }}</h2>
            <div
              v-for="(cours, j) in day.courses"
              :key="j"
              class="mb-4 border-b pb-2"
            >
              <h3 class="font-semibold">{{ cours.title }}</h3>
              <p>{{ cours.time }}</p>
              <a href="/gymnase" class="text-blue-600 underline">{{
                cours.gym
              }}</a>
            </div>
          </div>
          <div v-if="day.name === 'Samedi'" class="p-4 mt-5 border rounded-lg shadow-sm bg-white">
            <h2 class="text-lg font-bold text-center mb-4">Samedi 1 fois par mois</h2>
            <div
              class="mb-4 border-b pb-2"
            >
              <h3 class="font-semibold">Judo Adulte (Ado >10 ans)</h3>
              <p>16h30 - 18h30</p>
              <a href="/gymnase" class="text-blue-600 underline">Stade Charlety</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Vue Texte -->
    <div v-else class="grid md:grid-cols-2 gap-6 mt-10">
      <div
        v-for="(cours, index) in textData"
        :key="index"
        class="p-4 border rounded-lg shadow-sm bg-white"
      >
        <h3 class="text-lg font-bold">{{ cours.title }}</h3>
        <p v-if="cours.age" class="italic text-gray-600">{{ cours.age }}</p>
        <div v-for="(seance, i) in cours.sessions" :key="i" class="mt-2">
          <p>{{ seance.jour }} de {{ seance.horaire }}</p>
          <p>
            <a href="/gymnase" class="text-blue-600 underline">{{
              seance.gymnase
            }}</a>
          </p>
          <p v-if="seance.prof">avec {{ seance.prof }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

export default {
  name: 'Horaires',
  components: { Swiper, SwiperSlide },
  data() {
    return {
      isMobile: null,
      toggleMobileMenu: false,
      viewMode: 'planning',
      isSelected: null,

      // Planning Desktop
      planningData: [
        // Rangée 1
        [
          null,
          { title: 'Baby Judo (4-6 ans)', time: '14h00 - 14h45', gym: 'Gymnase Stadium' },
          null,
          { title: 'Baby Judo (4-6 ans)', time: '15h30 - 16h30', gym: 'Stade Charlety' },
          null,
        ],
        // Rangée 2
        [
          null,
          { title: 'Judo Enfant (7-9 ans)', time: '15h00 - 16h00', gym: 'Gymnase Stadium' },
          { title: 'Judo Enfant (7-9 ans)', time: '17h00 - 18h00', gym: 'Gymnase Caillaux' },
          null,
          null,
        ],
        // Rangée 3
        [
          null,
          { title: 'Judo Enfant (10-14 ans)', time: '16h00 - 17h15', gym: 'Gymnase Stadium' },
          { title: 'Judo Enfant (10-14 ans)', time: '18h00 - 19h00', gym: 'Gymnase Caillaux' },
          null,
          null,
        ],
        // Rangée 4
        [
          null,
          null,
          { title: 'Judo Ados (Adultes)', time: '19h00 - 20h15', gym: 'Gymnase Caillaux' },
          null,
          { title: 'Judo Adulte (Ado >10 ans)', time: '16h30 - 18h30', gym: 'Stade Charlety' },
        ],
        // Rangée 5
        [
          { title: 'Judo Adultes', time: '19h15 - 20h45', gym: 'Gymnase Caillaux' },
          { title: 'Judo Adultes', time: '19h00 - 20h20', gym: 'Gymnase Stadium' },
          { title: 'Judo Adultes', time: '19h00 - 20h15', gym: 'Gymnase Caillaux' },
          null,
          null,
        ],
        // Rangée 6
        [
          { title: 'Judo Adultes', time: '19h15 - 20h45', gym: 'Gymnase Caillaux' },
          { title: 'Judo Adultes', time: '19h00 - 20h20', gym: 'Gymnase Stadium' },
          { title: 'Judo Adultes', time: '19h00 - 20h15', gym: 'Gymnase Caillaux' },
          null,
          null,
        ],
      ],

      // Planning Mobile
      planningByDay: [
        {
          name: 'Lundi',
          courses: [
            { title: 'Judo Adultes', time: '19h15 - 20h45', gym: 'Gymnase Caillaux' },
          ],
        },
        {
          name: 'Mercredi',
          courses: [
            { title: 'Baby Judo (4-6 ans)', time: '14h00 - 14h45', gym: 'Gymnase Stadium' },
            { title: 'Judo Enfant (7-9 ans)', time: '15h00 - 16h00', gym: 'Gymnase Stadium' },
            { title: 'Judo Enfant (10-14 ans)', time: '16h00 - 17h15', gym: 'Gymnase Stadium' },
            { title: 'Judo Adultes', time: '19h00 - 20h20', gym: 'Gymnase Stadium' },
          ],
        },
        {
          name: 'Vendredi',
          courses: [
            { title: 'Judo Enfant (7-9 ans)', time: '17h00 - 18h00', gym: 'Gymnase Stadium' },
            { title: 'Judo Enfant (10-14 ans)', time: '18h00 - 19h00', gym: 'Gymnase Stadium' },
            { title: 'Judo Adultes', time: '19h00 - 20h15', gym: 'Gymnase Caillaux' },
          ],
        },
        {
          name: 'Samedi',
          courses: [
            { title: 'Baby Judo (4-6 ans)', time: '15h30 - 16h30', gym: 'Stade Charlety' },
          ],
        },
      ],

      // Données format texte
      textData: [
        {
          title: 'Baby Judo',
          age: '(de 4 à 6 ans)',
          sessions: [
            { jour: 'Mercredi', horaire: '14h00 - 14h45', gymnase: 'Gymnase Stadium', prof: 'Charly' },
            { jour: 'Samedi', horaire: '15h30 - 16h30', gymnase: 'Stade Charlety', prof: 'Romane' },
          ],
        },
        {
          title: 'Judo Enfant',
          age: '(de 7 à 9 ans)',
          sessions: [
            { jour: 'Mercredi', horaire: '15h00 - 16h00', gymnase: 'Gymnase Stadium', prof: 'Charly' },
            { jour: 'Vendredi', horaire: '17h00 - 18h00', gymnase: 'Gymnase Caillaux', prof: 'Charly' },
          ],
        },
        {
          title: 'Judo Enfant',
          age: '(de 10 à 14 ans)',
          sessions: [
            { jour: 'Mercredi', horaire: '16h00 - 17h15', gymnase: 'Gymnase Stadium', prof: 'Charly' },
            { jour: 'Vendredi', horaire: '18h00 - 19h00', gymnase: 'Gymnase Caillaux', prof: 'Charly' },
            { jour: 'Samedi 1 fois par mois', horaire: '16h30 - 18h30', gymnase: 'Stade Charlety', prof: 'Regroupement interclubs' },
          ],
        },
        {
          title: 'Judo Adolescents concernés par le cours Adultes',
          sessions: [
            { jour: 'Vendredi', horaire: '19h00 - 20h15', gymnase: 'Gymnase Caillaux', prof: 'Charly' },
            { jour: 'Samedi 1 fois par mois', horaire: '16h30 - 18h30', gymnase: 'Stade Charlety', prof: 'Regroupement interclubs' },
          ],
        },
        {
          title: 'Judo Adultes',
          sessions: [
            { jour: 'Lundi', horaire: '19h15 - 20h45', gymnase: 'Gymnase Caillaux', prof: 'Charly' },
            { jour: 'Mercredi', horaire: '19h00 - 20h20', gymnase: 'Gymnase Stadium', prof: 'Romane' },
            { jour: 'Vendredi', horaire: '19h00 - 20h15', gymnase: 'Gymnase Caillaux', prof: 'Charly' },
            { jour: 'Samedi 1 fois par mois', horaire: '16h30 - 18h30', gymnase: 'Stade Charlety', prof: 'Regroupement interclubs' },
          ],
        },
      ],
    }
  },
  mounted() {
    this.isMobile = this.checkIfMobile()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      const newIsMobile = this.checkIfMobile()
      if (newIsMobile !== this.isMobile) {
        this.isMobile = newIsMobile
      }
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
    }
  },
}
</script>

<style scoped>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
/* @media (min-width: 1200px) {
  .container {
    width: 1600px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
} */

 button {
  width: 80%;
  font-size: 20px;
}
button:hover {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}
</style>
