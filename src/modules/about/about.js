const about = document.querySelector('.about');
if (about != null && about != undefined) {
  $(window).on('scroll', () => {
    if (window.innerWidth > 575) {
      const top = window.pageYOffset;
      $('.about__pic').each((index, item) => {
        item.style.transform = `translateY(-${top / 30}px)`;
      });
    }
  });
  $('.about__slider').each((index, item) => {
    if ($(item).find('.swiper-container .swiper-slide').length > 1) {
      const swiper = new Swiper($(item).find('.swiper-container'), {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 1000,
        disableOnInteraction: true,
      });
    }
  });
}
