import React from "react";
import tools from "../assets/images/tools.png";
function Integrations() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto p-5 lg:p-0  items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
          <img src={tools} alt="" />
          <div className="text-center md:text-left">
            <div className="flex items-center mb-5 justify-center md:justify-start">
              <div className="w-20 h-0.5 bg-[#525596] mr-5"></div>
              <h4 className="text-[#525596] tracking-widest text-lg">
                INTEGRATIONS
              </h4>
            </div>
            <h2 className="text-4xl font-bold text-[#2F327D] leading-[1.5]">
              200+ educational tools and platform{" "}
              <span className="text-[#F48C06]">integrations</span>
            </h2>
            <p className="text-xl text-[#696984] my-8">
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>
            <a
              href="#"
              className="inline-flex px-6 py-5 rounded-full border-1 border-[#F48C06] text-[#F48C06] text-xl hover:-translate-y-2 hover:bg-[#F48C06] hover:text-white transition-all duration-300 ease-in-out"
            >
              See All Integrations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integrations;
