// Service Slides code
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

function scrollCarousel(direction) {
  const carousel = document.querySelector('.service-carousel');
  const cardWidth = document.querySelector('.service-card').offsetWidth;
  const gap = 24; // Gap between cards (1.5rem in pixels)
  const scrollAmount = (cardWidth + gap) * direction;
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// Close modal when "X" is clicked
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none'; // Hide the modal
  });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none'; // Hide the modal
  }
});






