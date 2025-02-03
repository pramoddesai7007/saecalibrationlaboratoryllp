import {
  PiArrowBendDownLeftBold,
  PiArrowBendDownRightBold,
} from "react-icons/pi";
import ChartSheet from "./CharSheet";
import Interested from "../../Pages/Interested";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Pages/ContextApi";
import Strip from "../Homepage/Strip";

const CompanyFastSheet = () => {
  const data = [
    "Nature of Business",
    "Additional Business",
    "Company CEO",
    "Registered Address",
    "Total Number of Employees",
    "GST Registration Date",
    "Legal Status of Firm",
    "Annual Turnover",
  ];

  const header = "  Dynamic Portable Leeb (Rebound Type) Hardness Tester";
  const price = "₹ 2.5 Lakh";
  const { interest, setInterest, setInterestData } = useContext(Context);
  return (
    <>
      <div className="w-[100%]  bg-[#EEEEEE] mt-20">
        <div className=" ml-12 p-2 pt-4">
          <h2 className="border-l-4  lg:blcok hidden font-light  text-[25px] text-[#1A4B6C] lg:flex p-1  border-[#1A4B6C]">
            Company Factsheet
          </h2>
        </div>

        <div className="   w-[100%] ">
          <ChartSheet />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-2 w-full p-2 pt-4 p-5">
        <h1 className="lg:text-4xl font-light ">
          We <strong>send our price</strong> immediately
        </h1>

        <div className=" flex gap-5 lg:text-4xl">
          <PiArrowBendDownRightBold />
          <button
            onClick={() => {
              setInterest(!interest);
              setInterestData({
                img: "logo.jpg",
                header: "SAE CALIBRATION LABORATORY LLP",
                d1: { label: "", data: "" },
                d2: { label: "", data: "" },
                d3: { label: "", data: "" },
                d4: { label: "", data: "" },
                price: "",
              });
            }}
            className="text-white cursor-pointer hover:bg-white hover:text-black hover:shadow-4xl w-max bg-[#1D5B86] lg:text-lg px-6 p-2"
          >
            Get Instant Quote
          </button>
          <PiArrowBendDownLeftBold />
        </div>
      </div>
      {interest && <Interested />}
      <Strip />
    </>
  );
};
export default CompanyFastSheet;
