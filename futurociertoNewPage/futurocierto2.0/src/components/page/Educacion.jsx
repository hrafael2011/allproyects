import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'


const Educacion = () => {
  return (
    <div>
        <Header/>
      <Outlet/>
      <h1>Educacion</h1>
      <Footer/>
      
    </div>
  )
}

export default Educacion
