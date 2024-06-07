<template>
  <div>
    <div
        class="absolute text-white text-center"
        style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
        id="container"
    >
      <p
          class="font-space-mono text-xl sm:text-2xl uppercase tracking-wide opacity-0"
          id="main-header"
          style="transform: translateY(30px);"
      >Raza Khalid</p>
      <h1
          id="tagline"
          class="font-exo text-4xl sm:text-5xl opacity-0 italic mb-4"
          style="transform: translateY(30px);"
      >MORE THAN JUST A DEVELOPER</h1>
      <p
          class="text-xl sm:text-2xl opacity-0 my-10 summary-item"
          style="transform: translateY(30px);"
      >
          An impact-driven <strong>senior front end engineer</strong> who solves business problems.
        </p>
      <div
          class="ctas flex column items-center mt-12 opacity-0"
          style="transform: translateY(30px);"
      >
        <router-link
            :to="{ name: 'Work' }"
            class="text-lg border px-4 py-2 mx-4 rounded-lg font-space-mono uppercase inline-block min-w-64
                    hover:bg-white hover:text-gray-800 hover:cursor-pointer"
        >
          SEE MY WORK</router-link>
        <router-link
            :to="{ name: 'About' }"
            class="text-lg px-4 py-2 my-4 hover:underline text-uppercase"
        >GET TO KNOW ME</router-link>
      </div>

    </div>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  name: 'HomePage',
  data() {
    return {
      summaryItems: [
        "Impact-driven Senior Front End Engineer",
        "5+ years of professional experience",
        "Currently looking for work"
      ],
    }
  },
  mounted() {
    this.animateInitialContent();
    const canvas = document.querySelector('canvas');
    if (canvas) canvas.style.zIndex = 0;
    // console.log(this.$q.notify);
    setTimeout(() => {
      this.$store.commit('toggleDialog');
    }, 1000);
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
      gsap.to('.summary-item', {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        y: 0,
        ease: 'expo',
        delay: 0.45
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