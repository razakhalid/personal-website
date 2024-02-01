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
          class="column no-wrap flex-center"
      >
        <div class="q-mt-md text-center">
          <img
              :src="slide.img.src"
              :alt="options.label"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
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
  mounted() {
    this.slide = this.slideCount && ref(this.options.slides && this.options.slides[0].id);
    console.log(this.$store.getters.isRazaCool)
  }
}

</script>