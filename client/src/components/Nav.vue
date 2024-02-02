<template>
  <div class="q-pa-md flex justify-center">
    <q-toolbar class="bg-transparent text-white max-w-[1300px]">
<!--      <q-btn flat label="Homepage" />-->
      <router-link
          :to="{ name: routes[0].name }"
      >
        <img
            src="/img/rkd-logo-clipped.png"
            alt="RKD"
            class="max-h-12"
        />
      </router-link>
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink stretch>
        <q-route-tab
            v-for="({ name }, i) in routes"
            :to="{ name }"
            :label="name"
            :key="i"
        />
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
import gsap from 'gsap';
import routes from '../router/routes';
import { ref } from 'vue';
export default {
  name: 'Nav',
  data() {
    return {
      isOpen: false,
      routes,
      tab: ref('')
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
<style scoped>
.q-tab {
  letter-spacing: 0.025em;
}
</style>