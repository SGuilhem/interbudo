<template>
  <div class="container pt-16">
    <img src="../assets/banner.jpeg" class="banner justify-self-center lg:pt-8 pt-4" id="accueil" />

    <!-- Le Club -->
    <div class="content relative border-red-custom">
      <img
        src="../assets/Equipes2.png"
        alt="Cours Adultes"
        class="absolute inset-0 w-full h-full object-cover opacity-20 z-0 object-[center_15%]"
      />
      <h2
        class="absolute top-0 -left-6 -translate-y-1/2
        bg-white px-6 py-2 text-xl font-semibold
        rounded-sm shadow-2xl"
      >
        Le Club
      </h2>
      <p class="lg:mx-0 mx-2 text-md pt-4">
        Interbudo a été créé en 2000 sous l'impulsion d'un groupe de passionnés. Le club est animé
        d'un esprit d'entraide: accueil des débutants, travail technique en commun, vue sociale
        après le cours. <br />
        Nous partageons la même passion du judo avec plusieurs clubs "amis" et organisons
        régulièrement des échanges entre clubs (présence sur nos cours d'enseignants émérites ou
        cours délocalisés). <br />
        Au sein du club, nous proposons des cours adaptés à chaque âge et à chaque niveau : <br />
        <div class="ml-2 mt-2">
          - Baby Judo (4 à 6 ans) <br />
          - Enfants (7 à 9 ans et 10 à 14 ans) <br />
          - Ados & Adultes (tous niveaux)
        </div>
      </p>
    </div>

    <!-- Actualités -->
    <div class="content relative mt-16 border-red-custom">
      <h2
        class="absolute top-0 -left-6 -translate-y-1/2
        bg-white px-6 py-2 text-xl font-semibold
        rounded-sm shadow-2xl"
      >
        Actualités
      </h2>
      <div class="pt-4 pb-4">
        <!-- TODO: liste des actualités -->
        <p class="lg:mx-0 mx-2 text-md italic text-gray-400">Plus d'infos à venir !</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      isMobile: null,
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
.container {
  margin-right: auto;
  margin-left: auto;
  font-display: 22px;
  max-width: 95%;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  max-width: 75%;
  }
}
.content {
  padding: 20px;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 10px 15px 10px;
  @media (max-width: 1024px) {
    padding: 10px;
    }
  /*  @media (min-width: 768px) {
    --tw-translate-y: -228px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
   @media (max-width: 1024px) {
    padding: 15px;
    }
   @media (min-width: 1440px) {
    --tw-translate-y: -208px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  } */
}
.banner {
  padding-bottom: 50px;
  @media (min-width: 1024px) {
    padding-bottom: 60px;
  }
}

.banner-opacity {
  --tw-translate-y: -168px;
   translate: var(--tw-translate-x) var(--tw-translate-y);
  
   @media (min-width: 768px) {
    --tw-translate-y: -228px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
   @media (min-width: 1024px) {
    --tw-translate-y: -225px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
   @media (min-width: 1440px) {
    --tw-translate-y: -208px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}

h2 {
    color: #D74340;
    border-bottom: 4px solid #d74340ae;
    border-left: 4px solid #d74340ae;
    border-top: 1px solid #d74340ae;
    border-right: 1px solid #d74340ae;
}

.baby-judo-color {
  border-bottom: 4px solid #d74340ae;
    border-left: 4px solid #d74340ae;
    border-top: 1px solid #d74340ae;
    border-right: 1px solid #d74340ae;
}
.enfants-color {
  border-bottom: 4px solid #d74340ae;
    border-left: 4px solid #d74340ae;
    border-top: 1px solid #d74340ae;
    border-right: 1px solid #d74340ae;
}
.adultes-color {
  border-bottom: 4px solid #d74340ae;
    border-left: 4px solid #d74340ae;
    border-top: 1px solid #d74340ae;
    border-right: 1px solid #d74340ae;
}
/* .enfants-color {
  border-bottom: 4px solid rgba(0, 0, 255, 0.774);
    border-left: 4px solid rgba(0, 0, 255, 0.774);
    border-top: 1px solid rgba(0, 0, 255, 0.774);
    border-right: 1px solid rgba(0, 0, 255, 0.774);
}
.adultes-color {
  border-bottom: 4px solid rgba(26, 25, 25, 0.835);
    border-left: 4px solid rgba(26, 25, 25, 0.835);
    border-top: 1px solid rgba(26, 25, 25, 0.835);
    border-right: 1px solid rgba(26, 25, 25, 0.835);
} */

button:hover {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}
</style>
