import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Strip from "../Components/Homepage/Strip";
import Enquiry from "./Enquiry";
import Interested from "./Interested";
import { Context } from "./ContextApi";
import InterestedMail from "./InterestedEmail";

function Products() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchValue, setSearchValue] = useState("");

  const data = [
    {
      img: "service.PNG",
      header: "Callibration Service",
      p1: "Profile Projector Calibration Services",
      p2: "- Radius Gauge Calibration",
      p3: "- Dial Gauge Calibrator Calibration",
      onclick: "/callibrationService",
    },
    {
      img: "Slider2/s1.PNG",
      header: "Portable Hardness Tester",
      p1: "Colour Display Mash Projects Make Portable LEEB Hardness Tester",
      p2: "- Dynamic Portable Leeb (Rebound Type) Hardness Tester",
      p3: "- Portable Hardness Tester TKM359CE",
      onclick: "/portable",
    },
    {
      img: "Slider2/s2.PNG",
      header: "Universal Testing Machine",
      p1: "10KN Capacity Automatic Electro Mechanical Universal Testing Machine",
      p2: "- 100KN Horizontal Chain And Rope Tensile Testing Machine",
      p3: "- 100KN Servo Controlled Open crosshead Hydraulic Grip Front Loading Digital Universal Testing Machine",
      onclick: "/universal",
    },
    {
      img: "Slider2/s3.PNG",
      header: "Brinell Hardness Tester",
      p1: "B 3000 PC Computerized Brinell Hardness Tester 10/3000kgf",
      p2: "- Optical B 3000 (O) Brinell Hardness Tester 10/3000Kgf",
      p3: "- B 3000 (H) Hydraulic Power pack Brinell Hardness Tester 10/3000kgf",
      onclick: "/brinell",
    },
    {
      img: "Slider2/s4.PNG",
      header: "Rockwell Hardness Tester",
      p1: "Analog Rockwell Hardness Tester (Load 60,100,150Kgf)",
      p2: "- Analog Rockwell Hardness Testing Machine (Load 60,100,150kgf)",
      p3: "- RASNEB-3 Digital Rockwell Cum Brinell Hardness Tester (Load 60,100,150,187.5,250Kgf)",
      onclick: "/rockwell",
    },
    {
      img: "Slider2/s5.PNG",
      header: "Impact Testing Machine",
      p1: "Automatic Charpy Impact Testing Machine 300 Joule Capacity Model No. : Auto-Impact 30",
      p2: "- Impact Testing Machine Model Number : IT-30-STD (Capacity 300 Joule)",
      p3: "- Impact Testing Machine Model Num",
      onclick: "/impact",
    },
    {
      img: "Slider2/s6.PNG",
      header: "Micro Vickers Hardness Tester",
      p1: "10gm to 1kg Touch Screen Fully Automatic Digital Micro Vickers Hardness Tester",
      p2: "- 10gm to 1kg MMT-X2 Micro Vickers Hardness Tester",
      p3: "- 10gm to 1kg Computerized Micro Vickers Hardness Tester",
      onclick: "/micro",
    },
    {
      img: "Slider2/s3.PNG",
      header: "Vickers Hardness Tester",
      p1: "Optical Vickers Hardness Tester Model Number : VM-50-1Kg (Capacity : 1kg to 50kg, Make : FIE)",
      p2: "Touch Screen Digital Vickers Hardness Tester Model Number : VM-50-TS ( Range : 5 kg to 50kg)",
      p3: "Optical Vickers Hardness Tester Model Number : VM-50 (5kg to 50kg)",
      onclick: "/vicker",
    },
    {
      img: "Slider2/s1.PNG",
      header: "Test Blocks And Indenters",
      p1: "Diamond Identer .",
      p2: "- Hardness Test Block",
      p3: "- 1 inch Hardness Test Block",
      onclick: "/testBlock",
    },

    {
      img: "Slider2/s2.PNG",
      header: "Metallurgical Microscope",
      p1: "Video Measuring Machine",
      p2: "- 50 to 1000X Magnification Inverted type Metallurgical Microscope",
      p3: "",
      onclick: "/metallurgical",
    },
    {
      img: "Slider2/s3.PNG",
      header: "Optical Emission Spectrometer",
      p1: "Spark Optical Emission Spectrometer",
      p2: "",
      p3: "",
      onclick: "/opticalEmission",
    },
  ];
  const { interest, interestEmail } = useContext(Context);
  return (
    <div className=" lg:pt-20 pt-24">
      {" "}
      <div className="flex justify-between bg-gray-100 lg:px-10 p-4 cursor-pointer">
        <div className="flex gap-1">
          <p className="flex gap-1" onClick={() => navigate("/")}>
            {" "}
            Home <MdKeyboardDoubleArrowRight className="relative top-1" />
          </p>
          <p className="flex gap-1" onClick={() => navigate("/products")}>
            Products <MdKeyboardDoubleArrowRight className="relative top-1" />
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
      <div className="flex flex-col  gap-3  pt-0 p-4  bg-white">
        <div className=" flex flex-col  gap-3 p-4">
          <h1 className="lg:text-2xl text-lg text-blue-700 font-light  ">
            Universal Testing Machine and Hardness Tester
          </h1>
          <p className=" text-justify lg:text-lg text-gray-500">
            We are actively engaged in{" "}
            <strong>Authorized Wholesale Dealer</strong>, Exporter and Trader
            qualitative assortment of{" "}
            <strong>
              Universal Testing Machine, Rockwell Hardness Tester, Micro Vickers
              Hardness Tester, Brinell Hardness Tester, Balancing Machine and
              many more.{" "}
            </strong>
            These products are manufactured using high grade components and
            cutting-edge technology at vendors end in adherence to global
            quality standards.
          </p>
        </div>
        <p className=" text-justify pl-4  lg:text-lg text-gray-500">
          <strong>We offer:</strong>
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 p-2 lg:p-10 pt-3">
          {data.map((item, index) => {
            return (
              // <div
              //   key={index}
              //   className="  border shadow-lg rounded-md p-2"
              //   onClick={() => navigate(item.onclick)}
              // >
              //   <div
              //     className="w-full lg:h-[200px] h-[120px] shadow-md rounded-md"
              //     style={{
              //       backgroundImage: `url(${item.img})`,
              //       backgroundSize: "contain",
              //       backgroundRepeat: "no-repeat",
              //       backgroundPosition: "center",
              //     }}
              //   ></div>

              //   <div className="flex flex-col gap-1 p-4 break-words relative">
              //     <p className="text-center font-bold lg:text-lg text-sm ">
              //       {item.header}
              //     </p>
              //     <p className="lg:text-base text-xs">- {item.p1}</p>
              //     <p className="lg:text-base text-xs">
              //       {item.p2 ? item.p2 : ""}
              //     </p>
              //     <p className="lg:text-base text-xs">
              //       {item.p3 ? item.p3 : ""}
              //     </p>
              //     <button
              //       onClick={() => navigate(item.onclick)}
              //       className="shadow-md p-2 lg:text-base text-xs  rounded-md  m-1 bg-blue-400 text-white"
              //     >
              //       View All
              //     </button>
              //   </div>
              // </div>
              <div
                key={index}
                className="border shadow-lg rounded-md p-2 flex flex-col h-full"
                onClick={() => navigate(item.onclick)}
              >
                {/* Image Section */}
                <div
                  className="w-full lg:h-[200px] h-[120px] shadow-md rounded-md"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow gap-1 p-4 break-words">
                  <p className="text-center font-bold lg:text-lg text-sm">
                    {item.header}
                  </p>
                  <p className="lg:text-base text-xs cursor-pointer text-blue-600">
                    - {item.p1}
                  </p>
                  <p className="lg:text-base text-xs cursor-pointer text-blue-600">
                    {item.p2 ? item.p2 : ""}
                  </p>
                  <p className="lg:text-base text-xs cursor-pointer text-blue-600">
                    {item.p3 ? item.p3 : ""}
                  </p>
                </div>

                {/* Button Section - Sticks to the Bottom */}
                <div className="mt-auto">
                  <button
                    onClick={() => navigate(item.onclick)}
                    className="shadow-md p-2 lg:text-base text-xs rounded-md w-full bg-blue-400 text-white"
                  >
                    View All
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {interest && <Interested />}
      {interestEmail && <InterestedMail />}
    </div>
  );
}

export default Products;
