import { Outlet } from "react-router-dom"
import Header from "./Header"

const Frontend = () => {
  return (
    <div>
        <Header/>
      <Outlet/>
    </div>
  )
}

export default Frontend
