<template>
  <button
      class="bg-transparent rounded-full w-[50px] h-[50px] absolute overflow-hidden my-[2.75rem] mx-8 z-20"
      @click="open = !open"
  >
    <span class="relative">
      <span class="horizontal-lines-container block h-4/6 p-2 flex flex-col justify-between items-center">
      <span
          class="block bg-white h-[2px] w-7 rounded transform transition-all duration-300 origin-left"
          :class="{ 'translate-x-10' : open }"
      ></span>
      <span
          class="block bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75"
          :class="{ 'translate-x-10' : open }"
      ></span>
      <span
          class="block bg-white h-[2px] w-7 rounded transform transition-all duration-300 origin-left delay-150"
          :class="{ 'translate-x-10' : open }"
      ></span>
    </span>
      <span
        class="x-container w-0 absolute flex items-center justify-center transition-all duration-500 top-1/2 w-0
        -translate-x-10"
        :class="{ '-translate-x-0 w-12' : open }"
    >
      <span
          class="absolute block bg-white h-[2px] transform transition-all duration-500 rotate-0 delay-300"
          :class="{ 'rotate-45 w-5' : open }"
      ></span>
      <span
          class="absolute block bg-white h-[2px] transform transition-all duration-500 -rotate-0 delay-300"
          :class="{ '-rotate-45 w-5' : open }"
      ></span>
    </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  data() {
    return {
      open: false
    }
  }
}
</script>