export function initSlideOnScroll() {
  // scroll effect
  function moveSlider() {
    const slider = document.querySelector('.slider');
    const sliderRect = slider.getBoundingClientRect();

    // if slider is in view
    if (sliderRect.top < window.innerHeight && sliderRect.bottom > 0) {
      const scrollPercent = (sliderRect.bottom / window.innerHeight) * 100;
      const offset = 50;
      const translateX = scrollPercent - (110 - offset);

      slider.style.transform = `translateX(${translateX}%)`;
    }
  }

  window.addEventListener('scroll', moveSlider);
}