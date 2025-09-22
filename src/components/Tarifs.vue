<template>
  <div class="container" id="tarifs">
    <h1>Tarifs</h1>
    <!-- Desktop layout -->
    <div v-if="!isMobile" class="flex flex-wrap">
      <div v-for="tarif in tarifs" :key="tarif.id" class="w-1/3 mb-4">
        <div :class="`${tarif.id === 2 || tarif.id === 5 ? 'px-4' : ''} justify-between`">
          <div class="card panel-heading">
            <h4 class="panel-heading py-2">{{ tarif.title }}</h4>
            <div :class="`${tarif.id === 3 ? 'pt-6 pb-5 px-6' : 'p-5'} bg-white`">
              <p :class="`${tarif.id === 3 ? 'pt-2' : 'py-3'} text-base font-medium text-gray-700`" v-html="tarif.age">
              </p>
              <p :class="`${tarif.id === 3 ? 'pt-2' : 'py-2'} text-base font-medium text-gray-900`" v-html="tarif.prix">
              </p>
              <p v-if="tarif.id === 3" class="text-sm font-light text-gray-500" v-html="tarif.promo"></p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Mobile -->
    <div v-if="isMobile" v-for="tarif in tarifs" :key="tarif.id" :class="`min-w-[85%] shrink-0 relative ${tarif.id != 1 ? 'pt-8' : 'pt-0'}`">
      <div class="card">
        <div>
          <h4 class="panel-heading py-2">{{ tarif.title }}</h4>
          <p class="py-4 text-xl font-medium text-gray-700" v-html="tarif.age"></p>
          <p class="py-4 text-xl font-medium text-gray-900" v-html="tarif.prix"></p>
          <p v-if="tarif.id === 3" class="text-sm font-light text-gray-500 pb-4" v-html="tarif.promo"></p>
        </div>
      </div>
    </div>
  </div>



  <div class="py-4 lg:pt-0 pt-8">
    <div class="container">
      <div class="card panel-heading">
        <h4 class="panel-heading py-2"> Réglement de la cotisation </h4>
        <div class="">
          <p class="text-base font-medium text-gray-700 bg-white p-4">Réglement possible par <strong>chèque</strong>,
            <strong>espèce</strong> , <strong>chèques vacances</strong>,
            <strong>coupons sport ANCV</strong> ou <strong>virement</strong> bancaire (voir le paragraphe ci-dessous)
            acceptés également <strong>et coupons CAF</strong>.

            <br />Chèque à l‘ordre « INTERBUDO »

            <br />Possiblité de régler en 5 chèques remis au club <strong>à l’inscription</strong>
            <br />Indiquer au dos de chaque chèque les dates souhaitées du dépôt à la banque.

            <br />Interbudo est un club affilié la FFJDA, le coût de la licence est comprise dans les frais
            d'inscription.

            <br /><br /><strong>Economiser</strong> lors de votre inscription : quels sont les dispositifs ?

            <br />Une aide de 50€: c'est le <strong>Pass'SPORT</strong>. Cette somme est fournie par votre
            <strong>Caisse d'Allocations Familiales
              régionale</strong> et varie donc d'une région à l'autre.

            <br /><strong>Prudence</strong> quant aux informations que vous considérez si vous venez d'effectuer un
            déménagement.


            <br />Un article a été rédigé pour vous fournir des informations des plus exhaustives: <a
              href="https://www.papernest.com/etat-des-lieux/actualites/aides-pratique-sportive/"
              class="text-blue-600 underline">cliquer sur l'état des lieux des aides de la pratique sportive</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="py-4">
    <div class="container">
      <div class="card panel-heading">
        <h4 class="panel-heading py-2"> Réductions possibles </h4>
        <div class="">
          <p class="text-base font-medium text-gray-700 bg-white p-4">Réglement possible par <strong>chèque</strong>,
            Pour les Familles : <strong>600€</strong> pour <strong>2</strong> inscriptions.

            <br/><br/>Pour les Familles : <strong>800€</strong> pour l'inscription de <strong>2</strong> enfants ou <strong>2</strong> adultes.

            <br/><br/>Tarif Fidélité (Adultes) : <strong>après 3 ans</strong> d'ancienneté <strong>330€</strong> !
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Tarifs",
  data() {
    return {
      isMobile: false,
      tarifs: [
        {
          id: 1,
          title: 'Enfants',
          age: 'Enfants de 4 à 6 ans',
          prix: '300€'
        },
        {
          id: 2,
          title: 'Grands',
          age: 'Enfants de 7 à 13 ans et Étudiant',
          prix: '330€'
        },
        {
          id: 3,
          title: 'Ados et adultes',
          age: '+14 ans, Adultes',
          prix: '370€',
          promo: `Fidélité après 3 ans d'ancienneté 330€ !`
        },
        {
          id: 4,
          title: 'Fratrie',
          age: '2 enfants',
          prix: '600€'
        },
        {
          id: 5,
          title: 'Combiné',
          age: '1 enfant et 1 adulte',
          prix: '700€'
        },
        {
          id: 6,
          title: 'Grande fratrie et Duo adultes',
          age: '3 enfants ou 2 adultes',
          prix: '800€'
        },
      ],
    };
  },
  mounted() {
    this.isMobile = this.checkIfMobile();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = this.checkIfMobile();
    },
    checkIfMobile() {
      return window.innerWidth <= 1024;
    },
  },
};
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
}

h4 {
  font-size: 22px;
  color: #d74340;
}

.card {
  text-align: center;
  border-radius: 0px;
  border: 1px solid #cdced0;
  background: #fff;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}

.panel-heading {
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #f5f5f5;
  border-color: #ddd;
}
</style>
