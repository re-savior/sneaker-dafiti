let images = document.querySelectorAll('.img-responsivo');

Object.values(images).map((image) => {
  if (window.innerWidth > 640) {
    image.src =
      image.getAttribute('data-path') +
      'desktop/' +
      image.getAttribute('data-name');
  } else {
    image.src =
      image.getAttribute('data-path') +
      'mobile/' +
      image.getAttribute('data-name');
  }
});
