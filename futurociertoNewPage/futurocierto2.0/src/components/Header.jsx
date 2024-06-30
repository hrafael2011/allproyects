import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <>
      
      {/*<!--======= TOP BAR =========-->*/}
  <div className="top-bar">
    <div className="container">
      <ul className="left-bar-side">
        <li>
          <p className="font-lora"><i><img src="src/assets/images/top-bar-icon.png" alt=""/></i> No one has Ever Become Poor from Giving! </p>
        
        </li>
      </ul>
      <ul className="right-bar-side social_icons">
        <li className="padding-r-20">
          <p className="font-lora">Phone: (01) 800 433 633</p>
        </li>
        <li>
          <p className="font-lora">Mail: Info@example.com</p>
        </li>
      </ul>
    </div>
  </div>
  
  
  {/*<!--======= HEADER START =========-->*/}
  <header className="sticky">
    <div className="container"> 
            
      {/*<!--======= LOGO =========-->*/}
      <div className="logo"> <a href="#."><img src="src/assets/images/futuro_cierto_logo.png" alt="" /></a> </div>
      
     {/*<!--======= DONATE NOW BTN =========-->*/} 
      <div className="btn-right"> <a href="#make-donation" className="btn popup-with-zoom-anim"><i className="fa fa-heart-o"></i>donate now</a> </div>
    </div>
    
    
    {/*<!--======= NAVIGATION =========-->*/}

    
      
      
    <nav>
    <div className="container">
        <ul id="ownmenu" className="ownmenu">
          <li className="active"><Link to="/">Inicio</Link>
            <ul className="dropdown">
              <li><a href="02-Home.html">Home 2</a></li>
              <li><a href="03-Home.html">Home 3</a></li>
            </ul>
          </li>
          <li><Link to="/quienes-somos">quienes somos </Link></li>
          <li><Link to="/mision-valores">Misión y Valores </Link></li>
          <li><Link to="/educacion">Eduación </Link></li>
          <li><Link to="/noticias">noticias </Link></li>
          <li><Link to="/contacto">contactos </Link></li>
          <li><Link to="/donar">donar </Link> </li>
           
          
          
        </ul>
      </div>
    </nav>
    
  </header>
  {/*<!--======= HEADER END =========--> */}
    </>
  )
}

export default Header
