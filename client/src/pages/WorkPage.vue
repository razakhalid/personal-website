<template>
  <div>
    <div class="px-6 py-12">
      <h1 class="text-3xl mb-4">Professional Work</h1>

      <p class="text-lg">
        Here's some of the front end design & development work I did for
        <a href="https://tokenoftrust.com/" target="_blank" class="hover:underline">Token of Trust</a>,
        an online age and identity verification company based in Minneapolis, MN.
      </p>
      <Gallery
          :items="workSchema.tot"
          @toggle-modal="toggleModal"
      ></Gallery>

      <p class="text-sm">
        * Disclaimer: Screenshots in this section are the intellectual property
        of Token of Trust. The author of this website has no ownership over them and has obtained permission to publish them.
      </p>


      <Modal
          @toggle-modal="toggleModal"
          :options="modalOptions"
          v-model="modalOptions.show"
      ></Modal>
    </div>
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
  created() {
    Object.keys(this.workSchema).forEach(company => {
      const itemsForCompany = this.workSchema[company];
      itemsForCompany.forEach(item => {
        this.workItems.push(item);
      })
    });
  },
  mounted() {
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
    toggleModal(itemId) {
      console.log(this.workItems)
      if (itemId) this.activeWorkItem = this.workItems.find(item => item.id === itemId);
      if (!this.modalOptions.show) {
        this.modalOptions = this.activeWorkItem;
        this.modalOptions.show = true;
      } else {
        this.modalOptions.show = false;
      }
    }
  },
  components: {
    Gallery,
    Modal,
  }
}
</script>