function saludar(nombre, sexo, edad){
    if(sexo === 'masculino' && edad>30)
    {
        return "Hola señor " + nombre;
    }
    else if(sexo === 'masculino' && edad<=30)
    {
        return "Hola joven " + nombre;
    }
    else if(sexo === 'femenino' && edad>30)
    {
        return "Hola señora " + nombre;
    }
    else if(sexo === 'femenino' && edad<=30)
    {
        return "Hola señorita " + nombre;
    }
    else
    {
        return "Hola " + nombre;
    }
        
}

export default saludar;