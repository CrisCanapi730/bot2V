import saludar from "./saludador";

const nombreIn = document.querySelector("#nombre");
const formSaludo = document.querySelector("#saludo-form");
const saludoDiv = document.querySelector("#saludo-div");
const generoSelec = document.querySelector("#genero");
const edadIn = document.querySelector("#edad");


const esButton = document.createElement("button");
esButton.textContent = "es";
document.body.appendChild(esButton);

const enButton = document.createElement("button");
enButton.textContent = "en";
document.body.appendChild(enButton);

formSaludo.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreIn.value;
  const sexo = generoSelec.value;
  const edad = edadIn.value;
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

  saludoDiv.innerHTML =
    "<p>" + saludar(nombre, sexo, edad, horaActual, selectedLanguage) + "</p>";
});


let selectedLanguage = "es";

esButton.addEventListener("click", () => {
  selectedLanguage = "es";
  updateContent(selectedLanguage);
});

enButton.addEventListener("click", () => {
  selectedLanguage = "en";
  updateContent(selectedLanguage);
});


function updateContent() {
  // Update the text of the HTML elements on your page
  document.querySelector("h1").textContent = selectedLanguage === 'es' ? 'Bot Saludador' : 'Greetings Bot';
  document.querySelector("label[for='nombre']").textContent = selectedLanguage === 'es' ? 'Nombre: ' : 'Name: ';
  document.querySelector("label[for='edad']").textContent = selectedLanguage === 'es' ? 'Edad: ' : 'Age: ';
  document.querySelector("label[for='genero']").textContent = selectedLanguage === 'es' ? 'Género: ' : 'Gender: ';
  document.querySelector("#genero option[value='']").textContent = selectedLanguage === 'es' ? 'Selecciona tu género' : 'Select your gender';
  document.querySelector("#genero option[value='masculino']").textContent = selectedLanguage === 'es' ? 'Masculino' : 'Male';
  document.querySelector("#genero option[value='femenino']").textContent = selectedLanguage === 'es' ? 'Femenino' : 'Female';
  document.querySelector("button[type='submit']").textContent = selectedLanguage === 'es' ? 'Saludar' : 'Greet';
}


