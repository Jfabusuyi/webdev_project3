const slides = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev-bottom');
const nextButton = document.querySelector('.next-bottom');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  slides[index].classList.add('active');
}

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
