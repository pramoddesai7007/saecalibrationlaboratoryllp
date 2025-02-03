/* eslint-disable react/prop-types */
// import React, { useState } from "react";
// import { AiFillProduct } from "react-icons/ai";

// function DemoCard() {
//   const photos = [
//     "Slider2/s1.PNG",
//     "Slider2/s2.PNG",
//     "Slider2/s3.PNG",
//     "Slider2/s4.PNG",
//     "Slider2/s5.PNG",
//     "Slider2/s6.PNG",
//   ];
//   const details = [
//     { label: "Minimum order quantity", data: "1 Unit" },
//     { label: "Parameter", data: "NA" },
//     { label: "Display Type", data: "Colour Dispaly" },
//     { label: "Model Number", data: "TKM359CE" },
//     { label: "Acccuracy", data: "As per ASTM" },
//     { label: "Dimesion", data: "10" },
//   ];
//   const [img, setImg] = useState(photos[0]);
//   return (
//     <div className="flex">
//       <div className="flex gap-2 w-[40%]">
//         {/* Main Image */}
//         <div>
//           <h1 className="text-lg  text-blue-600">
//             Dynamic Portable Leeb (Rebund type) Hardness Tester
//           </h1>
//           <div className="border h-[500px] w-[500px] overflow-hidden flex justify-center items-center rounded-lg">
//             <img src={img} alt="Main" className="h-full w-full object-cover" />
//           </div>
//         </div>

//         {/* Thumbnails */}
//         <div className="p-2">
//           <div className="flex flex-col gap-2 rounded-lg">
//             {photos.map((item, index) => {
//               return (
//                 <img
//                   src={item}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="border p-1 rounded-lg h-20 w-20 object-cover cursor-pointer"
//                   onMouseEnter={() => setImg(item)}
//                   key={index}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div className="w-[60%]">
//         <h1>
//           Approx. Price : <strong className="text-xl">RS 2.5 Lakh</strong> /Unit
//           <hr />
//         </h1>
//         <p className="font-bold text-xl flex gap-2">
//           {" "}
//           <AiFillProduct className="relative top-1 text-xl" />
//           Product Details :
//         </p>
//         <table cellPadding={"2"} cellSpacing={"10"}>
//           <tbody>
//             {details.map((item, index) => {
//               return (
//                 <tr key={index} className="w-full" >
//                   <td className="w-[50%] p-3 border-b border-r">{item.label}</td>
//                   <td className="w-full  p-3 border-b">{item.data}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default DemoCard;

import React, { useContext, useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { Context } from "./ContextApi";
import Strip from "../Components/Homepage/Strip";
import { CgFileDocument } from "react-icons/cg";
import { FaCrown, FaSearchPlus } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function ProductCard({ photos, details, header, p }) {
  const { interest, setInterest, setInterestData, link } = useContext(Context);
  const [magnify, setMagnify] = useState(false);
  //   const photos = [
  //     "Slider2/s1.PNG",
  //     "Slider2/s2.PNG",
  //     "Slider2/s3.PNG",
  //     "Slider2/s4.PNG",
  //     "Slider2/s5.PNG",
  //     "Slider2/s6.PNG",
  //   ];
  //   const details = [
  //     { label: "Minimum Order Quantity", data: "1 Unit" },
  //     { label: "Parameter", data: "NA" },
  //     { label: "Display Type", data: "COLOUR DISPLAY" },
  //     { label: "Model Number", data: "TKM359CE" },
  //     { label: "Accuracy", data: "AS PER ASTM" },
  //     { label: "Dimension", data: "10" },
  //     { label: "Automation Grade", data: "Automatic" },
  //     { label: "Weight", data: "300 GRAMS" },
  //     { label: "Hardness Scale", data: "HV BHN & HRC" },
  //     { label: "Warranty", data: "12 Months" },
  //     { label: "Voltage", data: "220" },
  //     { label: "Brand", data: "MashProject" },
  //     { label: "Is It Portable", data: "Portable" },
  //   ];

  //   const header = "  Dynamic Portable Leeb (Rebound Type) Hardness Tester";
  //   const price = "₹ 2.5 Lakh";

  const [img, setImg] = useState(photos[0]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-wrap  shadow-lg p-2 rounded-2xl m-2 mb-5">
        {/* Left Section */}
        <div className="flex lg:flex-row flex-col gap-4 w-[50%]">
          {/* Main Image */}
          <div>
            <h1 className="lg:text-2xl text-xl -px-3 text-blue-600 font-bold break-words  mb-4">
              {header}
            </h1>
            <div className="border lg:h-[450px] lg:w-[600px] flex justify-center items-center rounded-lg overflow-hidden bg-white">
              {/* <img src={img} alt="Main" className="h-full w-full object-cover" /> */}
              <div
                className="lg:h-full h-[250px] w-[300px] lg:w-[600px] "
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  objectFit: "cover",
                }}
              ></div>
            </div>
            <div className="lg:flex  hidden relative justify-center  items-center p-4 ">
              <button
                onClick={() => {
                  setInterest(!interest);
                  setInterestData({
                    img: photos[0],
                    header: header,
                    d1: details[0],
                    d2: details[1],
                    d3: details[2],
                    d4: details[3],
                    price: "",
                  });
                }}
                className=" flex gap-4 lg:text-2xl  px-6  rounded-md shadow-2xl p-2 bg-white"
              >
                <CgFileDocument className="text-white  rounded-full p-0.5 text-4xl  lg:text-5xl absolute lg:left-[150px] lg:top-[13px] top-[20px] md:left-[85px] left-[0px]  bg-blue-500   " />{" "}
                Get Best Quote
              </button>
              <button
                onClick={() => setMagnify(!magnify)}
                className="text-2xl relative left-10 lg:left-42 h-max p-1 bg-blue-100"
              >
                <FaSearchPlus />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="p-2 ">
            <div
              className={`grid lg:${
                photos.length > 5 ? "h-[500px]" : "h-[400px]"
              } overflow-y-scroll  lg:grid-cols-1 grid-cols-3 gap-3 rounded-lg`}
            >
              {photos.map((item, index) => (
                <img
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  className="border hover:border-blue-500 hover:border-2 p-1 rounded-lg h-20 w-32 object-cover cursor-pointer"
                  onMouseEnter={() => setImg(item)}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[48%] ml-1  p-4 lg:h-[500px] h-max overflow-y-scroll bg-white">
          {/* Price Info */}
          {/* <h1 className="text-xl font-bold">
            Approx. Price: <span className="text-blue-600">{price}</span> / Unit
          </h1>
          <hr className="my-4" /> */}

          {/* Product Details */}
          <p className="font-bold text-xl flex gap-2 items-center ">
            <AiFillProduct className="text-xl" />
            Service Details:
          </p>

          {/* Table */}
          <div className="overflow-auto mt-4">
            <table className="table-auto  w-full border-collapse border border-gray-300 text-left">
              <tbody>
                {details.map((item, index) => (
                  <tr key={index} className="border shadow ">
                    <td className="w-[50%] lg:text-base md:text-sm text-xs p-2 border-b border-r border-gray-300 font-medium">
                      {item.label}
                    </td>
                    <td className="lg:p-2 p-1 lg:text-base md:text-sm  text-xs border-b  border-gray-300">
                      {item.data}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <section className="justify-text lg:text-base text-xs mt-1 ">
            <p className="lg:block hidden"> {p}</p>
          </section>
          <div className="flex  p-4">
            <button
              onClick={() => {
                setInterest(!interest);
                setInterestData({
                  img: photos[0],
                  header: header,
                  d1: details[0],
                  d2: details[1],
                  d3: details[2],
                  d4: details[3],
                  //   price: price,
                });
              }}
              className="text-white cursor-pointer w-max bg-[#1D5B86] lg:text-2xl px-6 p-2"
            >
              Yes ! Im Interested
            </button>
          </div>
        </div>
        <div className="lg:hidden flex relative justify-center items-center p-4 ">
          <button
            onClick={() => {
              setInterest(!interest);

              setInterestData({
                img: photos[0],
                header: header,
                d1: details[0],
                d2: details[1],
                d3: details[2],
                d4: details[3],
                //   price: price,
              });
            }}
            className=" flex gap-4 lg:text-2xl md:text-2xl px-6 whitespace-nowrap lg:px-0 relative left-3   rounded-md shadow-2xl p-2 bg-white"
          >
            <CgFileDocument className="text-white    rounded-full p-0.5 md:text-4xl text-3xl   lg:text-5xl absolute lg:left-[170px] lg:top-[13px] top-[4px]  -left-[11px]  bg-blue-500   " />{" "}
            Get Best Quote
          </button>
          <button
            onClick={() => setMagnify(!magnify)}
            className="text-2xl relative  left-36 h-max p-1 bg-blue-100"
          >
            <FaSearchPlus />
          </button>
        </div>
      </div>

      <Strip />

      {magnify && (
        <div className="w-[100%]  ">
          <div className="fixed w-full  inset-0 flex flex-col items-center justify-center    overflow-y-scroll  z-40 bg-black/50 ">
            <div className=" bg-gray-100 p-2 rounded-lg   shadow-lg  lg:w-[1200px] relative lg:top-10 top-40 ">
              <div className="flex lg:flex-row flex-col gap-10 lg:pt-0 pt-20">
                <div className="lg:hidden flex justify-end items-end  w-full font-semibold  ">
                  <button
                    className="w-max bg-gray-400 p-1 px-5 rounded-full text-sm"
                    onClick={() => setMagnify(!magnify)}
                  >
                    X Close
                  </button>
                </div>
                <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-4">
                  {/*thumnail*/}
                  <div
                    className={`grid lg:${
                      photos.length > 5 ? "h-[500px]" : "h-[300px]"
                    } overflow-y-scroll  lg:grid-cols-1 grid-cols-3 gap-3 rounded-lg`}
                  >
                    {photos.map((item, index) => (
                      <img
                        src={item}
                        alt={`Thumbnail ${index + 1}`}
                        className="border hover:border-blue-500 hover:border-2 p-1 rounded-lg h-20 w-32 object-cover cursor-pointer"
                        onMouseEnter={() => setImg(item)}
                        key={index}
                      />
                    ))}
                  </div>
                  {/*main photo*/}
                  <div className="border lg:h-[500px]  lg:w-[600px] flex justify-center items-center rounded-lg overflow-hidden bg-white">
                    {/* <img src={img} alt="Main" className="h-full w-full object-cover" /> */}
                    <div
                      className="lg:h-full h-[200px] w-[300px] lg:w-[600px] "
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        objectFit: "cover",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="lg:flex hidden justify-end items-end  w-full font-semibold  ">
                    <button
                      className="w-max bg-gray-400 p-1 px-5 rounded-full text-sm"
                      onClick={() => setMagnify(!magnify)}
                    >
                      X Close
                    </button>
                  </div>
                  <h1 className=" text-xl  text-blue-600 font-bold break-words  mb-2 lg:pt-5">
                    {header}
                  </h1>
                  <div className="flex flex-col gap-4">
                    <p>
                      <strong>{details[0].label}</strong>: {details[0].data}
                    </p>
                    <p>
                      <strong>{details[1].label}</strong>: {details[1].data}
                    </p>
                    <p>
                      {" "}
                      <strong>{details[2].label}</strong>: {details[2].data}
                    </p>
                    <div className="bg-white   shadow flex flex-col gap-3  p-4 rounded-lg ">
                      <p className="font-medium">
                        {" "}
                        <strong>Sold By -</strong> SAE CALLIBRATION{" "}
                      </p>
                      <div className="flex gap-20">
                        <p className="flex gap-1 lg:text-base text-sm whitespace-nowrap">
                          <ImCheckboxChecked className="bg-yellow-400 p-0.5  text-lg" />{" "}
                          TrustSeal verified
                        </p>
                        <p className="flex gap-1 lg:text-base text-sm whitespace-nowrap">
                          <FaCrown className="bg-green-600 p-0.5 text-lg text-white" />
                          Leading Supplier
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full mt-4">
                    <button
                      onClick={() => {
                        setMagnify(!magnify);
                        window.open(link, "_blank");
                      }}
                      className="bg-[#1D5B86] text-white text-xl p-2 px-10"
                    >
                      Contact Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
