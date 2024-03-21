<template>
  <div
      style="background-color: rgba(0,0,0,0.5);"
      class="px-8"
  >
    <div>
      <q-tabs
          v-model="tab"
          class="bg-grey-9"
          dense
          align="justify"
      >
        <q-tab
            class="text-white"
            :name="item.name"
            :label="item.label"
            v-for="(item, index) in tabOptions"
            :key="index"
            @click.prevent="$emit('tabChange', item.name)"
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
    }
  },
  data() {
    return {
      tab: ref('Introduction')
    }
  }

}
</script>

<style scoped>

</style>