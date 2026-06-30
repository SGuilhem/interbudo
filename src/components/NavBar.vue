<template>
  <!-- Mobile NavBar -->
  <div
    v-show="isMobile"
    class="bg-white shadow-md fixed top-0 left-0 h-16 content-center w-full z-50"
  >
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

  <!-- Overlay -->
  <transition name="fade">
    <div v-if="toggleMobileMenu" class="fixed inset-0 bg-black/40 z-40" @click="closeMenu" />
  </transition>

  <!-- Tiroir latéral -->
  <transition name="slide-left">
    <nav
      v-if="toggleMobileMenu"
      class="fixed top-0 left-0 h-full w-full bg-white z-50 flex flex-col shadow-2xl"
    >
      <!-- Header du tiroir -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <img src="/logo-interbudo.png" alt="Logo Interbudo" class="h-10" />
        <button @click="closeMenu" class="p-1">
          <img src="/svg/cross-close.svg" alt="Fermer" class="w-7 h-7" />
        </button>
      </div>

      <!-- Liens avec apparition décalée -->
      <ul class="flex-1 overflow-y-auto py-2">
        <li
          v-for="(link, index) in links"
          :key="link.id"
          class="link-item"
          :style="{ animationDelay: `${index * 0.06}s` }"
        >
          <router-link :to="link.to" class="drawer-link" @click="closeMenu">
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <!-- Footer du tiroir -->
      <div class="px-6 py-4 border-t border-gray-100 text-center">
        <p class="text-xs text-gray-400">© Interbudo — Club de Judo Paris 13ème</p>
      </div>
    </nav>
  </transition>

  <!-- Desktop -->
  <nav
    v-show="!isMobile"
    class="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-14 content-center"
  >
    <ul class="flex items-center justify-center gap-6">
      <!-- Logo -->
      <li>
        <a href="#description">
          <img src="/logo-interbudo.png" alt="Logo Interbudo" class="h-8" />
        </a>
      </li>

      <!-- Boucle sur les liens -->
      <li v-for="link in links" :key="link.id">
        <router-link :to="link.to" class="nav-link font-bold text-gray-500">
          {{ link.label }}
        </router-link>
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
        { id: 1, label: 'Accueil', to: '/' },
        { id: 2, label: 'Le Staff', to: '/staff' },
        { id: 3, label: 'Les Cours', to: '/cours' },
        { id: 4, label: 'Dojos & Horaires', to: '/dojos-horaires' },
        { id: 5, label: 'Tarifs', to: '/tarifs' },
        { id: 6, label: 'Inscriptions', to: '/inscriptions' },
        { id: 7, label: 'Documents', to: '/documents' },
        { id: 8, label: 'Articles', to: '/articles' },
        { id: 9, label: 'Photos', to: '/photos' },
        { id: 10, label: 'Partenaires', to: '/partenaires' },
        { id: 11, label: 'Contact', to: '/#contacts' },
      ],
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
  font-size: 18px;
  @media (min-width: 1025px) and (max-width: 1920px) {
    font-size: 12px;
  }
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #d74340;
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

.btn-menu {
  background-color: #d9534f;
  border-color: #d43f3a;
}

/* Animation slide down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}
.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Liens du tiroir */
.drawer-link {
  display: block;
  padding: 13px 24px;
  font-weight: 600;
  font-size: 1.15rem;
  color: #374151;
  border-left: 3px solid transparent;
  transition: all 0.2s ease;
}
.drawer-link:hover {
  color: #d74340;
  border-left-color: #d74340;
  background-color: #fef2f2;
}
.router-link-active.drawer-link {
  color: #d74340;
  border-left-color: #d74340;
  background-color: #fef2f2;
}

/* Animation tiroir */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

/* Animation overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mobile-container {
  width: 100%;
}

.link-item {
  opacity: 0;
  animation: fadeSlideIn 0.3s ease forwards;
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
