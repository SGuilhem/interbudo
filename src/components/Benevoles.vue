<template>
  <div class="container pt-16">
    <h1>Les Bénévoles</h1>
    <div class="flex lg:flex-row flex-col justify-center">
      <div class="col-xs-12 col-sm-6 col-md-4 flex flex-col">
        <div class="benevoles">
          <img
            src="../../src/assets/professeur-charly.jpg"
            alt="Bénévole Marie Leblanc"
            class="self-center w-full h-92 object-cover"
          />
          <div class="caption">
            <h4>Marie LEBLANC</h4>
            <p>Accueil & secrétariat</p>
            <p class="py-4">
              Bénévole au club depuis 8 ans, Marie gère l'accueil des nouveaux licenciés et assure
              le suivi administratif du club au quotidien.
            </p>
            <p>Ceinture marron</p>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 lg:mx-10 mx-0 lg:pt-0 pt-10 flex flex-col">
        <div class="benevoles">
          <img
            src="../../src/assets/professeur-charly.jpg"
            alt="Bénévole Pierre Martin"
            class="self-center w-full h-92 object-cover"
          />
          <div class="caption">
            <h4>Pierre MARTIN</h4>
            <p>Gestion des licences & inscriptions</p>
            <p class="py-4">
              Pierre accompagne les familles dans les démarches d'inscription et assure la gestion
              des licences FFJDA depuis 5 ans.
            </p>
            <p>Ceinture noire 1er dan</p>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 flex flex-col">
        <div class="benevoles">
          <img
            src="../../src/assets/professeur-charly.jpg"
            alt="Bénévole Sophie Durand"
            class="self-center w-full h-92 object-cover"
          />
          <div class="caption">
            <h4>Sophie DURAND</h4>
            <p>Communication & réseaux sociaux</p>
            <p class="py-4">
              Sophie pilote la communication du club : gestion des réseaux sociaux, création des
              affiches et suivi du site internet.
            </p>
            <p>Ancienne compétitrice régionale</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benevoles',
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
h4 {
  font-size: 30px;
  color: #d74340;
  padding-bottom: 4px;
  padding-top: 4px;
}
p {
  font-size: 18px;
}
.benevoles {
  display: flex;
  height: 100%;
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
