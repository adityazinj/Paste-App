import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='flex gap-3 w-full border-black bg-blue-600 h-10 pl-4 text-black rounded-xl'>
      <div className='flex mt-2 gap-4'>
        <NavLink to={"/"} className={({ isActive}) =>
            isActive ? "colorComponent" : "defaultColor"}>
            Home
        </NavLink>
        <NavLink to={"/Paste"} className={({ isActive}) =>
            isActive ? "colorComponent" : "defaultColor"}>
            Paste
        </NavLink>
      </div>
        
    </div>
  )
}

export default NavBar
