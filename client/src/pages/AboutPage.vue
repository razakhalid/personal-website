<template>
  <div>

    <SecondaryNav
        :tab-options="tabOptions"
        :active-tab-index="activeTabIndex"
        @tab-change="handleTabChange"
    >
      <template #content>
        <transition name="fade" mode="out-in">
          <component :is="tabOptions[activeTabIndex].name"></component>
        </transition>
      </template>
    </SecondaryNav>


    <footer class="pb-16"></footer>
  </div>
</template>
<script>
import SecondaryNav from "@/components/SecondaryNav.vue";
import Intro from "@/components/Intro.vue";
import Resume from "@/components/Resume.vue";
import Skills from "@/components/Skills.vue";

export default {
  name: 'AboutPage',
  components: {Skills, Resume, Intro, SecondaryNav},
  data() {
    return {
      tabOptions: [
        {
          name: 'Intro'
        },
        // {
        //   name: 'Skills'
        // },
        {
          name: 'Resume'
        }
      ],
      activeTabIndex: 0
    }
  },
  created() {
    const { query } = this.$route;
    const { i } = query;
    if (i) this.activeTabIndex = i;
  },
  methods: {
    handleTabChange(activeTabIndex) {
      const self = this;
      this.activeTabIndex = activeTabIndex;
      this.$router.push({
        path: this.$route.path,
        query: {
          i: activeTabIndex
        }
      })
    }
  }
}
</script>