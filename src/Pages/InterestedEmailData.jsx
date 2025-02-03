/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Context } from "./ContextApi";
import InterestedMail from "./InterestedEmail";

function InterestEmailData() {
  const [number, setNumber] = useState("");
  const { interestData } = useContext(Context);
  const [otp, setOtp] = useState(false);
  const [otpNo, setOtpNo] = useState("");
  const { interestEmail, setInterestEmail,link } = useContext(Context);

  const [error, setError] = useState(""); // State for error message
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default navigation

    if (!number.trim()) {
      setError("⚠️ Please enter your enquiry below.");
      return;
    }

    setError(""); // Clear error if valid
    window.open(link, "_blank"); // Open link in a new tab
  };
  const price = "₹ 2.5 Lakh";
  return (
    <div className="flex lg:flex-row  md:flex-row flex-col max-w-4xl lg:pt-0 pt-72  ">
      <div className=" p-2 flex flex-col gap-1 shadow bg-gray-100 ">
        <div className="flex justify-end  relative lg:right-0 bottom-3 right-4 p-2  ">
          <button
            className="bg-[#1D5B86] relative lg:left-0 lg:hidden block  left-7 w-[max-content] p-1 px-2  text-white"
            onClick={() => setInterestEmail(!interestEmail)}
          >
            X
          </button>
        </div>
        <div className="flex justify-end  relative lg:right-0 lg:bottom-3 right-5 p-2"></div>
        <img
          src="logo.jpg"
          alt=""
          height={"300px"}
          width={"200px"}
          className="lg:w-full  w-[400px] lg:h-[300px]  h-[200px] "
        />

        <strong className="pb-20 whitespace-nowrap p-3">
          SAE CALIBRATION LABORATORY LLP
        </strong>
      </div>
      <div className="p-2  flex flex-col gap-2  ">
        <div className="flex justify-end  relative lg:right-0 bottom-3 right-16 p-2  ">
          <button
            className="bg-[#1D5B86] relative lg:left-0 lg:block hidden  left-7 w-[max-content] p-1 px-2  text-white"
            onClick={() => setInterestEmail(!interestEmail)}
          >
            X
          </button>
        </div>
        {/* {number && otp ? (
          <div>
            <h1 className=" mb-2 break-words">
              <strong className="lg:text-xl text-lg">
                Confirm your Requirnment
              </strong>{" "}
              <p className="text-sm">
                Enter 4 Digit One Time Password Sent to your email
              </p>
            </h1>

            <div className="flex gap-3 border rounded p-1 w-80">
              <input
                type="text"
                max={4}
                min={4}
                className="outline-none text-gray-700"
                placeholder="Enter Otp"
                value={otpNo}
                onChange={(e) => setOtpNo(e.target.value)}
              />
            </div>
            <p className="text-sm">We will contact you on this Email</p>
            <button
              onClick={() => setInterestEmail(!interestEmail)}
              className="text-white text-center w-full bg-green-700 text-lg px-6 p-2"
            >
              Confirm Requirnment
            </button>
            <div className="flex justify-between text-sm pt-2">
              <p>Did not recieve OTP ?</p>
              <p className="text-green-700">Resend Otp</p>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="lg:text-xl text-lg mb-2 break-words">
              Connect With <strong>"SAE CALIBRATION LABORATORY LLP"</strong> and
              get Details on your mobile quickely
            </h1>

            <div>
              <label htmlFor="Mobile Number" className="font-medium">
                Email
              </label>
              <div className="flex gap-3 border rounded p-1 w-80">
                <input
                  type="email"
                  className="outline-none text-gray-700"
                  placeholder="Enter your email"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <p className="text-sm">We will contact you on this email</p>
              <button
                onClick={() => number && setOtp(!otp)}
                className="text-white w-max bg-[#1D5B86] text-lg px-6 p-2"
              >
                Submit Now
              </button>
            </div>
          </div>
        )} */}
        <div className="lg:px-0 px-6">
          <h1 className="lg:text-xl text-lg mb-2 break-words">
            Connect With <strong>"SAE Callibration"</strong> and get Details on
            your mobile quickely
          </h1>

          <div>
            <label htmlFor="Mobile Number" className="font-medium">
              Enquire Now
            </label>
            <div className="flex gap-3 border rounded p-1 w-80">
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

export default InterestEmailData;
