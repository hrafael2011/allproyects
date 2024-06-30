import React,{useState} from 'react'
import {Link}  from  'react-router-dom'
import Swal from 'sweetalert2'

const FormularioSiemple = () => {
  const[nombre, setNombre] = useState('')
  const handleSutmit =(e)=>{
    e.preventDefault(); // esto bloquea cualquier funcionalidad que venga de html en los formularios
    //console.log('El nombre es:'+ nombre)

    Swal.fire({
      icon: "success",
      title: nombre,
      text: "Enviado Satisfactoriamente"
    })


  }
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/formulario">Formulario</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario Simple
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario Siemple</h3>
      <br />
      <div className='form-group'>
        <form onSubmit={handleSutmit}>
          <input type="text" name="" id="" className='form-control' value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
          <br />
        {/**
          <input type="button" value="Enivar"  className='btn btn-warning'/>  de esta manera no funciona*/}
          <button className='btn btn-success'>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default FormularioSiemple
