import React, {useState} from "react";
import { Link, Form, useActionData } from "react-router-dom";
import Swal from "sweetalert2";
import { atributos, categoria_producto } from "../datos";
import {isNumeric} from '../helpers/helpers'
import Validaciones from "../componentes/Validaciones";

export async function action({ request }) {
  // siempre los action deben retornar algo, si no la app se rempe
  const formData = await request.formData();
  const datos = Object.fromEntries(formData); // esa es otra forma de retornar los datos
  //console.log(formData)

  let errores = [];


  if(formData.get('categoria')==0)
  {
    errores.push('Debe seleccionar al menos una categria');
  }

  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios');
  }

  let expresion_presio = new RegExp('[0-9]')

  // validar si undefined checkbox estatico
  if(datos.peligroso == undefined){

    datos.peligroso = 'No es peligroso'
  }

  // checkbox dinamico
  
  let arreglo = []
  let mensajeArreeglo="";
  if(! expresion_presio.test(formData.get('precio'))){

    errores.push('El precio solo puede tener numeros')
  }

  if(Object.keys(errores).length){
    return errores
  }



  atributos.map((atr,i)=>{

   if(formData.get("atributo_"+atr.id) !=null){
      arreglo[i] = atr.id
      mensajeArreeglo=mensajeArreeglo + atr.nombre + ",";
    }

    console.log(mensajeArreeglo)

  });
  

  return Swal.fire({
    icon: "success",
    title: "Info Nombre",
    text: `Envio exitoso
     Nombre: ${formData.get("nombre")} 
     Precio: ${datos.precio} 
     Categoria: ${ formData.get("categoria")}
     Destacado: ${datos.destacado}
     Peligroso: ${datos.peligroso}
     Atributo: ${mensajeArreeglo}`
     ,
     timer: 3000,
     
  });
}

const FormularioUseActionData = () => {
    const [peligroso, setPeligroso] = useState(false)
    const handlePeligroso = () =>{
        setPeligroso('Peligroso')
    }

    const errores = useActionData();

    // ejemplo de valiacion asincrona
    const [name , setName] = useState('');
    async function handleBlur(name){
      if(name == 'Hendrick Rafael'){

        Swal.fire({
          icon: 'error',
          title: 'Ops',
          text: 'El nombre ingresado no eta disponible'
        });
        setName('');


      }
    }
   

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/formulario">Formulario</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario Use data
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Formulario use Data</h3>
      {errores?.length && <Validaciones errores={errores}/>}

      <br />

      <Form method="POST" noValidate>
        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select name="categoria" id="categoria" className="form-control">
            <option value="0">Seleccione...</option>
            {categoria_producto.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
            placeholder="Nombre"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            onBlur={(e)=>{handleBlur(e.target.value)}}
          />
          <br />
            
        </div>
        <hr />
        <div className="form-group">
            <label htmlFor="precio">Precio</label>
          <input
            type="number"
            name="precio"
            id="precio"
            className="form-control"
            placeholder="Precio"
          />
        </div>
        <hr />
        <br />

        <div className="form-group">
            <label htmlFor="destacado"><strong>Destacado</strong></label>
            <div className="form-check">
                <input type="radio" name="destacado" id="destacado1" value='si' className="form-check-input" />
                <label htmlFor="destacado1"><strong>Si</strong></label>
            </div>
            
            <div className="form-check">
                <input type="radio" name="destacado" id="destacado2" value='no' className="form-check-input" />
                <label htmlFor="destacado1"><strong>No</strong></label>
            </div>
        </div>
        <br />
        <br />
        <div className="form-group">
            <textarea name="descripcion" id="descripcion" placeholder="Descripcion"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="peligroso"Peligroso></label>
            <input type="checkbox" name="peligroso" id="peligroso" value={peligroso} onChange={()=>{handlePeligroso()}} />

        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="atributo">Atributo</label>
          {atributos.map((atr)=>(
              <div key={atr.id} className="form-check">
              <input type="checkbox" name={`atributo_${atr.id}`} id={`atributo_${atr.id}`}  />
              <label htmlFor="">{atr.nombre}</label>
             </div>
          ))}
          
        </div>
        <button className="btn btn-success">Enviar</button>
      </Form>
    </>
  );
};

export default FormularioUseActionData;
