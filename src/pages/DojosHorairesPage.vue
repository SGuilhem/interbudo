<template>
  <main>
    <DojosMaps />
    <Horaires />
  </main>
</template>

<script>
import DojosMaps from '@/components/DojosMaps.vue'
import Horaires from '@/components/Horaires.vue'

export default {
  name: 'DojosHorairesPage',
  components: { DojosMaps, Horaires },
}
</script>
