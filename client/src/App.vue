<template>
  <div class="relative min-h-screen" id="app-content">
    <canvas
        ref="canvas"
        class="fixed -z-10 top-0 left-0"
    ></canvas>
    <div class="max-w-[1000px] mx-auto px-4 sm:px-8">
      <Nav></Nav>
      <div class="py-8 px-2 sm:px-6 sm:py-12 md:py-16 overflow-y-auto">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <Component
                :is="Component"
            ></Component>
          </transition>
        </RouterView>
      </div>
<!--      <Footer></Footer>-->
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import { setBackground } from "@/three/space-background.js";
import SecondaryNav from "@/components/SecondaryNav.vue";
import { ref } from "vue";

export default {
  name: 'App',
  data() {
    return {
      tab: null,
      dialog: ref(false)
    }
  },
  mounted() {
    const {
      resizeCanvas
    } = setBackground(this.$refs.canvas);
    window.resizeCanvas = resizeCanvas;
    setTimeout(() => { this.dialog = true; }, 1000);
  },
  components: {
    SecondaryNav,
    Nav,
    Footer
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