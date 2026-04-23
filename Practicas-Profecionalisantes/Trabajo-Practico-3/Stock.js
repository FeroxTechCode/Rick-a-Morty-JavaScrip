const productos = [
  {
    id: 1,
    nombre: "Notebook Gamer",
    precio: 600000,
    categoria: "Electronica",
    enStock: true,
  },
  {
    id: 2,
    nombre: "Cafetera Express",
    precio: 45000,
    categoria: "Hogar",
    enStock: true,
  },
  {
    id: 3,
    nombre: "Pelota de Fútbol",
    precio: 12000,
    categoria: "Deportes",
    enStock: false,
  },
  {
    id: 4,
    nombre: "Auriculares Bluetooth",
    precio: 15000,
    categoria: "Electronica",
    enStock: true,
  },
  {
    id: 5,
    nombre: "Silla de Escritorio",
    precio: 85000,
    categoria: "Hogar",
    enStock: true,
  },
  {
    id: 6,
    nombre: "Mesa de Ping Pong",
    precio: 120000,
    categoria: "Deportes",
    enStock: false,
  },
  {
    id: 7,
    nombre: "Monitor 24'",
    precio: 150000,
    categoria: "Electronica",
    enStock: true,
  },
  {
    id: 8,
    nombre: "Juego de Ollas",
    precio: 70000,
    categoria: "Hogar",
    enStock: true,
  },
];

const contenedor = document.querySelector("#productos-lista");
const inputBusqueda = document.querySelector("#busqueda");
const selectCat = document.querySelector("#categoria");
const rangePrecio = document.querySelector("#rangoPrecio");
const labelPrecio = document.querySelector("#valor-precio");
const checkStock = document.querySelector("#checkStock");

const renderizarProductos = (lista) => {
  contenedor.innerHTML = lista
    .map(
      (p) => `
        <div class="card">
            <h3>${p.nombre}</h3>
            <p class="precio">$${p.precio}</p>
            <p>Categoría: ${p.categoria}</p>
            ${!p.enStock ? '<p class="sin-stock">Sin Stock</p>' : '<p style="color:green">Disponible</p>'}
        </div>
    `,
    )
    .join("");
};

const filtrar = () => {
  const texto = inputBusqueda.value.toLowerCase();
  const catSeleccionada = selectCat.value;
  const precioMax = parseInt(rangePrecio.value);
  const soloStock = checkStock.checked;

  labelPrecio.innerText = precioMax;

  const filtrados = productos
    .filter((p) => p.nombre.toLowerCase().includes(texto))
    .filter(
      (p) => catSeleccionada === "todos" || p.categoria === catSeleccionada,
    )
    .filter((p) => p.precio <= precioMax)
    .filter((p) => !soloStock || p.enStock);

  renderizarProductos(filtrados);
};

inputBusqueda.addEventListener("input", filtrar);
selectCat.addEventListener("change", filtrar);
rangePrecio.addEventListener("input", filtrar);
checkStock.addEventListener("change", filtrar);

renderizarProductos(productos);
