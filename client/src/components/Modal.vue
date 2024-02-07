<template>
  <!--  OVERLAY  -->
  <div
      class="overlay absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.75)] text-black"
      @click.prevent="handleOutsideClick"
      ref="overlay"
  >

    <!--   MODAL   -->
    <div
        class="rounded-lg px-6 py-6 relative min-w-[750px] max-w-[900px] max-h-[70vh] opacity-0 -translate-y-[100px] bg-white"
        ref="modal"
    >

      <h1
          v-if="options.header"
          class="text-3xl text-center"
      >{{ options.header }}</h1>
      <a
          class="absolute top-5 right-5 font-bold w-4 hover:cursor-pointer hover:scale-110"
          @click.prevent="close"
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
import gsap from 'gsap';
export default {
  name: 'Modal',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  mounted() {
    gsap.to(this.$refs.overlay, {
      opacity: 1,
      duration: 0.3,
      ease: 'expo'
    });
    gsap.to(this.$refs.modal, {
      opacity: 1,
      duration: 0.5,
      y: 0,
      ease: 'expo'
    });
  },
  methods: {
    close() {
      // gsap.to(this.$refs.overlay, {
      //   opacity: 0,
      //   duration: 0.1,
      //   ease: 'expo'
      // });
      gsap.to(this.$refs.modal, {
        opacity: 0,
        duration: 0.3,
        y: -100,
        ease: 'expo',
        onComplete: () => {
          this.$emit('toggleModal');
        }
      });
    },
    handleOutsideClick(event) {
      const { target } = event;
      const modal = this.$refs.modal;
      const isClickInsideModal = modal === target || modal.contains(target);
      if (!isClickInsideModal) this.close();
    }
  },
}
</script>