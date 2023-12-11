/* eslint-disable no-use-before-define */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */


// Global
let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Add slider to node: Input:'class', Return -> None
export default function imgSlider(cls) {}

// Function to show slides
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
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

function createImgSlider() {
    
    // Container
    const slideShowContainer = document.createElement("div");
    slideShowContainer.classList.add("slideshow-container");


    // Full width images

    // Slide #1
    const slide1 = document.createElement("div");
    slide1.classList.add("mySlides");
    slide1.classList.add("fade");
    
    const img1 = new Image();
    img1.src = 
    slide1.appendChild(img1);

    // Slide #2
    const slide2 = document.createElement("div");
    slide2.classList.add("mySlides");
    slide2.classList.add("fade");

    const img2 = new Image();
    img2.src = 
    slide2.appendChild(img2);

    // Slide #3
    const slide3 = document.createElement("div");
    slide3.classList.add("mySlides");
    slide3.classList.add("fade");

    const img3 = new Image();
    img3.src = 
    slide3.appendChild(img3);

    // Slide #4
    const slide4 = document.createElement("div");
    slide4.classList.add("mySlides");
    slide4.classList.add("fade");

    const img4 = new Image();
    img4.src = 
    slide4.appendChild(img4);

    slideShowContainer.appendChild(slide1);
    slideShowContainer.appendChild(slide2);
    slideShowContainer.appendChild(slide3);
    slideShowContainer.appendChild(slide4);

    // Next and Prev Btns

    const nextBtn = document.createElement("div");
    nextBtn.classList.add("next");

    const prevBtn = document.createElement("div");
    prevBtn.classList.add("prev");

    slideShowContainer.appendChild(prevBtn);
    slideShowContainer.appendChild(nextBtn);

    // Insert break after container
    const brk = document.createElement("br");
    slideShowContainer.parentNode.insertBefore(brk, slideShowContainer.nextSibling);

    // Dots
    const dotContainer = document.createElement("div");
    const dot1 = document.createElement("span");
    dot1.classList.add("dot");
    const dot2 = document.createElement("span");
    dot2.classList.add("dot");
    const dot3 = document.createElement("span");
    dot3.classList.add("dot");
    const dot4 = document.createElement("span");
    dot4.classList.add("dot");
    dotContainer.appendChild(dot1);
    dotContainer.appendChild(dot2);
    dotContainer.appendChild(dot3);
    dotContainer.appendChild(dot4);

}