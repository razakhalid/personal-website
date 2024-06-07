<template>
  <div>
    <q-dialog
        position="bottom"
        v-model="$store.state.showDialog"
    >
      <q-card class="bg-blue-9 px-6 py-4">

        <q-card-section class="row q-pa-none">
          <div class="flex items-center justify-center">
            <span class="flip-horizontal">
              <HandWaveIcon></HandWaveIcon>
            </span>
            <h6 class="ml-2">Hey there! Raza here.</h6>
          </div>
          <q-space></q-space>
          <q-btn
              icon="close"
              flat
              @click.prevent="$store.commit('toggleDialog')"
          ></q-btn>
        </q-card-section>
        <q-card-section class="q-px-none">
          <p class="text-left mb-4"><strong>I'm currently looking for work</strong>, front end or full stack.</p>
          <p class="text-left mb-4">I can relocate to anywhere in the US or work remotely in a contract or full-time role.</p>
          <p class="text-left mb-4">I've got <strong>5+ years of professional experience</strong> in the US, having solved hundreds of technical challenges and delighted dozens of customers.</p>
          <p class="text-left mb-4">Look at my work and shoot me an email, I look forward to hearing from you!</p>

          <div class="flex column">
            <router-link
                :to="{ name: 'Work' }"
                class="text-sm border px-2 py-1 my-2 rounded-lg font-space-mono uppercase inline-block
                    hover:bg-white hover:text-gray-800 hover:cursor-pointer"
            >
              SEE MY WORK</router-link>
            <a
                href="mailto:ra97za@gmail.com?subject=Work Opportunity"
                class="my-2 hover:underline"
            >ra97za@gmail.com</a>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-fab
        v-model="fabCenter"
        vertical-actions-align="center"
        color="yellow-6"
        text-color="black"
        direction="up"
        label="Let's chat!"
        icon="chat"
        class="fixed right-6 bottom-6"
    >
      <q-fab-action color="yellow-6" text-color="black" icon="mail">
        <a
            href="mailto:ra97za@gmail.com?subject=Work Opportunity"
            class="ml-2 hover:underline"
        >ra97za@gmail.com</a>
      </q-fab-action>
    </q-fab>
  </div>
</template>
<script>
import HandWaveIcon from "vue-material-design-icons/HandWave.vue";


export default {
  name: 'Footer',
  data() {
    return {
      fabCenter: false
    }
  },
  components: {
    HandWaveIcon
  }
}
</script>