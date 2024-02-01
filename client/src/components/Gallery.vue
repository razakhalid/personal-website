<template>
  <div class="grid grid-cols-2 gap-4 py-8 sm:grid-cols-3 md:gap-6 md:px-6 xl:px-[250px] xl:gap-8">
    <div
        v-for="item in items"
        ref="item"
        class="opacity-0"
        style="transform: translateX(30px);"
    >
      <a
          class="h-48 bg-white overflow-hidden rounded-lg flex justify-center items-center shadow-lg
          transition duration-200 hover:scale-[102%] hover:cursor-pointer md:h-80"
          @click.prevent="$emit('toggleModal', item.id)"
      >
        <img
            :src="item.src"
            :alt="item.label"
            class="border rounded-lg"
            :class="item.mobile ? 'h-5/6' : 'w-5/6'"
        />
      </a>
      <p class="text-white text-center mt-1">{{ item.label }}</p>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
  name: 'Gallery',
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  mounted() {
    gsap.to(this.$refs.item, {
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      x: 0,
      ease: 'expo',
      delay: 0.3
    });
  },
  emits: ['toggleModal']
}
</script>