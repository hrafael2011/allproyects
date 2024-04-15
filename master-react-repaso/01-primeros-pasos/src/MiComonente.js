import React from 'react'


// <> </> esto es un fragment
const MiComonente = () => {
    
    let nombre = 'Hendrick'
    let web = 'hendrickweb.net'

    let usuario = {
        nombre: 'Hendrick',
        web : 'hendrickWEb'
    }

  return (
    <div>
        
      <h1>Este es Mi primer componente</h1>
      <p>
        <h2>Datos de usuario</h2>
        <ul>
            <li>
                nombre: <strong>{nombre}</strong>
            </li>
            <li>
                nombre: <strong>{web}</strong>
            </li>
            <li>{usuario.nombre}</li>
            <li>{usuario.web}</li>
        </ul>
      </p>

      <h2>Esto son la librerias y frameworks mas utilizados</h2>

      <ul>
        <li>React </li>
        <li>Bue </li>
        <li>Angular </li>

      </ul>
    </div>
  )
}

export default MiComonente
