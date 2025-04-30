import React from "react";
import skill01 from "../assets/skilline/skill-1.png";
import skill02 from "../assets/skilline/skill-2.png";
import skill03 from "../assets/skilline/skill-3.png";

function Skilline() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto p-5 lg:p-0 text-center">
        <h2 className="text-4xl font-semibold text-[#2F327D] mb-10">
          What is <span className="text-[#F48C06]">Skilline?</span>
        </h2>
        <p className="text-lg text-[#696984] max-w-[800px] mx-auto mb-10">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:px-30 mb-30">
          <div className="relative">
            <img src={skill01} alt="" />
            <div className="absolute top-[35%] left-[20%] right-[20%] md:top-[20%] md:left-[10%] md:right-[10%] lg:top-[35%] lg:left-[20%] lg:right-[20%]">
              <h2 className="text-3xl md:text-2xl lg:text-3xl font-semibold text-white mb-10 md:mb-5 lg:mb-10">
                FOR INSTRUCTORS
              </h2>
              <a
                href="#"
                className="inline-flex px-8 py-4 rounded-full border-2 border-white text-white text-xl md:text-lg lg:text-xl hover:bg-[#23BDEE] hover:border-none hover:-translate-y-2 transition-all duration-150 ease-in-out"
              >
                Start a class today
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={skill02} alt="" />
            <div className="absolute  top-[35%] left-[20%] right-[20%] md:top-[20%] md:left-[10%] md:right-[10%] lg:top-[35%] lg:left-[20%] lg:right-[20%]">
              <h2 className="text-3xl md:text-2xl lg:text-3xl font-semibold text-white mb-10 md:mb-5 lg:mb-10">
                FOR STUDENTS{" "}
              </h2>
              <a
                href="#"
                className="inline-flex px-8 py-4 rounded-full bg-[#23BDEE] text-white text-xl md:text-lg lg:text-xl hover:bg-transparent hover:border-2 hover:-translate-y-2 transition-all duration-150 ease-in-out"
              >
                Enter access code
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="text-left relative">
            <div className="w-12 h-12 bg-[#F4B767] rounded-full absolute -z-10 top-[-0.5rem] left-[-0.5rem]"></div>
            <div className="w-5 h-5 bg-[#F4B767] rounded-full absolute -z-10 top-30 right-[-0.5rem]"></div>
            <h4 className="text-3xl text-[#2F327D] font-medium">
              Everything you can do in a physical classroom,
              <span className="text-[#F48C06]">you can do with Skilline</span>
            </h4>
            <p className="text-xl text-[#696984] my-5">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a href="#" className="underline text-[#696984] text-lg">
              Learn more
            </a>
          </div>
          <div>
            <img src={skill03} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skilline;
