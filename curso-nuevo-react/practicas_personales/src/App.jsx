import { useState } from 'react'
import Header from './components/practica_con_html/Header'
import Nav from './components/practica_con_html/Nav'
import Section from './components/practica_con_html/Section'
import Footer from './components/practica_con_html/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Nav/>
     <Section/>
     <Footer/>
    </>
  )
}

export default App
