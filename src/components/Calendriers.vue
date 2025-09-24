<template>
  <div class="container lg:pt-12 pt-16">
    <h1>Calendriers</h1>
    <div>
      <div class="frame bg-white">
        <div class="flex lg:flex-row flex-col">
          <div class="flex flex-col w-full lg:w-2/3 mb-10 lg:mb-0 ml-0 lg:ml-6 lg:pt-0 pt-2">
            <p class="font-bold">Calendrier Sportif</p>
            <p>Restez informé des évènements à venir en téléchargeant le calendrier sportifs 2025-2026 Vous y trouverez touts les évènements organisés aussi bien par la ligue de Paris que par votre club Interbudo :</p>
            <ul class="ml-10">
                  <li class="list-disc">Compétitions</li>
                  <li class="list-disc">Interclubs</li>
                  <li class="list-disc">Entrainements sportifs</li>
                  <li class="list-disc">Galettes de rois</li>
                  <li class="list-disc">Journée portes ouvertes</li>
                  <li class="list-disc">Remises de ceintures</li>
                </ul>
          </div>
          <div class="flex flex-col self-center w-full lg:w-1/6 lg:m-auto items-center lg:pb-0 pb-4">
            <a :href="formulaire.questionnaireMineurs" target="_blank" rel="noopener noreferrer">
              <button
                disabled
                class="ml-0 border-2 text-lg bg-white text-gray-400 border-gray-200 py-2 px-4 rounded-md mt-2 mb-2"
              >
                Télécharger le Calendrier Sportif
              </button>
            </a>
            <a href="https://interbudo.fr/pdf/Programmation-previsionnelle-2025-2026.PDF" target="_blank" rel="noopener noreferrer">
              <button
                class="ml-0 border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                Télécharger le Calendrier Sportif Club
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
  name: 'Calendriers',
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
  @media (max-width: 1024px) {
    padding: 10px;
  }
}
.button {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}
</style>
