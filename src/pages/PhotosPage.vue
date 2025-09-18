<template>
  <div class="container lg:w-3/5 lg:pt-14 pt-12 m-auto">
    <h1>Nos Dojos</h1>
    <div class="flex flex-col justify-center pt-4 gap-10">
      <div v-for="dojo in dojos" :key="dojo.id">
        <div class="thumbnail flex lg:flex-row flex-col">
        <div>
          <router-link :to="dojo.link">
            <img :src="dojo.img" :alt="dojo.alt" />
          </router-link>
          <p class="text-sm font-light text-gray-500 pt-2">(Cliquez sur l'image pour ouvrir dans GoogleMap)</p>
          </div>
          <div class="adresses text-left lg:ml-8 lg:self-center lg:pt-0 pt-4">
            <h4>{{ dojo.name }}</h4>
            <p class="py-2" v-html="dojo.address"></p>
            <div>
              <p class="font-bold">Accès:</p>
              <div>
                <p> {{dojo.acces1 }}</p>
                <p> {{dojo.acces2 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import mapCaillaux from "@/assets/map-caillaux.jpg";
import mapStadium from "@/assets/map-stadium.jpg";
import mapCharlety from "@/assets/map-charlety.jpg";

export default {
  name: "DojosPage",
  data() {
    return {
      isMobile: false,
      dojos: [
        {
          id: 1,
          name: "Gymnase Caillaux",
          address: "3 rue Caillaux<br />75013 Paris",
          img: mapCaillaux,
          alt: "Photo Gmap Caillaux",
          acces1: "Métro Maison Blanche",
          acces2: "Métro Porte de Choisy",
          link: "https://www.google.fr/maps/place/3+Rue+Caillaux,+75013+Paris/@48.82281,2.3596759,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67187042da509:0x995bb705736113cb!8m2!3d48.82281!4d2.3618646",
        },
        {
          id: 2,
          name: "Gymnase Stadium",
          address: "66 avenue d’Ivry<br />75013 Paris",
          img: mapStadium,
          alt: "Photo Gmap Stadium",
          acces1: "Métro Olympiades",
          acces2: "Métro Tolbiac",
          link: "https://www.google.fr/maps/place/66+Avenue+d'Ivry,+75013+Paris/@48.8248296,2.3619971,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67187f653a9c9:0x461cb61cc431b36d!8m2!3d48.8248296!4d2.3641858",
        },
        {
          id: 3,
          name: "Stade Charlety",
          address: "3 avenue Pierre de Coubertin<br />75013 Paris",
          img: mapCharlety,
          alt: "Photo Gmap Stade Charlety",
          acces1: "Métro Tramway T3",
          acces2: "Bus 21",
          link: "https://www.google.fr/maps/place/3+Avenue+Pierre+de+Coubertin,+75013+Paris-13E-Arrondissement/@48.8184181,2.3421625,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6719e55990ac7:0x29f67b4e4708adc0!8m2!3d48.8184181!4d2.3443512",
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
.container {
  padding-right: 15px;
  padding-left: 15px;
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
