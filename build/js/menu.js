const menuIcon = document.querySelector(".menu");
const menuHamburguer = document.querySelector(".menu i");
const menuItems = document.querySelector(".navegacion__items");
const botones = document.querySelector(".navegacion__li--btns");
const mql = matchMedia("(min-width: 1024px)");
const interacciones = document.querySelector(".navegacion__interacciones");
const cart = document.querySelector('#carrito');

allEvents();
function allEvents() {
  menuIcon.addEventListener("click", menu);
  addEventListener("DOMContentLoaded", () => applyMatch(mql));
}

function menu() {
  if (menuHamburguer.classList.contains("bx-cart")) {
    menuItems.classList.add("navegacion__items--active");
    menuHamburguer.classList.remove("bx-cart");
    menuHamburguer.classList.add("bx-x");
  } else {
    menuItems.classList.remove("navegacion__items--active");
    menuHamburguer.classList.remove("bx-x");
    menuHamburguer.classList.add("bx-cart");
  }
}

const applyMatch = (mql) => {
  if (mql.matches) {
    interacciones.appendChild(botones);
  }else{
    cart.remove();
  }
};
