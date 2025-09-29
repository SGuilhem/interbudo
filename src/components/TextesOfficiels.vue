<template>
  <div class="container pt-16">
    <h1>Textes Officiels</h1>
    <div>
      <div class="frame bg-white">

        <!-- Bouton principal -->
        <div class="text-center mb-4">
          <a :href="textes.textesOfficielsComplets" target="_blank" rel="noopener noreferrer">
            <button
              class="w-full lg:w-2/3 border-2 text-xl bg-red-custom text-gray-800 border-gray-200 py-3 px-6 rounded-md transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              Textes Officiels Complet
            </button>
          </a>
        </div>

        <!-- Grille boutons secondaires -->
        <div class="flex flex-wrap justify-center gap-4">
          <div
            v-for="(btn, index) in boutonsSecondaires"
            :key="index"
            class="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
          >
            <a :href="btn.link" target="_blank" rel="noopener noreferrer" class="w-full">
              <button
                class="w-full border-2 text-lg bg-red-custom text-gray-800 border-gray-200 py-2 px-4 rounded-md transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                {{ btn.label }}
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
  name: "TextesOfficiels",
  data() {
    return {
      textes: {
        textesOfficielsComplets:
          "https://interbudo.fr/pdf/TO-FFJDA-Complet.pdf",
      },
      boutonsSecondaires: [
        {
          label: "Passage DAN 1",
          link: "https://interbudo.fr/pdf/TO-FFJDA-DAN-1.pdf",
        },
        {
          label: "Programme Technique Dan 1",
          link: "https://interbudo.fr/pdf/TO-FFJDA-Programme-Technique-DAN-1.pdf",
        },
        {
          label: "Nomenclature Dan 1",
          link: "https://interbudo.fr/pdf/TO-FFJDA-Programme-Technique-Detail.pdf",
        },
        {
          label: "Synoptique",
          link: "https://interbudo.fr/pdf/TO-FFJDA-Synoptique.pdf",
        },
      ],
    };
  },
};
</script>


<style scoped>
.frame {
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 1024px) {
    padding: 20px;
  }
}
</style>
