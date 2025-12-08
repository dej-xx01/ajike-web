import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
const MainLayout = () =>{
      const [menuClicked, setMenuClicked] = useState(false)
      const navBtn = () =>{
            setMenuClicked(!menuClicked)
      }
      return(
            <div className="bg-black h-screen">
                  <nav className=" fixed inset-x-0">
                        <div className=" flex  border-2 justify-between items-center relative">
                        <Link to = "/">
                              <div className= "flex flex-col w-fit">
                                    <h1 className="text-white italic">Ajike</h1>
                                    <h3 className="text-gray-400  italic">Model</h3>
                              </div>
                        </Link>
                        <div className = {menuClicked ? "order-2 border absolute inset-0 h-screen bg-white" : "hidden"}>
                              <ul className = "flex flex-col">
                                    <Link to = "/"><li onClick={navBtn}>Portfolio</li></Link>
                                    <Link to= "/about"><li onClick={navBtn}>About</li></Link>
                                    <Link to = "/links"><li onClick={navBtn}>My Links</li></Link>
                                    <Link to = "/contact"><li onClick={navBtn}>Contact</li></Link>
                                    <Link><li></li></Link>
                              </ul>
                        </div>
                        <button className="text-black bg-white w-5 order-1 z-10" onClick={navBtn}>X</button>
                        </div>

                  </nav>
                  <Outlet/>
                  {!menuClicked && <footer className="bg-white h-10 w-full fixed bottom-0">
                        <div className="text-black text-center pt-5">
                              <h1>This is deadass the footer</h1>
                        </div>
                  </footer>} 
            </div>
      )
}

export default MainLayout