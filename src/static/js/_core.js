/* eslint-disable no-restricted-globals */

if (location.hash) {
  window.scrollTo(0, 0);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 1);
}
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (location.hash !== '') {
      $('html, body').animate({
        scrollTop: document.querySelector(location.hash).offsetTop,
      });
      location.hash = '';
    }
  }, 500);
});
$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.modal').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $(`[data-type="${modal}"]`).fadeIn();
});

$(window).click((e) => {
  if (e.target.classList.contains('modal') && e.target.style.display == 'block') {
    $('.modal').fadeOut();
  }
});

$('.banner__down').click(() => {
  $('html, body').animate({
    scrollTop: window.innerHeight - $('.header').height(),
  }, 700);
});

$('.footer__top').click(() => {
  $('html, body').animate({
    scrollTop: 0,
  }, 700);
});

if (localStorage.getItem('old') === undefined || localStorage.getItem('old') === null) {
  setTimeout(() => {
    $('.modal-older').fadeIn();
    $('body').css('overflow', 'hidden');
  }, 500);
}

$('[data-answer]').click(function () {
  if ($(this).data('answer') == 'yes') {
    localStorage.setItem('old', 'yes');
    $('.modal-older').fadeOut();
    $('body').attr('style', '');
  } else {
    window.close();
  }
});
