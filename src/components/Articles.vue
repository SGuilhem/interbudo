<template>
  <div class="container">
    <h1>Articles</h1>
    <div class="flex flex-col gap-8">
      <div v-for="article in articles" :key="article.id" class="article-card bg-white">
        <div
          class="overflow-hidden transition-all duration-500 ease-in-out"
          :style="{ maxHeight: article.expanded ? '2000px' : '360px' }"
        >
          <div class="flex flex-col lg:flex-row">
            <!-- Métadonnées :
                 mobile  → ligne horizontale en haut (miniature petite + type/date à droite)
                 desktop → colonne gauche 30% -->
            <div
              class="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 p-4 border-b lg:border-b-0 lg:border-r border-gray-100 w-full lg:w-1/3 lg:flex-shrink-0"
            >
              <img
                :src="article.thumbnail"
                :alt="article.type"
                class="w-30 h-30 lg:w-full lg:h-70 object-cover flex-shrink-0"
              />
              <div class="lg:mt-3">
                <span class="type-badge">{{ article.type }}</span>
                <p class="text-sm text-gray-400 mt-1">{{ article.date }}</p>
              </div>
            </div>

            <!-- Contenu : pleine largeur mobile, 70% desktop -->
            <div class="w-full lg:w-2/3 p-4 lg:p-6">
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-content">{{ article.content }}</p>
            </div>
          </div>
        </div>

        <!-- CTA toujours visible -->
        <div class="border-t border-gray-100 px-6 py-3 flex justify-end">
          <button @click="article.expanded = !article.expanded" class="cta-btn">
            {{ article.expanded ? '▲ Réduire' : "▼ Lire tout l'article" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articles } from '@/data/articles.js'

export default {
  name: 'Articles',
  data() {
    return {
      articles: articles.map((a) => ({ ...a, expanded: false })),
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
.article-card {
  border: 1px solid #cdced0;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
.type-badge {
  display: inline-block;
  background-color: #d74340;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 20px;
}
.article-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #d74340;
  margin-bottom: 12px;
}
.article-content {
  font-size: 1rem;
  color: #374151;
  line-height: 1.7;
  white-space: pre-line;
}
.cta-btn {
  font-size: 0.9rem;
  font-weight: 600;
  color: #d74340;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}
.cta-btn:hover {
  opacity: 0.7;
}
</style>
