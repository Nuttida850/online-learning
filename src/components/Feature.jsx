import React from "react";
import f01 from "../assets/features/f-1.png";
import f02 from "../assets/features/f-2.png";
import f03 from "../assets/features/f-3.png";
import f04 from "../assets/features/f-4.png";
import f05 from "../assets/features/f-5.png";

import icon04 from "../assets/icons/icon-4.png";
import icon05 from "../assets/icons/icon-5.png";
import icon06 from "../assets/icons/icon-6.png";

function Feature() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto p-5 lg:p-0 text-center">
        <h2 className="text-4xl font-semibold text-[#2F327D] mb-10">
          Our <span className="text-[#F48C06]">Features</span>
        </h2>
        <p className="text-lg text-[#696984] max-w-[800px] mx-auto mb-10">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-20">
          <div>
            <img src={f01} alt="" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-semibold text-[#2F327D] leading-[1.5]">
              A <span className="text-[#F48C06]">user interface</span> designed
              for the classroom
            </h3>
            <ul className="text-[#696984] text-xl space-y-10 mt-10 ">
              <li className="flex items-center group">
                <span className="mr-10 p-3 rounded-full shadow-lg scale-[1.5] group-hover:scale-[2] transition-all duration-100 group-hover:animate-(--animate-rotateX)">
                  <img src={icon04} alt="" />
                </span>
                <p>
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </li>
              <li className="flex items-center group">
                <span className="mr-10 p-3 rounded-full shadow-lg scale-[1.5] group-hover:scale-[2] transition-all duration-100 group-hover:animate-(--animate-rotateX)">
                  <img src={icon05} alt="" />
                </span>
                <p>
                  TA’s and presenters can be moved to the front of the class.
                </p>
              </li>
              <li className="flex items-center group">
                <span className="mr-10 p-3 rounded-full shadow-lg scale-[1.5] group-hover:scale-[2] transition-all duration-100 group-hover:animate-(--animate-rotateX)">
                  <img src={icon06} alt="" />
                </span>
                <p>
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-4xl text-[#2F327D] font-semibold leading-[1.5]">
              <span className="text-[#F48C06]">Tools </span>
              For Teachers And Learners
            </h4>
            <p className="text-xl text-[#696984] my-5">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div>
            <img src={f02} alt="" />
          </div>
          <div>
            <img src={f03} alt="" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-4xl text-[#2F327D] font-semibold leading-[1.5]">
              Assessments,
              <br />
              <span className="text-[#F48C06]">Quizzes </span> , Tests
            </h4>
            <p className="text-xl text-[#696984] my-5">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-4xl text-[#2F327D] font-semibold leading-[1.5]">
              <span className="text-[#F48C06]">Class Management </span>
              Tools for Educators{" "}
            </h4>
            <p className="text-xl text-[#696984] my-5">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div>
            <img src={f04} alt="" />
          </div>
          <div>
            <img src={f05} alt="" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-4xl text-[#2F327D] font-semibold leading-[1.5]">
              One-on-One <br />
              <span className="text-[#F48C06]">Discussions </span>
            </h4>
            <p className="text-xl text-[#696984] my-5">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
        <a href="#" className="inline-flex px-6 py-5 rounded-full border-1 border-[#F48C06] text-[#F48C06] text-xl hover:-translate-y-2 hover:bg-[#F48C06] hover:text-white transition-all duration-300 ease-in-out">See more features</a>
      </div>
    </div>
  );
}

export default Feature;
