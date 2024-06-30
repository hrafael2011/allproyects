import React from 'react'
// useNavigate es una opcion a link
import {Link, useNavigate} from 'react-router-dom'

const HooksUsenavigate = () => {
    const navigate = useNavigate();
  return (
    <>
     <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Custom Hook
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Hooks Use Navigate</h3>
      <button className='btn btn-success' onClick={()=>{navigate("/Nosotros")}}>Ir a sobre nosotros</button>
      <br />
      <button className='btn btn-success' onClick={()=>{navigate(-1)}}>Ir atras</button> {/* de esta manera se queda como una especie de histoiral hacia donde navego el boton de ir a nosotros*/}
      
      
    </>
  )
}

export default HooksUsenavigate
