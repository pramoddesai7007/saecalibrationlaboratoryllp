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

function OpticalEmissionSpectrometer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const array = [
    {
      photos: [
        "Products/opticalE/s1.jpg",
        "Products/opticalE/s2.jpg",
        "Products/opticalE/s3.jpg",
        "logo.jpg",
      ],
      header: "Spark Optical Emission Spectrometer",
      p: "Discover the precision and affordability of our intricately designed metal analyzer (spectrometer), offering exceptional analysis at a cost-effective price, ensuring unparalleled value. Ideal for analyzing both ferrous and non-ferrous metals and alloys, our analyzer guarantees meticulous and dependable testing. Trust us to ensure your metal meets the most stringent quality and content standards. The spectrometer features a wavelength range of 175 - 521 nm, with a single beam optical system and CMOS detector. It is designed for spark-type measurement mode and includes a printer port for convenient reporting.",
      Details: [
        { label: "Wavelength Range", data: "175 - 521 nm" },
        { label: "Optical System", data: "Single Beam" },
        { label: "Spectral Bandwidth", data: "175 to 521 nm" },
        { label: "Mobility", data: "Benchtop" },
        { label: "Model Name/Number", data: "MERLIN 4" },
        { label: "Detector", data: "CMOS" },
        { label: "Measurement Mode", data: "Spark type" },
        { label: "Printer Port", data: "Yes" },
      ],
    },
    {
      photos: [
        "Products/opticalE/s3.jpg",
        "Products/opticalE/s4.jpg",
        "Products/opticalE/s5.jpg",
        "logo.jpg",
      ],
      header: "Optical Emission Spectrometer",
      p: "The ARTUS 8 Metal Analyzer fulfills the requirement for achieving fast, precise, and accurate analysis for the perfect melt. It is one of the most powerful, reliable, and versatile metal analyzers available. It is an ideal companion for incoming material, in-process testing, independent laboratory testing, and final quality inspection and certification. The spectrometer features a wavelength range of 146 - 680 nm, with a double beam optical system. The ARTUS 8 is available in three models - Visible, Standard, and Ultimate.",
      Details: [
        { label: "Wavelength Range", data: "146 - 680 nm" },
        { label: "Optical System", data: "Double Beam" },
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
          Optical Emission Spectrometer
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Pioneers in the industry, we offer spark optical emission spectrometer
          from India.
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

export default OpticalEmissionSpectrometer;
