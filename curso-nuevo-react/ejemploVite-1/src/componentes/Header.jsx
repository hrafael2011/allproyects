import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
       <div className="container">
  <header className="border-bottom lh-1 py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <Link className="link-secondary"to="/">Home</Link>
      </div>
      <div className="col-4 text-center">
        <Link className="blog-header-logo text-body-emphasis text-decoration-none"to="/">Home</Link>
        <br/>

        <Link className="blog-header-logo text-body-emphasis text-decoration-none"to="/Rutas">Rutas</Link>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <Link className="link-secondary"to="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth ="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
        </Link>
        <Link className="btn btn-sm btn-outline-secondary"to="#">Sign up</Link>
      </div>
    </div>
  </header>

  <div className="nav-scroller py-1 mb-3 border-bottom">
    <nav className="nav nav-underline justify-content-between">
      <Link className="nav-item nav-link link-body-emphasis active"to="/">Home</Link>
      <Link className="nav-item nav-link link-body-emphasis"to="/Rutas">Rutas</Link>
      <Link className="nav-item nav-link link-body-emphasis"to="/hooks">Hooks</Link>
      <Link className="nav-item nav-link link-body-emphasis"to="/formulario">Fomularios</Link>
      
      
    </nav>
  </div>
</div>
    </>
  )
}

export default Header
