import React from 'react'
import {Link} from 'react-router-dom'

const Formularios = () => {
  return (
    <>

    <h1>Formularios</h1>

    <ul>
        <li>
            <Link to='/formulario/formulario-simple'>Formulario Simple</Link>
        </li>
        <li>
            <Link to='/formulario/formulario-use-data'>Formulario Use Data</Link>
        </li>
        <li>
            <Link to='/formulario/formulario-formik'>Formulario Formik</Link>
        </li>
        <li>
            <Link to='/formulario/formulario-reactHookForm'>Formulario ReactHookForm</Link>
        </li>
    </ul>
      
    </>
  )
}

export default Formularios
