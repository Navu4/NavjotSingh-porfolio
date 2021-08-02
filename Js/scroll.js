document.querySelector('.scroll_top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

window.scroll.behavior = 'smooth';
