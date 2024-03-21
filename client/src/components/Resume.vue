<template>
  <div class="mt-16">
    <embed
        src="../../public/pdf/Resume%20-%20Raza%20Khalid.pdf"
        class="min-h-[525px] h-full w-full sm:h-[725px] lg:h-[1125px] lg:w-[835px]"
    >
  </div>
</template>
<script>
export default {
  name: 'Resume',
  data() {
    return {
      url: 'https://docs.google.com/document/d/e/2PACX-1vQ_HM9n6yZePAfVvrl2nSyPyOsFJmFI_OVeSOthG736l-7fQ-pHRN7nsqy5rba2Ij9Pu_E0vEn0hSSR/pub?embedded=true'
    }
  }
}
</script>