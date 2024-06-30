import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Content/>
      <Footer/>


    </>
  )
}

export default App
