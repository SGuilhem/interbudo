<!-- Mobile Menu : @click.native → @click -->
<router-link
  v-if="link.id === 1"
  :to="link.to"
  class="block py-4 red-custom font-bold"
  @click="() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }) }"
>
  {{ link.label }}
</router-link>
<router-link
  v-else
  :to="link.to"
  class="block py-4 red-custom font-bold"
  @click="closeMenu"
>
  {{ link.label }}
</router-link>