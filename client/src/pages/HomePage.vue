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
      <router-link
          :to="{ name: 'Work' }"
          id="primary-cta"
          class="border px-4 py-2 rounded-lg text-sm font-space-mono uppercase mt-8 inline-block opacity-0
                    hover:bg-white hover:text-gray-800 hover:cursor-pointer"
          style="transform: translateY(30px);"
      >
        View Work</router-link>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  name: 'HomePage',
  mounted() {
    this.animateInitialContent();
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
      gsap.to('#primary-cta', {
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