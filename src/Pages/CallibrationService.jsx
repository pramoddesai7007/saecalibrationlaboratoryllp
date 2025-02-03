import React, { useContext, useEffect, useState } from "react";
// import DemoCard from "../../Pages/DemoCard";
import ExploreMoreProduct from "../Layout/ExploreMoreProduct";

import Interested from "./Interested";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import InterestedMail from "./InterestedEmail";
import BestDeal from "../Components/Cards/BestDeal";
import Strip from "../Components/Homepage/Strip";
import ProductCard from "./ProductCard";
import { Context } from "./ContextApi";
function CallibrationService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { interest, interestEmail } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const array = [
    {
      photos: [
        "Service1/s1.webp",
        "Service1/s2.webp",
        "Service1/s3.png",
        "Service1/s4.png",
        "Service1/s5.webp",
        "Service1/s6.webp",
        "Service1/s7.webp",
      ],
      Details: [
        { label: "Minimum Order Quantity", data: "1 Unit" },
        { label: "Niumber Of instruments", data: "1" },
        { label: "Industry Type", data: "any manufacturing industry" },
        { label: "Mode Of Report", data: "Hard copy" },
        { label: "Calibrated For", data: "Industrial" },
        { label: "Calibration Interval	", data: "Yearly" },
        { label: "Instrument Type", data: "Measuring Instrument" },
      ],
     
      header: "Profile Projector Calibration Services",
      p: "We are the leading service providers of Profile Projector NABL Calibration Services upto 300 mm",
    },
    {
     
      photos: ["Service2/s1.webp", "Service2/s2.webp", "Service2/s3.webp"],
      Details: [
        { label: "Minimum Order Quantity", data: "1 Unit" },
        { label: "Number Of Guage", data: "1" },
        { label: "Range", data: "0.6-25 mm" },
        { label: "Industry Type", data: "any manufacturing industry" },
        { label: "Mode Of Report", data: "Hard copy" },
        { label: "Calibrated For", data: "Industrial" },
        { label: "Calibration Interval	", data: "Yearly" },
        { label: "Gauge Type Type", data: "Mechanical" },
      ],
      header: "Radius Gauge Calibration",
      p: "We offer NABL calibration services for Radius Gauge from 0.6 - 25. We also provide inspection of radius templates Request Callback Additional Information: Delivery Time: 2 days",
    },
    {
     
      photos: ["Service3/s1.webp", "Service3/s2.webp", "Service3/s3.webp"],
      Details: [
        { label: "Minimum Order Quantity", data: "1 Unit" },
        { label: "Model Name/Number", data: "any" },
        { label: "Brand", data: "any" },
        { label: "Display Type", data: "analog and digita" },
        { label: "Usage/Application", data: "0.0001,0.01,0.001,0.0002 mm" },
        { label: "I Deal In", data: "New and Second" },
        // { label: "Calibration Interval	", data: "Yearly" },
        { label: "Instrument Type", data: "Measuring Instrument" },
      ],
      header: "Dial Gauge Calibrator Calibration",
      p: "To gain a strong foothold in this industry, we are devoted to offering a wide gamut of Dial Gauge Calibrator that is designed to check dial indicators, dial test indicators and cylinder bore gauges reading.",
    },
    {
      photos: [
        "Service5/s1.webp",
        "Service5/s2.webp",
        "Service5/s3.webp",
        // "Service5/s4.webp",
      ],
      Details: [
        { label: "Minimum Order Quantity", data: "Dimensional Calibration" },
        { label: "Type Of Calibration", data: "Offline" },
        { label: "Service Location", data: "Pune" },
      ],
      header: "Oven Calibration Service",
      p: "We are engaged in offering this service to our clients. Our range of all service is widely appreciated by our clientsconsole.log('CallibrationService component rendered')",
    },
    {
      photos: ["Service4/s1.webp", "Service4/s2.webp", "Service4/s3.webp"],
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Service Mode", data: "Offline" },
        { label: "Project Completed	", data: "100+" },
        { label: "Payment Mode", data: "Online/Offline" },
        { label: "Service Type", data: "Oven Calibration Service" },
      ],
      header: "Coating Thickness Gauge Calibration Services",
      p: "We are engaged in offering this service to our clients. Our range of all service is widely appreciated by our clients.",
    },
    {
      photos: [
        "Service6/s1.webp",
        "Service6/s2.webp",
        "Service6/s3.webp",
        "Service6/s4.webp",
        "Service6/s4.webp",
        "Service6/s6.webp",
      ],
      Details: [
        { label: "Minimum Order Quantity", data: "1" },
        { label: "Usage/Application", data: "Industrial" },
        { label: "Material	", data: "Steel" },
        { label: "Length", data: "160 mm,any" },
        { label: "Range", data: "	0-200 mm" },
        { label: "Model Name/Number", data: "any" },
        { label: "Measuring Range", data: "0-15 mm" },
      ],
      header: "Taper Scale Calibration",
      p: "We provide NABL calibration services for taper scale, taper ruler from 0-15 mm.We are engaged in offering this product to our clients. Our range of all products is widely appreciated by our clients.",
    },
    {
      photos: ["Service5/s1.webp", "Service5/s2.webp", "Service5/s3.webp"],
      Details: [
        { label: "Minimum Order Quantity", data: "1" },
        { label: "Usage/Application", data: "Industrial" },
        { label: "Material	", data: "Steel" },
        { label: "Length", data: "160 mm,any" },
        { label: "Range", data: "0.3 to 4 mm,0-15 mm" },
        { label: "Model Name/Number", data: "any" },
        { label: "Measuring Range", data: "0-15 mm" },
      ],
      header: "Floating Carriage Diameter Measuring Machine Calibration",
      p: "We provide NABL calibration services for taper scale, taper ruler from 0-15 mm.We are engaged in offering this product to our clients. Our range of all products is widely appreciated by our clients.",
    },
    {
      photos: [
        "Service7/s1.webp",
        "Service7/s2.webp",
        "Service7/s3.webp",
        "Service7/s4.webp",
        "Service7/s5.webp",
        "Service7/s6.webp",
      ],
      Details: [
        { label: "Minimum Order Quantity", data: "1" },
        { label: "Usage/Application", data: "Industrial" },
        { label: "Material	", data: "Steel" },
        { label: "Length", data: "160 mm,any" },
        { label: "Range", data: "0.3 to 4 mm,0-15 mm" },
        { label: "Model Name/Number", data: "any" },
        { label: "Measuring Range", data: "0-15 mm" },
      ],
      header: "Measuring Scales Calibration",
      p: "Measuring scale calibration, steel scale calibration. We are NABL approved from 0-2000 mm.We are engaged in offering this product to our clients. Our range of all products is widely appreciated by our clients.",
    },
    {
      photos: [
        "Service8/s1.webp",
        "Service8/s2.webp",
        "Service9/s4.webp",
        "Service8/s4.webp",
        "Service8/s5.webp",
      ],
      Details: [
        { label: "Minimum Order Quantity", data: "1" },
        { label: "Usage/Application", data: "Industrial" },

        { label: "Length", data: "160 mm,any" },
        { label: "Range", data: "	0-200 mm" },
        { label: "Max Diameter Capacity", data: "200 mm" },
        { label: "List Count of Micrometer", data: "0.001,0.0002,0.0001 mm" },
      ],
      header: "Surface Plate Calibration Services",
      p: "We have carved a niche as a service provider of Surface Plate Calibration Services. To maintain promptness, flexibility and timely executions, we provide this service by making use of latest techniques in adherence to the universally accepted norms. Provided service is used in diverse sectors and other related areas and available in different solutions to meet the variegated demands of our clients.",
    },
    {
      photos: [
        "Service9/s1.webp",
        "Service9/s2.webp",
        "Service9/s3.webp",
        "Service9/s4.webp",
      ],
      Details: [
        { label: "Weighing Balance Type", data: "Analytical Balance" },
        { label: "Number of Units	", data: "1" },

        { label: "Calibrated For	", data: "End User" },
        { label: "Calibration Interval", data: "	Yearly" },
        {
          label: "Calibration Service Level",
          data: "Certificate with Uncertainties",
        },
        { label: "Industry Type", data: "Manufacturer" },
      ],
      header: "Weighing Balance Calibration Service",
      p: "NABL calibration services for weighing balanceNABL calibration services for laboratory balanceNABL calibration services for weighing machineNABL calibration services for analytical balance",
    },
    {
      photos: [
        "Service10/s1.webp",
        "Service10/s2.webp",
        "Service10/s3.webp",
        "Service10/s4.webp",
      ],
      Details: [
        { label: "Minimum Order Quantity", data: "1 Sample" },
        { label: "Range	", data: "upto 50 meter NABL calibration" },

        { label: "Required Standards	", data: "	NA" },
        { label: "Instrument Type	", data: "		Measuring Instrument" },
        {
          label: "Industry Type",
          data: "Automotive, Fabrication, Manufacturing",
        },
        { label: "Number Of Instruments", data: "	minimum 1" },
        { label: "Tape Lengths", data: "	upto 50 meters" },
        { label: "Mode Of Report", data: "		Hard Copy" },
      ],
      header: "Measuring Tape Calibration",
      p: "We calibrate Metalic tape, Steel Tape, woven tape, Cloth tape. We have an NABL accriditaion for measuring tape upto 50 meters.",
    },
    {
      photos: [
        "Service11/s1.webp",
        "Service11/s2.webp",
        "Service11/s3.webp",
        "Service11/s4.webp",
      ],
      Details: [
        { label: "Minimum Order Quantity", data: "1 Piece" },
        { label: "Range", data: "0-100 mm" },
        { label: "Required Standards", data: "any" },
        { label: "Calibrated For", data: "end user" },
        { label: "Mode Of Report", data: "Hard Copy" },
        { label: "Brand", data: "any" },
        { label: "Product Range", data: "any" },
      ],
      header: "Plunger Dial Gauge Calibration",
      p: "We offer a superior quality of Plunger Dial Gauge to our clients. The specifications include a bezel diameter of 58mm with various types and readings. The available models include J01 with a reading of 0.01mm and a range of 10.0mm (0-50-0), J02 with 0.01mm reading and a 10.0mm range (0-100), J03 with 0.01mm reading and a 5.0mm range (0-50-0), J04 with 0.01mm reading and a 5.0mm range (0-100), J05 with 0.1mm reading and a 10.0mm range (0-10), J06 with 0.1mm reading and a 25.0mm range (0-10), J08A with 0.01mm reading and a 25.0mm range (0-100), JZ with 0.01mm reading and a 0.8mm range (40-0-40), JO9A with 0.002mm reading and a 2.0mm range (0-10-0), J10A with 0.002mm reading and a 2.0mm range (0-20), and J11A with 0.002mm reading and a 5.0mm range (0-10-0). These dial gauges are designed to provide precise measurements and high accuracy for calibration needs",
    },
    {
      photos: [
        "Service12/s1.webp",
        "Service12/s2.webp",
        "Service12/s3.webp",
        "Service12/s4.webp",
      ],
      header: "Torque Wrench Calibration Service",
      p: "We are the well-renowned name in the industry, engaged in offering Torque Wrench Calibration Service up to 2000 Nm.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Sample" },
        { label: "Brand", data: "any" },
        { label: "Model Name/Number", data: "any" },
        { label: "Drive Size", data: "any" },
        { label: "Torque Range", data: "upto 2000 Nm" },
        { label: "Instrument Type", data: "Measuring Instrument" },
        { label: "Mode Of Report", data: "Hard Copy" },
        { label: "Number Of Instruments", data: "1" },
        { label: "Number of Units", data: "1" },
        {
          label: "Calibration Service Level",
          data: "Certificate with Uncertainties",
        },
      ],
    },
    {
      photos: [
        "Service13/s1.webp",
        "Service13/s2.webp",
        "Service13/s3.webp",
        "Service13/s4.webp",
      ],
      header: "Surface Roughness Tester Calibration",
      p: "In order to meet the specific requirements of our clients, we are providing them with a premium quality Surface Roughness Tester.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Unit" },
        { label: "Shelf Life", data: "12 Months" },
        { label: "Range", data: "any range" },
        { label: "Calibrated For", data: "end user" },
        { label: "Mode Of Report", data: "Hard Copy" },
        { label: "Color", data: "any" },
        { label: "Frequency", data: "any" },
      ],
    },
    {
      photos: [
        "Service14/s1.webp",
        "Service14/s2.webp",
        "Service14/s3.webp",
        "Service14/s4.webp",
      ],
      header: "Surface Roughness Tester Calibration",
      p: "In order to meet the specific requirements of our clients, we are providing them with a premium quality Surface Roughness Tester.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Unit" },
        { label: "Shelf Life", data: "12 Months" },
        { label: "Range", data: "any range" },
        { label: "Calibrated For", data: "end user" },
        { label: "Mode Of Report", data: "Hard Copy" },
        { label: "Color", data: "any" },
        { label: "Frequency", data: "any" },
      ],
    },
    
    {
      photos: [
        "Service15/s1.webp",
        "Service15/s2.webp",
        "Service15/s3.webp",
        "Service15/s4.webp",
        "Service15/s5.webp",
        "Service15/s6.webp",
      ],
      header: "Pressure Gauge Calibration Service",
      p: "We provide NABL calibration services for pressure/vacuum/compound gauges from -1 to 700 bar. Also, we repair the pressure gauges.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Unit" },
        { label: "Gauge Type", data: "analog and digital" },
        { label: "Number Of Gauges", data: "1" },
        { label: "Industry Type", data: "pharma, chemical, automotive" },
        { label: "Number of Pressure Gauges", data: "1" },
        { label: "Calibrated For", data: "Customer Requirement" },
        { label: "Calibration Interval", data: "Yearly" },
        { label: "Accuracy", data: "0.05%" },
        { label: "Measuring Range", data: "-1-700 bar" },
        { label: "Range", data: "-1-700 bar" },
      ],
    },
    {
      photos: [
        "Service16/s1.webp",
        "Service16/s2.webp",
        "Service16/s3.webp",
        "Service16/s4.webp",
      ],
      header: "Multimeter Calibration Services",
      p: "We provide NABL calibration services for multimeter, clampmeter, megger. We are engaged in offering this service to our clients. Our range of all services is widely appreciated by our clients.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Sample" },
        { label: "Multimeter Type", data: "Digital, Analog, Clamp On" },
        { label: "Industry Type", data: "manufacturing" },
        { label: "Number Of Multimeters", data: "1" },
        { label: "Number Of Digital Multi Meters", data: "1" },
        { label: "Number Of Electrical Equipment", data: "1" },
        { label: "Functions Measured", data: "Current, Voltage, Inductance" },
      ],
    },
    {
      photos: [
        "Service17/s1.webp",
        "Service17/s2.webp",
        "Service17/s3.webp",
        "Service17/s4.webp",
      ],
      header: "Energy Meter Calibration Services",
      p: "We are engaged in offering this service to our clients. Our range of all services is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Service Type", data: "Energy Meter Calibration Services" },
        { label: "Payment Mode", data: "Online/Offline" },
        { label: "Shape", data: "Square" },
        { label: "Service Mode", data: "Offline" },
      ],
    },
    {
      photos: [
        "Service18/s1.webp",
        "Service18/s2.webp",
        "Service18/s3.webp",
        "Service18/s4.webp",
      ],
      header: "Ph Meter Calibration Service",
      p: "We are engaged in offering this service to our clients. Our range of all services is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Service Type", data: "Calibration Service" },
        { label: "Payment Mode", data: "Online/Offline" },
        { label: "Service Mode", data: "Offline" },
        { label: "Projected Completed", data: "100+" },
      ],
    },
    {
      photos: [
        "Service20/s1.webp",
        "Service20/s2.webp",
        "Service20/s3.webp",
        "Service20/s4.webp",
      ],
      header: "Thermocouple Calibration Services",
      p: "We are engaged in offering this service to our clients. Our range of all services is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Service Type", data: "Thermocouple Calibration Services" },
        { label: "Payment Mode", data: "Online/Offline" },
        { label: "Service Mode", data: "Offline" },
        { label: "Project Completed", data: "100+" },
      ],
    },
    {
      photos: [
        "Service19/s1.webp",
        "Service19/s2.webp",
        "Service19/s3.webp",
        "Service19/s4.webp",
      ],
      header: "Vernier Caliper Calibration Services",
      p: "We are engaged in offering this service to our clients. Our range of all services is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Service Type", data: "Vernier Caliper Calibration Services" },
        { label: "Service Mode", data: "Offline" },
        { label: "Payment Mode", data: "Online/Offline" },
        { label: "Project Completed", data: "100+" },
      ],
    },
    {
      photos: [
        "Service21/s1.webp",
        "Service21/s2.webp",
        "Service21/s3.webp",
        "Service21/s4.webp",
      ],
      header: "V Block Calibration Service",
      p: "We are engaged in offering this service to our clients. Our range of all services is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Service Type", data: "Calibration Service" },
        { label: "Payment Mode", data: "Online/Offline" },
        { label: "Shape", data: "V Shape" },
        { label: "Service Mode", data: "Offline" },
      ],
    },
    {
      photos: [
        "Service22/s1.webp",
        "Service22/s2.webp",
        "Service22/s3.webp",
        "Service22/s4.webp",
      ],
      header: "Micrometer Calibration Service",
      p: "We are engaged in offering this service to our clients. Our range of all services is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Service Type", data: "Micrometer Calibration Service" },
        { label: "Payment Mode", data: "Online/Offline" },
        { label: "Project Completed", data: "100+" },
        { label: "Service Mode", data: "Offline" },
      ],
    },
    {
      photos: [
        "Service23/s1.webp",
        "Service23/s2.webp",
        "Service23/s3.webp",
        "Service23/s4.webp",
      ],
      header: "Digital Thermometer Calibration Service",
      p: "We are engaged in offering this service to our clients. Our range of all services is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Payment Mode", data: "Online/Offline" },
        { label: "Service Mode", data: "Offline" },
        { label: "Service Type", data: "Calibration Service" },
        { label: "Product Type", data: "Digital Thermometer" },
      ],
    },
    {
      photos: [
        "Service24/s1.webp",
        "Service24/s2.webp",
        "Service24/s3.webp",
        "Service23/s4.webp",
      ],
      header: "2D Digital Height Gauge Calibration Service",
      p: "We are engaged in offering this product to our clients. Our range of all products is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Model Name/Number", data: "V3" },
        { label: "Brand", data: "Trimos" },
        { label: "Type", data: "Digital" },
        { label: "Usage/Application", data: "Height Measurements" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Service25/s1.webp",
        "Service25/s2.webp",
        "Service25/s3.webp",
        "Service25/s4.webp",
        "Service25/s5.webp",
        "Service23/s4.webp",
      ],
      header: "Metallurgical Microscope Calibration",
      p: "Microscope calibration, microscope repair, microscope software support, microscope spares support, microscope training.",
      Details: [
        { label: "Magnification", data: "100000x" },
        { label: "Usage/Application", data: "Laboratory" },
        { label: "Digital Imaging", data: "Yes" },
        { label: "Is it Portable", data: "Portable" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Service28/s1.webp",
        "Service28/s2.webp",
        "Service28/s3.webp",
        "Service28/s4.webp",
        "Service28/s5.webp",

        "Service23/s4.webp",
      ],
      header: "Flow Meter Calibration",
      p: "We provide water flow meter, air flow meter calibration with NABL certificate. Site calibration facility is available for rotameters, gas flow meters.",
      Details: [{ label: "Service Location", data: "Pan India" }],
    },
    {
      photos: [
        "Service26/s1.webp",
        "Service26/s2.webp",
        "Service26/s3.webp",

        "Service23/s4.webp",
      ],
      header: "Temperature Controller Calibration Services",
      p: "We are engaged in offering this service to our clients. Our range of all service is widely appreciated by our clients.",
      Details: [
        { label: "Service Location", data: "Pune" },
        { label: "Payment Mode", data: "Online/Offline" },
        {
          label: "Service Type",
          data: "Temperature Controller Calibration Services",
        },
        { label: "Service Mode", data: "Online/Offline" },
        { label: "Project Completed", data: "100+" },
      ],
    },
    {
      photos: [
        "Service29/s1.webp",
        "Service29/s2.webp",
        "Service29/s3.webp",

        "Service23/s4.webp",
      ],
      header: "Thread Plug Gauge Calibration",
      p: "We offer Thread Plug Gauge calibration services with GO/NO-GO types, made of stainless steel, featuring a double-ended handle design. The hardness is between 58 - 60 HRC. Packaging is available in box format.",
      Details: [
        { label: "Gauge Type", data: "GO / NO - GO" },
        { label: "Material", data: "Stainless Steel" },
        { label: "Hardness", data: "58 - 60 HRC" },
        { label: "Handle Design", data: "Double Ended" },
        { label: "Packaging Type", data: "Box" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Service30/s1.webp",
        "Service30/s2.webp",
        "Service30/s3.webp",
        "Service30/s4.webp",

        "Service23/s4.webp",
      ],
      header: "Snap Gauge Calibration",
      p: "We provide Snap Gauge calibration services with a measuring range from 0.5 to 350 mm. The gauge is made from mild steel, with an accuracy of 0.001 mm. It comes in a U-shape and is black in color.",
      Details: [
        { label: "Measuring Range", data: "0.5 to 350 mm" },
        { label: "Material", data: "Mild Steel" },
        { label: "Shape", data: "U - Shape" },
        { label: "Accuracy", data: "0.001 mm" },
        { label: "Color", data: "Black" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Service31/s1.webp",
        "Service31/s2.webp",
        "Service31/s3.webp",

        "Service23/s4.webp",
      ],
      header: "Pin Gauge Calibration",
      p: "We provide Pin Gauge calibration services with a measuring range from 0.5 to 2.00 mm and a tolerance of ± 0.001 mm. The pin gauges are made from stainless steel and are available in a box packaging.",
      Details: [
        { label: "Material", data: "Stainless Steel" },
        { label: "Measuring Range", data: "0.5 to 2.00 mm" },
        { label: "Tolerance", data: "± 0.001 mm" },
        { label: "Packaging Type", data: "Box" },
        { label: "Product Type", data: "Pin Gauge Set" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Service32/s1.webp",
        "Service32/s2.webp",
        "Service32/s3.webp",
        "Service32/s4.webp",
        "Service32/s5.webp",

        "Service23/s4.webp",
      ],
      header: "Thread Ring Gauge Calibration",
      p: "We provide Thread Ring Gauge calibration services made of mild steel, with a round shape and weight of 6 g. The gauges are threaded and come in a box packaging.",
      Details: [
        { label: "Material", data: "Mild Steel" },
        { label: "Shape", data: "Round" },
        { label: "Weight", data: "6 g" },
        { label: "Packaging Type", data: "Box" },
        { label: "It Is Threaded", data: "Yes" },
        { label: "Country of Origin", data: "Made in India" },
      ],
    },
    {
      photos: [
        "Service33/s1.webp",
        "Service33/s2.webp",
        "Service33/s3.webp",
        "Service33/s4.webp",
        "Service33/s5.webp",
        "Service33/s6.webp",

        "Service23/s4.webp",
      ],
      header: "Crane Calibration Services",
      p: "Crane Calibration is an important process that ensures the accuracy of cranes. It involves verifying the accuracy of load cells, indicating devices, and other measuring instruments used in cranes. This process checks the load-lifting device for its weight capacity and stability, among other factors. We provide form 11 and form 13 for calibration.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Instrument" },
        { label: "Service Location", data: "India" },
      ],
    },
    {
      photos: [
        "Service35/s1.webp",
        "Service35/s2.webp",
        "Service35/s3.webp",
        "Service35/s4.webp",
        "Service35/s5.webp",
        "Service35/s6.webp",

        "Service23/s4.webp",
      ],
      header: "Weighing Scale Stamping Service",
      p: "We provide Government-approved weighing scale stamping services. Our skilled professionals carry out the service under strict supervision using the best tools and advanced techniques. The service is reliable, executed efficiently, and offered at budget-friendly prices.",
      Details: [
        { label: "Minimum Order Quantity", data: "1 Instrument" },
        { label: "Service Location", data: "Pune" },
      ],
    },
  ];
  return (
    <div className="bg-gray-100 lg:pt-20 pt-24">
      <div className="flex justify-between bg-gray-100 lg:px-10 p-4 cursor-pointer">
        <div className="flex gap-1 relative lg:right-5console.log('CallibrationService component rendered');">
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
          Callibration Service
        </h1>
        <p className="text-gray-700 text-justify lg:text-base text-sm">
          We offer an excellent quality of Calibration Services.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {array.map((item, index) => {
          return (
            <ProductCard
            id={item.id}
              photos={item.photos}
              header={item.header}
              details={item.Details}
              p={item.p}
              key={index}
            />
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

export default CallibrationService;
