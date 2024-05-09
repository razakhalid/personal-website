import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createStore } from 'vuex';
import SecondaryNav from '@/components/SecondaryNav.vue';

const store = createStore({
    state: () => ({
        tab: {
            tabs: [
                {
                    name: "Token of Trust"
                }
            ],
            active: 0
        }
    }),
    getters: {
        activeTab(state) {
            return state.tab.tabs()
        }
    }
});

const app = createApp(App);

// CONFIG
app.use(router);
app.use(store);
app.use(Quasar, quasarUserOptions)

app.mixin({
    mounted() {
        const appContent = document.querySelector('#app-content');
        const height = appContent && appContent.offsetHeight;
        const width = appContent && appContent.offsetWidth;
        if (window.resizeCanvas) window.resizeCanvas({ height, width });
        window.addEventListener('resize', () => {
            window.resizeCanvas({ height });
        });
    }
})

// DIRECTIVES
app.directive('click-outside', {
    mounted(el, binding) {
        document.body.addEventListener('click', (event) => {
            const { target } = event;
            const isOutsideClick = !(target === el || el.contains(target));
            if (isOutsideClick) {
                binding.value();
            }
        });
    }
});

// GLOBAL COMPONENTS
app.component('SecondaryNav', SecondaryNav);

app.mount('#app');