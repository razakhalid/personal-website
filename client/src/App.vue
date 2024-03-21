<template>
  <div class="relative min-h-screen" id="app-content">
    <canvas
        ref="canvas"
        class="fixed -z-10 h-screen w-screen"
    ></canvas>
    <div class="max-w-[1000px] mx-auto px-4 sm:px-8">
      <Nav></Nav>
      <div>
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <Component
                :is="Component"
            ></Component>
          </transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import { setBackground } from "@/three/space-background.js";
import SecondaryNav from "@/components/SecondaryNav.vue";

export default {
  name: 'App',
  data() {
    return {
      tab: null
    }
  },
  mounted() {
    const {
      resizeCanvas
    } = setBackground(this.$refs.canvas);
    window.resizeCanvas = resizeCanvas;
  },
  components: {
    SecondaryNav,
    Nav
  }
}
</script>
<style>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>