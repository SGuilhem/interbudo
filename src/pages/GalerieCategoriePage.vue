<template>
  <div class="container lg:w-3/4 pt-16">
    <div class="flex flex-wrap items-center gap-3 mb-6">
      <router-link to="/photos" class="btn-primary" aria-label="Retour aux galeries">
        <span class="text-xl leading-none">&#8592;</span>
        <span class="hidden sm:inline">Retour</span>
      </router-link>

      <h1 class="mb-0 flex-1 text-center ml-0 sm:ml-[15%]">{{ categoryLabel }}</h1>

      <div class="flex gap-2 flex-wrap justify-center w-full sm:w-auto">
        <router-link
          v-for="(label, key) in categoryLabels"
          :key="key"
          :to="`/galerie/${key}`"
          class="btn-primary"
          :class="{ 'category-pill--active': key === slug }"
        >
          {{ label }}
        </router-link>
      </div>
    </div>

    <div v-if="photos.length === 0" class="text-gray-500 py-12 text-center">
      Aucune photo dans cette catégorie.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-8">
      <div
        v-for="(photo, index) in photos"
        :key="photo.id"
        class="thumbnail cursor-pointer"
        @click="openLightbox(index)"
      >
        <div class="aspect-[4/3] overflow-hidden">
          <img :src="photo.img" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="selectedIndex !== null"
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        @click.self="closeLightbox"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <button
          class="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl leading-none w-10 h-10 flex items-center justify-center"
          aria-label="Fermer"
          @click="closeLightbox"
        >
          &times;
        </button>

        <button
          v-if="photos.length > 1"
          class="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white text-6xl sm:text-7xl leading-none w-16 h-16 flex items-center justify-center"
          aria-label="Photo précédente"
          @click.stop="prevPhoto"
        >
          &#8249;
        </button>

        <img :src="photos[selectedIndex].img" class="max-w-full max-h-full object-contain" />

        <button
          v-if="photos.length > 1"
          class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white text-6xl sm:text-7xl leading-none w-16 h-16 flex items-center justify-center"
          aria-label="Photo suivante"
          @click.stop="nextPhoto"
        >
          &#8250;
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script>
const categoryLabels = {
  competitions: 'Compétitions',
  cours: 'Cours',
  stages: 'Stages',
}

const imagesByCategory = {
  competitions: import.meta.glob('@/assets/galeriephotos/competitions/*.{jpg,jpeg,png,gif,webp}', {
    eager: true,
  }),
  cours: import.meta.glob('@/assets/galeriephotos/cours/*.{jpg,jpeg,png,gif,webp}', {
    eager: true,
  }),
  stages: import.meta.glob('@/assets/galeriephotos/stages/*.{jpg,jpeg,png,gif,webp}', {
    eager: true,
  }),
}

export default {
  name: 'GalerieCategoriePage',
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedIndex: null,
      touchStartX: 0,
      categoryLabels,
    }
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
  methods: {
    openLightbox(index) {
      this.selectedIndex = index
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', this.handleKeydown)
    },
    closeLightbox() {
      this.selectedIndex = null
      document.body.style.overflow = ''
      window.removeEventListener('keydown', this.handleKeydown)
    },
    prevPhoto() {
      this.selectedIndex = (this.selectedIndex - 1 + this.photos.length) % this.photos.length
    },
    nextPhoto() {
      this.selectedIndex = (this.selectedIndex + 1) % this.photos.length
    },
    handleKeydown(e) {
      if (e.key === 'Escape') this.closeLightbox()
      if (e.key === 'ArrowLeft') this.prevPhoto()
      if (e.key === 'ArrowRight') this.nextPhoto()
    },
    handleTouchStart(e) {
      this.touchStartX = e.changedTouches[0].clientX
    },
    handleTouchEnd(e) {
      if (this.photos.length <= 1) return
      const touchEndX = e.changedTouches[0].clientX
      const delta = touchEndX - this.touchStartX
      const threshold = 50
      if (delta > threshold) {
        this.prevPhoto()
      } else if (delta < -threshold) {
        this.nextPhoto()
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
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
.back-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid #cdced0;
  border-radius: 6px;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  white-space: nowrap;
}
.back-btn:hover {
  background: #f5f5f5;
}
.category-pill {
  padding: 6px 14px;
  border: 2px solid #e5e7eb;
  border-radius: 999px;
  color: #555;
  text-decoration: none;
  font-size: 0.85rem;
  white-space: nowrap;
  transition:
    transform 0.2s,
    color 0.2s,
    border-color 0.2s;
  cursor: pointer;
}
.category-pill:hover {
  color: #d74340;
  border-color: #d74340;
  transform: scale(1.05);
}
.category-pill:active {
  transform: scale(0.95);
}
.category-pill--active {
  background-color: #d74340;
  color: white;
  border-color: #d74340;
}
.category-pill--active:hover {
  color: white;
  transform: none;
}
.btn-primary {
  border: 2px solid #e5e7eb;
  font-size: 1.1rem;
  background-color: #d74340;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  transition:
    transform 0.2s,
    color 0.2s;
  cursor: pointer;
}
.btn-primary:hover {
  color: #1f2937;
  transform: scale(1.05);
}
.btn-primary:active {
  transform: scale(0.95);
}
</style>
