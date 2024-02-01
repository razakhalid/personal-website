<script>
import Nav from "@/components/Nav.vue";
import { setBackground } from "@/three/space-background.js";

export default {
  name: 'App',
  mounted() {
    setBackground(this.$refs.canvas);
  },
  components: {
    Nav
  }
}
</script>

<template>
  <div class="relative w-screen h-screen">
    <canvas
        ref="canvas"
        class="absolute"
    ></canvas>
    <Nav></Nav>

    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component
            :is="Component"
        ></Component>
      </transition>
    </RouterView>
  </div>
</template>
<style>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>