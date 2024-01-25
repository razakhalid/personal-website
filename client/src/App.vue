<script>
import HamburgerMenu from "@/components/HamburgerMenu.vue";
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