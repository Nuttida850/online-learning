import React from "react";
import f01 from "../assets/features/f-1.png";
import icon04 from "../assets/icons/icon-4.png";
import icon05 from "../assets/icons/icon-5.png";
import icon06 from "../assets/icons/icon-6.png";

function Feature() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto p-5 lg:p-0 text-center">
        <h2 className="text-4xl font-semibold text-[#2F327D] mb-10">
          Our <span className="text-[#F48C06]">Features</span>
        </h2>
        <p className="text-lg text-[#696984] max-w-[800px] mx-auto mb-10">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <img src={f01} alt="" />
          </div>
          <div className="text-left">
            <h3 className="text-4xl font-semibold text-[#2F327D]">
              A <span className="text-[#F48C06]">user interface</span> designed
              for the classroom
            </h3>
            <div className="flex items-center">
              <span className="mr-5">
                <img src={icon04} alt="" />
              </span>
              <p>
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div className="flex">
              <span>
                <img src={icon05} alt="" />
              </span>
              <p>TA’s and presenters can be moved to the front of the class.</p>
            </div>
            <div className="flex">
              <span>
                <img src={icon06} alt="" />
              </span>
              <p>
                Teachers can easily see all students and class data at one time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
