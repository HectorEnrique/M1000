const productos = document.querySelector("#productos");
const carritoContenedor = document.querySelector("#carrito tbody");
const numArticulos = document.querySelector("#Narticulos");
const carrito = document.querySelector("#carrito");
const btnVaciar = document.querySelector(".carrito__vaciar");
let total = document.querySelector("#total");
let articulosCarrito = [];

allFunciones();
function allFunciones() {
  //agregar producto
  productos.addEventListener("click", agregar);

  //Eliminar producto
  carrito.addEventListener("click", eliminarProducto);

  //Vaciar cesta
  btnVaciar.addEventListener("click", () => {
    articulosCarrito = [];
    limparHTML();
    numArticulos.innerHTML = 0;
  });
}

function agregar(e) {
  e.preventDefault();
  if (e.target.classList.contains("card__anadir")) {
    const cardProducto = e.target.parentElement.parentElement.parentElement;
    tomarPropiedades(cardProducto);
    addHTML();
  }
}

function eliminarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-curso")) {
    const productoId = e.target.getAttribute("data-id");
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.dataId !== productoId
    );
    addHTML();
    numArticulos.innerHTML = articulosCarrito.length;
  }
}

function tomarPropiedades(e) {
  const propiedadesProducto = {
    imagen: e.querySelector("img").src,
    nombre: e.querySelector("h3").textContent,
    precio: e.querySelector(".card__precio").textContent,
    cantidad: 1,
    dataId: e.querySelector(".card__anadir").getAttribute("data-id"),
  };

  const existencia = articulosCarrito.some(
    (producto) => producto.dataId === propiedadesProducto.dataId
  );
  if (existencia) {
    const productos = articulosCarrito.map((producto) => {
      if (producto.dataId === propiedadesProducto.dataId) {
        producto.cantidad++;
        return producto;
      } else {
        return producto;
      }
    });
    articulosCarrito = [...productos];
  } else {
    articulosCarrito = [...articulosCarrito, propiedadesProducto];
  }
  addHTML();
}

function addHTML() {
  limparHTML();
  articulosCarrito.forEach((contenidoProducto) => {
    const { imagen, nombre, precio, cantidad, dataId } = contenidoProducto;
    const filasCarrito = document.createElement("tr");
    filasCarrito.innerHTML = `
      <td>
        <a href="pages/casaArbol.html">
          <img src="${imagen}" class="carrito__img" alt="imagen Producto" />
        </a>
      </td>
      <td>${nombre}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td><a href="#" class="borrar-curso" data-id="${dataId}">+</a></td>
`;
    carritoContenedor.appendChild(filasCarrito);
    numArticulos.innerHTML = articulosCarrito.length;
  });
}

function limparHTML() {
  while (carritoContenedor.firstChild) {
    carritoContenedor.firstChild.remove();
  }
}
