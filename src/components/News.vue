<template>
  <div class="container pt-16">
    <img src="../assets/banner.jpeg" class="banner m-auto lg:pt-8 pt-4" id="accueil" />

    <!-- Le Club -->
    <div class="content relative border-red-custom">
      <img
        src="../assets/Equipes2.png"
        alt="Cours Adultes"
        class="absolute inset-0 w-full h-full object-cover opacity-20 z-0 object-[center_15%]"
      />
      <h2
        class="absolute top-0 -left-6 -translate-y-1/2 bg-white px-6 py-2 text-xl font-semibold rounded-sm shadow-2xl"
      >
        Le Club
      </h2>
      <!-- ↓ <p> remplacé par <div> car il contient un <div> enfant -->
      <div class="lg:mx-0 mx-2 text-md pt-4">
        Interbudo a été créé en 2000 sous l'impulsion d'un groupe de passionnés. Le club est animé
        d'un esprit d'entraide: accueil des débutants, travail technique en commun, vue sociale
        après le cours. <br />
        Nous partageons la même passion du judo avec plusieurs clubs "amis" et organisons
        régulièrement des échanges entre clubs (présence sur nos cours d'enseignants émérites ou
        cours délocalisés). <br />
        Au sein du club, nous proposons des cours adaptés à chaque âge et à chaque niveau : <br />
        <div class="ml-2 mt-2">
          - Baby Judo (4 à 6 ans) <br />
          - Enfants (7 à 9 ans et 10 à 14 ans) <br />
          - Ados & Adultes (tous niveaux)
        </div>
      </div>
    </div>

    <!-- Actualités -->
    <div class="content relative mt-16 border-red-custom">
      <h2
        class="absolute top-0 -left-6 -translate-y-1/2 bg-white px-6 py-2 text-xl font-semibold rounded-sm shadow-2xl"
      >
        Actualités
      </h2>

      <!-- Brèves -->
      <div class="flex flex-col divide-y divide-gray-200 mb-6">
        <div v-for="breve in breves" :key="breve.id" class="py-3">
          <p class="text-sm text-gray-500 mb-1 pt-4 lg:pt-0">{{ breve.date }}</p>
          <p class="text-gray-700 text-sm">{{ breve.content }}</p>
        </div>
      </div>

      <!-- Dernier article -->
      <div v-if="lastArticle" class="border-t border-gray-200 pt-4">
        <p class="text-xs font-semibold text-gray-400 uppercase mb-3">Dernier article</p>
        <div class="flex flex-row items-center gap-4">
          <img
            :src="lastArticle.thumbnail"
            :alt="lastArticle.type"
            class="w-20 h-20 object-cover flex-shrink-0"
          />
          <div class="flex flex-col gap-1">
            <span class="type-badge">{{ lastArticle.type }}</span>
            <p class="text-sm text-gray-400">{{ lastArticle.date }}</p>
            <h3 class="article-preview-title">{{ lastArticle.title }}</h3>
            <p class="text-gray-600 text-sm line-clamp-2">{{ lastArticle.content }}</p>
          </div>
        </div>
      </div>

      <div class="text-right pt-4">
        <router-link to="/articles" class="cta-link"> Voir tous les articles → </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { articles } from '@/data/articles.js'
import { breves } from '@/data/breves'

export default {
  name: 'News',
  computed: {
    lastArticle() {
      return articles[0] ?? null
    },
  },
  data() {
    return {
      isMobile: null,
      breves,
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
  margin-right: auto;
  margin-left: auto;
  font-display: 22px;
  max-width: 95%;
  @media (min-width: 1440px) {
    max-width: 75%;
  }
}
.content {
  padding: 20px;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 10px 15px 10px;
  @media (max-width: 1024px) {
    padding: 10px;
  }
}
.banner {
  padding-bottom: 50px;
  @media (min-width: 1024px) {
    padding-bottom: 60px;
  }
}
h2 {
  color: #d74340;
  border-bottom: 4px solid #d74340ae;
  border-left: 4px solid #d74340ae;
  border-top: 1px solid #d74340ae;
  border-right: 1px solid #d74340ae;
}
.type-badge {
  display: inline-block;
  background-color: #d74340;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 20px;
  width: fit-content;
}
.article-preview-title {
  font-size: 1rem;
  font-weight: 700;
  color: #d74340;
}
.cta-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: #d74340;
  text-decoration: none;
}
.cta-link:hover {
  opacity: 0.7;
}
</style>
