import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

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