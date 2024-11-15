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

function initMap() {
  const chicagoCenter = { lat: 41.8781, lng: -87.6298 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: chicagoCenter,
  });

  const landmarks = [
    { position: { lat: 41.8789, lng: -87.6359 }, title: "Willis Tower" },
    { position: { lat: 41.8917, lng: -87.6078 }, title: "Navy Pier" },
    { position: { lat: 41.8827, lng: -87.6233 }, title: "Millennium Park" },
  ];

  landmarks.forEach((landmark) => {
    const marker = new google.maps.Marker({
      position: landmark.position,
      map: map,
      title: landmark.title,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${landmark.title}</h3><p>A must-visit place in Chicago!</p>`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}

window.initMap = initMap;
