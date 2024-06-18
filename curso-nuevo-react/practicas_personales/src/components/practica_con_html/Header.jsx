import {Outlet} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='header'>
            <h1>Mi primer Proyecto con react y html</h1>
        </header>
        <Outlet/>
      

      
    </div>
  )
}

export default Header
