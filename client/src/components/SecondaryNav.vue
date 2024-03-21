<template>
  <div
      style="background-color: rgba(75,93,101, 0.2);"
      class="px-8 py-2"
  >
    <div>
      <q-tabs
          v-model="tab"
          class="bg-transparent"
          dense
          align="justify"
      >
        <q-tab
            class="text-white"
            :name="item.name"
            :label="item.name"
            v-for="(item, index) in tabOptions"
            :key="index"
            @click.prevent="$emit('tabChange', index)"
            :ref="item.name"
        />
      </q-tabs>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "SecondaryNav",
  props: {
    tabOptions: {
      type: Object,
      required: true
    },
    activeTabIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      tab: ref(this.tabOptions[this.activeTabIndex].name)
    }
  }

}
</script>

<style scoped>

</style>