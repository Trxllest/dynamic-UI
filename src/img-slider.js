import "./style.css";
import pic1 from "./assets/IMG_3575.JPG";
import pic2 from "./assets/IMG_3853.JPG";
import pic3 from "./assets/IMG_4434.JPG";
import pic4 from "./assets/IMG_4818.JPG";


/* eslint-disable no-use-before-define */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

// Global
let slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
showSlides((slideIndex = n));
}

// Function to show slides
function showSlides(n) {
let i;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
if (slides.length === 0 || dots.length === 0) {
    console.error("No slides or dots found.");
    return;
}
if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}

// Function to advance slides every 5 seconds
function advanceSlides() {
    plusSlides(1);
    setTimeout(advanceSlides, 5000);
}


// Add slider to node: Input:'class', Return -> None
export default function imgSlider(cls) {
  // eslint-disable-next-line prefer-template
  const target = document.querySelector("." + cls);

  if (target) {
    // eslint-disable-next-line no-use-before-define
    const sliderComponent = createImgSlider();
    target.appendChild(sliderComponent);
    showSlides(slideIndex);
    // Initial call to start the timeout
    advanceSlides();
  } else {
    console.error("Target element not found:", cls);
  }
}


function createImgSlider() {
  // Slider Wrapper
  const wrapper = document.createElement("div");
  wrapper.classList.add("slideWrapper");

  // Container
  const slideShowContainer = document.createElement("div");
  slideShowContainer.classList.add("slideshow-container");

  // Full width images

  // Slide #1
  const slide1 = document.createElement("div");
  slide1.classList.add("mySlides");
  slide1.classList.add("fade");

  const img1 = new Image();
  img1.src = pic1;
  img1.classList.add("slider-image");
  slide1.appendChild(img1);

  // Slide #2
  const slide2 = document.createElement("div");
  slide2.classList.add("mySlides");
  slide2.classList.add("fade");

  const img2 = new Image();
  img2.src = pic2;
  img2.classList.add("slider-image");
  slide2.appendChild(img2);

  // Slide #3
  const slide3 = document.createElement("div");
  slide3.classList.add("mySlides");
  slide3.classList.add("fade");

  const img3 = new Image();
  img3.src = pic3;
  img3.classList.add("slider-image");
  slide3.appendChild(img3);

  // Slide #4
  const slide4 = document.createElement("div");
  slide4.classList.add("mySlides");
  slide4.classList.add("fade");

  const img4 = new Image();
  img4.src = pic4;
  img4.classList.add("slider-image");
  slide4.appendChild(img4);

  slideShowContainer.appendChild(slide1);
  slideShowContainer.appendChild(slide2);
  slideShowContainer.appendChild(slide3);
  slideShowContainer.appendChild(slide4);

  // Next and Prev Btns

  const nextBtn = document.createElement("a");
  nextBtn.textContent = ">";
  nextBtn.classList.add("next");
  nextBtn.onclick = function () {
    plusSlides(1);
  };

  const prevBtn = document.createElement("a");
  prevBtn.textContent = "<";
  prevBtn.classList.add("prev");
  prevBtn.onclick = function () {
    plusSlides(-1);
  };

  slideShowContainer.appendChild(prevBtn);
  slideShowContainer.appendChild(nextBtn);

  // Insert break after container
//   const brk = document.createElement("br");
//   slideShowContainer.parentNode.insertBefore(
//     brk,
//     slideShowContainer.nextSibling
//   );

  // Dots
  const dotContainer = document.createElement("div");
  dotContainer.classList.add("dotContainer");
  const dot1 = document.createElement("span");
  dot1.classList.add("dot");
  dot1.onclick = function() { currentSlide(1); };
  const dot2 = document.createElement("span");
  dot2.classList.add("dot");
  dot2.onclick = function() { currentSlide(2); };
  const dot3 = document.createElement("span");
  dot3.classList.add("dot");
  dot3.onclick = function() { currentSlide(3); };
  const dot4 = document.createElement("span");
  dot4.classList.add("dot");
  dot4.onclick = function() { currentSlide(4); };
  dotContainer.appendChild(dot1);
  dotContainer.appendChild(dot2);
  dotContainer.appendChild(dot3);
  dotContainer.appendChild(dot4);

  wrapper.appendChild(slideShowContainer);
  wrapper.appendChild(dotContainer);

  return wrapper;
}
