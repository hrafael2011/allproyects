import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form' //https://react-hook-form.com/get-started : librera de react-hook-form
import Swal from 'sweetalert2'



const FormularioReactHookForm = () => {

    const {register, formState:{errors},handleSubmit} = useForm();
    function onSubmit(values)
    {
        Swal.fire({
            icon: 'success',
            title: 'OK',
            text: `E-mail: ${values.correo} | Contraseña: ${values.password}`
        });

    }

  return (
    <>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/formulario">Formulario</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario ReactHookForm
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario ReactHookForm</h3>
      {(errors.correo || errors.password)&&(
        <div className='alert alert-danger'>
            <ul>
                {errors.correo && <li>{errors.correo?.message}</li>}
                {errors.password && <li>{errors.password?.message}</li>}
            </ul>
        </div>
      )}


      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
            <label htmlFor="correo">Email</label>
            <input type="text" name="correo" id="correo" className='form-control' {...register("correo", {
                required: 'El correo es obligatorio',
                pattern:{
                    value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                    message: 'El email ingresado no es valido'

                }
            })}/>
        </div>
        <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" className='form-control' {...register("password",{
                required: 'El campo Password es obligatorio',
                pattern:{
                    value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                    message: 'La contraseña ingresada no es valida'

                }
               

            })} />
        </div>
        <br />

        <br />
        <button className='btn btn-success' type='submit'> <i className="fa-solid fa-share-from-square"></i> Enviar</button>
      </form>
      
    </>
  )
}

export default FormularioReactHookForm
