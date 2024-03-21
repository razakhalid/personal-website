<template>
  <div>
    <div v-if="!pdfViewerEnabled" class="my-8">
      <p>Preview is not currently supported on mobile, to preview without downloading please visit on a desktop device.</p>
      <p>(I'm working on it!)</p>
    </div>

    <embed
        src="../../public/pdf/Resume%20-%20Raza%20Khalid.pdf"
        class="mt-16 min-h-[525px] h-full w-full sm:h-[725px] lg:h-[1125px] lg:w-[835px]"
        v-if="pdfViewerEnabled"
    >
    <a
        class="text-lg border px-4 py-2 mb-2 rounded-lg text-sm font-space-mono uppercase inline-block
                    hover:bg-white hover:text-gray-800 hover:cursor-pointer"
        href="../../public/pdf/Resume%20-%20Raza%20Khalid.pdf"
        download
    >Download &darr;</a>
  </div>
</template>
<script>
export default {
  name: 'Resume',
  data() {
    return {
      pdfViewerEnabled: true
    }
  },
  created() {
    this.pdfViewerEnabled = window.navigator.pdfViewerEnabled;
  }
}
</script>