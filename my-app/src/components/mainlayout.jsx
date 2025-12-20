import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
// import ham from "../assets/images/ham.png"
// import close from "../assets/images/close.png"
import ham from "../assets/images/menu 24.png"
import close from "../assets/images/close 24.png"
import tiktok from "../assets/images/tiktok1.png"
import IG from "../assets/images/IG.png"
const MainLayout = () =>{
      const [menuClicked, setMenuClicked] = useState(false)
      const navBtn = () =>{
            setMenuClicked(!menuClicked)
            console.log(menuClicked)
      }
      return(
            <div className="bg-black min-h-screen relative">
                  <nav className=" fixed inset-x-0 top-0 bg-black">
                        <div className=" flex border-2 justify-between items-center relative py-7">
                              <Link to = "/">
                                    <div className= "flex flex-col w-fit  leading-5 pl-2">
                                          <h1 className="text-white font-serif text-[23px] font-medium ">Àjíké</h1>
                                          <h3 className="text-gray-400  italic text-[13px]">Model</h3>
                                    </div>
                              </Link>
                              <div className = {menuClicked ? "order-2 border h-screen absolute bg-white -inset-1.5" : "hidden" }>
                                    <ul className = "flex flex-col h-full justify-center items-center border border-amber-900 gap-y-4 " >
                                          <Link to = "/"><li onClick={navBtn}>Portfolio</li></Link>
                                          <Link to= "/about"><li onClick={navBtn}>About</li></Link>
                                          <Link to = "/links"><li onClick={navBtn}>My Links</li></Link>
                                          <Link to = "/contact"><li onClick={navBtn}>Contact</li></Link>
                                          {menuClicked && (
                                                <div className="flex gap-x-3 mt-6">
                                                      <a href="www.google.com" target="_blank" rel="noopener noreferrer"><img src= {tiktok} className="w-5"/></a>
                                                      <a href="www.google.com" target="_blank" rel="noopener noreferrer"><img src= {IG} className="w-5"/></a>                                                      
                                                </div>

                                          )}
                                    </ul>
                              </div>
                              <img src={menuClicked? close : ham} className=" w-10 order-1 z-10 pr-3" onClick={navBtn}/>
                        </div>

                  </nav>
                  <Outlet/>
                  {!menuClicked && <footer className=" py-3 pl-2 w-full mt-5">
                              <p className= "text-gray-600 text-[10px] font-serif">&copy; 2025 Àjíké. All rights reserved.</p>
                              <p className= "text-gray-800 text-[11px] font-sans">Built by JED</p>
                  </footer>} 
            </div>
      )
}

export default MainLayout