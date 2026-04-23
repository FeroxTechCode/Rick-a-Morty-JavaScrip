const form = document.querySelector("#form-tarea");
const input = document.querySelector("#input-tarea");
const lista = document.querySelector("#lista-tareas");
const contadorElem = document.querySelector("#cantidad-pendientes");

const actualizarContador = () => {
  const pendientes = document.querySelectorAll("li:not(.completada)").length;
  contadorElem.innerText = pendientes;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = input.value.trim();

  if (texto === "") {
    alert("Por favor, escribí una tarea.");
    return;
  }

  const nuevaTarea = document.createElement("li");

  nuevaTarea.innerHTML = `
        <span class="texto-tarea">${texto}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;

  nuevaTarea.querySelector(".texto-tarea").addEventListener("click", () => {
    nuevaTarea.classList.toggle("completada");
    actualizarContador();
  });

  nuevaTarea.querySelector(".btn-eliminar").addEventListener("click", () => {
    nuevaTarea.remove();
    actualizarContador();
  });

  lista.appendChild(nuevaTarea);
  input.value = "";
  actualizarContador();
});
