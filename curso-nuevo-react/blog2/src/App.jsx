import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
   
      <Header/>
      <Section/>
      
    </>
  )
}

export default App
