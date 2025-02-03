import React, { useContext, useEffect, useState } from "react";
import Interested from "./Interested";
import InterestedMail from "./InterestedEmail";
import { Context } from "./ContextApi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Strip from "../Components/Homepage/Strip";
import ExploreMoreProduct from "../Layout/ExploreMoreProduct";

function Job() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchValue, setSearchValue] = useState("");
  const { interest, interestEmail } = useContext(Context);
  return (
    <div className=" lg:pt-20 pt-24 bg-gray-200">
      {" "}
      <div className="flex justify-between bg-gray-100 lg:px-10 p-4 cursor-pointer">
        <div className="flex gap-1">
          <p className="flex gap-1" onClick={() => navigate("/")}>
            {" "}
            Home <MdKeyboardDoubleArrowRight className="relative top-1" />
          </p>
        </div>
        <div className="bg-white hidden rounded z-20 absolute  p-2 w-max lg:flex right-4 border top-[90px]">
          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus
            placeholder="Search Product/Service"
            className="  outline-none"
          />
        </div>
      </div>
      <div className=" w-full  bg-white lg:px-22 pt-5 p-10">
        <h2 className="text-[#1A4B6C]   text-[25px] mt-3  font-light  ">
          Jobs
        </h2>
      </div>
      {/*---------------------------------*/}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-200 p-6  w-full lg:max-w-[1400px]  max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="w-full ">
          <h2 className="text-3xl font-li text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
            Service Engineer
          </h2>

          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>
              Looking for an Engineer having experience in the field of
              Destructive Testing Machine minimum for 2 years.
            </li>
            <li>
              Should have a basic knowledge of Universal Testing Machine and all
              types of Hardness Testing Machine.
            </li>
          </ul>

          <div className="mt-4 flex flex-col sm:flex-row items-center">
            <p className="text-gray-700 font-medium mr-2">
              For more Information:
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#1D5B86] text-white px-6 py-2 rounded-md hover:bg-[#164a6e]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Strip />
      {/*---------------------------------*/}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-200 p-6  w-full lg:max-w-[1400px]  max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="w-full ">
          <h2 className="text-3xl font-li text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
            Office Assistant job
          </h2>

          <p className="text-gray-700 mt-4 text-lg lg:pb-10">
            Office Assistant Responsibilities:
          </p>
          <ul className="list-disc pl-6 mt-1 text-gray-700">
            <li>
              Looking for an Engineer having experience in the field of
              Organizing the office and assisting associates to optimize
              processes
            </li>
            <li>Sorting and distributing communications in a timely manner</li>
            <li>Using “back-office” computer systems (ERP software)</li>
          </ul>

          <div className="mt-4 flex flex-col sm:flex-row items-center">
            <p className="text-gray-700 font-medium mr-2">
              For more Information:
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#1D5B86] text-white px-6 py-2 rounded-md hover:bg-[#164a6e]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Strip />
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-200 p-6  w-full lg:max-w-[1400px]  max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="w-full ">
          <h2 className="text-3xl font-li text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
            Territory Service Engineer -Location
            :Chennai,Hyderabad,Rajkot,Ahmedabad,Kolkata,Pune and Mumbai
          </h2>

          <ul className="list-disc pl-6 mt-1 text-gray-700">
            <li>
              Responsible for providing Installation & Commissioning and After
              sales Service for the products. To provide Pre-sales technical
              support .To generates Service business for the company by
              achieving targets and following up the payments. Retaining the
              high end customer and converting them for long term relationships.
            </li>
            <li>
              Looking for an Engineer having experience in the field of
              Destructive Testing Machine minimum for 2 years
            </li>
            <li>
              Should have a basic knowledge of Universal Testing Machine and all
              types of Hardness Testing Machine.
            </li>
            <li>
              Applicant should be ready to travel frequently to the client's
              Location
            </li>
          </ul>

          <div className="mt-4 flex flex-col sm:flex-row items-center">
            <p className="text-gray-700 font-medium mr-2">
              For more Information:
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#1D5B86] text-white px-6 py-2 rounded-md hover:bg-[#164a6e]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Strip />
      <ExploreMoreProduct />
      <Strip />
      {interest && <Interested />}
      {interestEmail && <InterestedMail />}
    </div>
  );
}

export default Job;
