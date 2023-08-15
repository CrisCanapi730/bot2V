import saludar from "./saludador";

const nombreIn = document.querySelector("#nombre");
const formSaludo = document.querySelector("#saludo-form");
const saludoDiv = document.querySelector("#saludo-div");
const generoSelec = document.querySelector("#genero");
const edadIn = document.querySelector("#edad");

formSaludo.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreIn.value;
  const sexo = generoSelec.value;
  const edad = edadIn.value;
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();


  saludoDiv.innerHTML = "<p>" + saludar(nombre, sexo, edad, horaActual) + "</p>";
})