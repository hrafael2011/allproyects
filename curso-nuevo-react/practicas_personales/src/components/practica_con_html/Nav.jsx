import { NavLink, Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Historia">Historia</Link>
          </li>
          <li>
            <Link to="/Nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
