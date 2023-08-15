import saludar from "./saludador";

const nombreIn = document.querySelector("#nombre");
const formSaludo = document.querySelector("#saludo-form");
const saludoDiv = document.querySelector("#saludo-div");

formSaludo.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreIn.value;

  saludoDiv.innerHTML = "<p>" + saludar(nombre) + "</p>";
})