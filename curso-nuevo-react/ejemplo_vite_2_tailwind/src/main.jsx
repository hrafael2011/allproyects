import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../public/css/output.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Frontend from './componets/Frontend.jsx'
import Index from './Paginas/Index.jsx'

const router = createBrowserRouter(

[
  {
    path: '/',
    element: <Frontend/>,
    children:
    [
      {
        index: true,
        element: <Index/>
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
