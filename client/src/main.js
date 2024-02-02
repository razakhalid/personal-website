import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createStore } from 'vuex';

const store = createStore({
    state() {
     return {
         isRazaCool: true
     }
    },
    getters: {
        isRazaCool: (state) => state.isRazaCool
    }
});

const app = createApp(App).use(Quasar, quasarUserOptions)

// CONFIG
app.use(router);
app.use(store);

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

app.mount('#app')

const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach(carousel => {
    const buttons = carousel.querySelectorAll("[data-carousel-btn]");
    const imgHeight = carousel
        .querySelector("[data-active]")
        .querySelector("img")
        .offsetHeight;

    setInterval(() => {
        changeSlide({
            slides: carousel.querySelector("[data-carousel-slides]"),
            offset: 1
        })
    }, 7000);

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            changeSlide({
                slides: btn
                    .closest("[data-carousel]")
                    .querySelector("[data-carousel-slides]"),
                offset: btn.dataset.carouselBtn === "left" ? -1 : 1
            });
        });
    })
})

function changeSlide(options = {}) {
    const {slides, offset} = options;
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}
