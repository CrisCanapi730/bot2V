function saludar(nombre, sexo){
    if(sexo === 'masculino')
    {
        return "Hola señor " + nombre;
    }
    else if(sexo === 'femenino')
    {
        return "Hola señora " + nombre;
    }
    else
    {
        return "Hola " + nombre;
    }
        
}

export default saludar;