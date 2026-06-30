<template>
  <div class="container pt-16">
    <h1>Documents</h1>

    <!-- ── CALENDRIERS ── -->
    <section class="mb-10">
      <h2 class="section-title">Calendriers</h2>

      <!-- Compétition -->
      <div class="frame bg-white mb-6">
        <h3 class="sub-title">Compétition</h3>
        <p class="text-gray-600 mb-4">
          Retrouvez les dates des compétitions officielles organisées par la Ligue de Paris et la
          FFJDA.
        </p>
        <div class="flex justify-center">
          <a
            href="https://interbudo.fr/pdf/Programmation-previsionnelle-2025-2026.PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="btn-primary">Télécharger le Calendrier Compétitions</button>
          </a>
        </div>
      </div>

      <!-- Regroupement -->
      <div class="frame bg-white mb-6">
        <h3 class="sub-title">Regroupement</h3>
        <p class="text-gray-600 mb-4">
          Les dates des interclubs et entraînements sportifs communs avec les clubs partenaires.
        </p>
        <div class="flex justify-center">
          <a
            href="https://interbudo.fr/pdf/Programmation-previsionnelle-2025-2026.PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="btn-primary">Télécharger le Calendrier Regroupements</button>
          </a>
        </div>
      </div>

      <!-- Événements -->
      <div class="frame bg-white mb-6">
        <h3 class="sub-title">Événements</h3>
        <p class="text-gray-600 mb-2">
          Stages, vie du club et événements internes : galettes des rois, portes ouvertes, remises
          de ceintures…
        </p>
        <ul class="ml-6 mb-4 text-gray-600">
          <li class="list-disc">Stages enfants & adultes (vacances scolaires)</li>
          <li class="list-disc">Galette des rois</li>
          <li class="list-disc">Remises de ceintures</li>
        </ul>
        <div class="flex justify-center">
          <a
            href="https://interbudo.fr/pdf/Programmation-previsionnelle-2025-2026.PDF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="btn-primary">Télécharger le Calendrier Événements</button>
          </a>
        </div>
      </div>
    </section>

    <!-- ── TEXTES OFFICIELS ── -->
    <section>
      <h2 class="section-title">Textes Officiels</h2>
      <div class="frame bg-white">
        <!-- Bouton principal -->
        <div class="text-center mb-6">
          <p class="text-gray-600 mb-3">
            L'intégralité des textes officiels de la FFJDA en un seul document.
          </p>
          <a :href="textes.textesOfficielsComplets" target="_blank" rel="noopener noreferrer">
            <button
              class="w-full lg:w-2/3 border-2 text-xl bg-red-custom text-gray-800 border-gray-200 py-3 px-6 rounded-md transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
            >
              Textes Officiels Complet
            </button>
          </a>
        </div>

        <!-- Boutons secondaires avec descriptions -->
        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="(btn, index) in boutonsSecondaires"
            :key="index"
            class="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center gap-2"
          >
            <p class="text-sm text-gray-500 text-center">{{ btn.description }}</p>
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
    </section>
  </div>
</template>

<script>
export default {
  name: 'Documents',
  data() {
    return {
      textes: {
        textesOfficielsComplets: 'https://interbudo.fr/pdf/TO-FFJDA-Complet.pdf',
      },
      boutonsSecondaires: [
        {
          label: 'Passage DAN 1',
          description: 'Conditions et modalités pour le passage au 1er Dan.',
          link: 'https://interbudo.fr/pdf/TO-FFJDA-DAN-1.pdf',
        },
        {
          label: 'Programme Technique Dan 1',
          description: 'Le programme technique complet exigé pour le 1er Dan.',
          link: 'https://interbudo.fr/pdf/TO-FFJDA-Programme-Technique-DAN-1.pdf',
        },
        {
          label: 'Nomenclature Dan 1',
          description: 'Le détail de chaque technique répertoriée pour le 1er Dan.',
          link: 'https://interbudo.fr/pdf/TO-FFJDA-Programme-Technique-Detail.pdf',
        },
        {
          label: 'Synoptique',
          description: 'Vue synthétique des grades et des conditions de passage de Dan.',
          link: 'https://interbudo.fr/pdf/TO-FFJDA-Synoptique.pdf',
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 95%;
  @media (min-width: 1440px) {
    max-width: 75%;
  }
}
.frame {
  padding: 30px;
  border: 1px solid #cdced0;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
  @media (max-width: 1024px) {
    padding: 15px;
  }
}
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #d74340;
  border-bottom: 3px solid #d74340ae;
  padding-bottom: 8px;
  margin-bottom: 20px;
}
.sub-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #d74340;
  margin-bottom: 8px;
}
.btn-primary {
  border: 2px solid #e5e7eb;
  font-size: 1.1rem;
  background-color: #d74340;
  color: #1f2937;
  padding: 8px 16px;
  border-radius: 6px;
  transition:
    transform 0.2s,
    color 0.2s;
  cursor: pointer;
}
.btn-primary:hover {
  color: white;
  transform: scale(1.05);
}
.btn-primary:active {
  transform: scale(0.95);
}
</style>
