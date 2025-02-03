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

function TestBlockIdentetor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const array = [
    {
      photos: [
        "Products/Rockwell/s1.PNG",
        "logo.jpg",
        "Products/MicroV/p3/test.jpg",
        "Products/MicroV/p3/s7.jpg",
        "Products/MicroV/p3/s8.jpg",
        "Products/MicroV/p3/s9.jpg",
      ],
      header: "Diamond Identer",
      p: "We are offering high-quality Diamond Identer to our clients. These are designed for industrial applications and come with a polished surface treatment for durability. The Diamond Identer is available in a silver color with a head size of 15 mm and a total size of 50 mm. Each piece is packaged in a packet for easy handling and transport. Ideal for use in various industrial testing and measurement applications.",
      Details: [
        { label: "Minimum Order Quantity", data: "5 Piece" },
        { label: "Usage/Application", data: "Industrial" },
        { label: "Size", data: "50 mm" },
        { label: "Color", data: "Silver" },
        { label: "Brand", data: "DT" },
        { label: "Head Size", data: "15 mm" },
        { label: "Packaging Type", data: "Packet" },
        { label: "Surface Treatment", data: "Polished" },
      ],
    },
    {
      photos: [
        "Products/MicroV/p3/s6.jpg",
        "Products/MicroV/p2/s3.jpg",
        "logo.jpg",
        "Products/MicroV/p2/s3.jpg",
      ],

      header: "Hardness Test Block",
      p: "We offer high-quality Hardness Test Blocks made from gypsum material, designed for precise hardness testing applications. These blocks come in golden and silver colors, with a round shape and a diameter of 2.4 inches. They are polished for a smooth surface finish and are manufactured using a hot-rolled technique, ensuring durability and performance in testing. As a quality-oriented organization, we are committed to providing excellent products to our clients.",
      Details: [
        { label: "Material", data: "Gypsum" },
        { label: "Color", data: "Golden, Silver" },
        { label: "Brand", data: "DT" },
        { label: "Diameter", data: "2.4 inch" },
        { label: "Shape", data: "Round" },
        { label: "Surface Treatment", data: "Polished" },
        { label: "Usage/Application", data: "Hardness Testing" },
        { label: "Technique", data: "Hot Rolled" },
      ],
    },
    {
      photos: [
        "Products/MicroV/p3/s6.jpg",
        "Products/MicroV/p2/s3.jpg",
        "logo.jpg",
        "Products/MicroV/p2/s3.jpg",
      ],

      header: "1 inch Hardness Test Block",
      p: "We supply high-quality 1 inch Hardness Test Blocks made from stainless steel (SS), designed for industrial use. These test blocks are round in shape with a 1-inch diameter and have a polished surface finish, ensuring durability and precision in hardness testing. The blocks are suitable for various imported and indigenous machines, making them versatile and reliable. Our products come with a range of features: Diamond Indentor for Rockwell & Vickers testing, Master Test Blocks for calibration of Rockwell, Brinell & Vickers Hardness Testers, and a Brinell Microscope to measure the diameter of impressions and evaluate Brinell Hardness Number. We source our products from trusted suppliers, ensuring they meet industrial standards for quality and performance.",
      Details: [
        { label: "Material", data: "SS" },
        { label: "Color", data: "Silver" },
        { label: "Brand", data: "DT" },
        { label: "Diameter", data: "1 inch" },
        { label: "Shape", data: "Round" },
        { label: "Surface Finish", data: "Polished" },
        { label: "Usage", data: "Industrial" },
      ],
    },
  ];
  const { interest, interestEmail } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
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
          Test Block and Identetor
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          We are a leading Manufacturer of diamond identer ., hardness test
          block and 1 inch hardness test block from Pimpri Chinchwad, India.
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

export default TestBlockIdentetor;
