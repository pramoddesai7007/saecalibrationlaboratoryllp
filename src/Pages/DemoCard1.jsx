import React from "react";
import { MdAddIcCall } from "react-icons/md";

function DemoCard1() {
  const data = [
    {
      header: "100Kn Horizontal Chain and Rope Tensile Testing Machine ",
      price: "RS 18,000",
      img: "Slider2/s1.PNG",
      info: [
        { label: "Parameter", data: "NA" },
        { label: "Ram Stroke", data: "1000mm" },
        { label: "Orintation", data: "Horizontal" },
        { label: "Capapcity", data: "100kn" },
        { label: "Brand", data: "FIE" },
      ],
    },
    {
      header: "Dynamic portable Leeb(Rebound Type) Hardness Tester ",
      price: "RS 2,28,000",
      img: "Slider2/s1.PNG",
      info: [
        { label: "Parameter", data: "NA" },
        { label: "Display Type", data: "Colour Display" },
        { label: "Model", data: "TKM 359 CE" },
        { label: "Accuracy", data: "3%" },
        { label: "Brand", data: "Mashproject" },
      ],
    },
    {
      header: "100Kn Horizontal Chain and Rope Tensile Testing Machine ",
      price: "RS 18,000",
      img: "Slider2/s1.PNG",
      info: [
        { label: "Parameter", data: "NA" },
        { label: "Ram Stroke", data: "1000mm" },
        { label: "Orintation", data: "Horizontal" },
        { label: "Capapcity", data: "100kn" },
        { label: "Brand", data: "FIE" },
      ],
    },
    {
      header: "Dynamic portable Leeb(Rebound Type) Hardness Tester ",
      price: "RS 2,28,000",
      img: "Slider2/s1.PNG",
      info: [
        { label: "Parameter", data: "NA" },
        { label: "Display Type", data: "Colour Display" },
        { label: "Model ", data: "TKM 359 CE" },
        { label: "Accuracy", data: "3%" },
        { label: "Brand", data: "Mashproject" },
      ],
    },
  ];
  return (
    <div className="p-2">
      {data.map((item, index) => {
        return (
          <div key={index} className=" shadow-md rounded-md m-2 p-2">
            <h1 className="font-bold text-lg break-words">{item.header}</h1>
            <p>
              <strong className="text-lg">{item.price}</strong>/Unit
            </p>
            <div className="flex gap-3">
              <img src={item.img} className="h-28 w-28 border rounded-md" />
              <div>
                {item.info.map((item1, index) => {
                  return (
                    <div key={index} className="flex">
                      <p className="text-gray-500">{item1.label}:</p>
                      <p>{item1.data}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-start p-2 gap-5">
              <button className="bg-blue-500 rounded-md text-lg p-2 text-white font-medium">
                Get Now
              </button>
              <button className="font-medium rounded-md bg-blue-500 text-lg p-2 text-white  flex gap-2 justify-center">
                {" "}
                <MdAddIcCall className="relative top-1" />
                Call Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DemoCard1;
