import React, { useContext, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../asset/robot.png";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut, auth } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  const handleGoogleSignOut = () => {
    logOut().then((result) => {});
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-slate-800 text-white">
      <section className="max-w-[1200px] mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold">
          <Link>
            {" "}
            <p className="flex title-font font-medium item-center md:justify-start justify-center text-gray-900">
              <img className="w-9 mr-2" src={logo} alt="" />
              <span className="text-sm font-semibold text-white">
                Toy <br /> Robots
              </span>
            </p>
          </Link>
        </h1>

        <button className="ml-auto mr-2 block">
          {!toggle ? (
            <AiOutlineMenu
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineClose
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-2xl md:hidden block"
            />
          )}
        </button>

        <ul className="hidden md:flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alls"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              AllToy
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  onClick={() => setToggle(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/myToys"
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setToggle(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/add"
                >
                  Add Toys
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        {/* responsive  */}
        <ul
          className={`block duration-300 md:hidden gap-5 z-[100] fixed top-[68px] ${
            !toggle ? "left-[-100%]" : "left-0"
          } bg-black w-full h-screen`}
        >
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
              to="/alls"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              AllToy
            </NavLink>
          </li>
          {user ? (
            <>
              <li className="p-4">
                <NavLink
                  onClick={() => setToggle(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/myToys"
                >
                  My Toys
                </NavLink>
              </li>
              <li className="p-4">
                <NavLink
                  onClick={() => setToggle(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/add"
                >
                  Add Toys
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
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
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
          </li>
        </ul>
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
                  className="border rounded py-2 px-2 shadow-xl space-x-3 bg-blue-800 text-white"
                  onClick={handleGoogleSignOut}
                >
                  Log Out
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
      </section>
    </nav>
  );
};

export default Header;
