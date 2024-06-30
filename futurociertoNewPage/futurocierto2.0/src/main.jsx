import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

/// PAGES /////
import QueinesSomos from './components/page/QueinesSomos.jsx'
import MisionYValores from './components/page/MisionYValores.jsx'
import Contacto from './components/page/Contacto.jsx'
import Donar from './components/page/Donar.jsx'
import Educacion from './components/page/Educacion.jsx'
import Noticias from './components/page/Noticias.jsx'

const router = createBrowserRouter ([

  {
    path:"/",
    element:<App/>
  },
  {
    path:"/quienes-somos",
    element: <QueinesSomos/>
  },
  {
    path:"/mision-valores",
    element: <MisionYValores/>

  },
  {
    path:"/contacto",
    element: <Contacto/>

  },{
    path:"/donar",
    element: <Donar/>

  },
  {
    path: "/educacion",
    element: <Educacion/>
  },
  {
    path: "/noticias",
    element: <Noticias/>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
