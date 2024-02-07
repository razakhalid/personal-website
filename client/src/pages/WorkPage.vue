<template>
  <div class="px-6 py-12">
    <Gallery
        :items="workItems"
        @toggle-modal="toggleModal"
    ></Gallery>
    <Modal
          :options="modalOptions"
          @toggle-modal="toggleModal"
          id="modal"
          v-if="modalOptions.show"
      >
      <template #header>
        {{ activeWorkItem.label }}
      </template>
      <template #content>
          <div class="content py-5 px-3 grid grid-cols-2" v-if="activeWorkItem.slides && activeWorkItem.slides.length">
            <div class="left relative">
              <Carousel
                  :options="activeWorkItem"
              ></Carousel>
            </div>
            <div class="right">
              <div class="details-container px-8 py-3">
                <div class="body">
                  <div
                      v-if="activeWorkItem && activeWorkItem.details"
                      v-for="item in activeWorkItem.details"
                      class="mb-4"
                  >
                    <h3 class="text-2xl font-space-mono font-bold">{{ item.header }}</h3>
                    <p class="u-text-small">{{ item.body }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
    </Modal>
  </div>
</template>

<script>
import gsap from 'gsap';
import Gallery from '../components/Gallery.vue';
import Modal from '../components/Modal.vue';
import Carousel from '../components/Carousel.vue';
export default {
  name: 'WorkPage',
  data() {
    return {
      activeWorkItem: {},
      workItems: [
        {
          id: "planRecommendationWizard",
          label: "Plan Recommendation Wizard",
          src: "/img/projects/thumbnails/consultative-plan-thumbnail.png",
          details: [
            {
              header: "Business Problem",
              body: "A 30% time cost to the sales team in talking to new users and recommending the right product configuration for them."
            },
            {
              header: "Solution",
              body: "A feature that asks the user a series of questions to understand the nature of their business and uses their responses to offer a recommendation for what plan would be best suited to their needs."
            },
            {
              header: "Impact",
              body: "The time spent by the sales team in performing this task dropped down to around 15%."
            }
          ],
          slides: [
            {
              id: 'consultativePlan1',
              img: {
                src: "/img/projects/consultative-plan-1.png"
              },
            },
            {
              id: 'consultativePlan2',
              img: {
                src: "/img/projects/consultative-plan-2.png"
              }
            },
            {
              id: 'consultativePlan3',
              img: {
                src: "/img/projects/consultative-plan-1.png"
              },
            },
            {
              id: 'consultativePlan4',
              img: {
                src: "/img/projects/consultative-plan-2.png"
              }
            },
          ]
        },
        {
          id: "quickAndEasyProductDemo",
          label: "Quick & Easy Product Demo",
          src: "/img/projects/thumbnails/demo-2-thumbnail.png",
          mobile: true,
          details: [
            {
              header: "Business Problem",
              body: "There was no quick and easy way for new users to try the ID verification product. They had to choose and sign up for a plan to be able to do this, causing a large number of them to abandon the product altogether"
            },
            {
              header: "Solution",
              body: "A product demo modal that renders on the home page of the client portal right after a user creates an account and is logged in, allowing them to try the product."
            },
            {
              header: "Impact",
              body: "We saw a significant uptick in the number of new users engaging with the product and discussing pricing options with the sales team."
            }
          ],
          slides: [
            {
              id: "demo1",
              img: {
                src: "/img/projects/demo-1.png"
              },
            },
            {
              id: "demo2",
              img: {
                src: "/img/projects/demo-2.png"
              }
            },
            {
              id: "demo3",
              img: {
                src: "/img/projects/demo-3.jpeg"
              }
            },
            {
              id: "demo4",
              img: {
                src: "/img/projects/demo-4.jpeg"
              }
            }
          ]
        },
        {
          id: "verificationProgressTracker",
          label: "Verification Progress Tracker",
          src: "/img/projects/verification-flow-stepper.png",
          mobile: true,
          details: [
            {
              header: "Business Problem",
              body: "Numerous user complaints (via support tickets) about having to wait too long to get \"verified\" via manual review after submitting their ID without a completion time estimate."
            },
            {
              header: "Solution",
              body: "A progress tracker that reflects the status of the manual review of their ID in real-time."
            },
            {
              header: "Impact",
              body: "This dramatically reduced the number of user complaints via support tickets by 80% and increased the weekly number of \"cleared\" users by 6%."
            }
          ],
          slides: [
            {
              id: 'verificationProgressTracker1',
              img: {
                src: "/img/projects/verification-flow-stepper.png"
              }
            }
          ]
        },
        {
          id: "smartProductPage",
          label: "Smart Product Page",
          src: "/img/projects/thumbnails/contact-support-thumbnail.png",
          details: [
            {
              header: "Business Problem",
              body: "Slow resolution of support tickets regarding 'errors' due to missing details about the error."
            },
            {
              header: "Solution",
              body: "A feature that records all errors encountered by a user and retrieves the most recent one from an endpoint to (optionally) adds it to the support ticket submitted by the user."
            },
            {
              header: "Impact",
              body: "About 75% of error tickets received contained details about the error, allowing the support team to resolve them much faster."
            }
          ],
          slides: [
            {
              id: 'contactSupport1',
              img: {
                src: "/img/projects/contact-support.png"
              }
            },
          ]
        },
      ],
      modalOptions: {
        show: false,
        header: ""
      }
    }
  },
  mounted() {
    // gsap.to(this.$refs.title, {
    //   opacity: 1,
    //   duration: 1.5,
    //   y: 0,
    //   ease: 'expo'
    // });
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
      if (itemId) this.activeWorkItem = this.workItems.find(item => item.id === itemId);

      if (!this.modalOptions.show) {
        this.modalOptions.show = true;
        this.modalOptions.header = this.activeWorkItem.label;
      } else {
        this.modalOptions.show = false;
      }
    }
  },
  components: {
    Gallery,
    Modal,
    Carousel
  }
}
</script>