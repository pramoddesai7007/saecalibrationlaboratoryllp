import React, { useContext, useEffect, useState } from "react";
import DemoCard from "../../Pages/DemoCard";
import ExploreMoreProduct from "../../Layout/ExploreMoreProduct";
import { Context } from "../../Pages/ContextApi";
import Interested from "../../Pages/Interested";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import InterestedMail from "../../Pages/InterestedEmail";
import BestDeal from "../Cards/BestDeal";
import Strip from "../Homepage/Strip";
import ProductCard from "../../Pages/ProductCard";
function VickerHardnessTester() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const array = [
    {
      photos: [
        "Products/MicroV/p3/s1.jpg",
        "Products/MicroV/p3/s2.jpg",
        "Products/MicroV/p3/s3.jpg",

        "Products/MicroV/p3/s7.jpg",
        "Products/MicroV/p3/s8.jpg",
        "Products/MicroV/p3/s9.jpg",
      ],
      header: "Optical Vickers Hardness Tester Model Number: VM-50-1Kg",
      p: "The Optical Vickers Hardness Tester, model VM-50-1Kg (Capacity: 1kg to 50kg), is a precise and versatile tool designed for testing a wide range of materials, from soft metals like lead to hard steels. The tester provides consistent results regardless of the load applied to the specimen, ensuring accuracy for precision-finished parts. Its motorized loading and unloading cycle, combined with a built-in projection screen, make it easy to obtain accurate readings. This tester is ideal for testing thin sheet metals due to the minimal load applied, ensuring no damage to delicate materials. Additional information: Item Code: QSDD, Production Capacity: 50 KG, Delivery Time: 1 DAY, Packaging Details: NIL.",
      Details: [
        { label: "Test Force", data: "50 kgf" },
        { label: "Parameter", data: "HV" },
        { label: "Display Type", data: "Analog" },
        { label: "Model Name/Number", data: "VM-50-1Kg" },
        { label: "Accuracy", data: "AS PER ASTM" },
        { label: "Dimension", data: "300*300*300 mm" },
      ],
    },
    {
      photos: [
      
        "logo.jpg",

        "Products/MicroV/p3/s7.jpg",
        "Products/MicroV/p3/s8.jpg",
        "Products/MicroV/p3/s9.jpg",
      ],
      header:
        "Touch Screen Digital Vickers Hardness Tester Model Number: VM-50-TS",
      p: "The Touch Screen Digital Vickers Hardness Tester, model VM-50-TS (Range: 5 kg to 50 kg), uses advanced image processing technology to directly and accurately measure the Vickers Hardness number. It provides a wide testing range, from soft metals to the hardest, with high accuracy and repeatability at all loads. This tester ensures faster measurements, increasing productivity, and the small indentation size makes it ideal for non-destructive testing on finished components. It features a motorized loading and unloading cycle, small loads for testing thin sheet metals, and comes with advanced Window XP-based software for enhanced control. Its compact design ensures space efficiency. Additional specifications: Max Load: 75 kgf, Accuracy: 3%, Frequency: 50 Hz.",
      Details: [
        { label: "Parameter", data: "HV" },
        { label: "Display Type", data: "Touch Screen" },
        { label: "Model Name/Number", data: "VM-50-TS" },
        { label: "Accuracy", data: "3%" },
        { label: "Dimension", data: "L 585 x W 290 x H 860 mm" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Frequency", data: "50 Hz" },
        { label: "Max Load", data: "75 kgf" },
      ],
    },
    {
      photos: [
      
        "logo.jpg",

        "Products/MicroV/p3/s7.jpg",
        "Products/MicroV/p3/s8.jpg",
        "Products/MicroV/p3/s9.jpg",
      ],
      header:
        "Optical Vickers Hardness Tester Model Number: VM-50 (5kg to 50kg)",
      p: "The Optical Vickers Hardness Tester model VM-50 (5kg to 50kg) is designed to provide precise Vickers hardness measurement with high reliability. It comes with a robust construction and low maintenance requirements, ensuring a long functional life. The tester features an optical magnification of 70X, a total load capacity of 50 kgf, and a throat depth of 135 mm, making it ideal for accurate testing of materials. With a maximum test height of 200 mm, this model is widely used in quality control and testing laboratories. The machine is sourced from certified vendors, ensuring adherence to industry standards and is thoroughly checked for quality.",
      Details: [
        { label: "Display Type", data: "Optical" },
        { label: "Model Number", data: "VM-50" },
        { label: "Dimension", data: "585x290x860 mm" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "70 kg" },
        { label: "Total Load", data: "50 kgf" },
        { label: "Throat Depth", data: "135 mm" },
        { label: "Optical Magnification", data: "70 X" },
        { label: "Max Test Height", data: "200 mm" },
      ],
    },
    {
      photos: [
        
        "logo.jpg",

        "Products/MicroV/p2/s5.jpg",
        "Products/MicroV/p3/s8.jpg",
        "Products/MicroV/p3/s9.jpg",
      ],
      header:
        "5kg to 50kg Computerized Vickers Hardness Tester Model No. VM-50-PC",
      p: "The 5kg to 50kg Computerized Vickers Hardness Tester Model No. VM-50-PC offers advanced precision and automation in hardness testing. It is equipped with a test load of 50 kgf, with an optional load of 1 kgf, ensuring versatility in various testing applications. With a maximum test height of 200 mm and a throat depth of 135 mm, it is ideal for a wide range of materials. The tester is known for its accuracy (3%) and is widely used in quality control environments for high-precision testing. The machine is sourced from trusted vendors, ensuring excellent quality and performance.",
      Details: [
        { label: "Model Name/Number", data: "VM-50 PC, VM50 PC" },
        { label: "Accuracy", data: "3%" },
        { label: "Dimension", data: "585x290x860 mm" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "70 kg" },
        { label: "Test Loads", data: "50 kgf" },
        { label: "Maximum Test Height", data: "200 mm" },
        { label: "Throat Depth", data: "135 mm" },
        { label: "Optional Test Load", data: "1 kgf" },
      ],
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const { interest, interestEmail } = useContext(Context);
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
          Vickers Hardness Tester
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Pioneers in the industry, we offer optical vickers hardness tester
          model number : vm-50-1kg (capacity : 1kg to 50kg, make : fie), touch
          screen digital vickers hardness tester model number : vm-50-ts ( range
          : 5 kg to 50kg), optical vickers hardness tester model number : vm-50
          (5kg to 50kg) and 5kg to 50kg computerized vickers hardness tester
          model no. vm-50-pc from India.
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

export default VickerHardnessTester;
