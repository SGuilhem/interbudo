<template>
  <!-- Desktop -->
  <div class="container lg:pt-14 pt-12" id="description">
    <h1>News</h1>
    <div class="news-content">
    <p class="lg:mx-0 mx-2 text-md lg:pt-4 pt-2">
      Vive la rentrée du judo 2025 ! <br />La reprise des cours sera le lundi 15 septembre.
      <br />Venez nous rencontrer au forum des associations de Paris XIIIème, il se déroule du
      mercredi 10 au samedi 13 septembre 2025 toujours au centre commercial Italie 2 (mercredi et
      samedi de 10h à 19h / jeudi et vendredi de 17h à 20h). <br />Nous fêtons cette année un
      <u>anniversaire</u> hors du commun pour notre club : et oui, déjà, 25 ans qu’INTERBUDO existe
      et qu’il diffuse la pratique du judo auprès d’un large public en essayant d’essaimer
      <u>convivialité</u> et <u>amitié</u> tout en restant fidèle à une
      <u>rigueur</u> d’enseignement technique ainsi qu’aux valeurs de notre <u>code moral</u>.
      <br />Nous avons le plaisir de retrouver des ados que nous avons connu enfants dans les
      premières années de notre association; nous avons également l’immense joie d’avoir pu
      accompagner une dizaine de <u>ceintures noires</u> sur ces dernières années. L’offre s’est
      étoffée puisque nous proposons des stages enfants et adultes, des weekends de cohésion adultes
      et des regroupements avec des clubs amis partageant les mêmes valeurs. <br />Vous trouvez
      également une toute nouvelle offre d’équipements avec les boutons ci-dessous pour découvrir et
      commander:
    </p>
    <div class="justify-self-center lg:px-0 px-8">
      <button
        class="lg:mr-4 mr-0 border-2 text-lg border-gray-200 bg-red-custom text-gray-900 p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
      >
        Télécharger la description des nouveaux équipements du club
      </button>
      <button
        class="lg:ml-4 ml-0 border-2 text-lg border-gray-200 bg-red-custom text-gray-900 p-4 rounded-md text-center mt-2 transition-transform duration-200 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
      >
        Télécharger le bulletin de commande des nouveaux équipements du club
      </button>
    </div>
    <p class="pt-6 text-md">
      Nous comptons sur votre présence active tant au forum des associations qu’aux cours proposés;
      et un événement surprise viendra célébrer avec panache cet anniversaire, mais, chut, une
      surprise doit être gardée secrète ! Au plaisir de nous retrouver sur les tatamis et en dehors.
    </p>
    <p class="pt-6 lg:pr-12 pr-0 italic text-right font-medium">Caroline présidente du club.</p>
    <p class="pt-10">
      INTERBUDO termine 3éme au championnat de Paris de judo par équipes vendredi 18 octobre 2024. <br /> Pour plus d'informations n'hésitez pas à nous contacter avec nos coordonnées de la page "Dirigeants"
    </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      isMobile: null,
      toggleMobileMenu: false,
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
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
  font-display: 22px;
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
}
.news-content {
  padding: 20px;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
/* .text-md {
  font-size: 22px !important;
}
.text-sm {
  font-size: 20px !important;
} */

button:hover {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}
</style>
