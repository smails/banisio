const review = new Swiper('.review .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,
  autoplay: true,
  speed: 1500,
  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});