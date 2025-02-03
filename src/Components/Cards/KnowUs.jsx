import { useEffect, useState } from "react";
import CompanyFastSheet from "./CompanyFastSheet";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BestDeal from "./BestDeal";
import Strip from "../Homepage/Strip";
import Clientale from "./Clientale";

const KnowUs = () => {
  const [view, setView] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  return (
    <div className="lg:pt-20 pt-24">
      <div className="flex justify-between bg-gray-100 px-10 p-4 cursor-pointer">
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
      <div
        className={`bg-[#FFFFFF] w-[100%] flex justify-center mt-4 ${
          view ? "lg:h-[150px]" : "lg:h[250px]"
        } `}
      >
        <div className=" w-[90%] h-[300px]">
          <h2 className="text-[#1A4B6C]   text-[25px] mt-3  font-light  ">
            Know Us
          </h2>

          {view === true ? (
            <p className="mt-3 text-[#7F7E7E] text-lg">
              We <strong>“Matrix Testing Machine Services”</strong> are{" "}
              <strong>Authorized Wholesale Dealer, Exporter and Trader</strong>{" "}
              of reliable range of{" "}
              <strong>
                Universal Testing Machine, Rockwell Hardness Tester, Micro
                Vickers Hardness Tester, Brinell Hardness Tester, Balancing
                Machine and many more
              </strong>
              . The advantage of our close contact with the manufacturers of
              testing machines, team of factory trained engineers with intimate
              knowledge of the entire product helps us in giving...
              <span
                onClick={() => setView(false)}
                className=" text-[#d8d6d6] cursor-pointer"
              >
                Read More
              </span>{" "}
            </p>
          ) : (
            <p className="mt-3 text-[#7F7E7E] text-lg  ">
              We <strong>“Matrix Testing Machine Services”</strong> are{" "}
              <strong>Authorized Wholesale Dealer, Exporter and Trader</strong>{" "}
              of reliable range of{" "}
              <strong>
                Universal Testing Machine, Rockwell Hardness Tester, Micro
                Vickers Hardness Tester, Brinell Hardness Tester, Balancing
                Machine and many more
              </strong>
              . The advantage of our close contact with the manufacturers of
              testing machines, team of factory trained engineers with intimate
              knowledge of the entire product helps us in giving world class
              customer satisfaction. Our products have gained appreciation from
              our clients and we have garnered a vast customer-base all across
              India and Middle East. Our Sale’s team is highly capable of
              understanding the customer’s requirement and delivering the goods
              in timely manner.
              <div className="mt-3">
                {" "}
                The company was established in the year <strong>
                  2008
                </strong> at <strong>Pune (Maharashtra, India)</strong>. Our
                Technical <strong>Director “Mr. Alpesh Tamrakar”</strong> helms
                the company. It is due to his vast experience and motivation
                that he provided to our team from time to time that have enabled
                us to make a place for ourselves in the market. Our team is
                highly capable of understanding the customer’s requirement and
                delivering the goods in fastest possible time.{" "}
              </div>
            </p>
          )}
        </div>
      </div>
      <CompanyFastSheet />
      <BestDeal />
      <Strip/>
      <Clientale />
      <Strip />
      {/*--------------------------------------*/}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-6 shadow-md w-full lg:max-w-[1400px]  max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl font-li text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
            Industries We serve
          </h2>
          <p className="text-gray-700 mt-2">
            Owing to the superb quality of our products and professionalism of
            our services, we have won the trust of a large number of industries.
            Today, we are serving the following:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Automobile Industries</li>
            <li>Steel Industries</li>
            <li>Casting Industries</li>
            <li>Engineering Colleges</li>
            <li>Testing Labs</li>
          </ul>

          <div className="mt-4 flex flex-col sm:flex-row items-center">
            <p className="text-gray-700 font-medium mr-2">
              For more Information:
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#1D5B86] text-white px-6 py-2 rounded-md hover:bg-[#164a6e]"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-2/5 mt-6 lg:mt-0 flex justify-center">
          <div className="border-2 border-gray-300 p-1">
            <img
              src="/serve.jpg"
              alt="Industries we serve"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <Strip />
      {/*-----------------------------------------*/}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-6 shadow-md w-full lg:max-w-[1400px]  max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl font-li text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
            Our Goals
          </h2>
          <p className="text-gray-700 mt-2">
            We incepted our journey into the industrial world with certain goals
            in our mind and we ensure that we achieve it with perfection. Some
            of the goals are mentioned below:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>To provide World Class products and service</li>
            <li>Fastest Delivery Period</li>
            <li>Offering cost-effective products and services</li>
            <li>Ensure Customers Satisfaction</li>
          </ul>

          <div className="mt-4 flex flex-col sm:flex-row items-center">
            <p className="text-gray-700 font-medium mr-2">
              For more Information:
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#1D5B86] text-white px-6 py-2 rounded-md hover:bg-[#164a6e]"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-2/5 mt-6 lg:mt-0 flex justify-center">
          <div className="border-2 border-gray-300 p-1">
            <img
              src="/goal.jpg"
              alt="Industries we serve"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <Strip />
      <Strip />
      {/*-----------------------------------------*/}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-6 shadow-md w-full lg:max-w-[1400px]  max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl font-li text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
            Our Team
          </h2>
          <p className="text-gray-700 mt-2">
            We are backed by highly knowledgeable team of professionals that
            assist us in carrying out trading and supplying process efficiently.
            Our professionals hold vast experience and are devoted towards
            achieving defined organizational goals. To maintain hassle-free work
            flow, we have team of procurement agents, sales & marketing
            representatives, storekeepers, packaging personnel, etc. In addition
            to this, we organize crucial seminars and training sessions for our
            professionals to keep them abreast with the latest market
            development.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center">
            <p className="text-gray-700 font-medium mr-2">
              For more Information:
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#1D5B86] text-white px-6 py-2 rounded-md hover:bg-[#164a6e]"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-2/5 mt-6 lg:mt-0 flex justify-center">
          <div className="border-2 border-gray-300 p-1">
            <img
              src="/team.jpg"
              alt="Industries we serve"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <Strip />
      <BestDeal />

      <Strip />
    </div>
  );
};
export default KnowUs;
