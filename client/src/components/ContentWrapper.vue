<template>
    <SecondaryNav
        :tabs="tabs"
        @tabChange="tabChange"
    >
      <template #content>
          <div class="mt-8">
            <transition name="fade" mode="out-in">
              <component :is="contentComponents[activeTabIndex]"></component>
            </transition>
          </div>
        </template>
    </SecondaryNav>
</template>
<script>
import SecondaryNav from "./SecondaryNav.vue";
export default {
  name: "ContentWrapper",
  props: {
    tabs: {
      type: Object,
      required: false
    },
    contentComponents: {
      type: Object,
      required: false
    }
  },
  data: () => ({
    activeTabIndex: 0
  }),
  methods: {
    tabChange(activeTabIndex) {
      this.activeTabIndex = activeTabIndex;
    }
  },
  components: {
    SecondaryNav
  }
}
</script>