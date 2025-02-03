import React, { useContext } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaShareAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import {
  MdAddCall,
  MdEmail,
  MdOutlineMail,
  MdOutlinePhonelinkRing,
  MdOutlineSms,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Interested from "../Pages/Interested";
import InterestedMail from "../Pages/InterestedEmail";
import { Context } from "../Pages/ContextApi";

function Foooter() {
  const navigate = useNavigate();

  const product = [
    { label: "- Portable Hardness Tester", path: "/portable" },
    { label: "- Universal Testing Machine", path: "/universal" },
    { label: "- Brinell Hardness Tester", path: "/brinell" },
    { label: "- Rockwell Hardness Tester", path: "/rockwell" },
    { label: "- Impact Testing Machine", path: "/impact" },
    { label: "- Vickers Hardness Tester", path: "/vicker" },
  ];

  const product2 = [
    { label: "- Micro Vickers Hardness Tester", path: "/micro" },
    { label: "- Test Blocks And Indenters", path: "/testBlock" },
    { label: "- Metallurgical Microscope", path: "/metallurgical" },
    { label: "- Optical Emission Spectrometer", path: "/opticalEmission" },
  ];

  const company = [
    { label: "- Know Us", path: "/knowUs" },
    { label: "- Testimonial", path: "/testimonial" },
    { label: "- SiteMap", path: "/siteMap" },
    { label: "- Job", path: "/job" },
    { label: "- Contact Us", path: "/contact" },
    { label: "- News Coverage", path: "/newsCoverage" },
    { label: "- Distributor Enquiry Form", path: "/enquiry" },
  ];
  const { interest, interestEmail } = useContext(Context);
  const header = "  Dynamic Portable Leeb (Rebound Type) Hardness Tester";
  const price = "₹ 2.5 Lakh";
  const { setInterest, setInterestData, interestMail, setInterestEmail } =
    useContext(Context);
  return (
    <div>
      <div className="bg-black text-white flex justify-center lg:flex-row flex-col  lg:gap-30  gap-16 p-10 ">
        <div className="flex flex-col gap-3 ">
          <h1 className="flex gap-2 text-xl lg:text-3xl">
            {" "}
            <IoLocationSharp className="text-blue-600 " />
            Reach Us
          </h1>
          <p className="text-xl lg:text-2xl">
            Akshay Shinde ( MD at SAE Callibration)
          </p>
          <section className="lg:text-lg">
            <p className="font-bold">SAE CALIBRATION LABORATORY LLP</p>
            <p className="lg:text-base text-sm">
              Ground Floor,Plot No-1193/2 To 7 Shop No-20 Shine <br /> Square,
              Road, Newale Wasti, Chikhali
            </p>
            <p className="lg:text-base text-sm">
              Pimpri-Chinchwad, Maharashtra 411062
            </p>
          </section>
          {/* <button className="w-max">Get Directions</button> */}
        </div>
        <div className="flex gap-10">
          <div className="lg:pt-6 pt-16">
            <img src="logo2.jpg" className="h-20 lg:w-56 w-40" alt="" />
            <p className="text-center">
              Gut No. 43/8, MIDC Waluj, <br /> Aurangabad - 431136.
            </p>
          </div>
          <div >
            <h1 className="lg:text-2xl text-center font-bold text-lg p-2 border-b whitespace-nowrap">
              Contact Details
            </h1>
            <div className="flex items-center gap-3 p-2">
              <div className="bg-gray-100 h-max text-xl  text-[#1D5B86] w-max p-1">
                Callibration
              </div>
              <div>
                <p className="flex gap-1">
                  <MdOutlineMail className="text-lg relative top-0.5" />
                  sigmacalab@gmail.com
                </p>
                <p className="flex gap-1">
                  <FaPhoneAlt className="text-lg relative top-0.5" />{" "}
                  0240-29991788
                </p>
                <p className="flex gap-1 whitespace-nowrap">
                  <MdOutlinePhonelinkRing className="text-lg relative top-0.5" />{" "}
                  7387777029 ,7841095558
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2">
              <div className="bg-gray-100 text-xl h-max px-6  text-[#1D5B86] w-max p-1">
               Testing
              </div>
              <div>
                <p className="flex gap-1 ">
                  <MdOutlineMail className="text-lg relative top-0.5" />
                  sigmacalab@gmail.com
                </p>
                <p className="flex gap-1 ">
                  <FaPhoneAlt className="text-lg relative top-0.5" />{" "}
                  0240-29991788
                </p>
                <p className="flex gap-1 whitespace-nowrap">
                  <MdOutlinePhonelinkRing className="text-lg relative top-0.5" />{" "}
                  7387777029 ,7841095558
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid md:grid  hidden grid-cols-2 lg:gap-6 gap-2 ">
          <p
            className=" lg:text-2xl cursor-pointer hover:text-blue-500"
            onClick={() => {
              setInterest(!interest);
              setInterestData({
                img: "logo.jpg",
                header: "SAE CALIBRATION LABORATORY LLP",
                d1: { label: "", data: "" },
                d2: { label: "", data: "" },
                d3: { label: "", data: "" },
                d4: { label: "", data: "" },
                price: "",
              });
            }}
          >
            <p className="flex gap-2 p-1  hover:text-blue-500 cursor-pointer whitespace-nowrap">
              <MdAddCall className="text-blue-600 lg:text-2xl relative lg:top-0 top-1" />{" "}
              Call Us
            </p>
            <p className="text-xs lg:text-2xl ">0804898571</p>
          </p>
          <p className=" lg:text-2xl cursor-pointer hover:text-blue-500">
            <p className="flex gap-2 p-1 whitespace-nowrap">
              <FaShareAlt className="text-blue-600  lg:text-2xl relative lg:top-0 top-2" />{" "}
              Share Us
            </p>
            <p className="flex gap-3 px-6">
              <FaFacebookSquare className="bg-blue-700" />
              <FaTwitterSquare className="bg-blue-500" />
              <FaLinkedin className="bg-blue-500" />
            </p>
          </p>

          <p
            onClick={() => {
              setInterestEmail(!interestMail);
            }}
            className=" lg:text-2xl cursor-pointer hover:text-blue-500"
          >
            <p className="flex gap-2 cursor-pointer whitespace-nowrap">
              <MdEmail className="text-blue-600  lg:text-2xl relative lg:top-0 top-2" />{" "}
              Send E-Mail
            </p>
          </p>
          <p
            className=" lg:text-2xl cursor-pointer hover:text-blue-500"
            onClick={() => {
              setInterest(!interest);
              setInterestData({
                img: "logo.jpg",
                header: "SAE CALIBRATION LABORATORY LLP",
                d1: { label: "", data: "" },
                d2: { label: "", data: "" },
                d3: { label: "", data: "" },
                d4: { label: "", data: "" },
                price: "",
              });
            }}
          >
            <p className="flex gap-2 whitespace-nowrap">
              <MdOutlineSms className="text-blue-600  lg:text-2xl" /> Send SMS
            </p>
          </p>
        </div>
      </div>
      <div
        style={{ boxShadow: "2px 2px 25px gray" }}
        className="bg-[#1D5B86] flex lg:flex-row lg:px-0 px-20 flex-col md:flex-row gap-10 justify-around lg:p-10 lg:pb-0 p-5"
      >
        <div className="text-white flex flex-col gap-8">
          <h1 className="text-xl lg:text-3xl">Our Company</h1>
          <div className="text-lg">
            {company.map((item, index) => {
              return (
                <p
                  key={index}
                  className={`relative cursor-pointer border-l  transition-all duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:w-0 after:h-[2px] after:bg-white after:transition-all 
                 after:duration-300 hover:after:w-full`}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </p>
              );
            })}
          </div>
        </div>

        <div className="text-white flex flex-col gap-8">
          <h1 className="text-xl lg:text-3xl">Our Product Range</h1>
          <div className="flex lg:flex-row   flex-col lg:gap-32">
            <div className="text-lg">
              {product.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="relative cursor-pointer border-l pl-2 transition-all duration-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-0 after:h-[2px] after:bg-white after:transition-all 
                    after:duration-300 hover:after:w-full"
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </p>
                );
              })}
            </div>
            <div className="text-lg">
              {product2.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="relative cursor-pointer border-l  transition-all duration-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:w-0 after:h-[2px] after:bg-white after:transition-all 
                    after:duration-300 hover:after:w-full"
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </p>
                );
              })}
              <button
                onClick={() => navigate("/products")}
                className="text-white hover:bg-white hover:text-[#114B71] text-lg font-bold bg-[#114B71] border border-gray-900 mt-5 px-5 p-1"
              >
                +Viewl All
              </button>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/products")}
          style={{
            backgroundImage: "url(Slider2/s1.PNG)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "-8px -8px 5px white",
          }}
          className=" flex flex-col  gap-1 cursor-pointer justify-center relative z-20 lg:top-20 rounded-full border md:h-48 md:w-48 h-64 w-64 lg:h-80 lg:w-80"
        >
          <p
            className="bg-black text-white text-xl w-max px-5 p-1"
            style={{ borderRadius: "36% 28% 0% 0% / 0% 100% 10% 10% " }}
          >
            See All Products
          </p>
          <p
            className="bg-[#114B71]  text-white text-xl w-max px-5 p-1"
            style={{ borderRadius: "36% 28% 0% 0% / 0% 100% 10% 10% " }}
          >
            Click Here
          </p>
        </div>
      </div>
      <div className="text-sm p-10">
        <p>
          <strong> ©SAE Callibration.</strong> All Rights Reserved{" "}
          <span className="underline">(Terms of Use)</span>
        </p>
        <p>Developed and Managed by IndiaMART InterMESH Limited</p>
      </div>
      {interest && <Interested />}
      {interestEmail && <InterestedMail />}
    </div>
  );
}

export default Foooter;
