import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'



import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Frontend from './componentes/Frontend.jsx'
import Home from './paginas/Home'
import Nosotros from './paginas/Nosotros.jsx'
import Rutas from './paginas/Rutas.jsx'
import RutasPath from './paginas/RutasPath.jsx'
import ErrorPersonalizado from './paginas/ErrorPersonalizado.jsx'
import Error404 from './paginas/Error404.jsx'
import Hooks  from './paginas/Hooks.jsx'
import HooksEventoClick from './paginas/HooksEventoClick.jsx'
import HooksUseState from './paginas/HooksUseState.jsx'
import HooksEventoOnchage from './paginas/HooksEventoOnchage.jsx'
import HooksEventosVarios from './paginas/HooksEventosVarios.jsx'
import HooksUseEffect from './paginas/HooksUseEffect.jsx'

// Componentes de paginas

import Header from '../../practicas_personales/src/components/practica_con_html/Header.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Frontend/>, 
      children:[
        {
          index: true,
          element: <Home />
        },
        {
          path:'/Nosotros',
          element: <Nosotros />
        },
        {
          path:'/Rutas',
          element: <Rutas/>
        },
        {
          path:'/rutas/path/:id/:slug',
          element: <RutasPath/>,
          errorElement: <ErrorPersonalizado/>
        },
        {
          path:'/hooks',
          element: <Hooks/>
        },
        {
          path: '/hooks/evento-click',
          element: <HooksEventoClick/>
        },
        {
          path: '/hooks/hook-state',
          element: <HooksUseState/>
        },
        {
          path: 'hooks/evento-onchange',
          element: <HooksEventoOnchage/>
        },
        {
          path: '/hooks/evento-varios',
          element: <HooksEventosVarios/>
        },
        {
          path: '/hooks/use-effect',
          element: <HooksUseEffect/>
        },
        {
          path:'/rutas/path/',
          element: <RutasPath/>
        },
        {
          path:'*',
          element:<Error404/>
        }



      ]

    }
  ]

);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
