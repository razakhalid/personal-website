<template>
  <div v-if="slideCount">
    <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="primary"
        class="rounded-borders"
        v-if="options.slides && options.slides.length"
    >
      <q-carousel-slide
          v-for="(slide, index) in options.slides"
          :key="index"
          :name="slide.id"
          :ref="slide.id"
          class="column no-wrap flex-center q-px-none q-py-none"
          style="max-height: 40px;"
      >
        <div class="q-mt-md text-center max-h-full">
          <img
              :src="slide.img.src"
              :alt="options.label"
              class="h-full"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div
        class="row justify-center mt-2"
        v-if="slideCount > 1"
    >
      <q-btn-toggle
          v-model="slide"
          :options="controlsOptions"
      />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'Carousel',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      slide: null
    }
  },
  computed: {
    slideCount() {
      return this.options.slides && this.options.slides.length;
    },
    controlsOptions() {
      return this.slideCount && this.options.slides.map((slide, i) => ({ label: i + 1, value: slide.id }));
    }
  },
  beforeMount() {
    this.slide = this.slideCount && this.options.slides && this.options.slides[0].id;
    console.log(this.options.slides[0].img)
  }
}

</script>
<style>
@media (max-width: 640px) {
  .q-carousel {
    height: 300px;
  }
}
</style>