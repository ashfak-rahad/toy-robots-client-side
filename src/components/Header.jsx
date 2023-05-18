import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import logo from '../asset/robot.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
                <p className='flex title-font font-medium item-center md:justify-start justify-center text-gray-900'>
               <img className='w-9 mr-2' src={logo} alt="" />
               <span className='text-sm font-semibold text-black'>Toy <br /> Robots</span>
                </p>
              </div>
      <ul className='hidden md:flex gap-8'>
      <li className='p-4'>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>
              Blog
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink to="/add" className={({ isActive }) => isActive ? "active" : ""}>
              AddToy
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink to="/alls" className={({ isActive }) => isActive ? "active" : ""}>
              AllToys
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""} >
              Login
            </NavLink>
          </li>
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white bg-[#2d2f2d] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#f1f3f2] m-4'>Toy Robots</h1>
        <li className='p-4'>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>
              Blog
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink to="/add" className={({ isActive }) => isActive ? "active" : ""}>
              AddToy
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink to="/alls" className={({ isActive }) => isActive ? "active" : ""}>
              AllToys
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""} >
              Login
            </NavLink>
          </li>
         
          
      </ul>
    </div>
  );
};

export default Navbar;