<template>
  <div>
    <section class="grid grid-cols-5 gap-x-4 items-center my-16 sm:my-16">
      <div class="flex justify-center col-span-5 sm:justify-end sm:col-span-2">
        <img
            class="w-[200px] h-[200px] mb-4 object-cover object-center rounded-full"
            src="/img/profile-photo%20(1).jpeg"
            alt="Raza Khalid"
        />
        <!--        <div>-->
        <!--          <a href="https://www.linkedin.com/in/raza-khalid/" target="_blank">-->
        <!--            <img src="../../public/icons/linkedin.svg" alt="Linkedin"/>-->
        <!--          </a>-->
        <!--        </div>-->
      </div>
      <div class="col-span-5 sm:col-span-3">
        <h3 class="text-5x mb-4">Hi, I'm Raza.</h3>
        <p class="text-xl max-w-md mx-auto">A <strong>senior front end engineer</strong> on a mission to build web engaging technology that <strong>solves business problems</strong>.</p>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-1 gap-4 mb-16 sm:grid-cols-2 md:grid-cols-3">
        <q-card
            dark
            bordered
            class="bg-transparent my-card"
            v-for="(item, index) in introductionItems"
            :key="index"
        >
          <q-card-section>
            <h3 class="text-2xl text-center">{{ item.header }}</h3>
          </q-card-section>

          <q-separator dark inset v-if="item.description" />

          <q-card-section v-if="item.description">
            <p class="text-center text-lg">{{ item.description }}</p>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Intro',
  data() {
    return {
      introductionItems: [
        {
          header: "Impact Driven",
          description: "I solve problems to create real business value by clearly focusing on the use-case and 'definition of success'"
        },
        {
          header: "True Ownership",
          description: "I own solution development end-to-end - from business requirements to design to rollout to user support"
        },
        {
          header: "Regular Feedback",
          description: "I collect direct feedback from customers in the form of interviews and usability tests to ensure their needs are met"
        }
      ]
    }
  }
}
</script>