<script setup></script>

<template>
  <div>
    <NavBar />
    <News />
    <Dojos />
    <Professeurs />
    <Dirigeants />
    <Horaires />
    <Tarifs />
    <Inscription />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import News from './components/News.vue'
import Dojos from './components/Dojos.vue'
import Professeurs from './components/Professeurs.vue'
import Dirigeants from './components/Dirigeants.vue'
import Horaires from './components/Horaires.vue'
import Tarifs from './components/Tarifs.vue'
import Inscription from './components/Inscription.vue'
</script>

<style scoped></style>
