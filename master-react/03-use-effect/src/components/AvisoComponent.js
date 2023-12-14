import React, { useEffect } from 'react'

const AvisoComponent = () => {

    useEffect(()=>{

        //Montar componente
        console.log('Se Ha montado el componente')

        //Se ha desmontado el comoponente
        return() => {

            console.log('Componente Desmontado');
        };

    },[]); // Los corchetes es para que lo haga una sola ve<

  return (
    <div>
      <h3>Hola Hendrick Que tal</h3>
      <button onClick={e=>{console.log('Bienvenido')}}>Alerta</button>
    </div>
  )
}

export default AvisoComponent
