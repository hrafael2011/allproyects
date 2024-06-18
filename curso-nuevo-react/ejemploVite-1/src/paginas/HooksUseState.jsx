import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const HooksUseState = () => {
    const [contador, setcontador] = useState(0)
    const handleincrementar = ()=>{
       setcontador(contador+1)
    }

    const handledescrementar =()=>{
        if(contador !=0){
            setcontador(contador-1)
        }else{
            alert('no admite valores menores a 0')
        }
        
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
      
      <button className='btn btn-primary' onClick={()=>{handleincrementar()}}> <i class="fa-solid fa-plus"></i> Incrementar</button>
      <hr />

      <div className="btn btn-success">
        {[contador]}
      </div>
      <hr />

      
       <button className='btn btn-danger' onClick={()=>{handledescrementar()}}> <i class="fa-solid fa-minus"></i> Decrementar</button>

  
      
    </>
  )
}

export default HooksUseState
