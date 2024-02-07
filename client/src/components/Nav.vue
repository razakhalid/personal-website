<template>
  <div class="q-pt-md flex justify-center">
    <q-toolbar class="bg-transparent">
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
        <q-btn-dropdown
            auto-close
            stretch
            flat
            label="Contact"
        >
          <q-list>
            <q-item>
              <q-item-section>
                <a
                    href="mailto:ra97za@gmail.com?subject=Nice Portfolio!"
                    class="text-black flex hover:underline hover:cursor-pointer"
                >
                  <div class="h-6 w-6 transform translate-y-1">
                    <img src="/icons/email.svg" alt="Email">
                  </div>
                  <span
                      class="text-lg ml-2"
                  >ra97za@gmail.com</span>
                </a>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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