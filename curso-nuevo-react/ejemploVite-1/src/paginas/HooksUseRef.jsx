import React,{useRef, useState} from 'react'
import {Link} from 'react-router-dom'

const HooksUseRef = () => {
    const [texto, setTexto] = useState('');
    const inputRef =useRef();
    const cambiarColor = useRef();
    const impprimirValor =()=>{
        setTexto(inputRef.current.value)
    }
    const CambiarColor =()=>{
        cambiarColor.current.className = 'azul'
    }
  return (
    <>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            use ref
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Hooks Useref</h3>
      <input type="text" name="" id="" className='form-control' ref={inputRef}/>
      <hr />

      <button className='btn btn-danger' onClick={impprimirValor}>Mostrar</button>
      <hr />
      <div className='roja' ref={cambiarColor}>{texto}</div>
      <hr />
      <button className='btn btn-primary' onClick={()=>{CambiarColor()}}>cambiar Color</button>
      
    </>
  )
}

export default HooksUseRef
