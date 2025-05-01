import React from "react";
import logo from "../assets/logos/logo-white.png";
function Footer() {
  return (
    <div className="py-10 bg-[#252641]">
      <div className="max-w-7xl mx-auto p-5 lg:p-0 text-center">
        <div className="flex justify-center items-center mb-30">
          <img src={logo} alt="" />
          <div className="h-20 w-0.5 bg-[#626381] mx-10"></div>
          <h4 className="text-xl text-white font-semibold text-left">
            Virtual Class <br /> for Zoom
          </h4>
        </div>
        <div className="mb-20">
          <h4 className="text-2xl text-[#B2B3CF] font-medium mb-5">
            Subscribe to get our Newsletter
          </h4>
          <input
            type="text"
            placeholder="Your Email"
            className="pl-5 pr-20 py-4 border-1 border-[#83839A] rounded-full text-lg text-[#83839A]"
          />
          <span>
            <a
              href="#"
              className="ml-5 px-8 py-4 bg-[linear-gradient(50deg,#545AE7,#393FCF)] rounded-full text-xl text-white inline-flex mt-8 md:mt-0 mb-10"
            >
              Subscribe
            </a>
          </span>
        </div>
        <div className="text-xl text-[#B2B3CF]">
          <div className="flex items-center justify-center mb-5">
            Careers
            <div className="w-0.5 h-4 bg-[#B2B3CF] mx-5"></div>
            Privacy Policy
            <div className="w-0.5 h-4 bg-[#B2B3CF] mx-5"></div>
            Terms & Conditions
          </div>
          <p>© 2021 Class Technologies Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
