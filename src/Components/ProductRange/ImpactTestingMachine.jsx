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
function BrinnellHArdnessTester() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { interest, interestEmail } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const array = [
    {
      photos: ["Products/Impact/s1.jpg", "logo.jpg", "logo.jpg"],
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
      photos: ["Products/Impact/s5.jpg", "logo.jpg", "Products/Impact/s5.jpg"],
      header:
        "Impact Testing Machine Model Number: IT-30-STD (Capacity 300 Joule)",
      p: "The pendulum Impact Tester, Model: IT-30-STD, is designed for conducting Izod and Charpy tests. This machine follows the test methods outlined in BS: 131: PART 4-1972 (Amended 15 Aug. 1993) and BSEN: 10045-2: 1993. The pendulum lifts, the specimen is loaded, and the pendulum is released automatically. Once the specimen breaks, the result is displayed on the digital panel, and the auto brakes are applied immediately. The pendulum is mounted on antifriction bearings and has two starting positions: the upper one for Charpy and the lower one for Izod testing. When the pendulum is released, it swings down to break the specimen, and the energy absorbed is measured by the difference between the drop height before rupture and the rise height after rupture. The result is read in Joules on the digital panel.",
      Details: [
        { label: "Model Name/Number", data: "IT-30-STD" },
        { label: "Automation Grade", data: "Manual" },
        { label: "Capacity", data: "300 J/168 J" },
        { label: "Brand", data: "FIE" },
        { label: "Material", data: "Mild Steel" },
        { label: "Weight", data: "375 Kg" },
        { label: "Power", data: "Electric" },
        { label: "Izod Strike", data: "1" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Products/Impact/s4.jpg",
        "logo.jpg",
        "Products/Impact/s2.jpg",
        "Products/Impact/s4.jpg",
      ],

      header:
        "Impact Testing Machine Model Number: IT-30-D (300 Joule Capacity) Digital Charpy Izod",
      p: "The pendulum Impact Tester, Model IT-30-D, is designed for conducting Izod and Charpy tests. The test methods confirm to BS: 131: PART 4-1972 (Amended 15 Aug. 1993) and BSEN: 10045-2: 1993. The pendulum is mounted on antifriction bearings and has two starting positions: the upper one for Charpy and the lower one for Izod testing. Upon release, the pendulum swings down to break the specimen, and the energy absorbed is measured as the difference between the height of drop before rupture and the height after rupture. This energy is then read from the maximum pointer position on the digital readout in electronic machines. The machine includes two strikers and one combined support anvil for fitting into the pendulum and the base of the machine for Izod and Charpy tests respectively. Changing from one striker to another is achieved simply by fixing the new striker into its position. For the Charpy test, the test piece rests on alloy steel support anvils, fitted on the base of the machine and rigidly held in position by Allen screws. An end stopper is provided for quickly and accurately locating the test piece centrally between the supports.",
      Details: [
        { label: "Model Name/Number", data: "IT-30-D" },
        { label: "Automation Grade", data: "Manual" },
        { label: "Capacity", data: "300J" },
        { label: "Brand", data: "FIE" },
        { label: "Display Type", data: "7 Segment LED" },
        { label: "Weight", data: "375 kg" },
        { label: "Power", data: "230V" },
        { label: "Izod Strike", data: "Yes" },
        { label: "Warranty", data: "One Year" },
        { label: "Impact Energy", data: "300J" },
        { label: "Maximum Scale Graduation", data: "0.5J" },
        { label: "Distance between specimen anvils", data: "50" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Products/Impact/s5.jpg",
        "logo.jpg",
        "Products/Impact/s2.jpg",
        "Products/Impact/s6.jpg",
      ],

      header:
        "Impact Testing Machine Model Number: IT-30-ASTM ASTM (300 Joule Capacity)",
      p: "The Impact Tester offered with 300 & 400 J energy is exclusively for Charpy testing, confirming to ASTM E-23. This machine is geometrically checked in the works to meet the more stringent requirements of the American standard. The accuracy of the machine is then verified by a PROOF TEST, using standard test specimens supplied by the NIST, USA. Two sets (Low & high energy-1 Set, 4 Nos. each) must agree with the normal values within certain tolerance specified.",
      Details: [
        { label: "Model Name/Number", data: "IT 30 ASTM" },
        { label: "Automation Grade", data: "Manual" },
        { label: "Capacity", data: "300J" },
        { label: "I Deal In", data: "New Only" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
       "Products/Impact/s1.jpg",
       "logo.jpg",
       "Products/Impact/s2.jpg",
       "Products/Impact/s1.jpg",
       "Products/Impact/s1.jpg",
      ],
      header: "Automatic Impact Testing Machine IT50 ASTM Auto",
      p: "FIE's Charpy pendulum Impact Testing Machine, Model: IT-50 (ASTM) serves for conducting Charpy impact testing according to ASTM-E23 standard to determine the behaviors of the metal, especially steel casting, under impact stresses. The machine is fully automatic and easy to operate. It comes with a safety cover and enclosure, which are equipped with door interlocks, ensuring the operator can work safely. A high-resolution encoder is fitted in the machine, which can read the absorbed energy to less than 1J.",

      Details: [
        { label: "Model Name/Number", data: "IT50 ASTM Auto" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Capacity", data: "500J" },
        { label: "Brand", data: "FIE" },
        { label: "Voltage", data: "440V" },
        { label: "Display Type", data: "HMI" },
        { label: "Country of Origin", data: "Made in India" },
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
          Impact Testing Machine
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Manufacturer of a wide range of products which include automatic
          charpy impact testing machine 300 joule capacity model no. :
          auto-impact 30, impact testing machine model number : it-30-std
          (capacity 300 joule), impact testing machine model number : it-30-d
          (300 joule capacity) digital charpy izod, impact testing machine model
          number : it-30-astm astm (300 joule capacity) and automatic impact
          testing machine it50 astm auto.
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

export default BrinnellHArdnessTester;
