import { useEffect, useState } from "react"
import {assets} from "../assets/assets"
import { Link } from "react-scroll"

const Navbar = () => {

  const[showMobileMenu,setShowMobileMenu]=useState(false)

  useEffect(()=>{
    if(showMobileMenu) document.body.style.overflow="hidden"
    else document.body.style.overflow="auto"
    return ()=>{
        document.body.style.overflow="auto"
    }
  },[showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
            <img src={assets.logo} alt="logo" />
            <ul className="hidden md:flex gap-7 text-white">
                <Link to="Header" className="cursor-pointer hover:text-gray-400">Home</Link>
                <Link to="About" className="cursor-pointer hover:text-gray-400">About</Link>
                <Link to="Projects" className="cursor-pointer hover:text-gray-400">Projects</Link>
                <Link to="Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</Link>
            </ul>
            <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>
            <img src={assets.menu_icon} alt="menu-icon" className="md:hidden w-7" onClick={()=>setShowMobileMenu(true)} />
        </div>

        {/* ----------------mobile-menu------------------ */}

        <div className={`md:hidden ${showMobileMenu ? "fixed w-full" : "h-0 w-0"} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className="flex justify-end p-6 cursor-pointer"> 
                <img src={assets.cross_icon} alt="cross-icon" className="w-6" onClick={()=>setShowMobileMenu(false)} />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium cursor-pointer">
                <Link onClick={()=>setShowMobileMenu(false)} to="Header" className="px-4 py-2 rounded-full inline-block">Home</Link>
                <Link onClick={()=>setShowMobileMenu(false)} to="About" className="px-4 py-2 rounded-full inline-block">About</Link>
                <Link onClick={()=>setShowMobileMenu(false)} to="Projects" className="px-4 py-2 rounded-full inline-block">Projects</Link>
                <Link onClick={()=>setShowMobileMenu(false)} to="Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar 