import React from "react";
import icon01 from '../assets/icons/icon-1.png'
import icon02 from '../assets/icons/icon-2.png'
import icon03 from '../assets/icons/icon-3.png'

function Software() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto p-5 lg:p-0 text-center">
        <h3 className="text-3xl font-bold text-[#2F327D] mb-10">
          All-In-One <span className="text-[#F48C06]">Cloud Software.</span>{" "}
        </h3>
        <p className="text-lg text-[#696984]">
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
          <div className="p-13 rounded-3xl shadow-lg">
            <div className="flex justify-center"><img src={icon01} alt="" /></div>
            <h4 className="text-2xl font-medium text-[#2F327D] my-10">Online Billing, Invoicing, & Contracts</h4>
            <p className="text-lg text-[#696984]">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
          </div>
          <div className="p-13 rounded-3xl shadow-lg">
            <div className="flex justify-center"><img src={icon02} alt="" /></div>
            <h4 className="text-2xl font-medium text-[#2F327D] my-10">Easy Scheduling & Attendance Tracking</h4>
            <p className="text-lg text-[#696984]">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
          </div>
          <div className="p-13 rounded-3xl shadow-lg">
            <div className="flex justify-center"><img src={icon03} alt="" /></div>
            <h4 className="text-2xl font-medium text-[#2F327D] mt-10 md:mt-18 mb-10">Customer Tracking</h4>
            <p className="text-lg text-[#696984]">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;
