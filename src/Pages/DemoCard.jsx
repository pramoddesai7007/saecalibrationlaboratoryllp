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

function DemoCard() {
  const { interest, setInterest, setInterestData } = useContext(Context);

  const photos = [
    "Slider2/s1.PNG",
    "Slider2/s2.PNG",
    "Slider2/s3.PNG",
    "Slider2/s4.PNG",
    "Slider2/s5.PNG",
    "Slider2/s6.PNG",
  ];
  const details = [
    { label: "Minimum Order Quantity", data: "1 Unit" },
    { label: "Parameter", data: "NA" },
    { label: "Display Type", data: "COLOUR DISPLAY" },
    { label: "Model Number", data: "TKM359CE" },
    { label: "Accuracy", data: "AS PER ASTM" },
    { label: "Dimension", data: "10" },
    { label: "Automation Grade", data: "Automatic" },
    { label: "Weight", data: "300 GRAMS" },
    { label: "Hardness Scale", data: "HV BHN & HRC" },
    { label: "Warranty", data: "12 Months" },
    { label: "Voltage", data: "220" },
    { label: "Brand", data: "MashProject" },
    { label: "Is It Portable", data: "Portable" },
  ];

  const header = "  Dynamic Portable Leeb (Rebound Type) Hardness Tester";
  const price = "₹ 2.5 Lakh";

  const [img, setImg] = useState(photos[0]);

  return (
    <div>
      <div className="flex flex-wrap  shadow-lg p-2 rounded-2xl m-2 mb-5">
        {/* Left Section */}
        <div className="flex lg:flex-row flex-col gap-4 w-[50%]">
          {/* Main Image */}
          <div>
            <h1 className="lg:text-3xl text-xl text-blue-600 font-bold mb-4">
              {header}
            </h1>
            <div className="border lg:h-[350px] lg:w-[600px] flex justify-center items-center rounded-lg bg-white">
              {/* <img src={img} alt="Main" className="h-full w-full object-cover" /> */}
              <div
                className="lg:h-[350px] h-[250px] w-[300px] lg:w-[600px]"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="lg:flex hidden relative justify-center items-center p-4 ">
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
                    price: price,
                  });
                }}
                className=" flex gap-4 lg:text-2xl  px-6  rounded-md shadow-2xl p-2 bg-white"
              >
                <CgFileDocument className="text-white  rounded-full p-0.5 text-4xl  lg:text-5xl absolute lg:left-[170px] lg:top-[13px] top-[20px] md:left-[85px] left-[0px]  bg-blue-500   " />{" "}
                Get Best Quote
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="p-2">
            <div className="grid lg:h-[500px] overflow-y-scroll  lg:grid-cols-1 grid-cols-3 gap-2 rounded-lg">
              {photos.map((item, index) => (
                <img
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  className="border p-1 rounded-lg h-20 w-28 object-cover cursor-pointer"
                  onMouseEnter={() => setImg(item)}
                  key={index}
                />
              ))}
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
                  price: price,
                });
              }}
              className=" flex gap-4 lg:text-2xl md:text-2xl px-6 whitespace-nowrap lg:px-0   rounded-md shadow-2xl p-2 bg-white"
            >
              <CgFileDocument className="text-white    rounded-full p-0.5 text-4xl   lg:text-5xl absolute lg:left-[170px] lg:top-[13px] top-[20px] md:left-[60px] -left-[4px]  bg-blue-500   " />{" "}
              Get Best Quote
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[48%] ml-1  p-4 lg:h-[500px] h-[670px] overflow-y-scroll bg-white">
          {/* Price Info */}
          {/* <h1 className="text-xl font-bold">
            Approx. Price: <span className="text-blue-600">{price}</span> / Unit
          </h1>
          <hr className="my-4" /> */}

          {/* Product Details */}
          <p className="font-bold text-xl flex gap-2 items-center ">
            <AiFillProduct className="text-xl" />
            Product Details:
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
           <p className="lg:block hidden"> High precision hardness tester TKM 359CE intended for quick
            measuring of metal items in laboratorial, manufacturing and field
            conditions. Device is intended for non-destructive testing of
            production quality in metallurgy, mechanical engineering, aircraft,
            shipbuilding, atomic industry, oil and gas industry. Hardness tester
            functions by Leeb method.TKM-359CE Controls Hardness of Following:
            All basic types of metals and alloys without additional calibrations
            (structural, tool, corrosion-proof, heat-proof, non-corrosive steels
            and alloys as well as alloys of nonferrous metals, castiron,
            aluminium, bronze, brass); Items with surface hardening and high
            frequency current hardening; Items of complicated configuration;
            Heavy and big items with rough surface. Exploitation Advantages Wide
            range of controlled metals and alloys. Low sensitivity to the
            curvative and roughness of surface. Monitoring of hardness change
            along the surface. Stable measurements independent from force and
            time of pressing the probe to the surface. Possibility of material
            identification in blank production. Control of “volumetric”
            hardness. Features of TKM-359CE: Impact-, dust- and water- proof
            housing; Intuitive graphic interface; Bright color graphic display
            allows working at below zero temperature and stays bright at any
            lighting; Signalization of exceeding of prescribed readings
            threshold; Unique system of statistic data processing and averaging
            of readings; Fast adjustment of readings and programming of
            additional calibrations to basic scales by 2 or less standard
            blocks; Flexible device memory for recording of readings and their
            analysis; Programming of additional scales calibrations of hardness
            tester by 2 or less standard test blocks; Fast programming of
            additional scales by 2 to 10 standard test blocks.</p>
            <p className="lg:hidden block"> High precision hardness tester TKM 359CE intended for quick
            measuring of metal items in laboratorial, manufacturing and field
            conditions. Device is intended for non-destructive testing of
            production quality in metallurgy, mechanical engineering, aircraft,
            shipbuilding, atomic industry, oil and gas industry. Hardness tester
            functions by Leeb method.TKM-359CE Controls Hardness of Following:
            All basic types of metals and alloys without additional calibrations
            (structural, tool, corrosion-proof, heat-proof, non-corrosive steels
            and alloys as well as alloys of nonferrous metals, castiron,
            aluminium, bronze, brass); Items with surface hardening and high
            frequency current hardening; Items of complicated configuration;
            Heavy and big items with rough surface. </p>
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
                  price: price,
                });
              }}
              className="text-white cursor-pointer w-max bg-[#1D5B86] lg:text-2xl px-6 p-2"
            >
              Yes ! Im Interested
            </button>
          </div>
        </div>
      </div>
      <Strip />
    </div>
  );
}

export default DemoCard;
