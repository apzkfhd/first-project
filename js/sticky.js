const backTitle = document.querySelector(".service-section .back-title");

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 4780) {
    backTitle.classList.add("sticky");
  } else if (7670 > screenY) {
    backTitle.classList.remove("sticky");
  }
});
