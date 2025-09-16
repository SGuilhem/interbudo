<template>
  <!-- Mobile NavBar -->
  <div class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div v-show="isMobile" class="hamburger custom-bg-blue text-white z-10">
      <div class="flex items-center w-full relative">
        <img
          src="/svg/hamburger.svg"
          alt="Menu"
          class="w-16 h-16 p-3 absolute left-0 cursor-pointer"
          @click="toggleMenu"
        />
        <img src="/logo-interbudo.png" alt="Logo Interbudo" class="h-12 mx-auto" />
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div v-show="isMobile && toggleMobileMenu" class="bg-gray-200 text-white side-menu-mobile">
    <button @click="closeMenu" class="absolute p-4 right-4 z-50 text-white text-xl">
      <img src="/svg/cross-close.svg" alt="Fermer" class="w-12 h-12 text-right" />
    </button>

    <div class="align-center mobile-container">
      <img src="/InterbudoLogo.png" class="m-auto size-48 py-4" />

      <ul class="text-center flex flex-col font-semibold pt-8 items-center pb-32">
        <li
          v-for="link in links"
          :key="link.id"
          class="lg:w-full border-2 btn-menu text-white p-4 w-3/4 rounded-md text-center mt-2 transition-transform duration-200 hover:bg-blue-700 hover:scale-105 active:scale-95 cursor-pointer"
          @click="handleClick(link)"
        >
          {{ link.label }}
        </li>
      </ul>
    </div>
  </div>

  <!-- Desktop -->
  <nav v-show="!isMobile" class="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-14 content-center">
    <ul class="flex items-center justify-center gap-6">
      <!-- Logo -->
      <li>
        <a href="#description">
          <img src="/logo-interbudo.png" alt="Logo Interbudo" class="h-8" />
        </a>
      </li>

      <!-- Boucle sur les liens -->
      <li v-for="link in links" :key="link.id">
        <a :href="link.href" class="nav-link font-bold text-gray-500">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMobile: null,
      toggleMobileMenu: false,
      links: [
        { id: 1, label: 'Interbudo', href: '#description' },
        { id: 2, label: 'Dojos', href: '#dojos' },
        { id: 3, label: 'Professeurs', href: '#professeurs' },
        { id: 4, label: 'Dirigeants', href: '#dirigeants' },
        { id: 5, label: 'Horaires', href: '#horaires' },
        { id: 6, label: 'Tarifs', href: '#tarifs' },
        { id: 7, label: 'Inscriptions', href: '#inscription' },
        { id: 8, label: 'Photos', href: '#calendrier' },
        { id: 9, label: 'Partenaires', href: '#contacts' },
      ],
    }
  },
  mounted() {
    this.isMobile = this.checkIfMobile()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleClick(link) {
      this.closeMenu()
      if (link.href) {
        window.location.hash = link.href
      }
    },
    toggleMenu() {
      this.toggleMobileMenu = !this.toggleMobileMenu
    },
    closeMenu() {
      this.toggleMobileMenu = false
    },
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
.nav-link {
  position: relative;
  display: inline-block;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #D74340;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.28s cubic-bezier(0.2, 0.9, 0.2, 1);
}
.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.hamburger {
  display: block;
  position: sticky;
  top: 0;
}
.side-menu-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  z-index: 100;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.mobile-container {
  margin-top: 15%;
}

.btn-menu {
background-color: #d9534f;
border-color: #d43f3a;
}
</style>
