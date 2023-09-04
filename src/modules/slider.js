export const slider = () => {
  const portfolioContent = document.querySelector(".portfolio-content");
  const slide = document.querySelectorAll(".portfolio-item");
  const dots = document.querySelectorAll(".dot");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let count = 0;

  const prevBtn = () => {
    slide[count].classList.remove("portfolio-item-active");
    dots[count].classList.remove("dot-active");

    count++;
    if (count > slide.length - 1) {
      count = 0;
    }

    slide[count].classList.add("portfolio-item-active");
    dots[count].classList.add("dot-active");
  };

  const leftBtn = () => {
    slide[count].classList.remove("portfolio-item-active");
    dots[count].classList.remove("dot-active");

    count--;
    if (count < 0) {
      count = slide.length - 1;
    }

    slide[count].classList.add("portfolio-item-active");
    dots[count].classList.add("dot-active");
  };

  // const autoSlide = () => {
  let interval = setInterval(prevBtn, 2000);
  // }
  // autoSlide()

  portfolioContent.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target == next) {
      prevBtn();
    }
    if (e.target == prev) {
      // count--
      leftBtn();
    }
    if (e.target.classList.contains("dot")) {
      dots.forEach((item, index) => {
        if (e.target == item) {
          count = index;
          slide[count].classList.add("portfolio-item-active");
          dots[count].classList.add("dot-active");
        } else {
          slide[index].classList.remove("portfolio-item-active");
          dots[index].classList.remove("dot-active");
        }
      });
    }
  });

  portfolioContent.addEventListener(
    "mouseenter",
    (e) => {
      if (
        e.target.classList.contains("dot") ||
        e.target.classList.contains("prev") ||
        e.target.classList.contains("next")
      ) {
        clearInterval(interval);
      }
    },
    true
  );

  portfolioContent.addEventListener(
    "mouseleave",
    (e) => {
      if (
        e.target.classList.contains("dot") ||
        e.target.classList.contains("prev") ||
        e.target.classList.contains("next")
      ) {
        interval = setInterval(prevBtn, 2000);
      }
    },
    true
  );
};
