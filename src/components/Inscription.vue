<template>
  <div class="container lg:pt-14 pt-12 m-auto" id="inscription">
    <h1>Inscription au Club</h1>
    <div class="pt-8 lg:pt-4">
      <div class="container bg-white">
        <div class="text-base font-medium text-gray-700 p-B4 text-center">
          <p class="font-bold">Pour vous inscrire:</p>
          <p>
            Vous pouvez télécharger puis remplir le dossier d'inscription à déposer avec votre
            réglément directement au club ou à envoyer l'adresse suivante :
          </p>
          <div class="flex flex-col ml-4 mt-4 justify-self-center">
            <div>
              <p>INTERBUDO C/O Caroline MASINI</p>
              <p>13 Rue Jeanne Chauvin</p>
              <p>75013 Paris</p>
            </div>
            <div>
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center lg:mt-2 lg:my-0 my-4 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                Télécharger le dossier d'inscription
              </button>
              <p class="lg:mt-4 mt-2 font-bold">
                Joindre soit un certificat médical soit une attestation relatif à l'état de santé
                mineur/majeur :
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-center">
          <div class="flex flex-col mr-0 lg:mr-6">
            <div>

            </div>
            <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer mb-6"
              >
                ATTESTATION QUESTIONNAIRE SANTÉ SPORT MAJEURS
              </button>
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-3 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                ATTESTATION QUESTIONNAIRE SANTÉ SPORT MINEURS
              </button>
          </div>
          <div class="flex flex-col ml-0 lg:ml-6 mt-6 lg:mt-0">
            <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer mb-2"
              >
                QUESTIONNAIRE RELATIF À L’ÉTAT DE SANTÉ DU SPORTIF MAJEUR
              </button>
              <p class="text-sm font-light text-gray-500 text-center">(Questionnaire de santé pour le renouvellement d'une licence sportive (Formulaire 15699*01)</p>
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                QUESTIONNAIRE RELATIF À L’ÉTAT DE SANTÉ DU SPORTIF MINEUR
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inscription',
  data() {
    return {
      isMobile: false,
    }
  },
  mounted() {
    this.isMobile = this.checkIfMobile()
    window.addEventListener('resize', this.handleResize)
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
  },
}
</script>

<style scoped>
.container {
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
}

h4 {
  font-size: 22px;
  color: #d74340;
}

.card {
  text-align: center;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}

.panel-heading {
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.button {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}
</style>
