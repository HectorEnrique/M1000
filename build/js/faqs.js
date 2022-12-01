const respuesta = document.querySelectorAll(".faqs__respuesta");
const btn = document.querySelectorAll(".faqs__btn");

vermas();
function vermas() {
  for (let i = 0; i < respuesta.length; i++) {
    btn[i].addEventListener("click", (e) => {
      e.preventDefault();
      if (!respuesta[i].classList.contains("faqs__respuesta--active")) {
        respuesta[i].classList.add("faqs__respuesta--active");
        btn[i].classList.add("faqs__btn--active");
      } else {
        respuesta[i].classList.remove("faqs__respuesta--active");
        btn[i].classList.remove("faqs__btn--active");
      }
    });
  }
}
