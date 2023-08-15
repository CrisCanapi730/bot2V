import saludar from "./saludador";

const nombreIn = document.querySelector("#nombre");
const formSaludo = document.querySelector("#saludo-form");
const saludoDiv = document.querySelector("#saludo-div");
const generoSelec = document.querySelector("#genero");

formSaludo.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreIn.value;
  const sexo = generoSelec.value;

  saludoDiv.innerHTML = "<p>" + saludar(nombre, sexo) + "</p>";
})