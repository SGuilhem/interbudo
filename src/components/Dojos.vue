<template>
  <!-- Desktop -->
  <div class="container lg:pt-14 py-12" id="dojos">
    <h1>Nos Dojos</h1>
    <div class="flex row justify-center pt-8">
      <div class="col-xs-12 col-sm-6 col-md-4 bg-white">
        <div class="thumbnail dojo-caillaux">
          <a href="./dojos.html#dojo-caillaux"
            ><img
              src="../../public/dojo-caillaux.jpg"
              alt="Photo Dojo Caillaux"
              width="325px"
              height="325px"
          /></a>
          <div class="adresses">
            <h4>Gymnase Caillaux</h4>
            <p class="py-4">3 rue Caillaux<br />75013 Paris</p>
            <button
              class="lg:ml-4 ml-0 border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              Plan & Accès
            </button>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 mx-10 bg-white">
        <div class="thumbnail dojo-stadium">
          <a href="./dojos.html#dojo-stadium"
            ><img
              src="../../public/dojo-stadium.jpg"
              alt="Photo Dojo Stadium"
              width="325px"
              height="325px"
          /></a>
          <div class="adresses">
            <h4>Gymnase Stadium</h4>
            <p class="py-4">66 avenue d’Ivry<br />75013 Paris</p>
            <button
              class="lg:ml-4 ml-0 border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              Plans & Accès
            </button>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 bg-white">
        <div class="thumbnail dojo-charlety">
          <a href="./dojos.html#dojo-charlety"
            ><img
              src="../../public/dojo-charlety.jpg"
              alt="Photo Dojo Stade Charlety"
              width="325"
              height="325"
          /></a>
          <div class="adresses">
            <h4>Stade Charlety</h4>
            <p class="py-4">3 avenue Pierre de Coubertin<br />75013 Paris</p>
            <button
              class="lg:ml-4 ml-0 border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              Plan & Accès
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dojos',
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
      width: 1170px;
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
  padding-top: 16px;
}
.adresses {
font-size: 18px;
font-weight: 300;
}

button {
  width: 80%;
  font-size: 20px;
}
button:hover {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}

.thumbnail {
  padding: 50px;
  text-align: center;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
</style>
