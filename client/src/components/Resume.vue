<template>
  <div class="mt-8">
    <div class="flex justify-end">
      <a
          class="text-lg border px-4 py-2 mb-2 rounded-lg text-sm font-space-mono uppercase inline-block
                    hover:bg-white hover:text-gray-800 hover:cursor-pointer mt-4"
          href="../../public/pdf/Resume%20-%20Raza%20Khalid.pdf"
          download
      >Download &darr;</a>
    </div>
    <VuePdfEmbed :source="src"></VuePdfEmbed>
  </div>
</template>
<script>
import VuePdfEmbed from 'vue-pdf-embed';
export default {
  name: 'Resume',
  data() {
    return {
      src: '../../public/pdf/Resume%20-%20Raza%20Khalid.pdf'
    }
  },
  components: {
    VuePdfEmbed
  }
}
</script>