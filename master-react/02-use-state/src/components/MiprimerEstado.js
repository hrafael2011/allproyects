import React, {useState} from 'react'

const MiprimerEstado = () => {


/*     ESTA ES LA PROBLEMATICA    */
  /*
  let nombre = 'Hendrick Rafael'
  const CambiarNombre = e =>{
    nombre = 'Anthony Cedano'
  }*/

  /*   SOUCION   */ 

  const [nombre, setNombre] = useState('Hendrick Rafael')
  const CambiarNombre = (e, nombreFijo) =>{
    setNombre(nombreFijo)
  }


  return (
    <div>
        <h3>Componente: Mi PrimerEstado</h3>
        
          <strong>
           <label className='label'>{nombre}</label> 
          </strong>
          &nbsp;
          <button onClick={e=>CambiarNombre(e, 'Fransico')}>Cambiar</button>
          &nbsp;
          <input type='text' onChange={e=> CambiarNombre(e,e.target.value)}/>
  </div>

      
  )
}

export default MiprimerEstado
