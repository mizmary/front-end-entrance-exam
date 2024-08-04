
const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  slider.addEventListener("input", function () {
    this.style.setProperty("--slider-value", this.value);
  });
});