import React, { useContext, useRef } from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GoLaw, GoNote } from "react-icons/go";
import { GrFormPrevious } from "react-icons/gr";
import { IoIosBusiness } from "react-icons/io";

import { MdLabelImportant, MdNavigateNext } from "react-icons/md";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { Context } from "../Pages/ContextApi";

function ExploreMoreProduct() {
  const { link } = useContext(Context);
  const scrollRef = useRef(null); // Reference to the scrollable container

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
  const { interest, setInterest, setInterestData } = useContext(Context);

  // const about = [
  //   {
  //     head: "Nature of busniess",
  //     text: "Wholesale/Distributor",
  //     icon: <IoIosBusiness />,
  //   },
  //   {
  //     head: "GST Registration Date",
  //     text: "1 Jan 2025",
  //     icon: <PiTrademarkRegisteredFill />,
  //   },
  //   { head: "Legal Status of Firm", text: "Proprietorship", icon: <GoLaw /> },
  //   { head: "annual Turnover", text: "5- 25 cr", icon: <FaMoneyBillTrendUp /> },
  //   {
  //     head: "Import Export code",
  //     text: "AFOPT****",
  //     icon: <MdLabelImportant />,
  //   },
  //   {
  //     head: "Gst No",
  //     text: "27AFOPT6891H1Zj",
  //     icon: <GoNote />,
  //   },
  // ];

  const Venues = [
    {
      img: "Slider2/s1.PNG",
      desc: "Computerised & Analogue compression testing Machine",
    },
    {
      img: "Slider2/s2.PNG",
      desc: "Digital hand-operted Coil spring Testing machine",
    },
    {
      img: "Slider2/s3.PNG",
      desc: "single ball screw driven universal testing machine",
    },
    {
      img: "Slider2/s4.PNG",
      desc: "single ball screw driven universal testing machine",
    },
    {
      img: "Slider2/s5.PNG",
      desc: "single ball screw driven universal testing machine",
    },
    {
      img: "Slider2/s6.PNG",
      desc: "Computerised leaf spring testing machine",
    },
  ];
  return (
    // <div className="max-w-7xl rounded-md  mx-auto p-6 bg-gray-100 mt-5">
    <div className="lg:max-w-8xl w-full rounded-xl mx-auto p-6 bg-gray-100 mt-5">
      <h1 className="text-2xl font-medium underline">Explore More Products</h1>
      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth lg:space-x-6 pb-4 lg:ml-12 pr-12" // Added `ml-12` for spacing
          style={{ scrollbarWidth: "none" }} // Hide scrollbar for modern browsers
        >
          {Venues.map((venue, index) => (
            <div
              key={index}
              className="lg:min-w-[258px] min-w-[180px] lg:p-3 p-2 flex flex-col items-center text-center"
            >
              <div
                className="lg:w-56 w-32 h-32 lg:h-56 flex items-center"
                style={{
                  backgroundImage: `url(${venue.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              ></div>
              <p className=" font-bold break-words ">{venue.desc}</p>
              <div className="flex justify-center p-2 pt-5">
                <button
                  onClick={() => {
                    setInterest(!interest);
                    setInterestData({
                      img: venue.img,
                      header: venue.desc,
                      d1: { label: "Minimum Order Quantity", data: "1 Unit" },
                      d2: { label: "Parameter", data: "NA" },
                      d3: { label: "Display Type", data: "COLOUR DISPLAY" },
                      d4: { label: "Model Number", data: "TKM359CE" },

                      price: "2.5 Lakh",
                    });
                  }} 
                  className="text-white hover:bg-white hover:text-black hover:shadow-4xl  cursor-pointer w-max bg-[#1D5B86] text-lg px-6 p-2"
                >
               Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <button
          className=" absolute top-1/2 left-2  transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800"
          onClick={() => handleScroll("left")}
        >
          <GrFormPrevious size={20} />
        </button>

        {/* Forward button */}
        <button
          className="absolute top-1/2 right-0  transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800"
          onClick={() => handleScroll("right")}
        >
          <MdNavigateNext size={20} />
        </button>
      </div>
    </div>
  );
}

export default ExploreMoreProduct;
