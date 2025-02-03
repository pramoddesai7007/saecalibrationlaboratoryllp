// import React, { useContext, useEffect, useState } from "react";
// import DemoCard from "../../Pages/DemoCard";
// import ExploreMoreProduct from "../../Layout/ExploreMoreProduct";
// import { Context } from "../../Pages/ContextApi";
// import Interested from "../../Pages/Interested";
// import { useNavigate } from "react-router-dom";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import InterestedMail from "../../Pages/InterestedEmail";
// import BestDeal from "../Cards/BestDeal";
// import Strip from "../Homepage/Strip";

// function PortableHardnessTester() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const { interest,interestEmail } = useContext(Context);
//   const navigate = useNavigate();
//   const [searchValue, setSearchValue] = useState("");
//   return (
//     <div className="bg-gray-100 lg:pt-20 pt-24">
//       <div className="flex justify-between bg-gray-100 lg:px-10 p-4 cursor-pointer">
//         <div className="flex gap-1">
//           <p className="flex gap-1" onClick={() => navigate("/")}>
//             {" "}
//             Home <MdKeyboardDoubleArrowRight className="relative top-1" />
//           </p>
//           <p className="flex gap-1" onClick={() => navigate("/products")}>
//             Products <MdKeyboardDoubleArrowRight className="relative top-1" />
//           </p>
//         </div>
//         <div className="bg-white hidden rounded z-20 absolute  p-2 w-max lg:flex right-4 border top-[90px]">
//           <input
//             type="search"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             autoFocus
//             placeholder="Search Product/Service"
//             className="  outline-none"
//           />
//         </div>
//       </div>
//       <div className="bg-white p-3 flex flex-col gap-1">
//         <h1 className="lg:text-2xl text-lg font-light text-gray-500">
//           Portable Hardness Tester
//         </h1>
//         <p className="text-gray-700 text-justify lg:text-base text-sm">
//           Prominent & Leading Manufacturer from Pimpri Chinchwad, we offer
//           colour display mash projects make portable leeb hardness tester,
//           dynamic portable leeb (rebound type) hardness tester, portable
//           hardness tester tkm359ce, mic10 uci type hardness tester ultrasonic
//           contact impedance, poldi hardness tester and leeb, rebound type
//           portable hardness tester.
//         </p>
//       </div>
//       <div className="flex flex-col gap-10">
//         <DemoCard />
//         <DemoCard />
//         <DemoCard />
//         <DemoCard />
//         <BestDeal />
//         <Strip />
//       </div>
//       <ExploreMoreProduct />
//       {interest && <Interested />}
//       {interestEmail && <InterestedMail/>}
//     </div>
//   );
// }

// export default PortableHardnessTester;

import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../Pages/ProductCard";
import ExploreMoreProduct from "../../Layout/ExploreMoreProduct";
import { Context } from "../../Pages/ContextApi";
import Interested from "../../Pages/Interested";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import InterestedMail from "../../Pages/InterestedEmail";
import BestDeal from "../Cards/BestDeal";
import Strip from "../Homepage/Strip";
function PortableHardnessTester() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { interest, interestEmail } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const array = [
    {
      photos: [
        "Products/Portable/s1.jpg",
        "logo.jpg",
        "Products/Portable/s2.jpg",
        "Products/Portable/s3.jpg",
        "Products/Portable/s4.jpg",
        "Products/Portable/s5.jpg",
        "Products/Portable/s1.jpg",
        "logo.jpg",
      ],
      header: "Colour Display Mash Projects Make Portable LEEB Hardness Tester",
      p: "High precision hardness tester TKM 359CE is designed for quick measurement of metal items in laboratory, manufacturing, and field conditions. It is intended for non-destructive testing in metallurgy, mechanical engineering, and various industries like aerospace, shipbuilding, and oil & gas. The tester uses the Leeb method for hardness testing.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Unit" },
        { label: "Parameter", data: "NA" },
        { label: "Display Type", data: "Colour Display" },
        { label: "Model Number", data: "TKM359CE" },
        { label: "Accuracy", data: "As per ASTM" },
        { label: "Dimension", data: "10" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "300 grams" },
        { label: "Hardness Scale", data: "HV BHN & HRC" },
        { label: "Warranty", data: "12 Months" },
        { label: "Voltage", data: "220" },
        { label: "Brand", data: "MashProject" },
        { label: "Is It Portable", data: "Portable" },
      ],
    },
    {
      photos: [
        "Products/Portable/s1.jpg",
        "logo.jpg",
        "Products/Portable/s5.jpg",
        "Products/Portable/s2.jpg",
        "Products/Portable/s8.jpg",
        "Products/Portable/s5.jpg",
        "Products/Portable/s1.jpg",
        "logo.jpg",
      ],
      header: "Portable Hardness Tester TKM359CE",
      p: "High precision hardness tester TKM 359CE is designed for quick measurement of metal items in laboratory, manufacturing, and field conditions. It is intended for non-destructive testing in metallurgy, mechanical engineering, aircraft, shipbuilding, atomic industry, and oil & gas industries. The tester functions using the Leeb method.",

      Details: [
        { label: "Parameter", data: "HRC" },
        { label: "Display Type", data: "Digital" },
        { label: "Model Name/Number", data: "TKM 359 CE" },
        { label: "Accuracy", data: "3%" },
        { label: "Dimension", data: "121x69x41 mm" },
        { label: "Brand", data: "Mashproject" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "PC Connection", data: "USB" },
        { label: "Power Supply", data: "LI-ion Accumulator" },
      ],
    },
    {
      photos: [
        "Products/Portable/s1.jpg",
        "logo.jpg",
        "Products/Portable/s4.jpg",
        "Products/Portable/s3.jpg",
        "Products/Portable/s5.jpg",
        "Products/Portable/s2.jpg",
        "Products/Portable/s8.jpg",
        "logo.jpg",
      ],
      header: "Mic10 UCI Type Hardness Tester",
      p: "We are dealing in Hardness Tester. The Mic10 is an Ultrasonic Contact Impedance (UCI) type hardness tester designed for precise hardness measurement in laboratory, manufacturing, and field conditions.",
      Details: [
        { label: "Parameter", data: "HRC" },
        { label: "Display Type", data: "Digital" },
        { label: "Model Name/Number", data: "MIC10" },
        { label: "Accuracy", data: "3%" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "200 g" },
        { label: "Warranty", data: "24 Months" },
      ],
    },
    {
      photos: ["Products/Portable/s1.jpg", "logo.jpg", "logo.jpg"],
      header: "Poldi Hardness Tester",
      p: "As a quality-oriented organization, we are focused to provide our clients excellent quality Poldi Hardness Tester.",
      Details: [
        { label: "Parameter", data: "HB" },
        { label: "Display Type", data: "Analog" },
        { label: "Accuracy", data: "0.05 mm" },
        { label: "Automation Grade", data: "Manual" },
        { label: "Packaging Type", data: "Wooden Box" },
        { label: "Measuring Range", data: "10 mm" },
        { label: "Feature", data: "Portable" },
      ],
    },
    {
      photos: [
        "Products/Portable/s1.jpg",
        "logo.jpg",
        "Products/Portable/s4.jpg",
        "Products/Portable/s5.jpg",
        "Products/Portable/s8.jpg",
        "logo.jpg",
      ],
      header: "Leeb, Rebound Type Portable Hardness Tester",
      p: "High precision hardness tester TKM 359CE intended for quick measuring of metal items in laboratorial, manufacturing, and field conditions. Device is intended for non-destructive testing of production quality in metallurgy, mechanical engineering, aircraft, shipbuilding, atomic industry, and oil and gas industry. Hardness tester functions by Leeb method. TKM-359CE controls hardness of all basic types of metals and alloys without additional calibrations, items with surface hardening and high-frequency current hardening, items of complicated configuration, and heavy and big items with rough surfaces.",
      Details: [
        { label: "Minimum Order Quantity", data: "01 Unit" },
        { label: "Display Type", data: "COLOUR DISPLAY" },
        { label: "Model Number", data: "TKM359CE" },
        { label: "Accuracy", data: "AS PER ASTM" },
        { label: "Dimension", data: "10" },
        { label: "Brand", data: "MASHPROJECT" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "200 GRAMS" },
        { label: "Hardness Scale", data: "HBW HRC HV AND HLD" },
        { label: "Warranty", data: "12 MONTHS" },
        { label: "Voltage", data: "220" },
        { label: "Power", data: "10W" },
        { label: "Memory", data: "NA" },
        { label: "Drive Type", data: "NA" },
        { label: "Test Range", data: "NA" },
        { label: "Test Force", data: "NA" },
        { label: "Humidity", data: "85" },
        { label: "Temperature", data: "50" },
        { label: "Diameter", data: "NA" },
      ],
    },
    {
      photos: ["Products/Portable/s1.jpg", "logo.jpg", "logo.jpg"],
      header: "Equotip Hardness Tester",
      p: "We are dealing in Equotip Hardness Tester, which provides precise hardness measurement with high accuracy. Suitable for various industrial applications.",
      Details: [
        { label: "Parameter", data: "HRC" },
        { label: "Display Type", data: "Digital" },
        { label: "Model Name/Number", data: "MIC 10" },
        { label: "Accuracy", data: "3%" },
        { label: "Automation Grade", data: "Automatic" },
      ],
    },
    {
      photos: [
        "Products/Portable/s1.jpg",
        "logo.jpg",
        "Products/Portable/s4.jpg",
      ],

      header:
        "Color Display Ultrasonic Contact Impedance Portable Hardness Tester",
      p: "High precision hardness tester TKM-459CE intended for quick measuring of metal items' hardness in laboratorial, manufacturing, and field conditions. Designed for non-destructive testing in metallurgy, mechanical engineering, aircraft, shipbuilding, atomic industry, and oil & gas sectors. It functions using the UCI method (Ultrasonic Contact Impedance).",
      Details: [
        { label: "Display Type", data: "Digital" },
        { label: "Model Name/Number", data: "TKM 459 CE" },
        { label: "Accuracy", data: "3%" },
        { label: "Brand", data: "Mashproject" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "300 g" },
        { label: "Power Supply", data: "LI-ion Accumulator" },
        { label: "Dimensions", data: "121x69x41 mm" },
        { label: "Duration of One Measurement", data: "2 Sec" },
        { label: "PC Connection", data: "USB" },
      ],
    },
    {
      photos: ["Products/Portable/s1.jpg","logo.jpg", "Products/Portable/s4.jpg",],
      header:
        "Colour Display Portable Ultrasonic Contact Impedance UCI Hardness Tester",
      p: "High precision hardness tester TKM-459CE intended for quick measuring of metal items' hardness in laboratorial, manufacturing, and field conditions. Designed for non-destructive testing in metallurgy, mechanical engineering, aircraft, shipbuilding, atomic industry, and oil & gas sectors. It functions using the UCI method (Ultrasonic Contact Impedance).",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Number" },
        { label: "Display Type", data: "COLOUR DISPLAY" },
        { label: "Model Number", data: "TKM459CE" },
        { label: "Accuracy", data: "AS PER ASTM" },
        { label: "Dimension", data: "10" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "200 GRAMS" },
        { label: "Hardness Scale", data: "ALL SCALES" },
        { label: "Warranty", data: "12 MONTHS" },
        { label: "Voltage", data: "220" },
        { label: "Brand", data: "MASHPROJECT" },
        { label: "Headset Weight", data: "200 Grams" },
      ],
    },
  ];
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
          Portable Hardness Tester
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Prominent & Leading Manufacturer from Pimpri Chinchwad, we offer
          colour display mash projects make portable leeb hardness tester,
          dynamic portable leeb (rebound type) hardness tester, portable
          hardness tester tkm359ce, mic10 uci type hardness tester ultrasonic
          contact impedance, poldi hardness tester and leeb, rebound type
          portable hardness tester.
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
                key={index}
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

export default PortableHardnessTester;
