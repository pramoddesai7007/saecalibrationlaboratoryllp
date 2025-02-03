import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProductRange from "../Components/Homepage/ProductRange";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Context } from "./ContextApi";
import Interested from "./Interested";
import InterestedMail from "./InterestedEmail";

function Sitemap() {
  const links = [
    {
      name: "Testimonial",
      path: "/testimonial",
    },
    {
      name: "Distributed Enquiry Form",
      path: "/enquiry",
    },

    {
      name: "Quality And compliance",
      path: "/quality",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { interest,interestEmail } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="lg:pt-20 pt-24">
      <div className="flex justify-between bg-gray-100 lg:px-10 p-4 cursor-pointer">
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
      <h1 className="px-6 text-3xl font-medium p-4 underline rounded-lg text-gray-700 shadow-md m-2">
        Site Map
      </h1>
      <div className="p-5  m-1 shadow-lg rounded-xl px-8">
        <p className="text-2xl font-light py-5 ">Know Us</p>
        <div className="flex flex-col gap-5 text-lg text-blue-400 undeline  ">
          {links.map((item, index) => {
            return (
              <NavLink
                className="hover:text-blue-700 underline"
                to={item.path}
                key={index}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      <ProductRange />
      {interest && <Interested />}
      {interestEmail && <InterestedMail/>}
    </div>
  );
}

export default Sitemap;
