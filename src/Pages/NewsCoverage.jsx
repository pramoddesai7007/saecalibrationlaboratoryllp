import React, { useContext, useEffect, useState } from "react";
import Interested from "./Interested";
import InterestedMail from "./InterestedEmail";
import { Context } from "./ContextApi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Strip from "../Components/Homepage/Strip";
import ExploreMoreProduct from "../Layout/ExploreMoreProduct";

function NewsCoverage() {
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
          News Coverage
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-200 p-6   w-full lg:max-w-[1400px]  max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="w-full ">
          <h2 className="text-3xl font-li text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
            News Headlines
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            We are happy to announce our new Branch offices in Rajkot, Gujrat
            and Nagpur, Maharashtra which will be functional from the First week
            of March 2018.
          </p>
          <p className="text-gray-700 mt-4 text-lg lg:pb-10">
            All Sales and Services related activity will be handled at the
            respective Branches.Our Rajkot Office will be handled by Mr.
            Shailesh and Nagpur Office will be handled by Mr. Arjun.
          </p>

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
            South Region Operation
          </h2>

          <p className="text-gray-700 mt-4 text-lg lg:pb-10">
            We are happy to announce our new Branch offices in South - Bangalore
            which will be functional from the First week of Apr 2023.
          </p>

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
      <ExploreMoreProduct/>
      <Strip/>
      {interest && <Interested />}
      {interestEmail && <InterestedMail />}
    </div>
  );
}

export default NewsCoverage;
