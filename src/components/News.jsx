import React from "react";
import news01 from "../assets/news/news-1.png";
import news02 from "../assets/news/news-2.png";
import news03 from "../assets/news/news-3.png";
import news04 from "../assets/news/news-4.png";

function News() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto p-5 lg:p-0 text-center">
        <h2 className="text-4xl font-semibold text-[#2F327D] mb-10">
          Lastest News and Resources
        </h2>
        <p className="text-lg text-[#696984]  mx-auto mb-10">
          See the developments that have occurred to Skillines in the world
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="text-left">
            <img src={news01} className="mb-5" alt="" />
            <span className="px-7 py-1 bg-[#F4C467] rounded-full inline-flex text-lg mb-5">
              News
            </span>
            <h4 className="text-2xl font-medium mb-5">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h4>
            <p className="text-lg text-[#696984]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a href="#" className="text-lg text-[#696984] underline">
              Read more
            </a>
          </div>
          <div>
            <ul className="text-left space-y-5">
              <li className="flex items-center relative">
                <img src={news02} className="mr-3 " alt="" />
                <span className="px-7 py-1 bg-[#F4C467] rounded-full inline-flex text-lg mb-5 absolute right-65 bottom-0 md:right-35 md:bottom-20 lg:right-85 lg:bottom-1">
                  PRESS RELEASE
                </span>
                <div>
                  <h4 className="text-lg font-medium">
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h4>
                  <p className="text-[#696984]">
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </li>
              <li className="flex items-center relative">
                <img src={news03} className="mr-3" alt="" />
                <span className="px-7 py-1 bg-[#F4C467] rounded-full inline-flex text-lg mb-5 absolute right-65 bottom-0 md:right-35 md:bottom-20 lg:right-85 lg:bottom-1">
                  NEWS
                </span>
                <div>
                  <h4 className="text-lg font-medium">
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h4>
                  <p className="text-[#696984]">
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </li>
              <li className="flex items-center relative">
                <img src={news04} className="mr-3" alt="" />
                <span className="px-7 py-1 bg-[#F4C467] rounded-full inline-flex text-lg mb-5 absolute right-65 bottom-0 md:right-35 md:bottom-20 lg:right-85 lg:bottom-1">
                  NEWS
                </span>
                <div>
                  <h4 className="text-lg font-medium">
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h4>
                  <p className="text-[#696984]">
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
