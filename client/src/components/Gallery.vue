<template>
  <div class="grid grid-cols-1 gap-2 py-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:gap-8">
<!--    <div-->
<!--        v-for="item in items"-->
<!--        ref="item"-->
<!--        class="opacity-0"-->
<!--        style="transform: translateX(30px);"-->
<!--    >-->
<!--      <a-->
<!--          class="h-60 w-60 bg-white overflow-hidden rounded-lg flex justify-center items-center shadow-lg-->
<!--          transition duration-200 hover:scale-[102%] hover:cursor-pointer"-->
<!--          @click.prevent="$emit('toggleModal', item.id)"-->
<!--      >-->
<!--        <img-->
<!--            :src="item.src"-->
<!--            :alt="item.label"-->
<!--            class="border rounded-lg"-->
<!--            :class="item.mobile ? 'h-5/6' : 'w-5/6'"-->
<!--        />-->
<!--      </a>-->
<!--      <p class="text-white text-center mt-1 text-xl">{{ item.label }}</p>-->
<!--    </div>-->
    <a
        @click.prevent="$emit('toggleModal', item.id)"
        v-for="(item, index) in items"
        :key="index"
        class="overflow-hidden flex justify-center items-center shadow-lg transition duration-200
        sm:mb-4 hover:scale-[102%] hover:cursor-pointer"
        >
          <q-card
              class="my-card bg-transparent h-80 w-80"
              flat
          >
            <div class="h-4/6 w-full bg-white flex justify-center items-center rounded-lg">
              <img
                  :src="item.src"
                  :alt="item.label"
                  class="max-h-full max-w-full object-cover object-center"
              />
            </div>
            <q-card-section>
              <h4 class="text-2xl">{{ item.label }}</h4>
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