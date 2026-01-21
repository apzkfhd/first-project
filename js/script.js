const langTitle = document.querySelector(".lang");
//console.log(langTitle);
const langList = [
  {
    nation: "KR",
  },
  {
    nation: "EN",
  },
  {
    nation: "JP",
  },
];
//console.log(langList);
//
const langListElement = document.querySelector(".lang-menu");
//console.log(langListElement);
//
let langTag = "";
//
langList.forEach((lang) => {
  langTag += `<div class="lang">${lang.nation}</div>`;
});
//
//console.log(langTag);
langListElement.innerHTML = langTag;
//
//
// tal Swiper
const swTal = new Swiper(".tal-list", {
  loop: true,
  slidesPerView: 5,
  // loopAdditionalSlides: 4,
  spaceBetween: 150,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
//
const growTitle = document.querySelectorAll(".fade-up");
//
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2, // 20% 보이면 실행
  },
);
growTitle.forEach((el) => observer.observe(el));
//
// const keyframes = {
//   opacity: [0, 1],
//   translate: ["0 50px", 0],
// };
// const options = {
//   duration: 2000,
//   easing: "ease",
// };
// growTitle.animate(keyframes, options);
// //
//
// service Swiper
// const swSvice = new Swiper(".service-list", {
//   direction: "vertical",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
