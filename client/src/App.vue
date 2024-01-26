<script>
import HamburgerMenu from "@/components/Nav.vue";
export default {
  name: 'App',
  components: {
    HamburgerMenu
  }
}
</script>

<template>
  <div class="relative">
    <HamburgerMenu></HamburgerMenu>
    <RouterView/>
  </div>
</template>