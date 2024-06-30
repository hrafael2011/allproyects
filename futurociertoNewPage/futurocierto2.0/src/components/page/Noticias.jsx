import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'


const Noticias = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <h1>Noticias</h1>
      <Footer/>
    </>
  )
}

export default Noticias
