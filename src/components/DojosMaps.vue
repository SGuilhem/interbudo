<template>
  <div class="container lg:w-3/4 pt-16">
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
              <img :src="dojo.img" :alt="dojo.alt" class="self-center w-full h-92 object-cover" />
            </a>
            <p class="text-sm font-light text-gray-500 pt-2">
              (Cliquez sur l'image pour ouvrir dans GoogleMap)
            </p>
          </div>
          <div class="adresses lg:text-left lg:ml-16 lg:self-center lg:pt-0 pt-4">
            <h4>{{ dojo.name }}</h4>
            <p class="py-2" v-html="dojo.address"></p>
            <div class="flex flex-col gap-2 items-center lg:items-start">
              <div v-for="(acces, i) in dojo.acces" :key="i" class="flex items-center gap-1">
                <img
                  v-for="(icon, j) in acces.icons"
                  :key="j"
                  :src="icon"
                  :alt="acces.label"
                  class="h-10 w-10 object-contain"
                />

                <span>{{ acces.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapCaillaux from '@/assets/map-caillaux.png'
import mapStadium from '@/assets/map-stadium.png'
import mapCharlety from '@/assets/map-charlety.png'
import MetroLigne7 from '@/assets/MetroLigne7.png'
import MetroLigne14 from '@/assets/MetroLigne14.png'
import TramT3 from '@/assets/TramT3.png'
import Bus21 from '@/assets/Bus21.png'

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
          link: 'https://maps.app.goo.gl/Tue2ydE8xtKCrayC8',
          acces: [
            { icons: [MetroLigne7, MetroLigne14], label: 'Métro Maison Blanche' },
            { icons: [MetroLigne7], label: 'Métro Porte de Choisy' },
          ],
        },
        {
          id: 2,
          name: 'Gymnase Stadium',
          address: "66 avenue d'Ivry<br />75013 Paris",
          img: mapStadium,
          alt: 'Photo Gmap Stadium',
          link: 'https://maps.app.goo.gl/kE2VQcniLg2XynxH9',
          acces: [
            { icons: [MetroLigne14], label: 'Métro Olympiades' },
            { icons: [MetroLigne7], label: 'Métro Tolbiac' },
          ],
        },
        {
          id: 3,
          name: 'Stade Charlety',
          address:
            '3 avenue Pierre de Coubertin<br />75013 Paris<br /><br /> (Le dojo se situe au niveau du "PUC Squash")',
          img: mapCharlety,
          alt: 'Photo Gmap Stade Charlety',
          link: 'https://maps.app.goo.gl/4GBjXMSJop9nz5R76',
          acces: [
            { icons: [TramT3], label: 'Tramway T3' },
            { icons: [Bus21], label: 'Bus 21' },
          ],
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
