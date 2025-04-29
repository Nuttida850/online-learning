import React from "react";
import logo01 from "../assets/companies/company-1.png";
import logo02 from "../assets/companies/company-2.png";
import logo03 from "../assets/companies/company-3.png";
import logo04 from "../assets/companies/company-4.png";
import logo05 from "../assets/companies/company-5.png";
import logo06 from "../assets/companies/company-6.png";

function Companies() {
  const logos = [logo01, logo02, logo03, logo04, logo05, logo06];

  return (
    <div className="py-10 text-center">
      <div className="p-5 lg:p-0">
        <p className="text-[#696984] text-2xl mb-10">
          Trusted by 5,000+ Companies Worldwide
        </p>

        <div className="overflow-hidden lg:max-w-[50%] min-h-44 flex items-center bg-linear mx-auto">
          <ul className="flex items-center space-x-5 scale-[2] md:scale-[1.5] lg:scale-[1.5] lg:space-x-10 justify-center animate-loop">
            {logos.map((logo, index) => (
              <li className="" key={index}>
                <img src={logo}  alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Companies;
