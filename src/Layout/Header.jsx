import React, { useContext, useEffect, useState } from "react";
import { Menu, X, Cuboid as Cube } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Context } from "../Pages/ContextApi";
import { MdAddCall, MdEmail } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { link } = useContext(Context);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [searchToggle, setSearchToggle] = useState(false);

  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const menu = [
    { name: "Home", path: "/", submenu: [] },
    {
      name: "Products & Service",
      path: "/products",
      submenu: [
        {
          label: "Callibration Service",
          subsubmenu: [
            "Profile Projector Calibration Services",
            "Radius Gauge Calibration",
            "Dial Gauge Calibrator Calibration",
          ],
          onclick: "/callibrationService",
        },
        {
          label: "Portable Harness Tester",
          subsubmenu: [
            "Colour Display Mash Project Make Portable LEEB Hardness Tester",
            "Dynamic Portable Leeb (Rebound Type) Hardness Tester",
            "Portable Hardness Tester TKM359CE",
          ],
          onclick: "/portable",
        },
        {
          label: "Universal Testing Machine",
          subsubmenu: [
            "10KN Capacity Automatic Elextro Mechanical Universal Testing Machine",
            "100KN Horizontal Chain and Rope Tensile Testing Machine",
            "100KN Servo Controlled Open crosshead Hydroulic Grip Front Loading Digital Universal testing Machine",
          ],
          onclick: "/universal",
        },
        {
          label: "Brinell Hardness Tester",
          subsubmenu: [
            "B 3000 Pc Computerised Brinell Hardness Tester 10/3000kgf",
            "Optical B 3000 (O) Brinell Hardness tester 10/3000Kgf",
            "Optical B 3000 (O) Hydraulic Power pack Brinell Hardness tester 10/3000Kgf",
          ],
          onclick: "/brinell",
        },
        {
          label: "Rockwell Hardness Tester",
          subsubmenu: [
            "Analog Rockwell Hardness Tester (Load 60,100,150Kgf)",
            "analog-rockwell-hardness-testing-machine-load-60-100-150kgf",
            "RASNEB-3 Digital Rockwell Cum Brinell Hardness Tester (Load 60,100,150,187.5,250Kgf)",
          ],
          onclick: "/rockwell",
        },
        {
          label: "Impact Testing Machine",
          subsubmenu: [
            "Automatic Charpy Impact Testing Machine 300 Joule Capacity Model No. : Auto-Impact 30",
            "Impact Testing Machine Model Number : IT-30-STD (Capacity 300 Joule)",
            "Impact Testing Machine Model Number : IT-30-D (300 Joule Capacity) Digital Charpy Izod",
            "Impact Testing Machine Model Number : IT-30-ASTM ASTM (300 Joule Capacity)",
          ],
          onclick: "/impact",
        },
        {
          label: "Vickers Hardness Tester",
          subsubmenu: [
            "Optical Vickers Hardness Tester Model Number : VM-50-1Kg (Capacity : 1kg to 50kg, Make : FIE)",
            "Touch Screen Digital Vickers Hardness Tester Model Number : VM-50-TS ( Range : 5 kg to 50kg)",
            "Optical Vickers Hardness Tester Model Number : VM-50 (5kg to 50kg)",
            "5kg to 50kg Computerized Vickers Hardness Tester Model No. VM-50-PC",
          ],
          onclick: "/vicker",
        },
        {
          label: "Micro Vickers Hardness Tester",
          subsubmenu: [
            "10gm to 1kg Touch Screen Fully Automatic Digital Micro Vickers Hardness Tester",
            "10gm to 1kg MMT-X2 Micro Vickers Hardness Tester",
            "10gm to 1kg Computerized Micro Vickers Hardness Tester",
            "1kg Computerized Micro Vickers Hardness Tester",
          ],
          onclick: "/micro",
        },
        {
          label: "Test Blocks And Indenters",
          subsubmenu: [
            "Diamond Identer .",
            "Hardness Test Block",
            "1 inch Hardness Test Block",
          ],
          onclick: "/testBlock",
        },
        {
          label: "Metallurgical Microscope",
          subsubmenu: [
            "Video Measuring Machine.",
            "50 to 1000X Magnification Inverted type Metallurgical Microscope",
          ],
          onclick: "/metallurgical",
        },
        {
          label: "Optical Emission Spectrometer",
          subsubmenu: ["Spark Optical Emission Spectrometer"],
          onclick: "/opticalEmission",
        },
      ],
    },

    {
      name: "KnowUs",
      path: "/knowUs",
      submenu: [
        {
          label: "Testimonial",
          onclick: "/testimonial",
        },
        {
          label: "Quality Compliance",
          onclick: "quality",
        },
        {
          label: "Sitemap",
          onclick: "/sitemap",
        },
        {
          label: "Job",
          onclick: "/job",
        },
        {
          label: "news Coverage",
          onclick: "/newsCoverage",
        },
      ],
    },
    {
      name: "Contact Us",
      path: "/contact",
      submenu: [],
    },
  ];

  const header = "  Dynamic Portable Leeb (Rebound Type) Hardness Tester";
  const price = "₹ 2.5 Lakh";
  const {
    interest,
    setInterest,
    setInterestData,
    interestMail,
    setInterestEmail,
  } = useContext(Context);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    setActiveMenu(null); // Close the main menu
    setActiveSubMenu(null); // Close the submenu
  }, [location]); // Runs whenever the route changes
  return (
    <header className="bg-white shadow-md  fixed w-full z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between items-center lg:h-20 h-24">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-4">
            <img src="logo.jpg" className="h-10 w-10 text-blue-600" />
            <div>
              <span className=" lg:text-xl text-xs font-bold text-gray-800 whitespace-nowrap">
                SAE CALLIBRATION LABORATORY LLP
            
              </span>
              <p className="flex text-gray-500 text-xs">
                Pimpri-Chinchwad,411062 (Maharashtra -India){" "}
                <span className="px-1 lg:flex gap-1 hidden whitespace-nowrap">
                  <FaCheckCircle className="text-green-500 relative top-1" /> |
                  GST No. 27AFJFS4242J1ZO{" "}
                </span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex lg:space-x-8 px-8">
            {menu.map((item, index) => (
              <div
                key={index}
                className="relative group whitespace-nowrap"
                onMouseEnter={() => setActiveMenu(index)}
                onClick={() => setActiveSubMenu(null)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <NavLink
                  to={item.path}
                  className="text-gray-600 flex hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </NavLink>

                {/* {activeMenu === index && item.submenu.length > 0 && (
                  <div className="absolute top-full left-0 w-64 bg-gray-200 shadow-lg p-2 rounded-md z-10">
                    {item.submenu.map((submenuItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="relative  group cursor-pointer"
                        onMouseEnter={() => setActiveSubMenu(subIndex)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log(submenuItem.onclick);
                            navigate(submenuItem.onclick);
                          }}
                          className="cursor-pointer text-sm p-2 hover:bg-gray-300 rounded-lg"
                        >
                          {submenuItem.label}
                        </div>
                        {activeSubMenu === subIndex &&
                          submenuItem.subsubmenu?.length > 0 && (
                            <div className="absolute top-0 left-full  w-64 bg-gray-200 shadow-lg p-2 rounded-lg z-10">
                              {submenuItem.subsubmenu.map(
                                (subsubmenuItem, subsubIndex) => (
                                  <div
                                    key={subsubIndex}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      navigate(submenuItem.onclick);
                                    }}
                                    className="text-sm  p-2 hover:bg-gray-300 rounded-md"
                                  >
                                    - {subsubmenuItem}
                                  </div>
                                )
                              )}
                              <button
                                onClick={() => navigate(submenuItem.onclick)}
                                className="text-blue-600 p-2 mt-2 block rounded-md hover:bg-blue-100"
                              >
                                View All
                              </button>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )} */}
                {activeMenu === index && item.submenu.length > 0 && (
                  <div className="absolute top-full left-0 w-64 bg-gray-200 shadow-lg p-2 rounded-md z-10">
                    {item.submenu.map((submenuItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setActiveSubMenu(subIndex)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log(submenuItem.onclick);
                            navigate(submenuItem.onclick);
                          }}
                          className="cursor-pointer text-sm p-2 hover:bg-gray-300 rounded-lg"
                        >
                          {submenuItem.label}
                        </div>
                        {activeSubMenu === subIndex &&
                          submenuItem.subsubmenu?.length > 0 && (
                            <div className="absolute top-0 left-full w-64 bg-gray-200 shadow-lg p-2 rounded-lg z-10">
                              {submenuItem.subsubmenu.map(
                                (subsubmenuItem, subsubIndex) => (
                                  <div
                                    key={subsubIndex}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      navigate(submenuItem.onclick);
                                    }}
                                    className="text-sm p-2 hover:bg-gray-300 rounded-md break-words whitespace-normal overflow-hidden"
                                  >
                                    - {subsubmenuItem}
                                  </div>
                                )
                              )}
                              <button
                                onClick={() => navigate(submenuItem.onclick)}
                                className="text-blue-600 p-2 mt-2 block rounded-md hover:bg-blue-100"
                              >
                                View All
                              </button>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="p-4  flex gap-8">
            <div className="flex gap-6">
              <div className="hidden lg:flex items-center">
                <button className="bg-[#3D3D3D] px-2 text-white lg:px-4 py-2 lg:text-lg text-xs font-medium hover:bg-blue-700 transition-colors rounded-full">
                  <p
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
                    className="flex gap-1 whitespace-nowrap "
                  >
                    <MdAddCall className="relative top-1 lg:text-lg" /> Call
                    9045678965
                  </p>
                </button>
              </div>
              <div className="hidden lg:flex items-center">
                <button
                  onClick={() => {
                    setInterestEmail(!interestMail);
                  }}
                  className="bg-[#1D5B86]  flex gap-1 whitespace-nowrap px-2 text-white lg:px-4 py-2 lg:text-lg text-xs font-medium hover:bg-blue-700 transition-colors rounded-full"
                >
                  <MdEmail className="relative top-1 lg:text-lg" /> SEND MAIL
                </button>
              </div>
              {location.pathname === "/" ? (
                <></>
              ) : (
                <div>
                  <div className="shadow-md hidden lg:block md:block  p-2  w-max bg-gray-100 text-xl ">
                    <IoSearch
                      className="text-blue-500"
                      onClick={() => setSearch(!search)}
                    />
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setSearchToggle(!searchToggle)}
              className="lg:hidden md:hidden   cursor-pointer px-2 w-10 h-10  rounded-full flex justify-center items-center relative left-1 sm:left-40 "
            >
              <BsSearch className="" />
            </button>

            {search && (
              <div className="bg-white hidden rounded z-20 absolute  p-2 w-max  right-4 border top-[160px]">
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
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menu.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </NavLink>
              ))}
              
            </div>
          </div>
        )}
      </div>
      {searchToggle && (
        <div className="lg:hidden  px-5 py-2">
          <span className="flex border justify-between rounded-full px-1">
            <input
              type="text"
              placeholder="Search .."
              className="rounded-full p-2 outline-none"
            />
            <button className=" cursor-pointer px-2 w-10 h-10  bg-blue-400 rounded-full flex justify-center items-center relative left-1 ">
              <BsSearch className="" />
            </button>
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
