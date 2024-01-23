<template>
  <div class="bg-white rounded-lg px-6 py-4 relative">
    <h1
        v-if="options.header"
        class="text-2xl font-space-mono"
    >{{ options.header }}</h1>
    <a
        class="absolute top-5 right-5 font-bold w-4 hover:cursor-pointer hover:scale-110"
        @click.prevent="$emit('toggleModal')"
    >
      <img src="../../public/icons/xmark.svg" alt="x">
    </a>

    <slot
        name="content"
    ></slot>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    options: {
      type: Object,
      required: true
    }
  }
}
</script>