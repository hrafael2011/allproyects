import React from 'react'
import PropTypes from "prop-types"

const TercerComponente = ({nombre, apellido,medica}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{medica.estatura}</li>
            </ul>
      

    </div>
  )
}

TercerComponente.prototype = {
    //para mas informacion de validacion de props busco en google validacion de props
    nombre: PropTypes.string.isRequired,
    apellido:PropTypes.string,
    medica: PropTypes.object
}

export default TercerComponente
