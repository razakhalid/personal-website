<template>
  <!--  OVERLAY  -->
  <div
      class="overlay absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.75)]"
      @click.prevent="handleOutsideClick"
      ref="overlay"
  >

    <!--   MODAL   -->
    <div
        class="rounded-lg px-6 py-4 relative min-w-[750px] max-w-[900px]"
        :class="(options.customStyles && options.customStyles.bg) ? options.customStyles.bg : 'bg-white'"
        ref="modal"
    >

      <h1
          v-if="options.header"
          class="text-2xl font-space-mono text-center"
      >{{ options.header }}</h1>
      <a
          class="absolute top-5 right-5 font-bold w-4 hover:cursor-pointer hover:scale-110"
          @click.prevent="$emit('toggleModal')"
      >
        <img src="/icons/xmark.svg" alt="x">
      </a>

      <slot
          name="content"
      ></slot>
    </div>
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
  },
  methods: {
    handleOutsideClick(event) {
      const { target } = event;
      const modal = this.$refs.modal;
      const isClickInsideModal = modal === target || modal.contains(target);
      if (!isClickInsideModal) this.$emit('toggleModal');
    }
  }
}
</script>