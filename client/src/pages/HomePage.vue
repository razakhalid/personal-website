<template>
  <div>
    <div
        class="absolute text-white text-center"
        style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
        id="container"
    >
      <p
          class="font-space-mono text-lg uppercase tracking-wide opacity-0"
          id="main-header"
          style="transform: translateY(30px);"
      >Raza Khalid</p>
      <h1
          id="tagline"
          class="font-exo text-5xl opacity-0 italic"
          style="transform: translateY(30px);"
      >MORE THAN JUST A DEVELOPER</h1>
      <div
          class="ctas flex justify-center mt-8 opacity-0"
          style="transform: translateY(30px);"
      >
        <router-link
            :to="{ name: 'Work' }"
            class="text-lg border px-4 py-2 mb-2 rounded-lg text-sm font-space-mono uppercase inline-block
                    hover:bg-white hover:text-gray-800 hover:cursor-pointer"
        >
          SEE MY WORK</router-link>
        <router-link
            :to="{ name: 'About' }"
            class="text-md px-4 py-2 hover:underline text-uppercase"
        >GET TO KNOW ME</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  name: 'HomePage',
  mounted() {
    this.animateInitialContent();
    const canvas = document.querySelector('canvas');
    if (canvas) canvas.style.zIndex = 0;
  },
  beforeUnmount() {
    const canvas = document.querySelector('canvas');
    if (canvas) canvas.style.zIndex = -10;
  },
  methods: {
    animateInitialContent() {
      gsap.to('#main-header', {
        opacity: 1,
        duration: 1.5,
        y: 0,
        ease: 'expo'
      });
      gsap.to('#tagline', {
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        y: 0,
        ease: 'expo'
      });
      gsap.to('.ctas', {
        opacity: 1,
        duration: 1.5,
        delay: 0.6,
        y: 0,
        ease: 'expo'
      });
    }
  }
}
</script>