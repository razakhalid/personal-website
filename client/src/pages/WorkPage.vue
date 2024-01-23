<template>
  <div class="bg-black h-screen px-6 py-12">
    <h2
        ref="title"
        class="text-white font-exo text-5xl opacity-0 mb-3"
        style="transform: translateY(30px);"
    >MY WORK</h2>
    <Gallery
        :items="workItems"
        @show-modal="toggleModal"
        v-if="!showModal"
    ></Gallery>
    <div
        ref="modal"
        class="opacity-0"
        style="translateY(-30px);"
    >
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import Gallery from '../components/Gallery.vue';
import Modal from '../components/Modal.vue';
export default {
  name: 'WorkPage',
  data() {
    return {
      workItems: [
        {
          label: "Plan Recommendation Wizard",
          src: "/img/projects/thumbnails/consultative-plan-thumbnail.png"
        },
        {
          label: "Quick & Easy Product Demo",
          src: "/img/projects/thumbnails/demo-2-thumbnail.png",
          mobile: true
        },
        {
          label: "Verification Progress Tracker",
          src: "/img/projects/verification-flow-stepper.png",
          mobile: true
        },
        {
          label: "Smart Support Page",
          src: "/img/projects/thumbnails/contact-support-thumbnail.png",
          customStyles: 'w-5/6'
        }
      ],
      showModal: false
    }
  },
  mounted() {
    gsap.to(this.$refs.title, {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: 'expo'
    });
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
    toggleModal() {
      if (!this.showModal) {
        this.showModal = true;
        gsap.to(this.$refs.modal, {
          opacity: 1,
          duration: 2,
          y: 0,
          ease: 'expo'
        });
      } else {
        this.showModal = false;
        gsap.to(this.$refs.modal, {
          opacity: 0,
          duration: 2,
          y: -100,
          ease: 'expo'
        });
      }
    }
  },
  components: {
    Gallery,
    Modal
  }
}
</script>