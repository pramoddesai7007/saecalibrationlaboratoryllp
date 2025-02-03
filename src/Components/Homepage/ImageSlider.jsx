import React, { useContext, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Context } from "../../Pages/ContextApi";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "Slideshow/s1.png",
    title: "ANALOGUE - UNIVERSAL TESTING MACHINES (MODEL :TUN)",
    // description: "capacities from 100kN to 2000 kN available",
    price: "Price : 5.2 Lakh/Unit",
    path: "/universal",
  },
  {
    image: "Slideshow/s2.PNG",
    title: "ANALOGUE - UNIVERSAL TESTING MACHINES (MODEL :TUE -C)",
    // description: "capacities from 100kN to 2000 kN available",
    price: "Price : 3.2 Lakh/Unit",
    path: "/universal",
  },
  {
    image: "Slideshow/s3.PNG",
    title:
      "ANALOGUE CUM COMPUTERISED - UNIVERSAL TESTING MACHINES (MODEL :TUE -CN)",
    // description: "capacities from 100kN to 2000 kN available",
    price: "Price : 6.2 Lakh/Unit",
    path: "/universal",
  },
  {
    image: "Slideshow/s4.PNG",
    title:
      "SERVO COMPUTERISED - UNIVERSAL TESTING MACHINES (MODEL :TUE-C-SERVO)",
    // description: "capacities from 100kN to 2000 kN available",
    price: "Price :7.2 Lakh/Unit",
    path: "/universal",
  },
  {
    image: "Slideshow/s5.PNG",
    title:
      "ANALOGUE &  COMPUTERISED - UNIVERSAL TESTING MACHINES (MODEL :TUE-C-SERVO)",
    // description: "capacities from 100kN to 2000 kN available",
    price: "Price : 5.2 Lakh/Unit",
  },
  {
    image: "Slideshow/s6.PNG",
    title:
      "SERVO COMPUTERISED - UNIVERSAL TESTING MACHINES (MODEL :TUE-C-1200 kN-SERVO)",
    // description: "Machine Strictly confirmed to IS 1828/BS:1610 standard",
    price: "Price : 6.2 Lakh/Unit",
    path: "/universal",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { link } = useContext(Context);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const header = "  Dynamic Portable Leeb (Rebound Type) Hardness Tester";
  const price = "₹ 2.5 Lakh";
  const { interest, setInterest, setInterestData } = useContext(Context);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pb-0  bg-[#EDEDEE]">
      <div className="relative group h-[340px] w-full bg-white ">
        {/* Main Image */}
        <div
          onClick={() => navigate(slides[currentIndex].path)}
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          className="w-full h-full  bg-center bg-cover duration-500 "
        />

        {/* Navigation Arrows */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all">
          <ChevronRight onClick={nextSlide} size={30} />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                slideIndex === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div
        className=" bg-white shadow-md p-6 text-center pb-9 "
       
      >
        <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-2">
          {slides[currentIndex].title}
        </h2>
        <p className="text-gray-600 mb-4">{slides[currentIndex].description}</p>
        <div className="flex justify-between items-center max-w-sm mx-auto pt-5">
          {/* <span className=" text-gray-600  font-medium text-lg">
            {slides[currentIndex].price}
          </span> */}

          <button
            onClick={() => {
              setInterest(!interest);
              setInterestData({
                img: "Slider2/s1.PNG",
                header: header,
                d1: { label: "Parameter", data: "NA" },
                d2: { label: "Display Type", data: "COLOUR DISPLAY" },
                d3: { label: "Minimum Order Quantity", data: "1 Unit" },
                d4: { label: "Accuracy", data: "AS PER ASTM" },
                price: price,
              });
            }}
            className="text-white cursor-pointer w-max bg-[#1D5B86] lg:text-lg px-6 relative  left-16 p-2"
          >
            Get Instant Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
