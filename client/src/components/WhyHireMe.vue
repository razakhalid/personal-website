<template>
  <div>
    <section class="sm:my-16">
      <div class="grid grid-cols-1 gap-4 mb-16 sm:grid-cols-2 md:grid-cols-3">
        <q-card
            dark
            bordered
            class="bg-transparent my-card"
            v-for="(item, index) in valuePropItems"
            :key="index"
        >
          <q-card-section>
            <h3 class="text-3xl text-center">{{ item.header }}</h3>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <p class="text-center text-lg">{{ item.description }}</p>
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section class="sm:my-24">
      <h3 class="text-center mb-8">Tell Me About Yourself</h3>
      <div>
      </div>
      <div class="bg-transparent rounded-lg max-w-xl mx-auto">
        <section
            class="container max-w-full mx-auto text-lg"
            v-for="item in chatItems"
        >
          <div class="flex items-center justify-end">
            <div class="bg-blue-700 p-4 my-6 rounded-lg flex-1 font-space-mono max-w-md">
              {{ item.message }}
            </div>
            <div class="w-3 overflow-hidden ">
              <div class="h-4 bg-blue-700 rotate-45 transform origin-top-left rounded-sm"></div>
            </div>
          </div>
          <div class="flex items-center justify-start">
            <div class="w-3 overflow-hidden">
              <div class="h-4 bg-green-500 rotate-45 transform origin-bottom-right rounded-sm"></div>
            </div>
            <div class="bg-green-500 p-4 my-6 rounded-lg flex-1 font-space-mono max-w-md">
              {{ item.response }}
            </div>
          </div>

        </section>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'WhyHireMe',
  data() {
    return {
      valuePropItems: [
        {
          header: "Craftsmanship in Dev & Design",
          description: "I design user-friendly, high-performing and professional looking products. I develop them to be easily maintainable following software development best-practices."
        },
        {
          header: "End to End Ownership",
          description: "I own solution development end-to-end, not just a piece of the code. Whether it's a UX decision hurting conversions or a production bug, I'll take responsibility and fix it."
        },
        {
          header: "Constant Improvement",
          description: "I never stop learning new technologies, techniques and skills. I constantly seek feedback from peers and users and improve myself and the products I create."
        }
      ],
      chatItems: [
        {
          message: "Tell me about yourself...",
          response: "I'm a front end software engineer who solves business problems."
        },
        {
          message: "Interesting, how do you do that?",
          response: `I do more than just write code and close tickets, any developer can do that. Business reps can come
          to me with a problem the business is facing and I can design, develop and roll out a solution; I’m talking
          end-to-end ownership. Not a technical person? No worries. Help me understand the problem. Put me in touch
          with the customers and end-users it impacts. I’ll interview them, run usability tests and iterate. I’ll handle
          everything that’s user-facing: UI design, front end development and project management, testing, rollout,
          fixing defects...all of it. I’ll even dip my toes into end-user support to keep collecting feedback and
          improving the solution.`
        },
        {
          message: "And what do you accomplish using this approach?",
          response: `My approach produces software that fulfils the needs of the business and the end-user. It
          emphasizes direct interaction with both parties, which forces me to understand the business problem and
          use-case which helps me make better design and technical decisions. Even when there are dedicated designers
          and product managers, my expertise in these areas bridges the gap between technical and non-technical aspects
          of product development and facilitates knowledge sharing across departments, better collaboration and smoother
          handoff, resulting in better products.`
        }
      ]
    }
  }
}
</script>