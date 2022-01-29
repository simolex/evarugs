const swiper = new Swiper(".review__slider", {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  //   breakpoints:{}
});

const modalWindow = document.querySelector(".modal");
const modalButton = document.querySelector(".main-display__button");

modalButton.addEventListener("click", (e) => {
  modalWindow.classList.add("active");
});

modalWindow.addEventListener("click", (e) => {
  const isModal = e.target.closest(".modal__inner");
  if (!isModal) {
    modalWindow.classList.remove("active");
  }
});
