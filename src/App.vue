<script setup></script>

<template>
  <div>
    <NavBar />
    <News />
    <Dojos />
    <Professeurs />
    <Dirigeants />
    <Horaires />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import News from './components/News.vue'
import Dojos from './components/Dojos.vue'
import Professeurs from './components/Professeurs.vue'
import Dirigeants from './components/Dirigeants.vue'
import Horaires from './components/Horaires.vue'
</script>

<style scoped></style>
