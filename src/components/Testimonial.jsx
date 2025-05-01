import React from "react";
import test from "../assets/images/testimonial.png";
import { HiArrowLongRight } from "react-icons/hi2";

function Testimonial() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto p-5 lg:p-0 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center mb-5 justify-center md:justify-start">
              <div className="w-20 h-0.5 bg-[#525596] mr-5"></div>
              <h4 className="text-[#525596] tracking-widest text-lg">
                TESTIMONIAL
              </h4>
            </div>
            <h2 className="text-6xl font-bold text-[#2F327D] leading-[1.5]">
              What They Say?
            </h2>
            <p className="text-xl text-[#696984] my-8">
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className="text-xl text-[#696984] my-8">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="text-xl text-[#696984] my-8">
              Are you too? Please give your assessment
            </p>
            <a
              href="#"
              className="inline-flex pl-5  rounded-full border-1 border-[#F48C06] text-[#F48C06] text-xl items-center group"
            >
              Write your assessment<div className="ml-5 w-16 h-16 rounded-full border-1 border-[#F48C06] p-3  group-hover:-rotate-20"><HiArrowLongRight className="text-4xl" /></div>
            </a>
          </div>
          <img src={test} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
