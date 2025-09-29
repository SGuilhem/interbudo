<template>
  <div class="container pt-16">
    <h1>Les Professeurs</h1>
    <div class="flex lg:flex-row flex-col justify-center">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="professeurs"><img
              src="../../src/assets/professeur-charly.jpg"
              alt="Professeur Charly Wable"
              width="450px"
              height="450px"
              class="self-center"
          />
          <div class="caption">
            <h4>Charly WABLE</h4>
            <p>Tous les cours sauf celui du mercredi soir</p>
            <p class="py-4">
              Titutaire d'un CQP moniteur de Judo et d'un diplôme d'état d'Educateur Spécialisé
              Athlète 1ère division au sein de Sucy Judo, il s'entraîne au sein du collectif
              national de l'INSEP
            </p>
            <p>Ceinture noire 2e dan</p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 lg:mx-10 mx-0 lg:pt-0 pt-10">
        <div class="professeurs"><img
              src="../../src/assets/professeur-Romane-DYOT.jpg"
              alt="Professeur Romane Dyot"
              width="268px"
              height="268px"
              class="self-center"
          />
          <div class="caption">
            <h4>Romane DYOT</h4>
            <p>Cours du mercredi soir et samedi enfant, ados et adultes</p>
            <p class="py-4">
              Ceinture noire 2ème DAN Diplôme : BPJEPS et DESJEPS judo. Elle enseigne depuis 4 ans au club d'Ivry s/ Seine Athlète de haut niveau qui s'entraine à l'Institut du judo et à l'INSEP
            </p>
            <p>Elle participera au Championnat de France 1ère division</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Professeurs',
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
h4 {
  font-size: 30px;
  color: #D74340;
  padding-bottom: 4px;
  padding-top: 4px;
}

p {
  font-size: 18px;
  /* color: #333; */
}
button {
  width: 80%;
  font-size: 20px;
}
button:hover {
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
}

.professeurs {
  display:flex;
  flex-direction: column;
  justify-self: center;
  text-align: center;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 20px;
}
}
</style>
