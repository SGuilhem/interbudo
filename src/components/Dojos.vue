<template>
  <div class="container lg:pt-14 pt-12 m-auto" id="dojos">
    <h1>Nos Dojos</h1>

    <!-- Desktop layout -->
    <div v-if="!isMobile" class="flex flex-row justify-center pt-8 gap-10">
      <div v-for="dojo in dojos" :key="dojo.id">
        <div class="thumbnail">
          <a :href="dojo.link">
            <img :src="dojo.img" :alt="dojo.alt" width="325" height="325" />
          </a>
          <div class="adresses">
            <h4>{{ dojo.name }}</h4>
            <p class="py-4" v-html="dojo.address"></p>
            <button
              class="lg:ml-4 ml-0 border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              Plan & Accès
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile carousel -->
    <div
      v-else
      class="flex overflow-x-auto gap-6 pt-8 pb-4 px-2 snap-x snap-mandatory scroll-smooth"
    >
      <div
        v-for="dojo in dojos"
        :key="dojo.id"
        class="min-w-[85%] bg-white snap-center shrink-0"
      >
        <div class="thumbnail">
          <a :href="dojo.link">
            <img :src="dojo.img" :alt="dojo.alt" width="325" height="325" />
          </a>
          <div class="adresses">
            <h4>{{ dojo.name }}</h4>
            <p class="py-4" v-html="dojo.address"></p>
            <button
              class="w-full border-2 border-gray-200 bg-white p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
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
import dojoCaillaux from "@/assets/dojo-caillaux.jpg";
import dojoStadium from "@/assets/dojo-stadium.jpg";
import dojoCharlety from "@/assets/dojo-charlety.jpg";

export default {
  name: "Dojos",
  data() {
    return {
      isMobile: false,
      dojos: [
        {
          id: 1,
          name: "Gymnase Caillaux",
          address: "3 rue Caillaux<br />75013 Paris",
          img: dojoCaillaux,
          alt: "Photo Dojo Caillaux",
          link: "./dojos.html#dojo-caillaux",
        },
        {
          id: 2,
          name: "Gymnase Stadium",
          address: "66 avenue d’Ivry<br />75013 Paris",
          img: dojoStadium,
          alt: "Photo Dojo Stadium",
          link: "./dojos.html#dojo-stadium",
        },
        {
          id: 3,
          name: "Stade Charlety",
          address: "3 avenue Pierre de Coubertin<br />75013 Paris",
          img: dojoCharlety,
          alt: "Photo Dojo Stade Charlety",
          link: "./dojos.html#dojo-charlety",
        },
      ],
    };
  },
  mounted() {
    this.isMobile = this.checkIfMobile();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = this.checkIfMobile();
    },
    checkIfMobile() {
      return window.innerWidth <= 1024;
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 30px;
  color: #d74340;
  padding-top: 16px;
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
  text-align: center;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
</style>
