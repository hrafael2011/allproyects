import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {createBrowserRouter, RouterProvider} from 'react-router-dom'



// Routers

import Inicio from './components/pages/Inicio.jsx'
import Blog from './components/pages/Blog.jsx'
import Formacion from './components/pages/Formacion.jsx'
import Contacto from './components/pages/Contacto.jsx'



const router = createBrowserRouter (
[
    {

      path:'/',
      element: <App/>,

      children: 
        [
          {
            index: true,
            element: <Inicio/>
          },
          {
            path: '/Blog',
            element: <Blog/>
          },
          {
            path: '/Formacion',
            element: <Formacion/>
          },
          {
            path: '/Contacto',
            element: <Contacto/>
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
