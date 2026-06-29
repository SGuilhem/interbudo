<template>
  <main class="pt-16">
    <Calendriers />
    <TextesOfficiels />
  </main>
</template>

<script>
import Calendriers from '@/components/Calendriers.vue'
import TextesOfficiels from '@/components/TextesOfficiels.vue'

export default {
  name: 'DocumentsPage',
  components: { Calendriers, TextesOfficiels },
}
</script>
