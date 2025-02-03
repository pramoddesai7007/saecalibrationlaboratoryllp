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
function MetalurgicalMicroscope() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { interest, interestEmail } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const array = [
    {
      photos: [
       
        "Products/opticalE/s7.jpg",
        "Products/opticalE/s6.jpg",
        "logo.jpg",
      ],
      header: "Automatic Charpy Impact Testing Machine 300 Joule Capacity",
      p: "The Automatic Charpy Impact Testing Machine, Model No. Auto-Impact 30, is designed for conducting Izod and Charpy tests. This machine complies with the standards BS: 131: PART 4-1972 (Amended 15 Aug. 1993) and BSEN: 10045-2: 1993. The pendulum lifts, the specimen is loaded, and the pendulum is automatically released. Once the specimen breaks, the result is displayed on the digital panel, and the auto brake is applied immediately. The pendulum is mounted on antifriction bearings and has two starting positions: the upper one for Charpy testing and the lower one for Izod testing. On automatic release, the pendulum swings down to break the specimen, and the energy absorbed is measured by the difference between the drop height before rupture and the rise height after rupture. The energy value is read in Joules on the digital panel. The Charpy test piece rests on support anvils, which are rigidly held in position, ensuring quick and accurate specimen location. End stoppers are provided for precise specimen placement between the supports.",
      Details: [
        { label: "Model Name/Number", data: "IT30 ASTM Auto" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Capacity", data: "300J" },
        { label: "Voltage", data: "440 V 3 Phase" },
        { label: "Display Type", data: "HMI" },
        { label: "Weight", data: "450 kg" },
        { label: "Izod Strike", data: "No" },
        { label: "Warranty", data: "One Year" },
        { label: "Distance Between Specimen Anvils", data: "50" },
        { label: "Air Pressure", data: "30 Bar" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },

    {
      photos: [
        "Products/opticalE/s7.jpg",
        "Products/opticalE/s6.jpg",

        "logo.jpg",
      ],
      header: "Video Measuring Machine MATRIX-VMM200",
      p: "The MATRIX-VMM200 Video Measuring Machine is designed for high-precision measurement tasks. It features automatic operation with a scale resolution of X, Y-axis accuracy (2.5+L/150) micron, and a resolution of 1 micron. The stage load capacity is 15kg, and it has a zoom range of 0.7x - 4.5x. The machine is equipped with a complete marble base, workstage, and column, ensuring high stability and accuracy. It also includes an ergonomic design, highly accurate measurements, an advanced illumination system, a robust marble base, high image quality, and high magnification with distortion-free images. The power supply supports both 100V-120V and 200-240V AC, and the machine weighs 140kg.",
      Details: [
        { label: "Model Name/Number", data: "MATRIX-VMM200" },
        { label: "Automation Grade", data: "Automatic" },
        {
          label: "Scale Resolution",
          data: "X, Y-axis accuracy (2.5+L/150) micron",
        },
        { label: "Resolution", data: "1 micron" },
        { label: "Capacity", data: "Stage load capacity 15kg" },
        { label: "Dimension", data: "600*550*980 mm (L*W*H)" },
        { label: "Power", data: "100V-120V/200-240V AC, 50/60HZ" },
        { label: "Weight", data: "140kg" },
        { label: "Zoom Range", data: "Zoom lens 0.7x - 4.5x" },
        {
          label: "Measure Range Mm",
          data: "Z-axis focal length (mm) 90 (Focus range) 1 micron",
        },
        { label: "Body", data: "Complete Marble Base, Workstage and Column" },
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
          Metallurgical Microscope
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Our range of products include video measuring machine and 50 to 1000x
          magnification inverted type metallurgical microscope.
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

export default MetalurgicalMicroscope;
