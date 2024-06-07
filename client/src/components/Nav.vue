<template>
  <div>
    <div class="q-pt-md flex justify-center">
      <q-toolbar class="bg-transparent">
        <!--      <q-btn flat label="Homepage" />-->
        <router-link
            :to="{ name: routes[0].name }"
            class="logo"
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
        <q-tabs v-model="tab" shrink stretch class="ml-8">
          <q-route-tab
              v-for="({ name }, i) in routes"
              :to="{ name }"
              :label="name"
              :key="i"
          />
          <q-fab
              v-model="fabCenter"
              vertical-actions-align="center"
              color="yellow-6"
              text-color="black"
              direction="down"
              label="Let's chat!"
              icon="mail"
              class="fixed right-6 bottom-6"
          >
            <q-fab-action color="yellow-6" text-color="black" icon="mail" label="ra97za@gmail.com" />
          </q-fab>
        </q-tabs>
      </q-toolbar>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import routes from '../router/routes';
import { ref } from 'vue';
import SecondaryNav from "@/components/SecondaryNav.vue";
export default {
  name: 'Nav',
  data() {
    return {
      isOpen: false,
      routes,
      tab: ref(''),
      fabCenter: false
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
@media (max-width: 576px) {
  .q-tab, .q-btn {
    padding: 0 0.5em;
  }
}
@media (max-width: 415px) {
  .q-space {
    display: none;
  }
  .q-toolbar {
    display: flex;
    justify-content: center;
  }
  .q-tabs {
    width: 100% !important;
  }
}
</style>