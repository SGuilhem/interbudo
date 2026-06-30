<template>
  <main>
    <Professeurs />
    <Dirigeants />
    <Benevoles />
  </main>
</template>

<script>
import Professeurs from '@/components/Professeurs.vue'
import Dirigeants from '@/components/Dirigeants.vue'
import Benevoles from '@/components/Benevoles.vue'

export default {
  name: 'StaffPage',
  components: { Professeurs, Dirigeants, Benevoles },
}
</script>
