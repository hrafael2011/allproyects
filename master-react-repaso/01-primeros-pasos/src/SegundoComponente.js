import React from 'react'

const SegundoComponente = () => {

    //let libros = ['Harry Potter', 'El senor de los anillos', 'Juego de tronos']
    let libros = []


  return (
    <div>
        ------------------------------------

        <p>
            <h2>Esto es un listado de libros</h2>



        { libros.length >= 1?

           (<ul>
           {
            
            libros.map((libro, indice) =>{
               return <li key={indice}> {libro}</li>
           })}
           </ul>)
           :(<p>No hay libros</p>)
            
           

        }
           
        </p>
    </div>
  )
}

export default SegundoComponente
