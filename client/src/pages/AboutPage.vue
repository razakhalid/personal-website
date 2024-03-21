<template>
  <div class="mt-20">

    <SecondaryNav
        :tab-options="tabOptions"
        @tab-change="handleTabChange"
    >
      <template #content>
        <transition name="fade" mode="out-in">
          <component :is="activeTab"></component>
        </transition>
      </template>
    </SecondaryNav>


    <footer class="pb-16"></footer>
  </div>
</template>
<script>
import SecondaryNav from "@/components/SecondaryNav.vue";
import Introduction from "@/components/Introduction.vue";
import WhyHireMe from "@/components/WhyHireMe.vue";
import Skills from "@/components/Skills.vue";

export default {
  name: 'AboutPage',
  components: {Skills, WhyHireMe, Introduction, SecondaryNav},
  data() {
    return {
      tabOptions: [
        {
          name: 'Introduction',
          label: 'Introduction'
        },
        {
          name: 'WhyHireMe',
          label: 'Why Hire Me'
        },
        {
          name: 'Skills',
          label: 'Skills'
        }
      ],
      activeTab: 'Introduction'
    }
  },
  methods: {
    handleTabChange(activeTab) {
      this.activeTab = activeTab;
    }
  }
}
</script>