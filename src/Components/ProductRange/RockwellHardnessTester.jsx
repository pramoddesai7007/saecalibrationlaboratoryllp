import React, { useContext, useEffect, useState } from "react";
import DemoCard from "../../Pages/DemoCard";
import ExploreMoreProduct from "../../Layout/ExploreMoreProduct";
import Interested from "../../Pages/Interested";
import { Context } from "../../Pages/ContextApi";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import InterestedMail from "../../Pages/InterestedEmail";
import BestDeal from "../Cards/BestDeal";
import Strip from "../Homepage/Strip";
import ProductCard from "../../Pages/ProductCard";

function RockwellHardnessTester() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const array = [
    {
      photos: [
        "Products/Rockwell/s1.jpg",
        "logo.jpg",
        "Products/Rockwell/s9.jpg",
        "Products/Rockwell/s10.jpg",
        "Products/Rockwell/s11.jpg",
        "Products/Rockwell/s8.jpg",
      ],
      header: "Analog Rockwell Hardness Tester (Load 60,100,150Kgf)",
      p: "The Analog Rockwell Hardness Tester (Model: RAS) is designed for industrial use and is capable of testing with load capacities of 60 kgf, 100 kgf, and 150 kgf. It features an analog display, with a maximum test height of 230 mm and a machine height of 655 mm. The depth of the throat is 133 mm. The tester is ideal for applications requiring precise and reliable hardness testing. It is made by Saroj and weighs approximately 65 kg.",
      Details: [
        { label: "Usage/Application", data: "Industrial" },
        { label: "Model Name/Number", data: "RAS" },
        { label: "Display Type", data: "Analog" },
        { label: "Weight", data: "65 kg" },
        { label: "Load Capacity", data: "60 kgf" },
        { label: "Brand", data: "Saroj" },
        { label: "Max Test Height", data: "230 mm" },
        { label: "Machine Height", data: "655 mm" },
        { label: "Depth of Throat", data: "133 mm" },
      ],
    },
    {
      photos: [
        "Products/Rockwell/s3.jpg",
        "logo.jpg",
        "Products/Rockwell/s9.jpg",
        "Products/Rockwell/s7.jpg",
        "Products/Rockwell/s10.jpg",
        "Products/Rockwell/s2.jpg",
        "logo.jpg",
      ],

      header: "Analog Rockwell Hardness Testing Machine (Load 60,100,150kgf)",
      p: "The Analog Rockwell Hardness Testing Machine (Model: RASN) is an automatic machine designed for Rockwell hardness testing. It features test loads of 60, 100, and 150 kgf for tests on Rockwell A, B, and C scales. The machine provides an analog display and has a maximum test height of 230 mm with a depth of the throat of 130 mm. The major load is 288.4 N, and the minor load is 98.07 N. The machine comes with an automatic zero-setting diameter gauge and is available in varied models, including the twin model RASN (T).",
      Details: [
        { label: "Parameter", data: "HRC" },
        { label: "Display Type", data: "Analog" },
        { label: "Model Number", data: "RASN" },
        { label: "Dimension", data: "450x265x627 mm" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "65 kg" },
        { label: "Max. Test Height", data: "230 mm" },
        { label: "Depth of Throat", data: "130 mm" },
        { label: "Major Load", data: "288.4 N" },
        { label: "Minor Load", data: "98.07 N" },
      ],
    },
    {
      photos: [
        "Products/Rockwell/s2.jpg",
        "logo.jpg",
        "Products/Rockwell/s6.jpg",
        "Products/Rockwell/s9.jpg",
        "Products/Rockwell/s11.jpg",
        "Products/Rockwell/s7.jpg",
        "Products/Rockwell/s8.jpg",
        "Products/Rockwell/s1.jpg",
      ],

      header:
        "RASNEB-3 Digital Rockwell Cum Brinell Hardness Tester (Load 60,100,150,187.5,250Kgf)",
      p: "The RASNEB-3 Digital Rockwell Cum Brinell Hardness Tester is a motorized machine designed for precise hardness testing. It has a range of test loads from 60, 100, 150, 187.5, to 250 Kgf, suitable for both Rockwell and Brinell hardness testing. The machine features an automatic loading and unloading cycle, making it ideal for production testing. The machine's body has a tapered front look and a large-size readout. It is powder-coated for better durability and appearance, ensuring that the paint does not fade over time. The elevating screw is guided in a hardened and ground bush, ensuring high precision. A hardened and ground stepped bush on top of the main screw guarantees long-term accuracy, even with rough handling of the test table or specimen. Other features include a motorized system for automatic operation, a powder-coated body for long-lasting appearance, and hardened components for enhanced accuracy and durability in demanding testing environments.",
      Details: [
        { label: "Parameter", data: "HRC" },
        { label: "Display Type", data: "Digital" },
        { label: "Model Name/Number", data: "RASNEB-3" },
        { label: "Dimension", data: "450x175x627 mm (LxWxH)" },
        { label: "Brand", data: "FIE" },
        { label: "Weight", data: "77 kg" },
        { label: "Depth of Throat", data: "133 mm" },
        { label: "Minor Load", data: "98.07 N" },
        { label: "Max Test Height", data: "230 mm" },
        { label: "Major Load", data: "1471 N" },
      ],
    },
    {
      photos: [


        "Products/Rockwell/s4.jpg",
        "logo.jpg",
        "Products/Rockwell/s3.jpg",
        "Products/Rockwell/s2.jpg",
        "Products/Rockwell/s4.jpg",
      ],

      header:
        "RASNET-3 Digital Rockwell Cum Superficial Hardness Testing Machine (Load 15,30,45,60,100,150Kgf)",
      p: "The RASNET-3 Digital Rockwell Cum Superficial Hardness Testing Machine is designed to test the hardness of materials using Rockwell, Rockwell Superficial, and Rockwell cum Brinell tests. It applies a diamond or ball indentor to the surface of a test piece in two stages: a preliminary test force followed by an additional test force. The hardness is measured by evaluating the depth of the indentation after the additional test force is removed. This motorized machine features a digital LCD display for easy hardness measurement, showing results in 0.1 Rockwell units for precise readings. The operation of the machine is simple and involves setting parameters such as high/low limits, dwell time, and scale selection on the front panel. The machine supports both manual and automatic operation, allowing easy switching between modes for efficient testing. The LCD display also indicates the results with High/Good/Low status after each test, ensuring accuracy and reliability in performance.",
      Details: [
        { label: "Parameter", data: "HRC" },
        { label: "Display Type", data: "Digital" },
        { label: "Model Number", data: "RASNET-3" },
        { label: "Dimension", data: "450x175x627 mm (LxWxH)" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "77 kg" },
        { label: "Minor Load", data: "29.42 kN" },
        { label: "Max Test Height", data: "230 mm" },
        { label: "Depth of Throat", data: "133 mm" },
        { label: "Major Load", data: "980.7 kN" },
      ],
    },
    {
      photos: [
        "Products/Rockwell/s6.jpg",
        "logo.jpg",
        "Products/Rockwell/s7.jpg",
        "Products/Rockwell/s6.jpg",
        "Products/Rockwell/s2.jpg",
        "Products/Rockwell/s3.jpg",
        "Products/Rockwell/s8.jpg",
      ],

      header:
        "Fully Automatic Touch Screen Rockwell Hardness Testing Machine (Load 60,100,150Kgf)",
      p: 'The Fully Automatic Touch Screen Rockwell Hardness Testing Machine, Model: RASN-TSFA, is designed for efficient and accurate Rockwell hardness testing. It offers a motorized, fully automatic operation with features such as automatic zero setting for the dial gauge, motorized loading and unloading system, and auto load and scale selections. The machine is equipped with a 4.3" touch screen display for easy navigation and control, and a built-in thermal printer for convenient reporting. It is suitable for performing Rockwell tests with test loads of 60, 100, and 150 kgf. The machine is ideal for those seeking high precision, reliability, and user-friendly functionality.',
      Details: [
        { label: "Parameter", data: "HRC" },
        { label: "Display Type", data: "LCD" },
        { label: "Model Name/Number", data: "RASN-TSFA" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "75 kg" },
        { label: "Major Load", data: "588.4 N" },
        { label: "Minor Load", data: "98.7 kgf" },
        { label: "Max Test Height", data: "230 mm" },
        { label: "Dimensions", data: "450x175x627 mm (LxWxH)" },
        { label: "Depth of Throat", data: "133 mm" },
      ],
    },
  
  ];
  const { interest, interestEmail } = useContext(Context);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 lg:pt-20 pt-24">
      <div className="flex justify-between bg-gray-100 lg:px-10 p-4 cursor-pointer">
        <div className="flex gap-1 relative lg:right-6">
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
      <div className="bg-white p-3 flex flex-col gap-1">
        <h1 className="lg:text-2xl text-lg font-light text-gray-500">
          Rockwell Hardness Tester
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Providing you the best range of analog rockwell hardness tester (load
          60,100,150kgf), analog rockwell hardness testing machine (load
          60,100,150kgf), rasneb-3 digital rockwell cum brinell hardness tester
          (load 60,100,150,187.5,250kgf), rasnet-3 digital rockwell cum
          superficial hardness testing machine (load 15,30,45,60,100,150kgf),
          fully automatic touch screen rockwell hardness testing machine (load
          60,100,150kgf) and rasne 3 digital rockwell hardness tester
          60,100,150kgf with effective & timely delivery.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {array.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard
                photos={item.photos}
                header={item.header}
                details={item.Details}
                p={item.p}
              />
              {index % 4 == 0 && <BestDeal />}
            </div>
          );
        })}
        <Strip />
      </div>
      <ExploreMoreProduct />
      {interest && <Interested />}
      {interestEmail && <InterestedMail />}
    </div>
  );
}

export default RockwellHardnessTester;
