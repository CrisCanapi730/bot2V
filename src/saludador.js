function saludar(nombre, sexo, edad, hora, idioma) {
    let saludo = "";
    let mensajes = {
      es: {
        masculine: {
          old: "Buenos dias señor ",
          young: "Buenos dias joven "
        },
        feminine: {
          old: "Buenos dias señora ",
          young: "Buenos dias señorita "
        },
        neutral: "Buenos dias "
      },
      en: {
        masculine: {
          old: "Good morning sir ",
          young: "Good morning young "
        },
        feminine: {
          old: "Good morning madam ",
          young: "Good morning miss "
        },
        neutral: "Good morning "
      }
    };
  
    if (hora >= 0 && hora < 12) {
      if (sexo === "masculino" && edad > 30) {
        saludo = mensajes[idioma].masculine.old + nombre;
      } else if (sexo === "masculino" && edad <= 30) {
        saludo = mensajes[idioma].masculine.young + nombre;
      } else if (sexo === "femenino" && edad > 30) {
        saludo = mensajes[idioma].feminine.old + nombre;
      } else if (sexo === "femenino" && edad <= 30) {
        saludo = mensajes[idioma].feminine.young + nombre;
      } else {
        saludo = mensajes[idioma].neutral + nombre;
      }
    } else if (hora >= 12 && hora < 18) {
      // Afternoon
      if (sexo === "masculino" && edad > 30) {
        saludo = idioma === 'es' ? 'Buenas tardes señor ' : 'Good afternoon sir ' + nombre;
      } else if (sexo === "masculino" && edad <= 30) {
        saludo = idioma === 'es' ? 'Buenas tardes joven ' : 'Good afternoon young ' + nombre;
      } else if (sexo === "femenino" && edad > 30) {
        saludo = idioma === 'es' ? 'Buenas tardes señora ' : 'Good afternoon madam ' + nombre;
      } else if (sexo === "femenino" && edad <= 30) {
        saludo = idioma === 'es' ? 'Buenas tardes señorita ' : 'Good afternoon miss ' + nombre;
      } else {
        saludo = idioma === 'es' ? 'Buenas tardes ': 'Good afternoon '+ nombre;
      }
    } else {
      if (sexo === "masculino" && edad > 30) {
        saludo = idioma === 'es' ? 'Buenas noches señor ': 'Good evening sir '+ nombre;
      } else if (sexo === "masculino" && edad <= 30) {
        saludo = idioma === 'es' ? 'Buenas noches joven ': 'Good evening young '+ nombre;
      } else if (sexo === "femenino" && edad > 30) {
        saludo = idioma === 'es' ? 'Buenas noches señora ': 'Good evening madam '+ nombre;
      } else if (sexo === "femenino" && edad <= 30) {
        saludo = idioma === 'es' ? 'Buenas noches señorita ': 'Good evening miss '+ nombre;
      } else {
        saludo = idioma === 'es' ? 'Buenas noches ': 'Good evening '+ nombre;
      }
    }
  
    return saludo;
  }
  

export default saludar;