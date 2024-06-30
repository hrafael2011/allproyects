import React from 'react'
import {Link, useLoaderData} from 'react-router-dom' // es nativo de react-router-dom
import { paises } from '../datos'

export function loader(){
  const countrys = paises;
  return countrys;
}

const HooksUseLoaderData = () => {

const countrys = useLoaderData();
console.log(countrys)
 
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Custom Hook
          </li>
        </ol>
      </nav>
      <hr />
      <h3>HooksCustom</h3>
      <h2>Paises</h2>
      <lo>
      {countrys.map((co)=>(
       <li key={co.dominio}>{co.nombre}</li>
      ))}
      </lo>
    </>
  )
}

export default HooksUseLoaderData
