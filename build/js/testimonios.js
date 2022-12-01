const btnVerMas = document.querySelector(".testimonios__vermas");
const overflow = document.querySelector(".testimonios__overflow");
const gradiente = document.querySelector(".testimonios__gradient");

btnVerMas.addEventListener("click", (e) => {
  e.preventDefault();
  if (btnVerMas.innerHTML === "Ver mas") {
    e.target.innerHTML = "Ver menos";
    e.target.style.bottom = "0";
    overflow.classList.add("testimonios__overflow--active");
    gradiente.classList.add("testimonios__gradient--active");
  } else {
    e.target.innerHTML = "Ver mas";
    e.target.style.bottom = "10rem";
    overflow.classList.remove("testimonios__overflow--active");
    gradiente.classList.remove("testimonios__gradient--active");
  }
});
