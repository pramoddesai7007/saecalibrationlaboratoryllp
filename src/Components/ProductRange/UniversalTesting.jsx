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

function UniversalTesting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const array = [
    {
      photos: [
        "Products/Universal/s1.jpg",
        "Products/Universal/s2.jpg",
        "Products/Universal/s3.jpg",
        "Products/Universal/s4.jpg",
        "Products/Universal/s5.jpg",
        "Products/Universal/s6.jpg",
      ],

      header:
        "10KN Capacity Automatic Electro Mechanical Universal Testing Machine",
      p: "Our 10KN Capacity Automatic Electro Mechanical Universal Testing Machine is designed to provide exceptional testing accuracy for various materials. This testing machine features a crosshead stroke of 1000 mm, a clearance between columns of 450 mm, and crosshead displacement measurement with 0.01 mm precision. With a crosshead speed range of 500 mm/min and operating at 230 V single-phase power, it is ideal for a wide range of testing applications. The machine’s automation grade ensures ease of operation and reliability. We are committed to providing top-quality testing equipment that meets the needs of our clients.",
      Details: [
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Voltage", data: "230 V" },
        { label: "Crosshead Stroke", data: "1000 mm" },
        { label: "Clearance Between Columns", data: "450 mm" },
        { label: "Crosshead Displacement Measurement", data: "0.01 mm" },
        { label: "Crosshead Speed Range", data: "500 mm/min" },
      ],
    },
    {
      photos: [
        "Products/Universal/s5.jpg",
        "logo.jpg",
        "Products/Universal/s8.jpg",
        "Products/Universal/s6.jpg",
        "logo.jpg",
      ],
      header: "100KN Horizontal Chain And Rope Tensile Testing Machine",
      p: "The 100KN Horizontal Chain and Rope Tensile Testing Machine is designed for high accuracy testing with speed, economy, and versatility. It has a capacity of 100 kN with a load resolution of 2.5 N, and features a ram stroke of 1000 mm, a clearance for tensile testing of 3000 mm, and a clearance between columns of 500 mm. The machine offers a digital and touch screen panel for high reading accuracy. With loading accuracy as high as ±1% (IS:1828-1975), it is equipped with a double acting hydraulic cylinder for test specimen testing. The system also includes a wide range of standard and special accessories, a large effective bed clearance, and simple controls for ease of operation. The machine is housed in a robust straining frame of extremely rigid construction, ensuring safe operation through safety devices and a fully enclosed and protected bed.",
      Details: [
        { label: "Brand", data: "FIE" },
        { label: "Model Name", data: "CRE 10-TS" },
        { label: "Ram Stroke", data: "1000 mm" },
        { label: "Orientation", data: "Horizontal" },
        { label: "Capacity", data: "100 kN" },
        { label: "Load Resolution", data: "2.5 N" },
        { label: "Clearance For Tensile", data: "3000 mm" },
        { label: "Clearance Between Column", data: "500 mm" },
      ],
    },
    {
      photos: [
        "Products/Universal/s11.jpg",
        "logo.jpg",
        "Products/Universal/s11.jpg",
        "Products/Universal/s8.jpg",
        "Products/Universal/s4.jpg",
        "Products/Universal/s13.jpg",
        "Products/Universal/s6.jpg",
        "logo.jpg",
      ],
      header:
        "100KN Servo Controlled Open Crosshead Hydraulic Grip Front Loading Digital Universal Testing Machine",
      p: "The 100KN Servo Controlled Open Crosshead Hydraulic Grip Front Loading Digital Universal Testing Machine offers high accuracy in operation and durability with low maintenance requirements. It comes with a maximum capacity of 100 kN and features a clearance between columns of 500 mm and a ram stroke of 150 mm. This machine is powered by a 2.33 HP motor and operates with a three-phase voltage of 440 V. Engineered using premium grade components, it is available in both computerized and servo-controlled models. Clients can avail of this machine at an affordable rate, making it a reliable choice for various testing applications.",
      Details: [
        { label: "Brand", data: "FIE" },
        { label: "Machine Type", data: "Computerized" },
        { label: "Model Number", data: "UTES-HGFL-TS 10" },
        { label: "Phase", data: "Three" },
        { label: "Voltage", data: "440 V" },
        { label: "Motor Power", data: "2.33 HP" },
        { label: "Maximum Capacity", data: "100 kN" },
        { label: "Clearance Between Columns", data: "500 mm" },
        { label: "Ram Stroke", data: "150 mm" },
      ],
    },
    {
      photos: [
        "Products/Universal/s13.jpg",
        "logo.jpg",
        "Products/Universal/s13.jpg",
        "Products/Universal/s8.jpg",
        "Products/Universal/s11.jpg",
        "Products/Universal/s12.jpg",
        "Products/Universal/s14.jpg",
        "Products/Universal/s4.jpg",
      ],
      header:
        "Computerized Touch Screen Universal Testing Machine 100KN Capacity",
      p: "The Computerized Touch Screen Universal Testing Machine with 100KN capacity offers high output, rugged design, and optimum performance. Designed for ease of use and high efficiency, it is built using superior quality components and modern technology. This machine, available in various sizes and designs, is suitable for various industries and ensures reliable testing results. The machine operates with a three-phase voltage of 440 V, with a motor power of 1.33 HP and a ram stroke of 150 mm. It has a clearance between columns of 500 mm, width of rollers 160 mm, and diameter of rollers 30 mm, making it an ideal solution for various testing applications. Available at budget-friendly prices for our clients.",
      Details: [
        { label: "Brand", data: "FIE" },
        { label: "Machine Type", data: "Computerized" },
        { label: "Phase", data: "Three" },
        { label: "Voltage", data: "440 V" },
        { label: "Clearance Between Columns", data: "500 mm" },
        { label: "Width of Rollers", data: "160 mm" },
        { label: "Diameter of Rollers", data: "30 mm" },
        { label: "Ram Stroke", data: "150 mm" },
        { label: "Motor Power", data: "1.33 HP" },
        { label: "Model Name", data: "UTE-TS 10" },
        { label: "Maximum Capacity", data: "100 kN" },
      ],
    },
    {
      photos: [
        "Products/Universal/s9.jpg",
        "logo.jpg",
        "Products/Universal/s8.jpg",
        "Products/Universal/s6.jpg",
        "Products/Universal/s10.jpg",
        "Products/Universal/s9.jpg",
      ],
      header: "1KN Universal Testing Machine",
      p: "The 1KN Universal Testing Machine, model UNITEK 97001, offers precision testing with a load range of 1 kN. Equipped with a precision AC servo motor & drive with ball lead screw, it provides an advanced drive system with a standard speed range of 0.5 to 350 mm/min. The machine features a PLC & HMI-based system to measure and store load and displacement values, along with a provision for load cell interchangeability for automatic selection of the load full scale. Speed selection can be adjusted either through data entry or variable speed via a potentiometer. It also offers flexibility in mounting different load cells and clamping devices for various tests, such as tensile, compression, bending, and testing of materials like thin wires, metal sheets, fiberglass, leather, springs, and cardboards. Additional safety interlocks for overload and limit switch sensing ensure protection during tests, making it ideal for R&D, education, quality control, and production.",
      Details: [
        { label: "Model Name/Number", data: "UNITEK 97001" },
        { label: "Material", data: "Mild Steel" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Brand", data: "FIE" },
        { label: "Phase", data: "Single" },
        { label: "Voltage", data: "230 V" },
        { label: "Max Crosshead Stroke", data: "900 mm" },
        { label: "Crosshead Displacement Measurement", data: "0.01 mm" },
        { label: "Load Range", data: "1 kN" },
        { label: "Crosshead Speed Range", data: "350 mm/min" },
      ],
    },
    {
      photos: [
        "Products/Universal/s13.jpg",
        "logo.jpg",
        "Products/Universal/s4.jpg",
        "Products/Universal/s6.jpg",
        "Products/Universal/s14.jpg",
        "Products/Universal/s13.jpg",
        "Products/Universal/s13.jpg",
        "logo.jpg",
      ],
      header:
        "Servo Controlled Computerized Touch Screen Universal Testing Machine 100KN Capacity",
      p: "The Servo Controlled Computerized Touch Screen Universal Testing Machine, model UTES-TS 10, is designed for high precision testing with a maximum capacity of 100 kN. It comes with a 1.33 HP motor and features a ram stroke of 150 mm, a clearance between columns of 500 mm, and a roller diameter of 30 mm. This machine provides electronic digital displays for both load and elongation, with an optional online graph on a PC for real-time analysis. The printer interface allows for results and load-displacement curves to be printed for documentation. It also features automatic calculation of tensile strength, elongation, yield strength, and UTS ratio, ensuring accurate and efficient testing. Clients can choose between computerized and servo-controlled models, all at competitive pricing.",
      Details: [
        { label: "Machine Type", data: "Computerized" },
        { label: "Brand", data: "FIE" },
        { label: "Power Source", data: "Electric" },
        { label: "Motor Power", data: "1.33 HP" },
        { label: "Width of Rollers", data: "160 mm" },
        { label: "Model Name", data: "UTES-TS 10" },
        { label: "Maximum Capacity", data: "100 kN" },
        { label: "Ram Stroke", data: "150 mm" },
        { label: "Diameter of Rollers", data: "30 mm" },
        { label: "Clearance Between Columns", data: "500 mm" },
      ],
    },
    {
      photos: [
        "Products/Universal/s13.jpg",
        "logo.jpg",
        "Products/Universal/s4.jpg",
        "Products/Universal/s1.jpg",
        "Products/Universal/s13.jpg",
        "logo.jpg",
      ],
      header:
        "Servo Controlled Electronic Universal Testing Machine 100KN Capacity",
      p: "The Servo Controlled Electronic Universal Testing Machine, model UTES 10, is a high-precision testing machine with a maximum capacity of 100 kN. It is equipped with a 1.33 HP motor and a ram stroke of 150 mm. The machine offers a clearance between columns of 500 mm, a roller diameter of 30 mm, and a width of 160 mm for versatility in testing various materials. It features an electronic digital display for load and elongation, with an optional online graph on a PC for real-time data analysis. The printer interface provides results and load-displacement curves, while the machine ensures automatic calculation of tensile strength, elongation, yield strength, and UTS ratio. We offer both computerized and servo-controlled models to meet diverse client requirements, all at competitive pricing.",
      Details: [
        { label: "Brand", data: "FIE" },
        { label: "Model Name", data: "UTES 10" },
        { label: "Voltage", data: "440 V" },
        { label: "Motor Power", data: "1.33 HP" },
        { label: "Phase", data: "Three" },
        { label: "Ram Stroke", data: "150 mm" },
        { label: "Clearance Between Columns", data: "500 mm" },
        { label: "Maximum Capacity", data: "100 kN" },
        { label: "Width of Rollers", data: "160 mm" },
        { label: "Diameter of Rollers", data: "30 mm" },
      ],
    },
    {
      photos: [
        "Products/Universal/s12.jpg",
        "logo.jpg",
        "Products/Universal/s8.jpg",
        "Products/Universal/s12.jpg",
        "Products/Universal/s13.jpg",
        "Products/Universal/s12.jpg",
        "logo.jpg",
      ],
      header: "5KN Electronic Universal Testing Machine",
      p: "The 5KN Electronic Universal Testing Machine, model UNITEK 9405, is designed for laboratory use, offering exceptional flexibility, modern appearance, and high-performance electronics. It features an open-type crosshead with hydraulic wedge action grips and load cell technology for precise testing. With a max crosshead stroke of 1000 mm and a clearance between columns of 450 mm, it allows for long test strokes and accommodates a wide range of materials. The machine provides straining at variable speeds and is equipped with a touch screen control panel, offering options for black and white or color display, along with printing and computer connectivity. It supports tension, compression, and transverse tests, making it versatile for various testing needs.",
      Details: [
        { label: "Brand", data: "FIE" },
        { label: "Model Name", data: "UNITEK 9405" },
        { label: "Capacity", data: "5 kN" },
        { label: "Usage/Application", data: "Laboratory" },
        { label: "Crosshead Displacement Measurement", data: "0.01 mm" },
        { label: "Crosshead Speed Range", data: "500 mm/min" },
        { label: "Max. Crosshead Stroke", data: "1000 mm" },
        { label: "Clearance Between Columns", data: "450 mm" },
        { label: "Power Supply", data: "230 V AC, 50 Hz Single Phase" },
      ],
    },
    {
      photos: [
        "Products/Universal/s13.jpg",
        "logo.jpg",
        "Products/Universal/s8.jpg",        
        "Products/Universal/s13.jpg",        
        "Products/Universal/s12.jpg",        
        "Products/Universal/s12.jpg",        
        "Products/Universal/s13.jpg",        
        "Products/Universal/s12.jpg",        

      ],
      header:
        "Electronic Universal Testing Machines 100KN Capacity Model No. UTE-10",
      p: "The Electronic Universal Testing Machine, model UTE-10 (Capacity 100KN), is designed for laboratory applications, offering precise loading accuracy and high-performance capabilities. This machine features straining at variable speeds to accommodate a wide range of materials and includes printer and PC graph functionalities to study the behavior of materials. A continuous roll autographic recorder is supplied as standard to further assist in material behavior analysis. The machine comes with motor-driven threaded columns for quick and effortless adjustments of the lower cross-head, enabling rapid specimen fixation. The design of the dial ensures high reading accuracy, while the wide range of standard and special accessories, including a load stabilizer, supports various testing requirements. The robust, rigid frame ensures safe operation with the help of safety devices, and the fully enclosed and protected pressure transducer guarantees long-term reliability.",
      Details: [
        { label: "Brand", data: "FIE" },
        { label: "Model Number", data: "UTE 10" },
        { label: "Usage/Application", data: "Laboratory" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Phase", data: "Three" },
        { label: "Voltage", data: "440 V" },
        { label: "Ram Stroke", data: "150 mm" },
        { label: "Clearance Between Columns", data: "500 mm" },
        { label: "Width of Rollers", data: "160 mm" },
        { label: "Diameter of Rollers", data: "30 mm" },
        { label: "Maximum Capacity", data: "100 kN" },
        { label: "Motor Power", data: "1.33 HP" },
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
          Universal testing Machine
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Our product range includes a wide range of 10kn capacity automatic
          electro mechanical universal testing machine, 100kn horizontal chain
          and rope tensile testing machine, 100kn servo controlled open
          crosshead hydraulic grip front loading digital universal testing
          machine, computerized touch screen universal testing machine 100kn
          capacity, 1kn universal testing machine and servo controlled
          computerized touch screen universal testing machine 100kn capacity.
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

export default UniversalTesting;
