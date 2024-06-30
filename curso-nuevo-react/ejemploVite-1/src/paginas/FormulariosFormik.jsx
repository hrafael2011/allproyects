import React from 'react'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
import Swal from 'sweetalert2'

//https://formik.org/docs/overview : documentacion de formik
const FormulariosFormik = () => {

    const {handleSubmit, handleChange, values} = useFormik ({
        initialValues:
        {
            correo: "",
            password: "",
        },
        onSubmit: async function(values)
         {

            let mensaje = ''
            if(!values.correo){
                mensaje= mensaje+'<li>El campo E-mail es obligatorio</li>'
            }
            if(!values.password){
                mensaje= mensaje+'<li>El campo Contraseña es obligatorio</li>'
            }



            if(mensaje != ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Ups',
                    html: `<ul>${mensaje}</ul>`,
                  });
                  return;
            }else{
                Swal.fire({
                    icon: 'success',
                    title: 'OK',
                    text: `E-mail: ${values.correo}
                           Contraseña: ${values.password}`  
                });
            }

           

            
         }




    })

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/formulario">Formulario</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario Formik
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario Formik</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="correo">Email</label>
            <input type="text" name="correo" id="correo" className='form-control' onChange={handleChange} value={values.correo}/>
        </div>
        <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" className='form-control' onChange={handleChange} value={values.password}/>
        </div>
        <br />

        <br />
        <button className='btn btn-success' type='submit'> <i className="fa-solid fa-share-from-square"></i> Enviar</button>
      </form>
    </>
  )
}

export default FormulariosFormik
