<template>

</template>
<script>

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
      activeSlideId: 0,
      current: 0,
      transitionName: 'fade'
    }
  },
  computed: {
    slides() {
      return 2;
    },
    slideCount() {
      return this.options.slides && this.options.slides.length;
    }
  }
}

</script>