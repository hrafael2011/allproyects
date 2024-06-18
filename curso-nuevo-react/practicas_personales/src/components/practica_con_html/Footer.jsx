import { Outlet } from "react-router-dom"

const Footer = () => {
  return (
    <>
    
      <footer className='footer'>
        <h1>Proyecto React</h1>
        <span>Hendrick Rafael Web &copy;</span>
      </footer>
      <Outlet/>
    </>
  )
}

export default Footer
