import React from 'react'
import { Link } from 'react-router-dom'

const HooksEventosVarios = () => {

    const mover =()=>{
        console.log(('Se movio'))
    }

    const salio =()=>{
        console.log(('Salio'))
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
      <h3>Evento Varios</h3>
      <br />
    <div className="btn btn-success" onMouseMove={()=>{mover()}} onMouseOut={()=>{salio()}}>
        Move
    </div>

    </>
  )
}

export default HooksEventosVarios
