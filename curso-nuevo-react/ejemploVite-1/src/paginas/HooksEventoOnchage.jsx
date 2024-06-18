import {useState} from 'react'
import {Link} from 'react-router-dom'



const HooksEventoOnchage = () => {

const[nombre, setNombre] = useState('');
const handleFormulario = () =>{
  console.log(nombre)

  alert(nombre)
}

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
           <Link to='/hooks'>Hooks</Link> 
          </li>
          <li className="breadcrumb-item active" aria-current="page">
           Hooks State
          </li>

        </ol>
      </nav>
      <hr />
      <h3>Evento Onchage</h3>
      <p>
        <input type="text" value={nombre} className='form-control' onChange={(e)=>{setNombre(e.target.value)}} />
        <br />
        <button className='btn btn-success'  onClick={handleFormulario}> Enviar</button>
      </p>

    </>
  )
}

export default HooksEventoOnchage
