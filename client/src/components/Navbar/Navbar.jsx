import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-removebg.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b  border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">
            ResumeForge
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <Link to={"/login"}> Login</Link>
          </button>
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            <Link to={"/signup"}>SignUp</Link>
          </button>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900  border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-blue-700"
                    : "block py-2 px-3  rounded  text-white hover:text-blue-800"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-blue-700"
                    : "block py-2 px-3  rounded  text-white hover:text-blue-800"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-blue-700"
                    : "block py-2 px-3  rounded  text-white hover:text-blue-800"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-blue-700"
                    : "block py-2 px-3  rounded  text-white hover:text-blue-800"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
