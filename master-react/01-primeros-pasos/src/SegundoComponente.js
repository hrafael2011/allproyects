
// rafc es un snipe o atajo para que genere ese estructura que se encuentra mas abajo

import React from 'react'


//const libros = ['Harry Potter', 'Juego de tronos', 'Clean Code'];
const libros = [];

const SegundoComponente = () => {
  return (
    <div className='segundo-componente'>

   <h1>Libros</h1>

   { libros.length >=1 ? // esto representa el IF
    (<ul>
            { // con las llaves puedo utilizar la logica de javascript
                libros.map((libro, indice) =>{ // map es mas eficiente que forech en react, tambien hay que otorgarle la key porque react es requerido
                    return <li key={indice}>{libro}</li>
                })
            }
       </ul>)
       :(<p>No hay libros</p>) //Esto representa el else
       }
       
    </div>
  )
}

export default SegundoComponente
