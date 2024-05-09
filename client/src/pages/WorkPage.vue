<template>
  <div>
    <ContentWrapper
        :tabs="[
            { label: 'Token of Trust' }
        ]"
        :content-components="createContentComponents()"
    ></ContentWrapper>
  </div>
</template>

<script>
import gsap from 'gsap';
import Gallery from '../components/Gallery.vue';
import Modal from '../components/Modal.vue';
import workSchema from '../schema/work.json';
import ContentWrapper from "@/components/ContentWrapper.vue";
import {h} from "vue";
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
    // Object.keys(this.workSchema.items).forEach(company => {
    //   const itemsForCompany = this.workSchema[company];
    //   itemsForCompany.forEach(item => {
    //     this.workItems.push(item);
    //   })
    // });
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
    this.createContentComponents();
  },
  methods: {
    toggleModal(item) {
      console.log(this.workItems)
      // if (itemId) this.activeWorkItem = this.workItems.find(item => item.id === itemId);
      if (!this.modalOptions.show) {
        this.modalOptions = item;
        this.modalOptions.show = true;
      } else {
        this.modalOptions.show = false;
      }
    },
    createContentComponents() {
      const contentComponents = [];
      const self = this;
      const disclaimer = "* Disclaimer: Screenshots in this section are the intellectual property of the associated company. The author of this website has no ownership over them and has obtained permission to publish them."
      for (const company in workSchema) {
        const {
          name,
          links
        } = workSchema[company];
        contentComponents.push({
          name,
          render() {
            return h('div', [
              h('div', [...(links.map(({name, url}) => {
                return h('a', {
                  innerHTML: name,
                  href: url,
                  target: '_blank',
                  class: 'text-lg hover:underline mx-2 sm:mx-8'
                })})),
                h(Gallery, {
                  items: workSchema[company].items,
                  onToggleModal: self.toggleModal,
                  class: 'mt-8'
              }),
                h('p', { class: 'text-sm', innerHTML: disclaimer }),
                h(Modal, {
                onToggleModal: self.toggleModal,
                options: self.modalOptions,
                vModel: self.modalOptions.show
              })
            ])])
          }
        });
      }
      return contentComponents;
    }
  },
  components: {
    Gallery,
    Modal,
    ContentWrapper
  }
}
</script>