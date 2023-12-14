import React,{useEffect, useState} from 'react'
import AvisoComponent from './AvisoComponent';


const PruebasComonents = () => {

    const [usuario, set_usuario] = useState('Hendrick Rafael');
    const [contador, setContador] = useState(0);
    
    const cambiar_nom_usua = e =>{
        set_usuario(e.target.value);
    }

    // siempre se ejecurata cuando halla cambios en los componentes, si quiero
    // que solo se ejecute una vez en la carga le agrego como segundo parametro
    // los corchetes, si quiero que ejecute en una de las propiedades la escribo dentro
    useEffect(()=>{

        console.log('Se Ha cargado el componente');
    },[]);

    // esta se ejecurara con la propiedad usuario, ya que la puse dentro del colchete
    useEffect(()=>{
        setContador(contador+1);
        console.log(`Se ha modificado el usario:${contador}`)
       
    },[usuario]);

  return (
    <div>
      <p>
        <h4>Nombre Usuario:</h4>
       <br/>
       {/* esto quiere decir que si paso de 10 en el contador cambiara la condicion*/ }
        <strong className={contador >= 10? 'label label-green': 'label'}>{usuario}</strong>
        <br/>
        <input onChange={cambiar_nom_usua} type='text' placeholder='Usuario'/>
      </p>

      {usuario == 'Hendrick' && <AvisoComponent/>}

    </div>
  )
}

export default PruebasComonents
