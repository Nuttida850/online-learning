import React from "react";
import { FaPlay } from "react-icons/fa";
import headerImg from "../assets/images/header-pic.png";
import bg from "../assets/images/bg-header.png";
function Header() {
  return (
    <div className="py-10">
      <div className="absolute top-0 -z-10 flex max-h-[800px] max-w-full">
        <img src={bg} alt="" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-5 lg:p-0">
        <div className="mt-20">
          <h1 className="text-5xl text-[#2F327D] font-bold">
            <span className="text-[#F48C06]">Studying</span> Online is now much
            easier
          </h1>
          <p className="text-lg my-10 text-[#464646]">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="flex">
            <a
              href="#"
              className="btn btn-orange text-2xl mr-5 items-center 
            hover:-translate-y-2 hover:bg-white hover:text-[#F48C06] transition-all duration-300 ease-in-out"
            >
              Join for free
            </a>
            <a href="#" className="text-2xl inline-flex items-center group">
              <span className="rounded-full w-15 h-15 bg-white mr-4 p-5">
                <FaPlay className="text-[#23BDEE] group-hover:-rotate-15" />
              </span>
              Watch how it works
            </a>
          </div>
        </div>
        <div>
          <img src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
