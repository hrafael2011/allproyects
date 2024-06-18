import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Nosotros from './paginas/Nosotros'
import Error404 from './paginas/Error404';



const Rutas = () => {
  return (
    <>
    
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Nosotros' element={<Nosotros/>}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default Rutas
