
function saludar(nombre, sexo, edad, hora){
    if(hora >= 0 && hora<12)
    {
        if(sexo === 'masculino' && edad>30)
        {
            return "Buenos dias señor " + nombre;
        }
        else if(sexo === 'masculino' && edad<=30)
        {
            return "Buenos dias joven " + nombre;
        }
        else if(sexo === 'femenino' && edad>30)
        {
            return "Buenos dias señora " + nombre;
        }
        else if(sexo === 'femenino' && edad<=30)
        {
            return "Buenos dias señorita " + nombre;
        }
        else
        {
            return "Buenos dias " + nombre;
        }
    }
    else
    {
        if(sexo === 'masculino' && edad>30)
        {
            return "Buenos tardes señor " + nombre;
        }
        else if(sexo === 'masculino' && edad<=30)
        {
            return "Buenos tardes joven " + nombre;
        }
        else if(sexo === 'femenino' && edad>30)
        {
            return "Buenos tardes señora " + nombre;
        }
        else if(sexo === 'femenino' && edad<=30)
        {
            return "Buenos tardes señorita " + nombre;
        }
        else
        {
            return "Buenos tardes " + nombre;
        }
    }
    
        
}

export default saludar;