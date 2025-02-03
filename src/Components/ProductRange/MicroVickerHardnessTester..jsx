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
function MicroVickerHardnessTester() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { interest, interestEmail } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const array = [
    {
      photos: [
        "Products/MicroV/p1/s1.jpg",
        "Products/MicroV/p1/s2.jpg",
        "Products/MicroV/p1/s3.jpg",
        "Products/MicroV/p1/s4.jpg",
        "Products/MicroV/p1/s5.jpg",
        "Products/MicroV/p1/s6.jpg",
      ],
      header:
        "10gm to 1kg Touch Screen Fully Automatic Digital Micro Vickers Hardness Tester",
      p: "The MMT-X8 Touch Screen Digital Vickers Hardness Tester is a high-tech product that combines optics, mechanics, and electronics to provide precise testing. With a test force range of 0.3 Kgf, it improves the precision and repeatability of the test force, along with the stability of the indicating value. The tester features an 8-inch LCD touch screen display and an LED light source for optimal illumination. The digital measuring eyepiece eliminates the need for checking the table or inputting the diagonal of the indentation, as it directly displays the test force, indentation length, dwell time, test numbers, conversion scale, and date and time. After measuring the indentation length, pressing the eyepiece button will automatically calculate and display the hardness value on the screen. The device is compact with dimensions of 600x220x700 mm and weighs 50 kg. It operates on a 220 V AC, 50 Hz power supply.",
      Details: [
        { label: "Model Name/Number", data: "MMT-X8" },
        { label: "Test Force", data: "0.3 Kgf" },
        { label: "Display Type", data: "LCD Touch Screen" },
        { label: "Display Size", data: "8 inch" },
        { label: "Weight", data: "50 kg" },
        { label: "Light Source", data: "LED" },
        { label: "Power Supply", data: "220 V AC, 50 Hz" },
        { label: "Dimension", data: "600x220x700 mm" },
      ],
    },
    {
      photos: [
        "Products/MicroV/p2/s1.jpg",
        "Products/MicroV/p2/s2.jpg",
        "Products/MicroV/p2/s3.jpg",
        "Products/MicroV/p2/s4.jpg",
        "Products/MicroV/p2/s5.jpg",
        "Products/MicroV/p2/s6.jpg",
      ],
      header: "10gm to 1kg MMT-X2 Micro Vickers Hardness Tester",
      p: "The MMT-X2 Micro Vickers Hardness Tester is a digital instrument designed to measure Vickers and Knoop hardness with high precision. Featuring a robust body made from one-time cast aluminum and car painting technology, it ensures long-lasting stability and an attractive appearance. The system uses top components from American 3M, Allegro, and Japanese Omron, NKK brands, ensuring stable operation for extended periods. The optical system, designed by senior optical engineers, provides clear imaging for both hardness testing and observation of the microstructure of the material. The light source strength can be adjusted to prevent visual fatigue during long operations. The tester can directly show the hardness value on the screen by measuring the indentation diagonal length, eliminating the need to refer to a hardness table. It is equipped with a lifting and positioning system to ensure accuracy and repeatability in the testing process.",
      Details: [
        { label: "Model Name/Number", data: "MMT-X2" },
        { label: "Display Type", data: "Digital" },
        { label: "Dimension", data: "405x290x480 mm (LxWxH)" },
        { label: "Brand", data: "Matrix Testing Machine Services" },
        { label: "Maximum Height", data: "90 mm" },
        { label: "Throat Depth", data: "95 mm" },
        { label: "Power Supply", data: "220 V AC, 50 Hz" },
      ],
    },
    {
      photos: [
        "Products/MicroV/p2/s1.jpg",
        "Products/MicroV/p2/s2.jpg",
        "Products/MicroV/p2/s3.jpg",
        "Products/MicroV/p2/s4.jpg",
        "Products/MicroV/p2/s5.jpg",
        "Products/MicroV/p2/s6.jpg",
      ],
      header: "10gm to 1kg MMT-X2 Micro Vickers Hardness Tester",
      p: "The MMT-X2 Micro Vickers Hardness Tester is a digital instrument designed to measure Vickers and Knoop hardness with high precision. Featuring a robust body made from one-time cast aluminum and car painting technology, it ensures long-lasting stability and an attractive appearance. The system uses top components from American 3M, Allegro, and Japanese Omron, NKK brands, ensuring stable operation for extended periods. The optical system, designed by senior optical engineers, provides clear imaging for both hardness testing and observation of the microstructure of the material. The light source strength can be adjusted to prevent visual fatigue during long operations. The tester can directly show the hardness value on the screen by measuring the indentation diagonal length, eliminating the need to refer to a hardness table. It is equipped with a lifting and positioning system to ensure accuracy and repeatability in the testing process.",
      Details: [
        { label: "Model Name/Number", data: "MMT-X2" },
        { label: "Display Type", data: "Digital" },
        { label: "Dimension", data: "405x290x480 mm (LxWxH)" },
        { label: "Brand", data: "Matrix Testing Machine Services" },
        { label: "Maximum Height", data: "90 mm" },
        { label: "Throat Depth", data: "95 mm" },
        { label: "Power Supply", data: "220 V AC, 50 Hz" },
      ],
    },
    {
      photos: [
        "Products/MicroV/p3/s1.jpg",
        "Products/MicroV/p3/s2.jpg",
        "Products/MicroV/p3/s3.jpg",

        "Products/MicroV/p3/s4.jpg",
        "Products/MicroV/p3/s5.jpg",
        "Products/MicroV/p3/s6.jpg",
      ],
      header: "10gm to 1kg Computerized Micro Vickers Hardness Tester",
      p: "The 10gm to 1kg Computerized Micro Vickers Hardness Tester is an advanced automatic design hardness testing machine. It features automatic loading, dwell time, unloading, and automatic measuring for seamless operation. The machine is made with a one-time casting shell with car painting, ensuring a more stable structure and an aesthetically pleasing appearance. It has a traditional keypad operation panel that provides long and stable working service time. The LED light source is adjustable to avoid visual fatigue and has a longer service life. The dual optical path design allows the eyepiece and photography path to work simultaneously, providing a high-resolution optical system that produces clear indentation images. The software can convert HV hardness values into other scales like HRA, HRB, HRC, HBW, HK, etc., and generate test reports directly in Word or Excel format. The tester works with a 5-million-pixel digital camera, offering better photo quality for the indentation. It also supports hardness conversion, allowing the direct calculation of various hardness scales from the HV value.",
      Details: [
        {
          label: "Automation Design",
          data: "Automatic loading, dwell, unloading, and measuring",
        },
        {
          label: "Body Construction",
          data: "One-time casting shell with car painting",
        },
        {
          label: "Operation Panel",
          data: "Traditional keypad for long service time",
        },
        {
          label: "Light Source",
          data: "LED, adjustable to prevent visual fatigue",
        },
        {
          label: "Optical Path",
          data: "Dual optical path for eyepiece and photography",
        },
        {
          label: "Optical System",
          data: "High-resolution for clear indentation images",
        },
        {
          label: "Software Features",
          data: "Converts HV to HRA, HRB, HRC, HBW, HK, etc., and generates reports in Word/Excel format",
        },
        {
          label: "Camera",
          data: "5 million digital pixel camera for better indentation photo quality",
        },
      ],
    },

    {
      photos: [
        "Products/MicroV/p3/s1.jpg",
        "Products/MicroV/p3/s2.jpg",
        "Products/MicroV/p3/s3.jpg",

        "Products/MicroV/p3/s4.jpg",
        "Products/MicroV/p3/s5.jpg",
        "Products/MicroV/p3/s6.jpg",
      ],
      header: "1kg Computerized Micro Vickers Hardness Tester",
      p: "The 1kg Computerized Micro Vickers Hardness Tester is an automatic hardness testing machine with high precision and reliability. It features an LED display for clear readings. The test load capacity ranges from 10-500 gf, and the clamping vice has a capacity of 40 mm. The measuring range of the tester is from 0.01 to 0.2 mm. As a quality-oriented organization, we focus on providing our clients with excellent quality Micro Vickers Hardness Testers.",
      Details: [
        { label: "Display Type", data: "LED" },
        { label: "Model Name/Number", data: "MV 1 PC" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Test Loads", data: "10-500 gf" },
        { label: "Clamping Vice Capacity", data: "40 mm" },
        { label: "Measuring Range", data: "0.01 to 0.2 mm" },
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
          Micro Vickers Hardness Tester
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Leading Manufacturer of 10gm to 1kg touch screen fully automatic
          digital micro vickers hardness tester, 10gm to 1kg mmt-x2 micro
          vickers hardness tester, 10gm to 1kg computerized micro vickers
          hardness tester and 1kg computerized micro vickers hardness tester
          from Pimpri Chinchwad.
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

export default MicroVickerHardnessTester;
