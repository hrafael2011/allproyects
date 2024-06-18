import React from 'react'
import {Fondo,Edad} from './../styles/estilos'

const ComponenteFuncional2 = ({person}) => {

  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
            </tr>
        </thead>
        { person.map((per)=>(
                 
                 (per.edad > 17)&&(
                    <tr>
                    <Fondo><td key={per.id}>{per.nombre}</td></Fondo>
                    <td key={per.id}> <edad>{per.edad}</edad></td>
                    </tr>
                 )
               
            
        ))}
        </table>
     
    </div>
  )
}

export default ComponenteFuncional2
