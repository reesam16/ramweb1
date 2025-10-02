// carousel

const carouselWrapper = document.getElementById("carouselWrapper");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carouselItems = document.querySelectorAll(".c_item");
const navDots = document.querySelectorAll(".dot");
const autoplayButton = document.getElementById("autoplayButton"); // Reference to the new button

let currentIndex = 0;
const totalItems = carouselItems.length;
let autoPlayInterval; // Variable to hold the setInterval ID
let isAutoPlaying = false; // State to track if auto-play is active
const totalRealSlides = totalItems - 1;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselWrapper.style.transform = `translateX(${offset}%)`;

  navDots.forEach((dot) => dot.classList.remove("active"));
  //   navDots[currentIndex].classList.add("active");
  if (currentIndex === totalRealSlides) {
    // navDots.forEach((dot) => dot.classList.remove("active"));
    navDots[0].classList.add("active");
  } else {
    // navDots.forEach((dot) => dot.classList.remove("active"));
    navDots[currentIndex].classList.add("active");
  }
}


// nextSlide arrow function

const nextSlide = () => {
  if (currentIndex === totalRealSlides - 1) {
    currentIndex = totalRealSlides;
    updateCarousel();

    setTimeout(() => {
      carouselWrapper.style.transition = "none";
      currentIndex = 0;
      updateCarousel();

      setTimeout(() => {
        carouselWrapper.style.transition = "transform 0.5s ease-in-out";
      }, 20);
    }, 500);
  } else {
    currentIndex++;
    updateCarousel();
  }
};



function prevSlide() {
  //   currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  if (currentIndex === 0) {
    carouselWrapper.style.transition = "none";
    currentIndex = totalRealSlides - 1;
    updateCarousel();
    setTimeout(() => {
      carouselWrapper.style.transition = "transform 0.5s ease-in-out";
    }, 20);
  } else {
    currentIndex--;
    updateCarousel();
  }
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function startAutoPlay() {
  if (!isAutoPlaying) {
    // Prevent multiple intervals from starting
    // Set an interval to call nextSlide() every 3000 milliseconds (3 seconds)
    autoPlayInterval = setInterval(nextSlide, 3000);
    autoplayButton.textContent = "Stop Auto-Play"; // Change button text
    autoplayButton.style.backgroundColor = "#f44336"; // Change button color to red
    isAutoPlaying = true;
  }
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval); // Clear the interval to stop auto-play
  autoplayButton.textContent = "Start Auto-Play"; // Change button text back
  autoplayButton.style.backgroundColor = "#4CAF50"; // Change button color back to green
  isAutoPlaying = false;
}

function toggleAutoPlay() {
  if (isAutoPlaying) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
}

autoplayButton.addEventListener("click", toggleAutoPlay);

navDots.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    // Stop auto-play if a dot is clicked, so manual navigation takes precedence
    stopAutoPlay();
    const clickedIndex = parseInt(event.target.dataset.index);
    if (!isNaN(clickedIndex)) {
      currentIndex = clickedIndex;
      updateCarousel();
    }
  });
});

setTimeout(updateCarousel, 50);
