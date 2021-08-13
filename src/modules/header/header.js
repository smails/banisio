const humb = $('.header__menu');
const menu = $('.nav');
if (humb !== undefined && humb !== null) {
  humb.click(() => {
    humb.toggleClass('open');
    menu.slideToggle();
  });
}

$('.nav__close').click(() => {
  humb.toggleClass('open');
  menu.slideToggle();
});
