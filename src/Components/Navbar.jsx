import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-bg border-gray-200 p-4 sticky top-0 z-50 shadow-sm">
      <div className="w-full max-w-screen flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <NavLink to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-primary">April Twins</span>
        </NavLink>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-3 md:p-0 mt-2 border border-primary rounded-lg bg-bg md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white md:items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-1 px-2 rounded ${isActive ? 'text-white bg-primary' : 'text-primary'} md:hover:bg-primary md:hover:text-bg`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `block py-1 px-2 rounded ${isActive ? 'text-bg bg-primary' : 'text-primary'} md:hover:bg-primary md:hover:text-bg`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blogs"
                className={({ isActive }) =>
                  `block py-1 px-2 rounded ${isActive ? 'text-bg bg-primary' : 'text-primary'} md:hover:bg-primary md:hover:text-bg`
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Gallery"
                className={({ isActive }) =>
                  `block py-1 px-2 rounded ${isActive ? 'text-bg bg-primary' : 'text-primary'} md:hover:bg-primary md:hover:text-bg`
                }
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
