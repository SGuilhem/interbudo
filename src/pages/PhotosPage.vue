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
        <div class="overflow-hidden">
          <img
            :src="category.cover"
            :alt="category.label"
            class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div class="p-4">
          <h2 class="text-xl font-semibold text-center">{{ category.label }}</h2>
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
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: box-shadow 0.2s;
}
.category-card:hover {
  box-shadow: rgb(150, 150, 150) 0px 0px 14px;
}
</style>