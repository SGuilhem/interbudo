<template>
  <div class="container">
    <h1>Equipements du Club | Interbudo</h1>

    <div class="frame bg-white mb-6">
      <p class="text-md lg:text-lg text-gray-700">
        Vous trouverez ci-dessous les équipements du club disponibles :
      </p>
    </div>

    <div class="frame bg-white mb-6">
      <div
        v-for="(src, i) in imagesEquipements"
        :key="i"
        class="thumbnail cursor-pointer"
        @click="openLightbox(i)"
      >
        <img :src="src" :alt="'Équipements Interbudo ' + (i + 1)" />
      </div>
    </div>

    <div class="frame bg-white mb-6">
      <p class="text-md lg:text-lg text-gray-700">
        Vous trouverez ci-dessous le RIB du club :
      </p>
    </div>

    <div class="frame bg-white mb-6">
      <img
        :src="ribInterbudo"
        alt="RIB Interbudo"
        class="thumbnail cursor-pointer"
        @click="openLightbox(ribIndex)"
      />
    </div>

    <!-- Lightbox -->
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
          v-if="images.length > 1"
          class="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white text-6xl sm:text-7xl leading-none w-16 h-16 flex items-center justify-center"
          aria-label="Photo précédente"
          @click.stop="prevPhoto"
        >
          &#8249;
        </button>

        <img :src="images[selectedIndex]" class="max-w-full max-h-full object-contain" />

        <button
          v-if="images.length > 1"
          class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white text-6xl sm:text-7xl leading-none w-16 h-16 flex items-center justify-center"
          aria-label="Photo suivante"
          @click.stop="nextPhoto"
        >
          &#8250;
        </button>
      </div>
    </Teleport>
    <div class="frame bg-white mb-6">
        
        <div class="flex justify-center">
          <a
            href="https://interbudo.fr/pdf/equipements-interbudo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="btn-primary">Télécharger le Catalogue des équipements</button>
          </a>
        </div>
        <div class="flex justify-center lg:mt-4">
          <a
            href="https://interbudo.fr/pdf/RIB-Interbudo.JPG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="btn-primary">Télécharger le RIB du Club</button>
          </a>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import equipementsInterbudo1 from '@/assets/equipements-interbudo1.jpg'
import equipementsInterbudo2 from '@/assets/equipements-interbudo2.jpg'
import equipementsInterbudo3 from '@/assets/equipements-interbudo3.jpg'
import equipementsInterbudo4 from '@/assets/equipements-interbudo4.jpg'
import equipementsInterbudo5 from '@/assets/equipements-interbudo5.jpg'
import ribInterbudo from '@/assets/RIB-interbudo.jpg'

const images = [
  equipementsInterbudo1,
  equipementsInterbudo2,
  equipementsInterbudo3,
  equipementsInterbudo4,
  equipementsInterbudo5,
  ribInterbudo,
]

const imagesEquipements = images.slice(0, 5)

const ribIndex = 5

const selectedIndex = ref(null)
const touchStartX = ref(0)

function openLightbox(index) {
  selectedIndex.value = index
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', handleKeydown)
}

function closeLightbox() {
  selectedIndex.value = null
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
}

function prevPhoto() {
  selectedIndex.value = (selectedIndex.value - 1 + images.length) % images.length
}

function nextPhoto() {
  selectedIndex.value = (selectedIndex.value + 1) % images.length
}

function handleKeydown(e) {
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevPhoto()
  if (e.key === 'ArrowRight') nextPhoto()
}

function handleTouchStart(e) {
  touchStartX.value = e.changedTouches[0].clientX
}

function handleTouchEnd(e) {
  if (images.length <= 1) return
  const touchEndX = e.changedTouches[0].clientX
  const delta = touchEndX - touchStartX.value
  const threshold = 50
  if (delta > threshold) {
    prevPhoto()
  } else if (delta < -threshold) {
    nextPhoto()
  }
}
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 95%;
}

@media (min-width: 1440px) {
  .container {
    max-width: 75%;
  }
}

.frame {
  padding: 30px;
  border: 1px solid #cdced0;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
  justify-self: center
}

@media (max-width: 1024px) {
  .frame {
    padding: 15px;
  }
}

.thumbnail {
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
  margin-bottom: 12px;
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