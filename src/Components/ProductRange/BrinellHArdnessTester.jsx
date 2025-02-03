import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../Pages/ProductCard";
import ExploreMoreProduct from "../../Layout/ExploreMoreProduct";
import { Context } from "../../Pages/ContextApi";
import Interested from "../../Pages/Interested";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import InterestedMail from "../../Pages/InterestedEmail";
import BestDeal from "../Cards/BestDeal";
import Strip from "../Homepage/Strip";
function BrinnellHArdnessTester() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { interest, interestEmail } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const array = [
    {
      photos: [
        "Products/Brinell/s4.jpg",
        "Products/Brinell/s9.jpg",
        "logo.jpg",
        "Products/Brinell/s7.jpg",
        "Products/Brinell/s7.jpg",
        "Products/Brinell/s2.jpg",
        "Products/Brinell/s3.jpg",
      ],
      header: "Computerized Fully Automatic Brinell Hardness Tester",
      p: "Computerized Fully Automatic Brinell Hardness Tester is fabricated from steel plates and is designed for precise loading system. It is a fully automatic machine for production testing. Once the job is placed on the testing table and the 'Cycle Start' button is pressed, the job is raised and brought into contact with the clamping device. Then, the indentor is swivelled and brought into the vertical loading position. The loading operation starts. After the preset dwelling timer, the unloading operation starts. As soon as the load is fully removed, the indentor is swivelled, and the image is digitalized using a CCD camera fitted on the machine and captured by the PC. Features :Fully automatic machine for production testing.Fully computerised (PC based) Brinell Hardness Tester.Direct and accurate measurement of Brinell hardness number using Stae of art image processing technology.",
      Details: [
        { label: "Display Type", data: "LCD" },
        { label: "Model Name/Number", data: "B 3000 PCFA" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "450 kg" },
        { label: "Magnification of Objectives", data: "4 X" },
        { label: "Throat Depth", data: "200 mm" },
        { label: "Test Loads", data: "250 kgf" },
        { label: "Maximum Test Height", data: "380 mm" },
      ],
    },
    {
      photos: [
        "logo.jpg",

        "Products/Brinell/s2.jpg",
        "Products/Brinell/s2.jpg",
      ],
      header: "Computerized Fully Automatic Brinell Hardness Tester",
      p: "Computerized Fully Automatic Brinell Hardness Tester is fabricated from steel plates and is designed for precise loading system. It is a fully automatic machine for production testing. Once the job is placed on the testing table and the 'Cycle Start' button is pressed, the job is raised and brought into contact with the clamping device. Then, the indentor is swivelled and brought into the vertical loading position. The loading operation starts. After the preset dwelling timer, the unloading operation starts. As soon as the load is fully removed, the indentor is swivelled, and the image is digitalized using a CCD camera fitted on the machine and captured by the PC. Features :Fully automatic machine for production testing.Fully computerised (PC based) Brinell Hardness Tester.Direct and accurate measurement of Brinell hardness number using Stae of art image processing technology.",
      Details: [
        { label: "Display Type", data: "LCD" },
        { label: "Model Name/Number", data: "B 3000 PCFA" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "450 kg" },
        { label: "Magnification of Objectives", data: "4 X" },
        { label: "Throat Depth", data: "200 mm" },
        { label: "Test Loads", data: "250 kgf" },
        { label: "Maximum Test Height", data: "380 mm" },
      ],
    },
    {
      photos: [
        "Products/Brinell/s1.jpg",
        "Products/Brinell/s9.jpg",
        "logo.jpg",
        "Products/Brinell/s1.jpg",
        "Products/Brinell/s1.jpg",
      ],
      header: "Digital Brinell Hardness Tester 10/3000kgf",
      p: "Basic Machine Design with optical device with 14x magnification provided in front of project diameter of ball impression on glass screen with a micrometer measuring system with 0.01mm accuracy. The Indentor Swivels & projects diameter of ball impression immediately after the unloading operation, which avoids additional time for measurement of ball impression. For measurement of ball impression, D1 & D2 keys are provided to measure it digitally and give the hardness number directly on the screen.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Piece" },
        { label: "Parameter", data: "HB" },
        { label: "Display Type", data: "Digital" },
        { label: "Model Name/Number", data: "B-3000-E" },
        { label: "Accuracy", data: "0.01mm" },
        { label: "Brand", data: "FIE" },
        { label: "Automation Grade", data: "Manual" },
        { label: "Weight", data: "500 kg" },
        { label: "Hardness Scale", data: "HBW" },
        { label: "Warranty", data: "1 year" },
        { label: "Voltage", data: "415" },
        { label: "Power", data: "3 phase" },
        { label: "Test Range", data: "as per standard" },
        { label: "Test Force", data: "250 to 3000 kgf" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Products/Brinell/s3.jpg",
        "Products/Brinell/s3.jpg",
        "logo.jpg",
        "Products/Brinell/s3.jpg",
        "Products/Brinell/s9.jpg",
        "Products/Brinell/s2.jpg",
        "Products/Brinell/s4.jpg",
        "Products/Brinell/s3.jpg",
      ],

      header: "Brinell Microscope to Measuring BHN Hardness",
      p: "We are dealing in Digital Brinell Microscope.",
      Details: [
        { label: "Minimum Order Quantity", data: "01 Piece" },
        { label: "Magnification", data: "10x" },
        { label: "Model Name/Number", data: "Digital Brinell Microscope" },
        { label: "Is It Portable", data: "Portable" },
        {
          label: "Usage/Application",
          data: "To Check Brinell Hardness Number",
        },
        { label: "Microscope Type", data: "Digital Brinell Microscope" },
        { label: "I Deals In", data: "New" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Products/Brinell/s3.jpg",
        "Products/Brinell/s3.jpg",
        "logo.jpg",
        "Products/Brinell/s3.jpg",
        "Products/Brinell/s2.jpg",
        "Products/Brinell/s9.jpg",
        "Products/Brinell/s3.jpg",
        "Products/Brinell/s5.jpg",
        "Products/Brinell/s7.jpg",
      ],

      header: "B 3000 PC Computerized Brinell Hardness Tester 10/3000kgf",
      p: "With the support of our expert procuring agents and our vendors, we have been able to offer an array of B 3000 PC Computerized Brinell Hardness Tester. The offered machine is procured from authentic vendors of the market who are commended for their product quality since many years. It is used for testing the hardness of metal and other hard material in different industries. We offer this machine to our clients in different technical specifications as per their necessities.",
      Details: [
        { label: "Display Type", data: "LCD" },
        { label: "Model Name/Number", data: "B 3000 PC" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "450 kg" },
        { label: "Brand", data: "FIE" },
        { label: "Maximum Test Height", data: "380 mm" },
        { label: "Test Loads", data: "250 kgf" },
        { label: "Magnification of Objectives", data: "4 X" },
        { label: "Throat Depth", data: "200 mm" },
      ],
    },
    {
      photos: [
        "Products/Brinell/s3.jpg",
        "Products/Brinell/s3.jpg",
        "logo.jpg",
        "Products/Brinell/s2.jpg",
        "Products/Brinell/s2.jpg",
        "Products/Brinell/s4.jpg",
        "Products/Brinell/s9.jpg",
        "Products/Brinell/s5.jpg",
        "Products/Brinell/s3.jpg",
      ],

      header: "Optical B 3000 (O) Brinell Hardness Tester 10/3000Kgf",
      p: "Machine designed with a hydraulic power pack and control circuit for effortless loading and unloading operation. A dial gauge in front measures the depth of ball penetration. This facilitates production testing within tolerance limits by the compression method. Basic machine design & operation are similar to B-3000 (H). In addition, 'Optical Device' with 14x magnification is provided in front of the project diameter of ball impression on a glass screen with a micrometer measuring system with 0.01mm accuracy. The indentor swivels & projects the diameter of the ball impression immediately after the unloading operation, which avoids additional time for the measurement of ball impressions. B-3000 (H) and B-3000 (O) SAROJ Hardness Testers, Model: B-3000 (H) & Model: B-3000 (O) are precision-engineered confirming to IS:1500-2, however, B-3000 (H) & Model: B-3000 (O) are most suitable for production testing. These machines are designed to measure the hardness of castings, forgings, other metals, and alloys of all kinds, hard or soft, whether flat, round, or irregular in shape.",
      Details: [
        { label: "Display Type", data: "Analog" },
        { label: "Model Name/Number", data: "B 3000 (O)" },
        { label: "Brand", data: "Saroj" },
        { label: "Automation Grade", data: "Semi-automatic" },
        { label: "Weight", data: "500 kg" },
        { label: "Max Test Height", data: "380 mm" },
        { label: "Machine Height", data: "1185 mm" },
        { label: "Motor Power", data: "0.33 HP" },
        { label: "Load", data: "250 kgf" },
        { label: "Depth of Throat", data: "200 mm" },
      ],
    },
    {
      photos: [
        "Products/Brinell/s2.jpg",
        "Products/Brinell/s2.jpg",
        "logo.jpg",
        "Products/Brinell/s3.jpg",
        "Products/Brinell/s4.jpg",
        "Products/Brinell/s5.jpg",
        "Products/Brinell/s2.jpg",
      ],
      header:
        "B 3000 (H) Hydraulic Power Pack Brinell Hardness Tester 10/3000kgf",
      p: "As a quality-oriented organization, we are focused to provide our clients excellent quality B 3000 (H) Brinell Hardness Tester.",
      Details: [
        { label: "Display Type", data: "Analog" },
        { label: "Model Number", data: "B 3000 (H)" },
        { label: "Automation Grade", data: "Automatic" },
        { label: "Weight", data: "450 kg" },
        { label: "Brand", data: "Saroj" },
        { label: "Load", data: "250 kgf" },
        { label: "Motor Power", data: "0.33 HP" },
        { label: "Machine Height", data: "1127 mm" },
        { label: "Max Test Height", data: "410 mm" },
        { label: "Depth of Throat", data: "200 mm" },
      ],
    },
    {
      photos: [
        "Products/Brinell/s8.jpg",
        "logo.jpg",
        "Products/Brinell/s5.jpg",

        "Products/Brinell/s9.jpg",
        "Products/Brinell/s8.jpg",
        "Products/Brinell/s2.jpg",
      ],
      header:
        "Portable Hydraulic Brinell Hardness Tester (King Brinell) 10/3000Kgf Load",
      p: "The Portable Hydraulic Brinell Hardness Tester is designed for on-site testing of steel products, nonferrous metal, castings, forgings, and semi-finished heat treatment parts. It is a reliable alternative to Leeb testers, which are known for low accuracy. The indentation could be read by an automatic measurement system, and hardness values are displayed directly. The machine is used for testing large parts where desk testers are not practical. It replaces Leeb testers, offering more accurate and reliable results. The working principle involves fixing the test head of the Brinell hardness tester to the test frame, ensuring the measuring frame is firmly placed on the test piece. The load force is applied by operating the handle, with a mini hydraulic system controlling the force. Once the force reaches 3,000Kgf, the control valve opens to release the pressure, and the force loading is repeated 3-4 times, following ASTM standards for test force and time. This tester is ideal for field testing large metal parts and alloys, providing accurate hardness readings quickly and efficiently. It complies with ISO and ASTM standards for test force accuracy and is compact and portable for use in diverse testing environments.",
      Details: [
        { label: "Display Type", data: "Analog" },
        { label: "Model Name/Number", data: "MATRIX - KBT SERIES" },
        {
          label: "Accuracy",
          data: "Test force accuracy complies with ISO and ASTM standards",
        },
        { label: "Dimension", data: "350mm (Height) x 100mm (Throat Depth)" },
        { label: "Brand", data: "Matrix Testing Machine Services" },
        { label: "Automation Grade", data: "Manual" },
        { label: "Weight", data: "14 Kg Approx." },
        { label: "Hardness Scale", data: "HBW" },
        {
          label: "Warranty",
          data: "12 Months from the date of supply against defects in material and workmanship",
        },
        { label: "Voltage", data: "NA" },
        { label: "Power", data: "NA" },
        { label: "Drive Type", data: "NA" },
        { label: "Test Range", data: "32-650 HBW" },
        { label: "Test Force", data: "3000kg (1000kg, 750kg, 500kg optional)" },
        { label: "Humidity", data: "NA" },
        { label: "Temperature", data: "NA" },
        { label: "Diameter", data: "NA" },
        { label: "Load Capacity", data: "Load force by operating the handle" },
      ],
    },
  ];
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
          Brinell Hardness Tester
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          Offering you a complete choice of products which include computerized
          fully automatic brinell hardness tester, digital brinell hardness
          tester 10/3000kgf, brinell microscope to measuring bhn hardness, b
          3000 pc computerized brinell hardness tester 10/3000kgf, optical b
          3000 (o) brinell hardness tester 10/3000kgf and b 3000 (h) hydraulic
          power pack brinell hardness tester 10/3000kgf.
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

export default BrinnellHArdnessTester;
