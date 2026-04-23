const contenedor = document.querySelector("#contenedor-personajes");
const loading = document.querySelector("#mensaje-carga");
const errorDiv = document.querySelector("#mensaje-error");
const buscador = document.querySelector("#buscador");
const info = document.querySelector("#mensaje-info");

const traerPersonajes = async (nombre = "") => {
  loading.style.display = "block";
  if (errorDiv) errorDiv.style.display = "none";

  try {
    const url = `https://rickandmortyapi.com/api/character/${nombre ? `?name=${nombre}` : ""}`;
    const res = await fetch(url);

    if (res.status === 404) {
      contenedor.innerHTML = "<p>No se encontraron resultados.</p>";
      return;
    }

    if (!res.ok) throw new Error("Error en la conexión");

    const data = await res.json();
    renderizar(data.results);
  } catch (err) {
    if (errorDiv) {
      errorDiv.style.display = "block";
      errorDiv.innerText = `⚠️ Error: ${err.message}`;
    }
  } finally {
    loading.style.display = "none";
  }
};

const renderizar = (lista) => {
  contenedor.innerHTML = lista
    .map(
      (p) => `
        <div class="card">
            <img src="${p.image}" alt="${p.name}">
            <div class="info">
                <h3>${p.name}</h3>
                <p class="status ${p.status === "Alive" ? "vivo" : "muerto"}">
                    ● ${p.status} - ${p.species}
                </p>
                <p><small>Origen: ${p.origin.name}</small></p>
            </div>
        </div>
    `,
    )
    .join("");
};

buscador.addEventListener("input", (e) => {
  const valor = e.target.value.trim();

  if (valor.length > 0 && valor.length < 3) {
    info.innerText = `Faltan ${3 - valor.length} letras...`;
    info.style.color = "orange";
    return;
  }

  info.innerText =
    valor.length >= 3
      ? `Buscando: ${valor}`
      : "Ingresá 3 caracteres para buscar.";
  info.style.color = "gray";

  if (valor.length === 0 || valor.length >= 3) {
    traerPersonajes(valor);
  }
});

traerPersonajes();
