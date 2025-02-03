import React, { useRef, useState } from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GoLaw, GoNote } from "react-icons/go";
import { GrFormPrevious } from "react-icons/gr";
import { IoIosBusiness } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import { MdLabelImportant, MdNavigateNext } from "react-icons/md";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Slider2() {
  const scrollRef = useRef(null); // Reference to the scrollable container
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Function to scroll horizontally
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300; // Adjust this value for the scroll distance
    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const navigate = useNavigate();
  const about = [
    {
      head: "Nature of busniess",
      text: "Wholesale/Distributor",
      icon: <IoIosBusiness />,
    },
    {
      head: "GST Registration Date",
      text: "1 Jan 2025",
      icon: <PiTrademarkRegisteredFill />,
    },
    { head: "Legal Status of Firm", text: "Proprietorship", icon: <GoLaw /> },
    { head: "annual Turnover", text: "5- 25 cr", icon: <FaMoneyBillTrendUp /> },
    {
      head: "Import Export code",
      text: "AFOPT****",
      icon: <MdLabelImportant />,
    },
    {
      head: "Gst No",
      text: "27AFOPT6891H1Zj",
      icon: <GoNote />,
    },
  ];

  const Venues = [
    {
      img: "Slider2/s1.PNG",
      desc: "Computerised & Analogue compression testing Machine",
      path: "/universal",
    },
    {
      img: "Slider2/s2.PNG",
      desc: "Digital hand-operted Coil spring Testing machine",
      path: "/brinell",
    },
    {
      img: "Slider2/s3.PNG",
      desc: "single ball screw driven universal testing machine",
      path: "/impact",
    },
    {
      img: "Slider2/s4.PNG",
      desc: "single ball screw driven universal testing machine",
      path: "/universal",
    },
    {
      img: "Slider2/s5.PNG",
      desc: "single ball screw driven universal testing machine",
      path: "/universal",
    },
    {
      img: "Slider2/s6.PNG",
      desc: "Computerised leaf spring testing machine",
      path: "/rockwell",
    },
  ];
  return (
    // <div className="max-w-7xl rounded-md  mx-auto p-6 bg-gray-100 mt-5">
    <div className="lg:max-w-2xl w-full rounded-md  mx-auto pt-0  mt-5 bg-gray-900">
      <div className="shadow-md   p-2 top-1 w-max bg-gray-100 text-lg relative  left-[620px]">
        <IoSearch
          className="text-blue-500"
          onClick={() => setSearch(!search)}
        />
      </div>
      {search && (
        <div className="bg-white hidden rounded z-20 absolute  p-2 w-max lg:flex right-7 top-[145px]">
          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus
            placeholder="Search Product/Service"
            className="  outline-none"
          />
        </div>
      )}
      <div className="relative bg-gray-900 text-white pt-3">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scroll-smooth lg:space-x-6 px-9 pb-4 lg:ml-[51px] pr-12" // Added `ml-12` for spacing
          style={{ scrollbarWidth: "none" }} // Hide scrollbar for modern browsers
        >
          {Venues.map((venue, index) => (
            <div
              key={index}
              onClick={() => navigate(venue.path)}
              className="lg:min-w-[130px]  lg:h-[200px] border border-white min-w-[100px] lg:p-3 p-2 flex flex-col items-center text-center"
            >
              <div
                className="lg:min-w-[130px] w-[100px]   h-32 lg:h-[140px] flex items-center"
                style={{
                  backgroundImage: `url(${venue.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              ></div>
              <p className="lg:text-sm text-xs  font-medium break-words ">{venue.desc}</p>
            </div>
          ))}
        </div>

        {/* Back button */}
        <button
          className=" absolute lg:ml-2  bg-gray-400 top-1/2 left-2  transform -translate-y-1/2  text-white p-3 rounded-full shadow-md hover:bg-gray-800"
          onClick={() => handleScroll("left")}
        >
          <GrFormPrevious size={20} />
        </button>

        {/* Forward button */}
        <button
          className="absolute top-1/2 right-0 bg-gray-400   transform -translate-y-1/2  text-white p-3 lg:mr-2 rounded-full shadow-md hover:bg-gray-800"
          onClick={() => handleScroll("right")}
        >
          <MdNavigateNext size={20} />
        </button>
      </div>
      <div className=" bg-[#1D5B86]  text-white flex  flex-col gap-2 shadow-lg  lg:p-4 p-2 ">
        <h1 className="lg:text-4xl text-2xl  font-medium">About Company</h1>
        <div className="grid lg:grid-cols-3 grid-cols-2  gap-3">
          {about.map((item, index) => {
            return (
              <div key={index} className="flex gap-3">
                <h1 className="text-2xl relative top-1">{item.icon}</h1>
                <div>
                  <p className="font-medium text-base  break-words">
                    {item.head}
                  </p>
                  <p className="text-xs break-words">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="bg-[#1D5B86]  text-white  lg:text-lg text-sm p-4 pb-1 pt-2">
          We <strong>"SAE Callibration Laboratory LLP"</strong> are Authorized
          Wholesale Dealer, Exporter and Trader of an reliable range of
          Universal Testing Machine, Rockwell Hardness Tester, Micro Vickers
          Hardness Tester, Brinell Hardness Tester, and many more. Read More
        </p>
      </div>
    </div>
  );
}

export default Slider2;
