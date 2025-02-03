import BestDeal from "./BestDeal";

const ChartSheet = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center pb-5 ">
        <div className=" w-[90%]   bg-[#EEEEEE]  ">
          <div>
            <div className="  ">
              <div className=" bg-white">
                <h1 className="flex justify-center h-[150px]  items-center text-[30px] m-1">
                  Basic Information
                </h1>
              </div>
            </div>

            <div className="border border-gray-300 shadow-lg bg-white rounded-md">
              <table className="table-auto w-[100%] border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Nature of Business
                    </td>
                    <td className="p-3 w-[60%]  border border-gray-300">
                      Wholesaler/Distributor
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Additional Business
                    </td>
                    <td className="p-3 w-[60%] border border-gray-300">
                      <ul className="list-disc pl-5">
                        <li>Factory / Manufacturing</li>
                        <li>Service Provision</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Company CEO
                    </td>
                    <td className="p-3 w-[60%] border border-gray-300">
                      Alpesh Tamrakar
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Registered Address
                    </td>
                    <td className="p-2 w-[60%] border border-gray-300">
                      A-505, Smruti Garden, Near Nirankari Bhavan Kalewadi,
                      Pimpri, Pune-411017, Maharashtra, India
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Total Number of Employees
                    </td>
                    <td className="p-3 w-[60%] border border-gray-300">
                      51 to 100 People
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      GST Registration Date
                    </td>
                    <td className="p-3 w-[60%] border border-gray-300">
                      01-07-2017
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Legal Status of Firm
                    </td>
                    <td className="p-3 w-[60%] border border-gray-300">
                      Proprietorship
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Annual Turnover
                    </td>
                    <td className="p-3 w-[60%] border border-gray-300">
                      5 - 25 Cr
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Top Export Countries
                    </td>
                    <td className="p-3 border w-[60%]  border-gray-300">
                      <ul className="list-disc pl-5">
                        <li>Saudi Arabia</li>
                        <li>Bangladesh</li>
                        <li>Indonesia</li>
                        <li>Nepal</li>
                        <li>Oman</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="  ">
            <h2 className=" pt-4 pb-4 text-[30px] text-[#1A4B6C] flex p-1 font-semibold  ">
              Trade & Market
            </h2>
            <div className="border border-gray-300 shadow-lg bg-white rounded-md">
              <table className="w-[100%] table-auto border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Export Percentage
                    </td>
                    <td className="p-3 border w-[60%] border-gray-300">
                      20-40%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="   ">
            <h2 className="pt-4 pb-4 text-[30px] text-[#1A4B6C] flex p-1 font-semibold  ">
              Company USP
            </h2>
            <div className="border border-gray-300 shadow-lg bg-white rounded-md">
              <table className="w-[100%] table-auto border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Primary Competitive Advantage
                    </td>
                    <td className="p-3 w-[60%] border border-gray-300">
                      <ul className="list-disc pl-5">
                        <li>Good Financial Position & TQM</li>
                        <li>Large Product Line</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Quality Measures / Testing Facilities
                    </td>
                    <td className="p-3 border w-[60%] border-gray-300">YES</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="   ">
            <h2 className="pt-4 pb-4 text-[30px] text-[#1A4B6C] flex p-1 font-semibold  ">
              Statutory Profile
            </h2>
            <div className="border border-gray-300 shadow-lg bg-white rounded-md">
              <table className="w-[100%] table-auto border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Import Export Code (IEC)
                    </td>
                    <td className="p-3 border w-[60%] border-gray-300">
                      AFOPT*****
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Banker
                    </td>
                    <td className="p-3 border w-[60%] border-gray-300">
                      Kotak Mahindra Bank
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      GST No.
                    </td>
                    <td className="p-3 border w-[60%] border-gray-300">
                      27AFOPT6891H1ZJ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="  ">
            <h2 className=" pt-4 pb-4 text-[30px] text-[#1A4B6C] flex p-1 font-semibold  ">
              Packaging/Payment and Shipment Details
            </h2>
            <div className="border border-gray-300 shadow-lg bg-white rounded-md">
              <table className="w-[100%] table-auto border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Payment Mode
                    </td>
                    <td className="p-3 border w-[60%]  border-gray-300">
                      <ul className="list-disc pl-5">
                        <li>Cheque</li>
                        <li>DD</li>
                        <li>RTGS</li>
                        <li>Cash</li>
                        <li>Credit Card</li>
                      </ul>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td className="p-3 w-[40%] bg-gray-200 border border-gray-300 font-semibold">
                      Shipment Mode
                    </td>
                    <td className="p-3 border w-[60%]  border-gray-300">
                      <ul className="list-disc pl-5">
                        <li>By Road</li>
                        <li>By Cargo</li>
                        <li>Indonesia</li>
                        <li>Nepal</li>
                        <li>By Air</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};
export default ChartSheet;
