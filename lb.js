const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.querySelector(".lightbox");
const lightBoxContent = document.querySelector(".lightbox-content");
const lightBoxImg = document.querySelector(".lightbox-content img");
const lightBoxPrev = document.querySelector(".lightbox-prev");
const lightBoxNext = document.querySelector(".lightbox-next");

let index = 1;

//create function

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }

  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}

for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n) {
  showLightBox((index += n));
}

function prevImage() {
  sliderImage(-1);
}

function nextImage() {
  sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

//close lightbox

function closeLightBox(e) {
  if (this === e.target) {
    lightBoxContainer.style.display = "none";
  }
}

lightBoxContainer.addEventListener("click", closeLightBox);
