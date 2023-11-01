// Export
export function initScrollToTopButton() {
  const scrollBtn = document.querySelector('.scroll-btn');

  // when user scrolls below navbar, show scroll button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  });

  // when user clicks scroll button, scroll to top
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}