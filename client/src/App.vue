<script>
import Nav from "@/components/Nav.vue";
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<template>
  <div class="relative">
    <Nav></Nav>
    <RouterView/>
  </div>
</template>