const wine = new Swiper('.wines .swiper-container', {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  centeredSlides: true,
  breakpoints: {
    575: {
      slidesPerView: 1,
    },
    1023: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

if (document.querySelectorAll('.wine-list').length) {
  const wineList = new Swiper('.wine-list .swiper-container', {
    init: false,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
  });
  $(window).on('load resize', (e) => {
    if (window.innerWidth < 576) {
      wineList.init();
    } else if (wineList.initialized) {
      wineList.destroy();
    }
  });
}
