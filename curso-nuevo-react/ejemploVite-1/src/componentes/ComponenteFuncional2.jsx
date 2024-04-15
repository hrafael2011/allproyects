import React from 'react'
import pais from './pais'

const ComponenteFuncional2 = ({prop1,nombre, apellido, pais}) => {
  return (
    <div>
      <h3>Contenido desde el componete 2</h3>
      <ul>
        <li>Prop1: {prop1}</li>
        <li>Nombre: {nombre}</li>
        <li>Apellido: {apellido}</li>
        <ul>
          {pais.map((pais)=>(
            <li key={pais.nombre}>{pais.nombre}</li>

          ))}
        </ul>
      </ul>
      <table>
        {pais.map((pais)=>(
         <pais key={pais.nombre} pais={pais}/>
           ))}
      </table>
    </div>
  )
}

export default ComponenteFuncional2
