import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <di>
        <header id='header'>
            <div className="wrap">
                <div id="logo">
                    <span className="gear">S</span>
                    <h3>BLOG</h3>
                </div>
                <nav id='menu'>
                <ul>
                    <li> 
                      <Link to='/'>INICIO</Link>
                      </li>
                    <li> 
                      <Link to='/Blog'>BLOG</Link>
                      </li>
                    <li> 
                      <Link to='/Formacion'>FORMACION</Link>
                      </li>
                    <li>
                      <Link to='/Contacto'>CONTACTO</Link>
                      </li>
               </ul>
            </nav>
            </div>
         </header>
    </di>
  )
}

export default Header
