<template>
  <div class="sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:gap-8">
    <a
        @click.prevent="$emit('toggleModal', item.id)"
        v-for="(item, index) in items"
        :key="index"
        class="my-8 overflow-hidden flex justify-center items-center shadow-lg transition duration-200
        sm:my-2 hover:scale-[102%] hover:cursor-pointer"
    >
      <q-card
              class="my-card bg-transparent h-80 w-80"
              flat
              style="border-radius: 0;"
          >
            <div class="h-4/6 w-full bg-white flex justify-center items-center">
              <img
                  :src="item.src"
                  :alt="item.label"
                  class="max-h-full max-w-full object-cover object-center"
              />
            </div>
            <q-card-section>
              <h4 class="text-2xl text-center">{{ item.label }}</h4>
            </q-card-section>
          </q-card>
    </a>
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
<style scoped>
.q-card > div:not(:last-child) {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
</style>