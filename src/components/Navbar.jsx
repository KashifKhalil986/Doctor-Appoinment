import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {

  const navigate = useNavigate();
  // const [menu,showMenu]=useState(false);
  const [token,setToken]=useState(true)
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate("/")} src={assets.logo} alt="logo" className="h-12" />


      <div className="hidden md:flex items-start font-medium gap-5 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#5f6FFF]" : "text-gray-800"
          }
        >
          Home
        </NavLink>


        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive ? "text-[#5f6FFF]" : "text-gray-800"
          }
        >
          All Doctors
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#5f6FFF]" : "text-gray-800"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#5f6FFF]" : "text-gray-800"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        {
          token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
         <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
         <img className='w-2.5' src={assets.dropdown_icon} alt="" />
        
        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
          <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
            <p className="hover:text-black cursor-pointer"onClick={()=>navigate('/my-profile')}>My Profile</p>
            <p className="hover:text-black cursor-pointer"onClick={()=>navigate('/my-appoinment')}>My Appoinment</p>
            <p className="hover:text-black cursor-pointer"onClick={()=>setToken(false)}>Logout</p>
          </div>
        </div>


          </div> :

        <button onClick={()=>navigate('/login')} className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light'>Create account</button>
        }
      </div>
    </div>
  )
}

export default Navbar
