import React, {useState} from 'react'
import PropTypes from "prop-types"

const EjercicioRamdonComponent = ({aleatorio}) => {

    const [cambiar, establecer] = useState(aleatorio);



     const cambiar_mum = e =>{
        establecer(cambiar+1)
    }

      return (
    <div>
        <h3>Ejercicio Numero Ramdon</h3>
        <hr/>
      <strong className='label'>
     {cambiar}
      </strong>
      <button onClick={cambiar_mum}>Cambiar</button>
    </div>
  )
}

EjercicioRamdonComponent.prototype ={
    aleatorio: PropTypes.number.isRequired
}

export default EjercicioRamdonComponent
