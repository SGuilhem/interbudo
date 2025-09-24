<template>
  <div class="container lg:w-3/5 lg:pt-12 pt-16">
    <h1>Nos Dojos</h1>
    <div class="flex flex-col justify-center gap-10">
      <div v-for="dojo in dojos" :key="dojo.id">
        <div
          class="thumbnail flex lg:flex-row flex-col"
          :id="
            dojo.name === 'Gymnase Caillaux'
              ? 'caillaux'
              : dojo.name === 'Gymnase Stadium'
                ? 'stadium'
                : 'charlety'
          "
        >
          <div class="self-center">
            <a :href="dojo.link" target="_blank" rel="noopener noreferrer">
              <img :src="dojo.img" :alt="dojo.alt" />
            </a>
            <p class="text-sm font-light text-gray-500 pt-2">
              (Cliquez sur l'image pour ouvrir dans GoogleMap)
            </p>
          </div>
          <div class="adresses lg:text-left lg:ml-16 lg:self-center lg:pt-0 pt-4">
            <h4>{{ dojo.name }}</h4>
            <p class="py-2" v-html="dojo.address"></p>
            <div>
              <p class="font-bold"></p>
              <div>
                <p>{{ dojo.acces1 }}</p>
                <p>{{ dojo.acces2 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapCaillaux from '@/assets/map-caillaux.jpg'
import mapStadium from '@/assets/map-stadium.jpg'
import mapCharlety from '@/assets/map-charlety.jpg'

export default {
  name: 'DojosMaps',
  data() {
    return {
      isMobile: false,
      dojos: [
        {
          id: 1,
          name: 'Gymnase Caillaux',
          address: '3 rue Caillaux<br />75013 Paris',
          img: mapCaillaux,
          alt: 'Photo Gmap Caillaux',
          acces1: 'Métro Maison Blanche',
          acces2: 'Métro Porte de Choisy',
          link: 'https://maps.app.goo.gl/Tue2ydE8xtKCrayC8',
        },
        {
          id: 2,
          name: 'Gymnase Stadium',
          address: '66 avenue d’Ivry<br />75013 Paris',
          img: mapStadium,
          alt: 'Photo Gmap Stadium',
          acces1: 'Métro Olympiades',
          acces2: 'Métro Tolbiac',
          link: 'https://maps.app.goo.gl/kE2VQcniLg2XynxH9',
        },
        {
          id: 3,
          name: 'Stade Charlety',
          address: '3 avenue Pierre de Coubertin<br />75013 Paris',
          img: mapCharlety,
          alt: 'Photo Gmap Stade Charlety',
          acces1: 'Métro Tramway T3',
          acces2: 'Bus 21',
          link: 'https://maps.app.goo.gl/moCkf2ANxJxRrr2PA',
        },
      ],
    }
  },
  mounted() {
    this.isMobile = this.checkIfMobile()
    window.addEventListener('resize', this.handleResize)
    this.scrollToHash()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.isMobile = this.checkIfMobile()
    },
    checkIfMobile() {
      return window.innerWidth <= 1024
    },
    scrollToHash() {
      const hash = window.location.hash
      if (hash) {
        // enlever le '#' et trouver l'élément
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
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
h4 {
  font-size: 30px;
  color: #d74340;
}
.adresses {
  font-size: 18px;
  font-weight: 300;
}
button {
  font-size: 20px;
}
button:hover {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}
.thumbnail {
  padding: 40px;
  @media (max-width: 1024px) {
    padding: 25px;
  }
  text-align: center;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
</style>
