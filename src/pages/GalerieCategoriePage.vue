<template>
  <div class="container lg:w-3/4 pt-16">
    <div class="flex items-center gap-4 mb-6">
      <h1 class="mb-0 m-auto">{{ categoryLabel }}</h1>
    </div>

    <div v-if="photos.length === 0" class="text-gray-500 py-12 text-center">
      Aucune photo dans cette catégorie.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-8">
      <div v-for="photo in photos" :key="photo.id" class="thumbnail self-center">
        <img :src="photo.img" class="w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<script>
const categoryLabels = {
  competitions: 'Compétitions',
  cours: 'Cours',
  stage: 'Stage',
}

const imagesByCategory = {
  competitions: import.meta.glob('@/assets/galeriephotos/competitions/*.{jpg,jpeg,png,gif,webp}', { eager: true }),
  cours: import.meta.glob('@/assets/galeriephotos/cours/*.{jpg,jpeg,png,gif,webp}', { eager: true }),
  stage: import.meta.glob('@/assets/galeriephotos/stage/*.{jpg,jpeg,png,gif,webp}', { eager: true }),
}

export default {
  name: 'GalerieCategoriePage',
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    categoryLabel() {
      return categoryLabels[this.slug] ?? this.slug
    },
    photos() {
      const images = imagesByCategory[this.slug] ?? {}
      return Object.keys(images).map((path, index) => ({
        id: index + 1,
        img: images[path].default,
      }))
    },
  },
}
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
}
.thumbnail {
  padding: 20px;
  text-align: center;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
.back-link {
  color: #555;
  text-decoration: none;
  font-size: 0.9rem;
  white-space: nowrap;
}
.back-link:hover {
  text-decoration: underline;
}
</style>