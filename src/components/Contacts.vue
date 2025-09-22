<template>
  <div class="container m-auto" id="contacts">
    <h1>Nous contacter</h1>

    <div>
      <div class="container bg-white">
        <!-- Bloc contact -->
        <div class="flex lg:flex-row flex-col">
          <div
            class="flex flex-col w-full lg:w-1/2 mb-10 lg:mb-0 ml-0 lg:ml-6 self-center items-center"
          >
            <p>Pour tout renseignements, vous pouvez contacter :</p>
            <p class="lg:pt-0 pt-4">Mme. Caroline Masini</p>
            <a
              href="mailto:cmasini@free.fr?subject=Contact Interbudo"
              class="text-blue-600 underline"
            >
              cmasini@free.fr
            </a>
            <p class="text-gray-800 mt-1">06 11 18 34 97</p>
          </div>

          <div class="flex flex-col self-center w-full lg:w-1/2 lg:m-auto">
            <p>
              Restez informés en vous abonnant à la page Facebook ou
              Instagram Interbudo :
            </p>

            <!-- Boucle réseaux sociaux -->
            <div class="flex gap-6 mt-4 self-center">
              <div
                v-for="reseau in reseauxSociaux"
                :key="reseau.id"
                class="w-12 h-12"
              >
                <a
                  :href="reseau.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="reseau.img"
                    alt="logo réseau social"
                    class="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoInstagram from "@/assets/Instagram-logo.png";
import logoFacebook from "@/assets/Facebook_logo.png";

export default {
  name: "Contact",
  data() {
    return {
      isMobile: false,
      reseauxSociaux: [
        {
          id: 1,
          img: logoInstagram,
          link: "https://www.instagram.com/interbudo_clubdejudo/",
        },
        {
          id: 2,
          img: logoFacebook,
          link: "https://www.facebook.com/interbudo/?locale=fr_FR",
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
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 1024px) {
    padding: 20px;
  }
}
</style>
