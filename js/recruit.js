const shortSwiper = new Swiper(".short-swiper", {
  slidesPerView: "auto",
  spaceBetween: 60,
});

const processSwiper = new Swiper(".process-swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  grabCursor: true,
  slidesOffsetAfter: 100,
  slidesOffsetBefore: 75,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
});
