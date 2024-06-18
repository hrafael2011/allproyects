import {Link} from 'react-router-dom'

const HooksEventoClick = () => {

    // handle , es una forma estandar entre los desarrolladores de nombrar una funcion de evento
    const hadlepresiname =()=>{
        alert('Diste click');
    }

    const precioname = () =>{
        alert('Click con funcion anonima');
    }

    const precioname_parametro = (nombre)=>{
        alert('El nombre es: '+nombre)
    }
    
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
           <Link to='/hooks'>Hooks</Link> 
          </li>
          <li className="breadcrumb-item active" aria-current="page">
           Evento click
          </li>

        </ol>
      </nav>
      <hr />
      <h3>Click</h3>
      <button className='btn btn-primary' onClick={hadlepresiname}>Click</button>
      <hr />

      {/* La diferrencia de esta funcion con la de arriiba es que esta se utiliza cuando hay parametros*/ }
      <button className='btn btn-success' onClick={()=>{precioname()}}>Click Funcion anonima</button>
      <hr />

      {/*evento con parametros*/}

      <button className='btn btn-danger' onClick={()=>{precioname_parametro('Rafael')}}>Click Funcion anonima con parametro</button>



    </>
  );
};

export default HooksEventoClick;
