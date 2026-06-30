<template>
  <div class="container lg:w-3/4 pt-16">
    <h1>Galerie Photos</h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pb-8">
      <RouterLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/galerie/${category.slug}`"
        class="category-card group"
      >
        <!-- Image + overlay en une seule zone -->
        <div class="relative overflow-hidden h-64">
          <img
            :src="category.cover"
            :alt="category.label"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <!-- Gradient permanent en bas -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
          />
          <!-- Titre sur l'image -->
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <h2 class="text-white text-xl font-bold tracking-wide">
              {{ category.label }}
            </h2>
            <span
              class="block h-0.5 w-8 bg-red-custom mt-1 transition-all duration-300 group-hover:w-16"
            />
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import coverCompetitions from '@/assets/galeriephotos/competitions/cover.jpg'
import coverCours from '@/assets/galeriephotos/cours/cover.jpg'
import coverStage from '@/assets/galeriephotos/stage/cover.jpg'

export default {
  name: 'GaleriePage',
  data() {
    return {
      categories: [
        { slug: 'competitions', label: 'Compétitions', cover: coverCompetitions },
        { slug: 'cours', label: 'Cours', cover: coverCours },
        { slug: 'stage', label: 'Stage', cover: coverStage },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
}
.category-card {
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}
.category-card:hover {
  box-shadow: rgb(100, 100, 100) 0px 4px 20px;
  transform: translateY(-3px);
}
</style>
