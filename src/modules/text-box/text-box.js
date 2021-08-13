$(window).scroll(() => {
  $('.text-box').each((inx, item) => {
    if ((pageYOffset + window.innerHeight * 1.1) > item.offsetTop) {
      item.classList.add('open');
    }
  });
});
