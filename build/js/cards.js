const corazones = document.querySelectorAll(".bx-heart");
const productosAll = document.querySelector("#productosMain");
let shareData = {
  title: "",
  url: "",
};
//compartir producto
productosAll.addEventListener("click", shareItems);

function shareItems(e) {
  if (e.target.classList.contains("card__compartir")) {
    const cardProducto =
      e.target.parentElement.parentElement.parentElement.parentElement;
    propiedadesProductoShare(cardProducto);
  }
}

function propiedadesProductoShare(e) {
  const propiedadesProducto = {
    nombre: e.querySelector("h3").textContent,
    precio: e.querySelector(".card__precio").textContent,
    idShare: parseInt(
      e.querySelector(".card__compartir").getAttribute("data-id")
    ),
  };
  shareData.title = `${propiedadesProducto.nombre} 👾. Precio: 💵 ${propiedadesProducto.precio} `;

  switch (propiedadesProducto.idShare) {
    case 1:
      shareData.url = `https://m1000hector.netlify.app/pages/casaDelArbol.html`;
      break;
    case 2:
      shareData.url = "https://m1000hector.netlify.app/pages/restaurante.html";
      break;
    case 3:
      shareData.url = `https://m1000hector.netlify.app/pages/castilloEnRuinas.html`;
      break;
    case 4:
      shareData.url = "https://m1000hector.netlify.app/pages/casaDeMinecraft.html";
      break;
    case 5:
      shareData.url = `https://m1000hector.netlify.app/pages/voxelCity.html`;
      break;
    case 6:
      shareData.url = `https://m1000hector.netlify.app/pages/voxelDormitorio.html`;
      break;
  }
  try {
    navigator.share(shareData);
    alert("Se compartio con exito el producto");
  } catch (err) {
    alert(`Acción abortada`);
  }
}

corazon();
function corazon() {
  for (let i = 0; i < corazones.length; i++) {
    corazones[i].addEventListener("click", () => {
      if (corazones[i].classList.contains("bx-heart")) {
        corazones[i].classList.remove("bx-heart");
        corazones[i].classList.add("bxs-heart");
      } else {
        corazones[i].classList.remove("bxs-heart");
        corazones[i].classList.add("bx-heart");
      }
    });
  }
}
