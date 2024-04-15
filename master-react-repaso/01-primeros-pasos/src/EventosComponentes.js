import React from 'react'


const HazDadoClick = (e, nombre) =>{
    alert('Haz Dado click ' + nombre);
}

const HazdadoDobleClick = e =>{
  alert('Haz Dado Doble click')
}

const hazEntrado = (e) =>{
  alert('Haz Entrado');
}

const hazSalido = (e) =>{
  alert('Haz Salido');

}

const estasDentro = e =>{
  console.log('estas Dentro')
}

const estasFuera = e =>{
 console.log('estas Fuera')
}

const EventosComponentes = () => {
  return (
    <div>
        
      
        <h1>Evento Click</h1>
        <button onClick={e=>HazDadoClick(e, 'Hendrick')}>
            Dar Click
        </button>
   <p>
    <button onDoubleClick={HazdadoDobleClick}>
      Double Click
    </button>

   </p>

   <p>

      <div id='caja' 
      onMouseEnter={hazEntrado}
      onMouseLeave={hazSalido}
      
      >
        pasa por encima
      </div>

    </p>


    <p>
      <input type='text' 
      onFocus={estasDentro} 
      onBlur={estasFuera}
      placeholder='Itroduce tu nombre'>

      </input>
    </p>

    </div>
  )
}

export default EventosComponentes
