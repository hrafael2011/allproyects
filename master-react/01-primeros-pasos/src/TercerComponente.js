import React from 'react'
import PropTypes from 'prop-types' // se utiliza para validar los props


 //// DE ESTA MANERA SE TRABAJA CON LOS PROPS
/*
const TercerComponente = (props) => {
  return (
    <div>
        <hr/>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>Nombre: {props.nombre}</li>
            <li>Apellido: {props.apellido}</li>
        </ul>
    </div>
  )
}

export default TercerComponente

*/
// ESTA MANERA A CONTINUACIN SE LLAMA DESTRUCTURACION  Y ES UNA FORMA MAS SENCILLA DE TRABAJAR

const TercerComponente = ({nombre, apellido, info_med}) => {
    return (
      <div>
          <hr/>
          <h1>Comunicacion entre componentes</h1>
          <ul>
              <li>Nombre: {nombre}</li>
              <li>Apellido: {apellido}</li>
              <li>Estatura: {info_med.estatura}</li>
          </ul>
      </div>
    )
  }

  //validacion de los PROPS , para mas informacion buscar la documentacion en google
  TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string,
    info_med: PropTypes.object
  }

  export default TercerComponente