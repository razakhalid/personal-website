<template>
  <div>
    <!--  Hamburger Button  -->
    <button
        class="bg-transparent rounded-full w-[50px] h-[50px] absolute overflow-hidden my-[2.75rem] mx-8 z-[25]"
        @click.stop="toggle"
    >
      <span class="relative">
        <span class="horizontal-lines-container block h-4/6 p-2 flex flex-col justify-between items-center">
          <span
              class="block bg-white h-[2px] w-7 rounded transform transition-all duration-300 origin-left"
              :class="{ 'translate-x-10' : isOpen }"
          ></span>
          <span
              class="block bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75"
              :class="{ 'translate-x-10' : isOpen }"
          ></span>
          <span
            class="block bg-white h-[2px] w-7 rounded transform transition-all duration-300 origin-left delay-150"
            :class="{ 'translate-x-10' : isOpen }"
          ></span>
        </span>
        <span
            class="x-container w-0 absolute flex items-center justify-center transition-all duration-500 top-1/2 w-0
          -translate-x-10"
            :class="{ '-translate-x-0 w-12' : isOpen }"
        >
        <span
            class="absolute block bg-white h-[2px] transform transition-all duration-500 rotate-0 delay-300"
            :class="{ 'rotate-45 w-5' : isOpen }"
        ></span>
        <span
            class="absolute block bg-white h-[2px] transform transition-all duration-500 -rotate-0 delay-300"
            :class="{ '-rotate-45 w-5' : isOpen }"
        ></span>
      </span>
      </span>
    </button>

    <!--  Nav Menu Drawer  -->
    <div class="nav z-[20] bg-[rgb(0,48,102)] absolute left-0 top-0 w-0 h-screen transition-all duration-300"
         ref="nav"
         v-click-outside="close"
    >
      <div
          class="links mt-[130px] px-12"
      >
        <a
            v-for="route in routes"
            @click.prevent="handleClick(route.name)"
            class="flex flex-col mb-5 font-exo opacity-0 transition-all duration-300 text-white text-3xl hover:cursor-pointer hover:scale-105"
            ref="link"
            :class="{ 'opacity-1' : isOpen }"
        >
          {{ route.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import routes from '../router/routes';
export default {
  name: 'Nav',
  data() {
    return {
      isOpen: false,
      routes
    }
  },
  methods: {
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      this.isOpen = true;
      gsap.to(this.$refs.nav, {
        width: '250px',
        duration: 0.05,
        ease: 'expo'
      });
      gsap.to(this.$refs.link, {
        opacity: 1,
        duration: 0.1,
        ease: 'expo'
      })
    },
    close() {
      this.isOpen = false;
      gsap.to(this.$refs.nav, {
        width: '0px',
        duration: 0.05,
        ease: 'expo'
      });
      gsap.to(this.$refs.link, {
        opacity: 0,
        duration: 0.1,
        ease: 'expo'
      })
    },
    handleClick(nextRouteName) {
      this.close();
      this.$router.push({ name: nextRouteName });
    }
  }
}
</script>