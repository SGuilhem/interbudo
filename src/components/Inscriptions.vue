<template>
  <div class="container lg:pt-12 pt-16" id="inscription">
    <h1>Inscription au Club</h1>
    <div>
      <div class="frame bg-white">
        <div class="text-base font-medium text-gray-700 p-B4 text-center">
          <p class="font-bold">Pour vous inscrire:</p>
          <p>
            Vous pouvez télécharger puis remplir le dossier d'inscription à déposer avec votre
            réglément directement au club ou à envoyer l'adresse suivante :
          </p>
          <div class="flex flex-col lg:ml-4 ml-0 mt-4 justify-self-center">
            <div>
              <p>INTERBUDO C/O Caroline MASINI</p>
              <p>13 Rue Jeanne Chauvin</p>
              <p>75013 Paris</p>
            </div>
            <div>
               <a :href="formulaire.dossierInscription" target="_blank" rel="noopener noreferrer">
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center lg:mt-2 lg:my-0 my-4 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                Télécharger le dossier d'inscription
              </button>
            </a>
              <p class="lg:mt-4 mt-2 font-bold">
                Joindre soit un certificat médical soit une attestation relatif à l'état de santé
                mineur/majeur :
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-center">
          <div class="flex flex-col mr-0 lg:mr-6">
            <a :href="formulaire.attestationQsMajeurs" target="_blank" rel="noopener noreferrer">
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer mb-6"
              >
                ATTESTATION QUESTIONNAIRE SANTÉ SPORT MAJEURS
              </button>
            </a>
            <a :href="formulaire.attestationQsMineurs" target="_blank" rel="noopener noreferrer">
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-3 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                ATTESTATION QUESTIONNAIRE SANTÉ SPORT MINEURS
              </button>
            </a>
          </div>
          <div class="flex flex-col ml-0 lg:ml-6 mt-6 lg:mt-0">
            <a :href="formulaire.questionnaireMajeurs" target="_blank" rel="noopener noreferrer">
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer mb-2"
              >
                QUESTIONNAIRE RELATIF À L’ÉTAT DE SANTÉ DU SPORTIF MAJEUR
              </button>
            </a>
            <p class="text-sm font-light text-gray-500 text-center">
              (Questionnaire de santé pour le renouvellement d'une licence sportive (Formulaire
              15699*01)
            </p>
            <a :href="formulaire.questionnaireMineurs" target="_blank" rel="noopener noreferrer">
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                QUESTIONNAIRE RELATIF À L’ÉTAT DE SANTÉ DU SPORTIF MINEUR
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inscriptions',
  data() {
    return {
      isMobile: false,
      formulaire: {
        dossierInscription: 'https://interbudo.fr/pdf/Dossier-inscription%20-2025-2026.pdf',
        attestationQsMajeurs: 'https://interbudo.fr/pdf/ATTESTATION%20QS%20sport%20majeurs.pdf',
        attestationQsMineurs:
          'https://interbudo.fr/pdf/ATTESTATION%20questionnaire%20sant%C3%A9%20mineurs.pdf',
        questionnaireMajeurs: 'https://interbudo.fr/pdf/cerfa_15699-01.pdf',
        questionnaireMineurs:
          'https://interbudo.fr/pdf/QUESTIONNAIRE%20RELATIF%20%C3%80%20L%E2%80%99%C3%89TAT%20DE%20SANT%C3%89%20DU%20SPORTIF%20MINEUR.pdf',
      },
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
.frame {
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width:768px) {
      padding: 15px;
    }
}
.button {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}
</style>
