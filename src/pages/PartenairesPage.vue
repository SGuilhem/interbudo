<template>
  <div class="container lg:w-3/5 lg:pt-14 pt-12 m-auto">
    <h1>Nos Partenaires</h1>
    <div class="flex flex-wrap justify-center gap-6 pt-4 pb-8">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="thumbnail w-full sm:w-1/2 lg:w-1/3 flex justify-center"
      >
        <a
          :href="photo.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-full"
        >
          <img :src="photo.img" class="h-72 object-contain" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartenairesPage',
  data() {
    return {
      isMobile: false,
      photos: [],
    }
  },
  created() {
    const images = import.meta.glob('@/assets/partenaires/*.{jpg,jpeg,png,gif,webp}', {
      eager: true,
    })

    const partenairesLinks = [
      'https://fightingfilms.shop/',
      '',
      'https://www.ffjudo.com/',
      'https://www.idfjudo.com/',
      'https://comite75judo.ffjudo.com',
      'https://mairie13.paris.fr/',
      'https://www.paris.fr/',
      '',
    ]

    this.photos = Object.keys(images).map((path, index) => ({
      id: index + 1,
      img: images[path].default,
      link: partenairesLinks[index] || '#',
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
  margin-right: auto;
  margin-left: auto;
}
.thumbnail {
  padding: 20px;
  @media (max-width: 1024px) {
    padding: 25px;
  }
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
</style>
