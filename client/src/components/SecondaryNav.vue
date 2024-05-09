<template>
  <div class="mt-4 py-2 flex justify-center">
    <q-btn
        class="q-mx-md"
        v-for="(tab, tabIndex) in tabs"
        outline
        :label="tab.label"
        :key="tabIndex"
        @click="$emit('tabChange', tabIndex)"
    />
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "SecondaryNav",
  props: {
    tabs: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>

</style>