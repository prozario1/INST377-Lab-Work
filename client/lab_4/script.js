/* eslint-disable prefer-arrow-callback */
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

function updateSlidePosition() {
  // eslint-disable-next-line no-restricted-syntax
  for (const slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePosition++;
  }
  updateSlidePosition();
}

document.getElementById('carousel__button--next')
  .addEventListener('click', function() {
    moveToNextSlide();
  });
function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePosition--;
  }
  updateSlidePosition();
}
document.getElementById('carousel__button--prev')
  .addEventListener('click', function() {
    moveToPrevSlide();
  });
