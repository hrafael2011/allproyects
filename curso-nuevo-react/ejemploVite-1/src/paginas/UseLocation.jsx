import React from 'react'
import {Link,useLocation} from 'react-router-dom'

// use location , es para saber en que ruta estas ubicado
const UseLocation = () => {
    const location = useLocation();
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
      <h3>Use Location</h3>
      <h2>{location.pathname}</h2>
    </>
  )
}

export default UseLocation
