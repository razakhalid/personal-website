<template>
  <div>
    <div class="quick-links flex justify-center items-center">

      <a
          v-for="(company, j) in workSchema"
          :key="j"
          :href="`#${company.id}`"
      >
        <q-chip
            color="blue-9"
            text-color="white"
        >{{ company.name }}
        </q-chip>
      </a>
    </div>
    <div
        v-for="(company, i) in workSchema"
        :key="i"
        class="mt-4"
    >
      <h1
          class="text-3xl text-center"
          :id="company.id"
      >{{ company.name }}</h1>


      <div class="overview mt-2">
        <p>{{ company.companyDescription }}</p>
      </div>

      <div
          class="flex justify-evenly mt-2"
      >
        <a
            v-for="(link, j) in company.links"
            :key="j"
            :href="link.url"
            target="_blank"
            class="text-lg hover:underline mx-2 sm:mx-8"
        >
          <q-btn color="grey-9">
            <div>{{ link.name }}</div>
          </q-btn>
        </a>
      </div>

      <Gallery
          :items="company.items"
          class="mt-4"
          @toggle-modal="toggleModal"
      />

    </div>
    <p class="disclaimer text-sm">* Disclaimer: Screenshots in this section are the intellectual property of the associated company. The author of this website has no ownership over them and has obtained permission to publish them.</p>
    <Modal
        @toggle-modal="toggleModal"
        :options="modalOptions"
        v-model="modalOptions.show"
    ></Modal>
  </div>
</template>

<script>
import gsap from 'gsap';
import Gallery from '../components/Gallery.vue';
import Modal from '../components/Modal.vue';
import workSchema from '../schema/work.json';
export default {
  name: 'WorkPage',
  data() {
    return {
      activeWorkItem: {},
      workSchema,
      workItems: [],
      modalOptions: {
        show: false,
        header: ""
      }
    }
  },
  mounted() {
    if (this.$route.params.id) alert(this.$route.params.id);
    gsap.to(this.$refs.workItems, {
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      x: 0,
      ease: 'expo',
      delay: 0.3
    });
  },
  methods: {
    toggleModal(item) {
      if (!this.modalOptions.show) {
        this.modalOptions = item;
        this.modalOptions.show = true;
      } else {
        this.modalOptions.show = false;
      }
    }
  },
  components: {
    Gallery,
    Modal
  }
}
</script>