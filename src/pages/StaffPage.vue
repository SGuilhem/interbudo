<template>
  <main class="pt-16">
    <StaffProfesseurs />
    <StaffDirigeants />
    <StaffBenevoles />
  </main>
</template>

<script>
import StaffProfesseurs from '@/components/staff/StaffProfesseurs.vue'
import StaffDirigeants from '@/components/staff/StaffDirigeants.vue'
import StaffBenevoles from '@/components/staff/StaffBenevoles.vue'

export default {
  name: 'StaffPage',
  components: { StaffProfesseurs, StaffDirigeants, StaffBenevoles },
}
</script>