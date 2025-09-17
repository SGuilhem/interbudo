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
</script>

<style scoped></style>
