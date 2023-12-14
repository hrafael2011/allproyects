
import React from 'react'

const EventosComponentes = () => {
  
    const DarClick = (e, nombre) =>{ // la 'e' signicfica evento ,es el objeto que contine alunos parametros que podmos usar
        alert('Haz dado Click'+ nombre);
        console.log(e);
      
    }

    const HazDadoDobleClick = (e) =>{
        alert('Haz Dado Doble Click');
    }


    const hazEntrado = (e)=>{
      alert('Haz Entrado con exito');

    }

    const hazSalido = (e)=>{
      alert('Haz Salido del cuadro')
    }

    const EstadDentroo =(e)=>{
      alert('Estas dentro del input introduce tu nombre')

    }

    const EstasFuera = e =>{
      alert('Haz Salid del input')
    }

    


    return (
    <div>
      {/*Evento Click*/}

      {/*

      ***** Esta una manera de hacerlo
      <button onClick={()=>{
        console.log('hola');
      }} > Boton</button>
      */}

    <button onClick={DarClick}>Dar click</button>

    {/*Ejemplo con parametros*/}
    <button onClick={e=> DarClick(e, 'Hendrick')}>Dar click</button>


    {/*Ejemplo Doble click*/}
    <p>
    <button onDoubleClick={HazDadoDobleClick}>Dos click</button>
    </p>


  <p>
      <div id='caja' 
      onMouseEnter={hazEntrado}
      onMouseLeave={hazSalido}
      
      >
      {/* Evento on MouseEnter onMouseLeave*/ }

        Pasa por encima


      </div>
  </p>

  <p>
      <input type='text' 
      onFocus={EstadDentroo} 
      onBlur={EstasFuera}
      
      placeholder='Introduce Tu nombre'
      
      />
  </p>
    


    </div>
  )
}

export default EventosComponentes
