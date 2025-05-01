import React, { useState } from "react";
import logo from "../assets/logos/logo-black.png";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-5 lg:px-0 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="justify-start">
          <img src={logo} alt="" />
        </div>
        <ul
          className={`${
            !menuOpen ? "hidden" : "flex"
          } items-center md:flex flex-col md:flex-row md:items-center md:space-x-8 text-[22px] space-y-5 md:space-y-0 mt-10 md:mt-0`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a
              href="#"
              className="btn btn-white hover:-translate-y-2 hover:bg-[#F48C06] hover:text-white transition-all duration-300 ease-in-out"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn btn-orange hover:-translate-y-2 hover:bg-white hover:text-[#F48C06] transition-all duration-300 ease-in-out"
            >
              Sign Up
            </a>
          </li>
        </ul>
        <div className="md:hidden absolute right-10 top-10 text-3xl">
          <FaBars onClick={toggleMenu} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
