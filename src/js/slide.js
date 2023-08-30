"use strict";

// sliders
const slide = document.querySelectorAll(".slide");
const imgSlider = document.querySelector(".img-slider");
const imgSlides = Array.from(document.querySelectorAll(".slide-content"));
const reverseImgSlides = imgSlides.slice().reverse();
const cardScroller = document.querySelector(".card-scroller");
const cards = Array.from(document.querySelectorAll(".card"));
const reverseCards = cards.slice().reverse();
const helpCards = Array.from(document.querySelectorAll(".help-card"));
const reverseHelpCards = helpCards.slice().reverse();
const helpCardScroller = document.querySelector(".help-card-scroll");
const featuresSlider = document.querySelector(".features-slider");
const featuresCards = Array.from(document.querySelectorAll(".features-card"));
const reverseFeaturesCards = featuresCards.slice().reverse();
const soundProductSlider = document.querySelector(".sound-product-slider");
const soundProducts = Array.from(
  document.querySelectorAll(".sound-product-card")
);
const reverseSoundProducts = soundProducts.slice().reverse();
const appleExpSlider = document.querySelector(".apple-experience-slider");

// btns
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const imgSliderRightBtn = document.querySelector(".img-slider-btn-right");
const imgSliderLeftBtn = document.querySelector(".img-slider-btn-left");
const cardScrollLeftBtn = document.querySelector(".card-slider-btn-left");
const cardScrollRightBtn = document.querySelector(".card-slider-btn-right");
const hCardBtnLeft = document.querySelector(".help-card-slider-btn-left");
const hCardBtnRight = document.querySelector(".help-card-slider-btn-right");
const featuresRightBtn = document.querySelector(
  ".features-card-slider-btn-right"
);
const featuresleftBtn = document.querySelector(
  ".features-card-slider-btn-left"
);
const soundProductLeftBtn = document.querySelector(".sound-product-btn-left");
const soundProductRightBtn = document.querySelector(".sound-product-btn-right");
const appleExpSliderLeftBtn = document.querySelector(
  ".apple-exp-card-btn-left"
);
const appleExpSliderRightBtn = document.querySelector(
  ".apple-exp-card-btn-right"
);
const appleExpCards = Array.from(document.querySelectorAll(".apple-exp-card"));
const revappleExpCards = appleExpCards.slice().reverse();

let currentSlide = 0;
let maxLength = slide.length - 1;
let value = 0;

const scrollInto = function (el) {
  el.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
  });
};

const scrollSliderNext = function (arr) {
  arr.every(function (sl) {
    const rect = sl.getBoundingClientRect();

    if (rect.x > window.innerWidth) {
      scrollInto(sl);
      return false;
    } else {
      scrollInto(sl);
    }
    return true;
  });
};

const scrollSliderPrev = function (arr) {
  console.log("card");
  arr.every(function (sl) {
    const rect = sl.getBoundingClientRect();
    console.log(rect.x);
    if (rect.x < 0) {
      scrollInto(sl);
      return false;
    }
    return true;
  });
};

const toggleBtn = function (el, ...arr) {
  console.log(el);
  el.addEventListener("mouseenter", function () {
    arr.forEach((el) => el.classList.toggle("hidden"));
  });

  el.addEventListener("mouseleave", function () {
    arr.forEach((el) => el.classList.toggle("hidden"));
  });
};

const makeSticky = function (el) {
  el.addEventListener("scroll", function () {
    imgSliderRightBtn.style.transform = `translate(${this.scrollLeft}px,-25px)`;
    imgSliderLeftBtn.style.transform = `translate(${this.scrollLeft}px, -25px)`;
  });
};

const goToSlide = function (slideNo) {
  slide.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - slideNo)}%)`;
  });
};

goToSlide(0);

const nextSlide = function () {
  if (currentSlide == maxLength) currentSlide = 0;
  currentSlide++;
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide == 0) currentSlide = maxLength;

  currentSlide--;
  goToSlide(currentSlide);
};

// slider
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

// make slider slider button sticky on product slider
makeSticky(imgSlider);

// make  slider button toggle
toggleBtn(imgSlider, imgSliderLeftBtn, imgSliderRightBtn);
toggleBtn(cardScroller, cardScrollLeftBtn, cardScrollRightBtn);
toggleBtn(helpCardScroller, hCardBtnLeft, hCardBtnRight);
toggleBtn(featuresSlider, featuresleftBtn, featuresRightBtn);
toggleBtn(soundProductSlider, soundProductLeftBtn, soundProductRightBtn);
toggleBtn(appleExpSlider, appleExpSliderLeftBtn, appleExpSliderRightBtn);

// img slider
imgSliderRightBtn.addEventListener("click", () => scrollSliderNext(imgSlides));
imgSliderLeftBtn.addEventListener("click", () =>
  scrollSliderPrev(reverseImgSlides)
);

// card slider
cardScrollRightBtn.addEventListener("click", () => scrollSliderNext(cards));
cardScrollLeftBtn.addEventListener("click", () =>
  scrollSliderPrev(reverseCards)
);

// help card slider
hCardBtnRight.addEventListener("click", () => scrollSliderNext(helpCards));
hCardBtnLeft.addEventListener("click", () =>
  scrollSliderPrev(reverseHelpCards)
);

// features card slide

featuresRightBtn.addEventListener("click", () =>
  scrollSliderNext(featuresCards)
);
featuresleftBtn.addEventListener("click", () =>
  scrollSliderPrev(reverseFeaturesCards)
);

// sound products slider
soundProductLeftBtn.addEventListener("click", () =>
  scrollSliderPrev(reverseSoundProducts)
);
soundProductRightBtn.addEventListener("click", () =>
  scrollSliderNext(soundProducts)
);

// apple experience slider
appleExpSliderRightBtn.addEventListener("click", () =>
  scrollSliderNext(appleExpCards)
);
appleExpSliderLeftBtn.addEventListener("click", () =>
  scrollSliderPrev(revappleExpCards)
);
