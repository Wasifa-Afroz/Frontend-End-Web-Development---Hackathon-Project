// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
};

function scrollToAbout() {
  const aboutSection = document.getElementById('about-section');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}

// Get all "Learn More" buttons
const learnMoreButtons = document.querySelectorAll('.learn-more');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Open modal when "Learn More" is clicked
learnMoreButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex'; // Show the modal
  });
});


// GSAP Animations for Landing Page
gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1.5, delay: 0.5 });
gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1.5, delay: 1 });
gsap.from(".cta-buttons", { opacity: 0, y: 50, duration: 1.5, delay: 1.5 });
gsap.from(".hero-image img", { opacity: 0, x: 50, duration: 1.5, delay: 2 });