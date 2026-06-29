<template>
  <div class="container pt-16">

    <!-- Baby Judo -->
    <div class="content relative border-red-custom">
      <img
        src="../assets/Equipes2.png"
        alt="Cours Adultes"
        class="absolute inset-0 w-full h-full object-cover opacity-20 z-0 object-[center_15%]"
      />
      <h2
        class="absolute top-0 -left-6 -translate-y-1/2
        bg-white px-6 py-2 text-xl font-semibold
        rounded-sm shadow-2xl baby-judo-color"
      >
        Baby Judo
      </h2>
      <h2
        class="absolute top-0 -translate-y-1/2 -right-6 lg:justify-self-center lg:left-0
        bg-white px-6 py-2 text-xl font-semibold
        rounded-sm shadow-2xl baby-judo-color"
      >
        De 4 à 6 ans
      </h2>
      <p class="lg:mx-0 mx-2 text-md pt-4 pb-4">
        Spécialement pensé pour les 4-6ans, le baby-judo leur permet de développer leur motricité
        globale, leurs habilités fondamentales de l'activité Judo (chutes, déplacements, équilibre,
        approche du combat par des jeux de contact et d'opposition) et de les sensibiliser aux
        valeurs de la discipline: respect, contrôle de soi, amitié goût de l'effort... <br />
        Et de se faire plaisir !
      </p>
    </div>

    <!-- Enfants -->
    <div class="content relative mt-16 border-red-custom">
      <img
        src="../assets/Equipes2.png"
        alt="Cours Adultes"
        class="absolute inset-0 w-full h-full object-cover opacity-20 z-0 object-[center_15%]"
      />
      <h2
        class="absolute top-0 -left-6 -translate-y-1/2
        bg-white px-6 py-2 text-xl font-semibold
        rounded-sm shadow-2xl enfants-color"
      >
        Enfants
      </h2>
      <h2
        class="absolute top-0 -translate-y-1/2 -right-6 lg:justify-self-center lg:left-0
        bg-white px-6 py-2 text-xl font-semibold
        rounded-sm shadow-2xl enfants-color"
      >
        De 7 à 14 ans
      </h2>
      <p class="lg:mx-0 mx-2 text-md pt-4 pb-4">
        Dans ces cours (de 7 à 9ans et de 10 à 14ans), nous apprenons les premières techniques que
        nous attachons à perfectionner au fil des âges ! <br />
        Nous continuons à développer toutes les habilités physiques et mentales chères au judoka
        toujours dans l'optique de contribuer à former des individus passionnés et équilibrés.
        <br />
        C'est aussi les premiers pas en compétition pour les enfants qui le souhaitent ! <br />
        <p class="font-bold">Des stages sont organisés sur pratiquement chaque vacances scolaires !</p>
      </p>
    </div>

    <!-- Adultes -->
    <div class="content relative mt-16 border-red-custom">
      <img
        src="../assets/Equipes2.png"
        alt="Cours Adultes"
        class="absolute inset-0 w-full h-full object-cover opacity-20 z-0 object-[center_15%]"
      />
      <h2
        class="absolute top-0 -left-6 -translate-y-1/2
        bg-white px-6 py-2 text-xl font-semibold
        rounded-sm shadow-2xl adultes-color"
      >
        Adultes
      </h2>
      <h2
        class="absolute top-0 -translate-y-1/2 -right-6 lg:justify-self-center lg:left-0
        bg-white px-6 py-2 text-xl font-semibold
        rounded-sm shadow-2xl adultes-color"
      >
        Tous niveaux
      </h2>
      <p class="lg:mx-0 mx-2 text-md pt-4 pb-4">
        Le club à la chance de profiter d'un joli groupe d'adultes dont une majorité de ceintures
        marrons et noires ce qui permet aux débutants de progresser plus vite (tout le monde jouant
        le jeu de l'entraide mutuelle). <br />
        Dans ce groupe loisir; la curiosité, la recherche de l'efficience et du beau geste rythme
        la pratique !<br />
        La bonne entente nous amène à organiser régulièrement des temps de regroupement en dehors
        du tatami. <br />
        Une partie du groupe s'aligne chaque année aux championnats de Paris par équipes mixtes.
        L'équipe a d'ailleurs fini 3ème lors de l'édition 2024.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Cours',
}
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 95%;
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
}
h2 {
  color: #d74340;
  border-bottom: 4px solid #d74340ae;
  border-left: 4px solid #d74340ae;
  border-top: 1px solid #d74340ae;
  border-right: 1px solid #d74340ae;
}
.baby-judo-color,
.enfants-color,
.adultes-color {
  border-bottom: 4px solid #d74340ae;
  border-left: 4px solid #d74340ae;
  border-top: 1px solid #d74340ae;
  border-right: 1px solid #d74340ae;
}
</style>