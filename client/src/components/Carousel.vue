<template>
  <div>
    <div class="carousel-container mt-5">
      <div class="carousel" data-carousel>
        <a class="btn left" data-carousel-btn="left">
          <i class="fas fa-angle-left"></i>
        </a>
        <a class="btn right" data-carousel-btn="right">
          <i class="fas fa-angle-right"></i>
        </a>
        <ul class="slides" data-carousel-slides>
          <li class="slide" data-active>
            <div class="image-container">
              <img src="/img/projects/consultative-plan-1.png" alt="">
            </div>
          </li>
          <li class="slide">
            <div class="image-container">
              <img src="/img/projects/consultative-plan-2.png" alt="">
            </div>
          </li>
          <li class="slide">
            <div class="image-container">
              <img src="/img/projects/consultative-plan-3.png" alt="">
            </div>
          </li>
          <li class="slide">
            <div class="image-container">
              <img src="/img/projects/plan-selection-1.png" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeSlideId: 0,
      slideCount: this.options.slides && this.options.slides.length
    }
  },
  mounted() {
    this.startCarousel()
  },
  methods: {
    startCarousel() {
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
    }
  }
}
</script>
<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.carousel {
  position: relative;
  width: 100%;
  min-height: 35vh;
  /*border: 1px solid rgb(202,202,213);*/
  /*padding: 1.5rem .85rem;*/
  /*box-shadow: var(--box-shadow-2);*/
}

.carousel .slides {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
}

.carousel .slide {
  opacity: 0;
  transition: 400ms opacity ease-in-out;
  transition-delay: 100ms;
  position: absolute;
  background-color: rgb(248,247,242);
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
}

.card .slide {
  height: 80%;
}

.carousel .slide[data-active] {
  opacity: 1;
  z-index: 5;
}

.carousel .slide .caption-container {
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
  max-width: 400px;
  font-size: .9rem;
  background-color: #fff;
}

.carousel .slide .image-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel .slide img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}

.carousel .btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(45,47,49);
}

.carousel .btn.left {
  left: 0.2rem;
}

.carousel .btn.right {
  right: .2rem;
}

@media (min-width: 1500px) {
  .nav-items, section, .carousel-container {
    /*max-width: 1300px;*/
  }
  section {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .carousel {
    min-height: 65vh;
  }
  .carousel .slide {
    flex-direction: column;
  }
  .carousel .slide .image-container {
    height: 70%;
  }
  .work .item .content {
    grid-template-columns: 1fr;
  }
  .work .item .content .carousel {
    min-height: 30vh;
  }
  .work .item .carousel .slide .image-container {
    height: 100%;
  }
}

@media (max-width: 515px) {
  .carousel .slide .image-container {
    width: 90%;
  }
  .carousel .slide .image-container img {
    height: unset;
    width: 100%;
  }
  .work .item .carousel .slide .image-container img {
    max-height: 100%;
    width: 100%;
  }
}

</style>