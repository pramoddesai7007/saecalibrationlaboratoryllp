import React, { useContext, useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { Context } from "./ContextApi";
import Interested1 from "./Interested1";
import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import InterestedMail from "./InterestedEmail";

function Enquiry() {
  const [text, setText] = useState("");
  const header = "  Dynamic Portable Leeb (Rebound Type) Hardness Tester";
  const price = "₹ 2.5 Lakh";
  const { interest1, setInterest1, setInterestData, interestEmail } =
    useContext(Context);
  const location = useLocation();
   const [error, setError] = useState(""); // State for error message
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`h-max bg-[#1e4e7c] ${
        location.pathname === "/enquiry" ? "lg:pt-20 pt-24" : ""
      }`}
    >
      <div className="flex justify-between bg-gray-100 px-10 p-4 cursor-pointer"></div>
      <div className="max-w-4xl mx-auto px-4 p-4 ">
        <div className="bg-[#1e4e7c]/90 border shadow-lg ">
          <h1 className="lg:text-4xl  text-xl  text-white text-center mb-5 p-3 bg-[#155987]">
            Tell Us What Are You Looking For ?
          </h1>

          <div className="relative p-8 pb-3">
            <textarea
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Kindly Describe Your Requirement"
              className="w-full lg:h-48 h-32 p-4  px-2 bg-white text-gray-700 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {error && <p className="text-red-500">{error}</p>}
            {/* <Pencil className="absolute top-4 left-0  h-5 w-5 text-gray-500 " /> */}
          </div>

          <div className="flex justify-center ">
            <button
              onClick={() => {
                if (!text.trim()) {
                  setError("⚠️ Please enter your enquiry below.");
                  return;
                }
                text && setError("")
                text && setInterest1(!interest1);

                setInterestData({
                  img: "Slider2/s1.PNG",
                  header: header,
                  d1: { label: "Parameter", data: "NA" },
                  d2: { label: "Display Type", data: "COLOUR DISPLAY" },
                  d3: { label: "Minimum Order Quantity", data: "1 Unit" },
                  d4: { label: "Accuracy", data: "AS PER ASTM" },
                  price: price,
                });
                setText("");
              }}
              className={`bg-[#2980b9] mb-3 text-white lg:text-xl font-semibold px-12 py-3 rounded-lg hover:bg-[#2980b9]/90 transition-colors duration-200 shadow-lg`}
            >
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
      {interest1 && <Interested1 />}

      {interestEmail && <InterestedMail />}
    </div>
  );
}

export default Enquiry;
