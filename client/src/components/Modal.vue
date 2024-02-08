<template>

  <div class="text-black">
    <q-dialog v-model="options.show" transition-show="rotate" transition-hide="rotate" class="text-black">
      <q-card class="px-8">
        <q-card-section>
          <h1
              v-if="options.label"
              class="text-3xl text-center mt-2"
          >{{ options.label }}</h1>
          <a
              class="absolute top-5 right-0 font-bold w-4 hover:cursor-pointer hover:scale-110"
              @click.prevent="$emit('toggleModal')"
          >
            <img src="/icons/xmark.svg" alt="x">
          </a>
        </q-card-section>
        <div>
          <q-card-section>
            <div
                class="left relative mb-4"
                v-if="options.slides && options.slides.length"
            >
              <Carousel
                  :options="options"
              ></Carousel>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div
                v-if="options && options.details"
                v-for="item in options.details"
                class="mb-4"
            >
              <h3 class="text-2xl font-space-mono font-bold">{{ item.header }}</h3>
              <p class="u-text-small">{{ item.body }}</p>
            </div>
          </q-card-section>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import gsap from 'gsap';
import Carousel from "@/components/Carousel.vue";
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
      this.$emit('toggleModal');
    },
    handleOutsideClick(event) {
      const { target } = event;
      const modal = this.$refs.modal;
      const isClickInsideModal = modal === target || modal.contains(target);
      if (!isClickInsideModal) this.close();
    }
  },
  components: {
    Carousel
  }
}
</script>