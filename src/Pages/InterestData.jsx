/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Context } from "./ContextApi";

function InterestData() {
  const [number, setNumber] = useState("");
  const { interestData } = useContext(Context);
  const [otp, setOtp] = useState(false);
  const [otpNo, setOtpNo] = useState("");
  const [error, setError] = useState(""); // State for error message
  const { interest, setInterest, link } = useContext(Context);
  console.log(interestData);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default navigation

    if (!number.trim()) {
      setError("⚠️ Please enter your enquiry below.");
      return;
    }

    setError(""); // Clear error if valid
    window.open(link, "_blank"); // Open link in a new tab
  };

  return (
    <div className="flex lg:flex-row  md:flex-row flex-col max-w-4xl lg:pt-0 pt-56 overflow-hidden   ">
      <div className=" p-2 flex flex-col gap-1 shadow bg-gray-100 ">
        <div className="flex justify-end  relative lg:right-0 bottom-3 right-4 p-2  ">
          <button
            className="bg-[#1D5B86] relative lg:left-0 lg:hidden block  left-7 w-[max-content] p-1 px-2  text-white"
            onClick={() => setInterest(!interest)}
          >
            X
          </button>
        </div>
        <div className="flex justify-end  relative lg:right-0 lg:bottom-3 right-5 p-2  "></div>
        <img
          src={interestData.img}
          alt=""
          height={"300px"}
          width={"200px"}
          className="lg:w-full  w-[400px] lg:h-[300px]  h-[200px] "
        />
        <div className="lg:px-0 break-words">
          <strong
            className={`${interestData.price ? "text-lg" : "text-base"} ${
              interestData.price ? "" : "pb-20  p-3"
            } text-lg font-medium `}
          >
            {interestData.header}
          </strong>
          <p className="">
            {interestData.price ? interestData.price : ""}{" "}
            {interestData.price ? "/Unit" : ""}
          </p>
          <p>{interestData.price ? "Sold by :SAE Callibration" : ""} </p>

          <div className="text-sm">
            <p>
              {interestData.d1.label ? interestData.d1.label : ""}{" "}
              {interestData.price ? ":" : ""}
              {interestData.d1.data ? interestData.d1.data : ""}
            </p>
            <p>
              {interestData.d2.label ? interestData.d2.label : ""}
              {interestData.price ? ":" : ""}
              {interestData.d2.data ? interestData.d2.data : ""}
            </p>
            <p>
              {interestData.d3.label ? interestData.d3.label : ""}
              {interestData.price ? ":" : ""}
              {interestData.d3.data ? interestData.d3.data : ""}
            </p>
            <p>
              {interestData.d4.label ? interestData.d4.label : ""}
              {interestData.price ? ":" : ""}
              {interestData.d4.data ? interestData.d4.data : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="p-2  flex flex-col gap-2  ">
        <div className="flex justify-end  relative lg:right-0 bottom-3 right-16 p-2  ">
          <button
            className="bg-[#1D5B86] relative lg:left-0 lg:block hidden  left-7 w-[max-content] p-1 px-2  text-white"
            onClick={() => setInterest(!interest)}
          >
            X
          </button>
        </div>

        <div className="lg:px-0 ">
          <h1 className="lg:text-xl text-lg mb-2 break-words">
            Connect With <strong>"SAE Callibration"</strong> and get Details on
            your mobile quickely
          </h1>

          <div>
            <label htmlFor="Mobile Number" className="font-medium">
              Enquire Now
            </label>
            <div className="flex gap-3 border rounded p-1 ">
              <textarea
                className="outline-none w-full  text-gray-700"
                placeholder="Enter your enquiry"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></textarea>
            </div>

            {error && (
              <p className="text-red-600 text-sm font-medium mt-1">{error}</p>
            )}

            <button
              className="text-white w-max bg-[#1D5B86] text-lg px-6 mt-3 p-2 rounded-md hover:bg-blue-800 transition-all duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestData;



