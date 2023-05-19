import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../asset/robot.png";
import { AuthContext } from "../provider/AuthProvider";


const Header = () => {
    const [nav, setNav] = useState(false);
    const {user,logOut,auth
     }=useContext(AuthContext);
  
     const handleGoogleSignOut =()=>{
      logOut()
      .then(result =>{
        
      })
    }

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] bg-neutral-800 mx-auto font-bold text-white">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <p className="flex title-font font-medium item-center md:justify-start justify-center text-gray-900">
          <img className="w-9 mr-2" src={logo} alt="" />
          <span className="text-sm font-semibold text-white">
            Toy <br /> Robots
          </span>
        </p>
      </div>
      <div>
      <ul className="hidden  md:flex gap-8">
        <li className="p-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            AddToy
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/alls"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            AllToys
          </NavLink>
        </li>
      
      </ul>
      </div>
      <div>
      {user ? (
            <>
              <span className="text-black flex gap-4 items-center">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img className="rounded-full" src={user?.photoURL} />
                  </div>
                </label>
                <button
                  className="border rounded py-2 px-9  shadow-xl  bg-blue-800 text-white"
                  onClick={ handleGoogleSignOut}
                >
                  Sign Out
                </button>
              </span>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="border rounded-2xl py-2 px-6  shadow-xl"
              >
                Login
              </NavLink>
            </>
          )}
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] z-50  h-full border-r border-r-white bg-[#2d2f2d] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <p className="flex title-font font-medium item-center md:justify-start justify-center text-gray-900">
            <img className="w-9 mr-2" src={logo} alt="" />
            <span className="text-sm font-semibold text-white">
              Toy <br /> Robots
            </span>
          </p>
        <li className="p-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            AddToy
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/alls"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            AllToys
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
