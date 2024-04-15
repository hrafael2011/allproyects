import ChildrenComponent from './ChildrenComponent'
import ComponenteFuncional2 from './ComponenteFuncional2'
import Numero from './Numero'



let numero = 12
let nombre = 'rafael'
let apellido = 'Cedano'
let paises = [

  {
      nombre: 'Republica Dominicana',
      dominio: 'Do'
  },
  {
      nombre: 'Venezuela',
      dominio: 've'
  },
  {
      nombre: 'Peru',
      dominio: 'Pe'
  },
  {
      nombre: 'Mexico',
      dominio: 'Me'
  },
  {
      nombre: 'Chile',
      dominio: 'ch'
  }

]

const ComonenteFuncional1 = () => {
  return (
    <>

    <h1>Comonete funcional 1</h1>
    <ComponenteFuncional2 
    prop1='manzana' 
    nombre={nombre} 
    apellido = {apellido}
    pais = {paises}
    
    />


    <hr />
    {(numero==12) ?(
      <Numero numero={numero}/>
    ):(
      <div>No es 12</div>
    )}


    <hr/>
   <ChildrenComponent>
    <p className='class-roja'>contenido desde children</p>
   </ChildrenComponent>



    </>
  )
}

export default ComonenteFuncional1
