import Swiper, {Autoplay} from 'swiper';
export const swiper = () => {
  const swiper = new Swiper('#ferst-swiper', {
    slidesPerView: 1,
    spaceBetween: 100,

    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
}