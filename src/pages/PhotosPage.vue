<template>
  <div class="container lg:w-3/5 lg:pt-14 pt-12 m-auto">
    <h1>Galerie Photos</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-4 pb-8">
      <div v-for="photo in photos" :key="photo.id" class="thumbnail self-center">
        <img
          :src="photo.img"
          class="w-full h-auto self-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotosPage',
  data() {
    return {
      isMobile: false,
      photos: [],
    }
  },
  created() {
    const images = import.meta.glob('@/assets/galeriephotos/*.{jpg,jpeg,png,gif,webp}', { eager: true })
    this.photos = Object.keys(images).map((path, index) => ({
      id: index + 1,
      img: images[path].default,
    }))
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
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.thumbnail {
  padding: 20px;
  @media (max-width: 1024px) {
    padding: 25px;
  }
  text-align: center;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
</style>