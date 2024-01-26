<template>
  <h2
      ref="title"
      class="text-white font-exo text-5xl opacity-0 mb-3 text-center"
      style="transform: translateY(30px);"
  >{{ title }}</h2>
</template>
<script>
import gsap from 'gsap';
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    gsap.to(this.$refs.title, {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: 'expo'
    });
  }
}
</script>