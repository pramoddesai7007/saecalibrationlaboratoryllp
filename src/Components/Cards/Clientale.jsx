// import React from "react";

// function Clientale() {
//   return (
//     <div>
//       <div className=" ml-12 p-2 pt-4">
//         <h2 className="border-l-4 lg:blcok hidden font-light  text-[25px] text-[#1A4B6C] lg:flex p-1  border-[#1A4B6C]">
//           Clientale
//         </h2>

//       </div>
//     </div>
//   );
// }

// export default Clientale;

import React from "react";

function Clientale() {
  const clients = [
    "Mahindra Group",
    "Jindal Group",
    "MRF Group",
    "Endurance Group",
    "Crompton Greaves",
    "Kalyani Group",
    "KSB Group",
    "Volkswagen Group",
    "L and T Group",
    "Bhushan Steel Limited",
    "Ashok Leyland Limited",
    "Kirloskar Group",
    "Piaggio Group",
  ];

  return (
    <div className=" bg-white">
      <div className="lg:max-w-[1400px]  max-w-6xl mx-auto px-2 py-5">
        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-3xl font-li text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
            Clientele
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            In its small journey, the company has earned trust of many prominent
            customers. Some of them are listed below :
          </p>

          <ul className="grid grid-cols-2  gap-2 mb-2">
            {clients.map((client, index) => (
              <li
                key={index}
                className="text-gray-700 flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
                <span>{client}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700 text-lg">
            And more than 2500 others customers already served.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clientale;
