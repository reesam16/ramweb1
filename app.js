const hamburger = document.querySelector(".hamburger");
const buttons = document.querySelector(".buttons");
const link = document.querySelectorAll(".link");
const nav = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  buttons.classList.toggle("active");
});

link.forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    buttons.classList.remove("active");
  });
});

// img gallery

const images = document.querySelectorAll(".container-img img"); // Selects all images in the gallery
const wrapper = document.getElementById("wrapper"); // The full-screen wrapper
const fullImg = document.getElementById("fullImg"); // The full-screen image

images.forEach((image) => {
  image.addEventListener("click", () => {
    openFullImg(image.src);
  });
});

wrapper.addEventListener("click", () => {
  closeFullImg();
});

function openFullImg(pic) {
  wrapper.style.display = "flex";
  nav.style.display = "none";
  fullImg.src = pic;
}

function closeFullImg() {
  wrapper.style.display = "none";
  nav.style.display = "flex";
}
