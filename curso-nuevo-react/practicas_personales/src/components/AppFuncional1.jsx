import React from 'react'
import ComponenteFuncional2 from './ComponenteFuncional2'




let personas =[

    {
        'Id':1,
        'nombre': 'Rafael',
        'edad': 34
    },
    {
        'Id':2,
        'nombre': 'Anthony',
        'edad': 25
    },
    {
        'Id':3,
        'nombre': 'Cedano',
        'edad': 28
    },
    {
        'Id':4,
        'nombre': 'Juan',
        'edad': 16
    },
    {
        'Id':5,
        'nombre': 'Alexander',
        'edad': 17
    },
    {
        'Id':6,
        'nombre': 'Acsota',
        'edad': 21
    },
    {
        'Id':7,
        'nombre': 'Alexis',
        'edad': 21
    },
]
const AppFuncional1 = () => {
  return (
    <div>
      <h1>Informacion de Nombres y edades</h1>
      <ComponenteFuncional2  person = {personas}/>
    </div>
  )
}

export default AppFuncional1
