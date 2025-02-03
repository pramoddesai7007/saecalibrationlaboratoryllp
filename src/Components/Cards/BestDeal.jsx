// import React, { useState } from "react";

// function BestDeal() {
//   const [form, setForm] = useState({
//     number: "",
//     name: "",
//     query: "",
//   });

//   return (
//     <div className="flex  h-44 w-full">
//       <div className="w-[90%]">
//         <h1 className="text-2xl">Save Time ! Get the Best Deal</h1>
//         <div className="flex gap-10">
//           <p>
//             {" "}
//             <label htmlFor="Mobile Number" className="font-medium">
//               Mobile Number
//             </label>
//             <div className="flex gap-3 border rounded p-1 w-80">
//               <span className="bg-gray-200 p-1">+91</span>
//               <input
//                 type="tel"
//                 className="outline-none text-gray-700"
//                 placeholder="Enter your mobile"
//                 value={form.number}
//                 onChange={(e) =>
//                   setForm((prev) => ({ ...prev, number: e.target.value }))
//                 }
//               />
//             </div>
//           </p>
//           <p>
//             {" "}
//             <label htmlFor="Name" className="font-medium">
//               Name
//             </label>
//             <input
//               type="text"
//               className="outline-none text-gray-700 flex gap-3 border rounded p-2 w-80"
//               placeholder="Enter your name"
//               value={form.name}
//               onChange={(e) =>
//                 setForm((prev) => ({ ...prev, name: e.target.value }))
//               }
//             />
//           </p>
//         </div>
//         <p className="w-full border">
//           <input
//             type="text"
//             className="outline-none p-1 text-gray-700 w-full"
//             placeholder="Enter Required Product/Service"
//             value={form.query}
//             onChange={(e) =>
//               setForm((prev) => ({ ...prev, query: e.target.value }))
//             }
//           />
//         </p>
//         <div className="flex justify-center">
//           <button
//             onClick={() => setForm({ number: "", name: "", query: "" })}
//             className="text-white w-max bg-[#1D5B86] text-lg px-6 p-2"
//           >
//             Send Requirnment
//           </button>
//         </div>
//       </div>
//       <div className="w-[10%]">
//         <h1>Get Best Deal</h1>
//       </div>
//     </div>
//   );
// }

// export default BestDeal;


import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";

function BestDeal() {
  const [form, setForm] = useState({
    number: "",
    name: "",
    query: "",
  });

  return (
    <div className="flex flex-col m-2 lg:flex-row items-center justify-between bg-white p-3 shadow-md w-full lg:max-w-7xl max-w-3xl mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-3/4">
        <h1 className="text-2xl font-semibold mb-4">
          Save time! Get the best deal
        </h1>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Mobile Number Input */}
          <div className="w-full lg:w-1/2">
            <label htmlFor="mobile" className="block text-gray-700 font-medium">
              Mobile Number
            </label>
            <div className="flex  border rounded p-1 w-full">
              <span className="bg-gray-200 px-3 whitespace-nowrap flex items-center  text-sm ">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                id="mobile"
                className="outline-none text-gray-700 p-2 w-full"
                placeholder="Enter your mobile"
                value={form.number}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, number: e.target.value }))
                }
              />
            </div>
          </div>

          {/* Name Input */}
          <div className="w-full lg:w-1/2">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <div className="flex items-center border rounded p-2 w-full">
              <IoPersonSharp className="text-gray-500 mr-2" />
              <input
                type="text"
                id="name"
                className="outline-none text-gray-700 p-1 px-3 w-full"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
          </div>
        </div>

        {/* Query Input */}
        <div className="mt-4">
          <label htmlFor="query" className="block text-gray-700 font-medium">
            Enter Required Product/Service:
          </label>
          <input
            type="text"
            id="query"
            className="border rounded p-3 w-full outline-none"
            placeholder="Enter Required Product/Service"
            value={form.query}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, query: e.target.value }))
            }
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setForm({ number: "", name: "", query: "" })}
            className="bg-[#1D5B86] text-white text-lg px-6 py-2 rounded-md hover:bg-[#164a6e]"
          >
            Submit Requirement
          </button>
        </div>

        {/* Privacy Text */}
        <p className="text-xs text-center text-gray-500 mt-2">
          Your information is safe with us.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:flex hidden lg:w-1/4  lg:justify-end  lg:mt-0">
        <img src="bestDeal.PNG" className="lg:h-96 lg:w-64" alt="" />
      </div>
    </div>
  );
}

export default BestDeal;
