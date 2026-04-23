const contenedor = document.querySelector("#contenedor-personajes");
const loading = document.querySelector("#mensaje-carga");
const errorDiv = document.querySelector("#mensaje-error");

const traerPersonajes = async () => {
  loading.style.display = "block";
  errorDiv.style.display = "none";

  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");

    if (!res.ok) throw new Error("No se pudo conectar con el servidor.");

    const data = await res.json();

    renderizar(data.results);
  } catch (err) {
    errorDiv.style.display = "block";
    errorDiv.innerText = `Error: ${err.message}`;
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

traerPersonajes();
