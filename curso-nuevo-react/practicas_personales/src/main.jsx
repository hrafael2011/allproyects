import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//RUTAS
import Inicio from './components/practica_con_html/paginas/Inicio.jsx'
import Contacto from './components/practica_con_html/paginas/Contacto.jsx'
import Historia from './components/practica_con_html/paginas/Historia.jsx'
import Menu from './components/practica_con_html/paginas/Menu.jsx'
import Nosotros from './components/practica_con_html/paginas/Nosotros.jsx'

// Componentes de paginas

import Header from './components/practica_con_html/Header.jsx'
import Footer from './components/practica_con_html/Footer.jsx'
import Section from './components/practica_con_html/Section.jsx'


const router = createBrowserRouter(
[
  {
    path: '/',
    element: <App/>,
    
    children:
     [
      {
        index: true,
        element: <Inicio/>,
        
      },
      {
        path: '/Contacto',
        element: <Contacto/>
      },
      {
        path: '/Historia',
        element: <Historia/>,
        
      },
      {
        path: '/Menu',
        element: <Menu/>
      },
      {
        path: '/Nosotros',
        element: <Nosotros/>,
       
        
      }

    ]
  }

]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
