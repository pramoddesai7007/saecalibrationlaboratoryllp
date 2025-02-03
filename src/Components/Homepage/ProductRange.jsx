import React, { useContext, useState } from "react";
import Cards from "../Cards/Cards";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Pages/ContextApi";
import Interested from "../../Pages/Interested";
import {
  PiArrowBendDownLeftBold,
  PiArrowBendDownRightBold,
} from "react-icons/pi";

function ProductRange() {
  const navigate = useNavigate();
  const header = "  Dynamic Portable Leeb (Rebound Type) Hardness Tester";
  const price = "₹ 2.5 Lakh";
  const { interest, setInterest, setInterestData } = useContext(Context);
  const data = [
    {
      header: "Portable Hardness Tester",
      imag: [
        "Slider2/s1.PNG",
        "Slider2/s2.PNG",
        "Slider2/s3.PNG",
        "Slider2/s4.PNG",
        "Slider2/s5.PNG",
        "Slider2/s6.PNG",
      ],
      onclick: "/portable",
    },
    {
      header: "Universal Testing Machine",
      imag: [
        "Slider2/s1.PNG",
        "Slider2/s2.PNG",
        "Slider2/s3.PNG",
        "Slider2/s4.PNG",
        "Slider2/s5.PNG",
        "Slider2/s6.PNG",
      ],
      onclick: "/universal",
    },
    {
      header: "Brinell Hardness Tester",
      imag: [
        "Slider2/s1.PNG",
        "Slider2/s2.PNG",
        "Slider2/s3.PNG",
        "Slider2/s4.PNG",
        "Slider2/s5.PNG",
        "Slider2/s6.PNG",
      ],
      onclick: "/brinell",
    },
    {
      header: "Rockwell Hardness Tester",
      imag: [
        "Slider2/s1.PNG",
        "Slider2/s2.PNG",
        "Slider2/s3.PNG",
        "Slider2/s4.PNG",
        "Slider2/s5.PNG",
        "Slider2/s6.PNG",
      ],
      onclick: "/rockwell",
    },
    {
      header: "Impact Testing Machine",
      imag: [
        "Slider2/s1.PNG",
        "Slider2/s2.PNG",
        "Slider2/s3.PNG",
        "Slider2/s4.PNG",
        "Slider2/s5.PNG",
        "Slider2/s6.PNG",
      ],
      onclick: "/impact",
    },
    {
      header: "Vickers Hardness Tester",
      imag: [
        "Slider2/s1.PNG",
        "Slider2/s2.PNG",
        "Slider2/s3.PNG",
        "Slider2/s4.PNG",
        "Slider2/s5.PNG",
        "Slider2/s6.PNG",
      ],
      onclick: "/vicker",
    },
    {
      header: "Micro Vickers Hardness Tester",
      imag: [
        "Slider2/s1.PNG",
        "Slider2/s2.PNG",
        "Slider2/s3.PNG",
        "Slider2/s4.PNG",
        "Slider2/s5.PNG",
        "Slider2/s6.PNG",
      ],
      onclick: "/micro",
    },
  ];
  return (
    <div className="flex flex-col  gap-3 p-4  pt-6 ">
      <div className=" bg-gray-100 flex flex-col  gap-3 p-4 pt-0">
        <h1 className="lg:text-3xl text-lg font-light underline">
          Our Product Range
        </h1>
        <p className="text-gray-500 text-justify lg:text-lg">
          We are actively engaged in{" "}
          <strong>Authorized Wholesale Dealer</strong>, Exporter and Trader
          qualitative assortment of{" "}
          <strong>
            Universal Testing Machine, Rockwell Hardness Tester, Micro Vickers
            Hardness Tester, Brinell Hardness Tester, Balancing Machine and many
            more.{" "}
          </strong>
          These products are manufactured using high grade components and
          cutting-edge technology at vendors end in adherence to global quality
          standards.
        </p>
      </div>
      <p className=" text-justify px-3  lg:text-lg text-gray-500">
        <strong>We offer:</strong>
      </p>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 p-2 lg:p-10 pt-3">
        {data.map((item, index) => {
          return (
            <Link key={index} to={item.onclick}>
              <Cards header={item.header} imag={item.imag} />
            </Link>
          );
        })}

        <div
          onClick={() => navigate("/products")}
          className="border-black flex flex-col justify-center items-center hover:text-blue-500 hover:border shadow-md rounded-lg text-center relative lg:w-[300px] p-3 lg:h-[280px] h-[240px] bg-[#F9F9F9] hover:shadow-2xl cursor-pointer hover:shadow-stone-400 group overflow-hidden lg:text-2xl text-lg"
        >
          View All Products
          <FaEye className="lg:text-2xl text-lg" />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-2 w-full p-2 pt-4">
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
                price:"",
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
    </div>
  );
}

export default ProductRange;
