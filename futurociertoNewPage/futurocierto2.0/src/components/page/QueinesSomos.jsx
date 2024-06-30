import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const QueinesSomos = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <h1>Quienes somos</h1>
        <Footer/>
      
    </div>
  )
}

export default QueinesSomos
