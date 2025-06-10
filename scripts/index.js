const cars = document.querySelectorAll(".car");

cars.forEach((car) => {
  car.addEventListener("click", () => {
    cars.forEach((c) => c.classList.remove("active"));
    car.classList.add('active')
  });
});
