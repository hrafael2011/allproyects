import { NavLink, Link } from "react-router-dom"

let id = 12
let slug = 'Lo que sea'
const Rutas = () => {
  return (
    <>
      <h1>Rutas</h1>
      <ul>
        <li>
            <NavLink to='/'> Home</NavLink>
        </li>
        <li>
            <Link to='/Nosotros'>Nosotros</Link>
        </li>
        <li>
            <Link to='/rutas/path/'>Parametros path</Link>
        </li>
        <li>
            <Link to={`/rutas/path/${id}/${slug}`}>Parametros path Id</Link>
        </li>

      </ul>
    </>
  )
}

export default Rutas
