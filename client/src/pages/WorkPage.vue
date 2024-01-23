<template>
  <div class="bg-black h-screen px-6 py-12">
    <h2
        ref="title"
        class="text-white font-exo text-5xl opacity-0 mb-3"
        style="transform: translateY(30px);"
    >MY WORK</h2>

<!--    <div class="flex space-x-4">-->
<!--      <div-->
<!--          v-for="item in workItems"-->
<!--          :key="item.label"-->
<!--          class="w-full opacity-0"-->
<!--          ref="workItems"-->
<!--          style="transform: translateX(30px);"-->
<!--      >-->
<!--        <img-->
<!--            :src="item.src"-->
<!--            :alt="item.label"-->
<!--            style="height: 70vh;"-->
<!--            class="object-cover"-->
<!--        />-->
<!--        <p class="text-white font-space-mono text-sm">{{ item.label }}</p>-->
<!--      </div>-->
<!--    </div>-->

    <Gallery
        :items="workItems"
    />
  </div>
</template>

<script>
import gsap from 'gsap';
import Gallery from '../components/Gallery.vue';
export default {
  name: 'WorkPage',
  data() {
    return {
      workItems: [
        {
          label: "Plan Recommendation Wizard",
          src: "/img/projects/thumbnails/consultative-plan-thumbnail.png"
        },
        {
          label: "Quick & Easy Product Demo",
          src: "/img/projects/thumbnails/demo-2-thumbnail.png",
          mobile: true
        },
        {
          label: "Verification Progress Tracker",
          src: "/img/projects/verification-flow-stepper.png",
          mobile: true
        }
      ]
    }
  },
  mounted() {
    gsap.to(this.$refs.title, {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: 'expo'
    });
    gsap.to(this.$refs.workItems, {
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      x: 0,
      ease: 'expo',
      delay: 0.3
    });
  },
  components: {
    Gallery
  }
}
</script>