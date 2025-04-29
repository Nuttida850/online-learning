import React from "react";
import { FaPlay } from "react-icons/fa";
import headerImg from '../assets/images/header-pic.png'
import bg from '../assets/images/bg-header.png'
function Header() {
  return (
    <div className="py-10">
      <div className="absolute top-0 -z-10">
        <img src={bg} alt="" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-5 p-5 lg:p-0">
        <div className="mt-20">
          <h1 className="text-[54px] text-[#2F327D] font-bold">
            <span className="text-[#F48C06]">Studying</span> Online is now much
            easier
          </h1>
          <p className="text-2xl my-10">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="flex">
            <a href="#" className="btn btn-orange text-2xl mr-5 items-center">
              Join for free
            </a>
            <a href="#" className="text-2xl inline-flex items-center">
              <span className="rounded-full w-15 h-15 bg-white mr-4 p-5">
                <FaPlay className="text-[#23BDEE]" />
              </span>
              Watch how it works
            </a>
          </div>
        </div>
        <div >
          <img src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
