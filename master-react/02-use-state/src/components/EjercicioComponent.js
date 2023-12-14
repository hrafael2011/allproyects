import React, {useState} from 'react'
import PropTypes from "prop-types"

    /*
  1. Crear un compponente 
  2. Recibir una prop con el año Actual
  3. Usar funciones para sacar el año
  4. Usar estados y eventos para tener dos botones.
      - Pasar al proximo año
      - Ir al año anterior
      - Mostrar en todo momento el año por pantalla

  5. Validar que el año sea un numero y que sea requerido (prop)
  6. Cambiar el año mediante un input de texto y que se cambie 
  dinamicamente.
*/

const EjercicioComponent = ({year}) => {
    const [yearNow, setYearNow] = useState(year);

    const siguiente = e => {
        setYearNow(yearNow+1)
    }

    const anterior = e =>{
        let operacion_year = yearNow-1;
        setYearNow(operacion_year);
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);
        if(Number.isInteger(dato)){
            setYearNow(dato);
        }else{
            setYearNow(year);
        }
        
    }

 return (
    <div>
        <h2>Ejercicios con Eventso y UseState</h2>
        <strong className='label label-green'>
            {yearNow}

        </strong>
        <p>
            <button onClick={anterior}>Anteiror</button>
            &nbsp; 
            <button onClick={siguiente}>Siguinte</button>
        </p>

        <p>
            <input onChange={cambiarYear} type='text' placeholder='Cambiar Year'/>
        </p>
    </div>
  )
}



EjercicioComponent.prototype = {
    year: PropTypes.number.isRequired
}

export default EjercicioComponent
