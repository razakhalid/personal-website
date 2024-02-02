<template>
  <div class="px-6">

    <!--  LEFT  -->
    <div class="grid grid-cols-2">
      <div class="left px-4">
        <div class="flex justify-center items-center mb-16">
          <img
              class="w-[100px] h-[100px] object-cover object-center rounded-full"
              src="/img/profile-photo%20(1).jpeg"
              alt="Raza Khalid"
          />
          <div>
            <h2 class="font-space-mono text-3xl text-center ml-10">Hi, I'm Raza.</h2>
            <a
                href="mailto:ra97za@gmail.com?subject=Nice Portfolio!"
                class="flex ml-9 mt-4 hover:underline hover:cursor-pointer hover:scale-105"
            >
              <div class="h-6 w-6 transform translate-y-1">
                <img src="/icons/email.svg" alt="Email">
              </div>
              <span
                  class="text-lg ml-2"
              >ra97za@gmail.com</span>
            </a>
            <a
                href="https://www.linkedin.com/in/raza-khalid/"
                target="_blank"
                class="flex ml-9"
            >
              <div class="h-6 w-6 transform translate-y-1">
                <img src="/icons/location.svg" alt="Location">
              </div>
              <span
                  class="text-white text-lg ml-2"
              >Minneapolis, MN</span>
            </a>
          </div>
        </div>
        <div class="max-w-5xl mx-auto mb-12">
          <p class="font-space-mono text-2xl text-center">
            I have over 3 years of professional software engineering experience with a focus in front end engineering, UX and UI design.
          </p>
        </div>
      </div>

      <!--  RIGHT  -->
      <div>
        <p class="font-space-mono text-xl text-center mb-4">Learn more from my chat with an imaginary recruiter:</p>

        <div class="bg-white max-w-2xl h-[70vh] mx-auto overflow-y-scroll">
          <section
              class="container max-w-2xl mx-auto"
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
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  data() {
    return {
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