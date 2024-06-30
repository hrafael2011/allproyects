import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const MisionYValores = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <h1>Mision y Valores</h1>
        <Footer/>
      
    </>
  )
}

export default MisionYValores
