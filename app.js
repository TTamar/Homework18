//1

// let getHours = document.getElementById(hours)

// function getHour(getHours) {
//    do {
//     getHours.push (i++)
//    } while (i<=24);
// }

// getHours = getHour()
// console.log(getHours);

//2.

const autoSlider = document.querySelector("#auto-slide");
const slideItems = document.querySelectorAll(".slider-item");
const prevBtn = document.querySelector("#prev-slide-btn");
const nextBtn = document.querySelector("#next-slide-btn");
const stopautoSlider = document.querySelector("#stop-auto-slide");
let activeIndex = 0;

initSlider();
function initSlider() {
  //   autoSlider.addEventListener("click", setInterval(showNextSlide, 3000));
  prevBtn.addEventListener("click", showPrevSlide);
  nextBtn.addEventListener("click", showNextSlide);

  //   stopautoSlider.addEventListener("click", clearInterval(setInterval(showNextSlide, 3000)));
  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight") {
      showNextSlide();
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowLeft") {
      showPrevSlide();
    }
  });
}

function renderSliders() {
  slideItems.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function showPrevSlide() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = slideItems.length - 1;
  }
  renderSliders();
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if (activeIndex > slideItems.length - 1) {
    activeIndex = 0;
  }
  renderSliders();
}
const firstCapture = document.querySelector("#firstcap");
const secondCapture = document.querySelector("#secondcap");
const thirdCapture = document.querySelector("#thirdcap");

firstCapture.addEventListener("click", () => {
  return slideItems[0];
});
secondCapture.addEventListener("click", slideItems[1]);
thirdCapture.addEventListener("click", slideItems[2]);
//3.
