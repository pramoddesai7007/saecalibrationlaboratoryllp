import React, { useContext, useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Context } from "./ContextApi";
import InterestedMail from "./InterestedEmail";

const Contact = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
    captcha: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   const { interest,interestEmail } = useContext(Context);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-white lg:pt-20 pt-24">
         <div className="flex justify-between bg-gray-100 px-10 p-4 cursor-pointer pb-5">
              <div className="flex gap-1">
                <p className="flex gap-1" onClick={() => navigate("/")}>
                  {" "}
                  Home <MdKeyboardDoubleArrowRight className="relative top-1" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center item-center lg:flex-row flex-col ">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          {/* Left Section - Contact Information */}
          <div className="bg-white ">
            <h2 className="text-2xl font-bold text-navy-800  bg-gray-900 text-white py-4 px-6 rounded-l-lg border-white border ">
              Get In Touch With Us Now!
            </h2>

            <div className="space-y-8 pt-8 shadow-lg p-4">
              {/* Phone Number */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-800">
                    Phone Number
                  </h3>
                  <p className="text-gray-600">+91 80004 36640</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-800">Email</h3>
                  <p className="text-gray-600">info@expertwebdesigning.com</p>
                  <p className="text-gray-600">sales@expertwebdesigning.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-800">
                    Location
                  </h3>
                  <p className="text-gray-600">
                    518, Rhythm Plaza, Amar Javan Circle,
                  </p>
                  <p className="text-gray-600">
                    Nikol, Ahmedabad, Gujarat – 382350
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-800">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">Monday To Saturday</p>
                  <p className="text-gray-600">09:00 AM To 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className=" rounded-lg  ">
            <h2 className="text-2xl font-bold text-white  bg-gray-900 py-4 px-6 rounded-r-lg">
              Contact Us
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 pt-6 shadow-xl   p-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center space-x-2"
                >
                  <span>Submit</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {interestEmail && <InterestedMail/>}
    </div>
  );
};

export default Contact;
