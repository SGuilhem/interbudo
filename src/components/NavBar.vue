<template>
  <!-- Mobile NavBar -->
  <div
    v-show="isMobile"
    class="bg-white shadow-md fixed top-0 left-0 h-16 content-center w-full z-50"
  >
    <div class="hamburger text-white z-10">
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
  <transition name="slide-down">
    <nav v-if="toggleMobileMenu" class="side-menu-mobile bg-beige">
      <button @click="closeMenu" class="absolute right-4 top-2 z-50 text-white text-xl">
        <img src="/svg/cross-close.svg" alt="Fermer" class="w-12 h-12 text-right" />
      </button>
      <div class="mobile-container w-full">
        <ul class="divide-y divide-gray-400 text-lg font-medium w-full">
          <li v-for="link in links" :key="link.id" class="w-full">
            <router-link
              v-if="link.id === 1"
              :to="link.to"
              class="block py-4 red-custom font-bold"
              @click.native="
                () => {
                  closeMenu()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              "
            >
              {{ link.label }}
            </router-link>
            <router-link
              v-else
              :to="link.to"
              class="block py-4 red-custom font-bold"
              @click.native="closeMenu"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
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
        { id: 1, label: 'Accueil', to: './' },
        { id: 2, label: 'Dojos', to: './dojosmaps' },
        { id: 3, label: 'Professeurs', to: './professeurs' },
        { id: 4, label: 'Horaires', to: './horaires' },
        { id: 5, label: 'Tarifs', to: './tarifs' },
        { id: 6, label: 'Inscriptions', to: './inscriptions' },
        { id: 7, label: 'Dirigeants', to: './dirigeants' },
        { id: 8, label: 'Calendriers', to: './calendriers' },
        { id: 9, label: 'Textes Officiels', to: './textesofficiels' },
        { id: 10, label: 'Photos', to: './photos' },
        { id: 11, label: 'Partenaires', to: './partenaires' },
        { id: 12, label: 'Contacts', to: '/#contacts' },
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

/* Menu mobile */
.side-menu-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(233, 231, 231);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.mobile-container {
  width: 100%;
}
</style>
