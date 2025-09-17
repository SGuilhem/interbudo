<template>
  <!-- Desktop -->
  <div class="container lg:pt-14 py-12" id="dirigeants">
    <h1>Équipe Dirigeante</h1>
    <div class="flex flex-wrap flex-col lg:flex-row justify-center gap-8 pt-8">
      <!-- Carte -->
      <div class="lg:w-1/4 bg-white shadow-md flex flex-col items-center p-4">
        <img
          src="/dirigeant-guillaume-uzan.jpg"
          alt="Trésorier Guillaume Uzan"
          class="w-72 h-72 object-contain"
        />
        <div class="mt-4 text-center">
          <h4>Guillaume UZAN</h4>
          <p class="text-gray-600">Trésorier</p>
          <a
            href="mailto:guillaume.uzan@orange.fr?subject=Contact Interbudo"
            class="text-blue-600 underline"
          >
            guillaume.uzan@orange.fr
          </a>
          <p class="text-gray-800 mt-1">06 80 82 14 60</p>
        </div>
      </div>
      <div class="lg:w-1/4 bg-white shadow-md flex flex-col items-center p-4">
        <img
          src="/dirigeant-caroline-masini.jpg"
          alt="Présidente Caroline Masini"
          class="w-72 h-72 object-contain"
        />
        <div class="mt-4 text-center">
          <h4>Caroline MASINI</h4>
          <p class="text-gray-600">Présidente</p>
          <a
            href="mailto:cmasini@free.fr?subject=Contact Interbudo"
            class="text-blue-600 underline"
          >
            cmasini@free.fr
          </a>
          <p class="text-gray-800 mt-1">06 11 18 34 97</p>
        </div>
      </div>
      <div class="lg:w-1/4 bg-white shadow-md flex flex-col items-center p-4">
        <img
          src="/professeur-charly.jpg"
          alt="Professeur Charly Wable"
          class="w-72 h-72 object-contain"
        />
        <div class="mt-4 text-center">
          <h4>Charly WABLE</h4>
          <p class="text-gray-600">Professeur Principal</p>
          <a
            href="mailto:wablecharly@gmail.com?subject=Contact Interbudo"
            class="text-blue-600 underline"
          >
            wablecharly@gmail.com
          </a>
          <p class="text-gray-800 mt-1">06 59 82 71 43</p>
        </div>
      </div>
      <!-- Répéter pour les autres cartes... -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dirigeants',
  data() {
    return {
      isMobile: null,
      toggleMobileMenu: false,
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
  },
}
</script>

<style scoped>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
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
  }
}

h4 {
  font-size: 30px;
  color: #D74340;
  padding-bottom: 4px;
  padding-top: 4px;
}

p {
  font-size: 18px;
  /* color: #333; */
}
button {
  width: 80%;
  font-size: 20px;
}
button:hover {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}

.professeurs {
  display: flex;
  flex-direction: column;
  justify-self: center;
  padding: 50px;
  text-align: center;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
</style>
