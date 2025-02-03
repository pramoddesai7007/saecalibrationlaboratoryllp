/* eslint-disable react/prop-types */
// import React, { useContext, useState } from "react";
// import { Context } from "./ContextApi";
// import { IoPersonSharp } from "react-icons/io5";

// function InterestData1() {
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");
//   const[form,setForm]=useState({
//     no:"",
//     name:""
//   })
//   const { interestData } = useContext(Context);
//   const { interest, setInterest } = useContext(Context);

//   return (
//     <div className="flex lg:flex-row  md:flex-row flex-col max-w-4xl  ">
//       <div className=" p-2 flex flex-col gap-1 shadow bg-gray-100 ">
//         <div className="flex justify-end  relative lg:right-0 lg:bottom-3 right-5 p-2  ">
//           <button
//             className="bg-[#1D5B86] relative lg:left-0 lg:hidden block  left-7 w-[max-content] p-1 px-2  text-white"
//             onClick={() => setInterest(!interest)}
//           >
//             X
//           </button>
//         </div>
//         <img
//           src={interestData.img}
//           alt=""
//           height={"300px"}
//           width={"200px"}
//           className="w-full"
//         />
//         <h1 className="text-lg font-medium">{interestData.header}</h1>
//         <p>{interestData.price}/Unit</p>
//         <p>Sold by :Matrix Testing Machine Services </p>

//         <div className="text-sm">
//           <p>
//             {interestData.d1.label} :{interestData.d1.data}
//           </p>
//           <p>
//             {interestData.d2.label} :{interestData.d2.data}
//           </p>
//           <p>
//             {interestData.d3.label} :{interestData.d3.data}
//           </p>
//           <p>
//             {interestData.d4.label} :{interestData.d4.data}
//           </p>
//         </div>
//       </div>
//       <div className="p-2  flex flex-col gap-2  ">
//         <div className="flex justify-end  relative lg:right-0 bottom-3 right-16 p-2  ">
//           <button
//             className="bg-[#1D5B86] relative lg:left-0 lg:block hidden  left-7 w-[max-content] p-1 px-2  text-white"
//             onClick={() => setInterest(!interest)}
//           >
//             X
//           </button>
//         </div>
//         <h1 className="lg:text-xl text-lg mb-2 break-words">
//           Connect With <strong>"Matrix Testing Machine Services"</strong> and
//           get Details on your mobile quickely
//         </h1>
//         <label htmlFor="Mobile Number" className="font-medium">
//           Mobile Number
//         </label>
//         <div className="flex gap-3 border rounded p-1 w-80">
//           <span className="bg-gray-200 p-1">+91</span>
//           <input
//             type="tel"
//             className="outline-none text-gray-700"
//             placeholder="Enter your mobile"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//           />
//         </div>
//         <p className="text-sm">We will contact you on this number</p>

//         <div className="flex gap-3 border rounded p-1 w-80">
//           <span className="bg-gray-200 p-1">
//             <IoPersonSharp />
//           </span>
//           <input
//             type="text"
//             className="outline-none text-gray-700"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={() => setNumber("")}
//           className="text-white w-max bg-[#1D5B86] text-lg px-6 p-2"
//         >
//           Submit Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default InterestData1;

/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Context } from "./ContextApi";
import { IoPersonSharp } from "react-icons/io5";

function InterestData1() {
  const [form, setForm] = useState({
    number: "",
    name: "",
  });

  const { interestData } = useContext(Context);
  const { interest1, setInterest1 } = useContext(Context);

  return (
    <div className="flex lg:flex-row  md:flex-row flex-col max-w-4xl pt-[460px]   ">
      <div className=" p-2 flex flex-col gap-1 shadow bg-gray-100 ">
        <div className="flex justify-end  relative lg:right-0 bottom-3 right-4 p-2  ">
          <button
            className="bg-[#1D5B86] relative lg:left-0 lg:hidden block  left-7 w-[max-content] p-1 px-2  text-white"
            onClick={() => setInterest1(!interest1)}
          >
            X
          </button>
        </div>
        <div className="flex justify-end  relative lg:right-0 lg:bottom-3 right-5 p-2  "></div>
        <img
          src={interestData.img}
          alt=""
          height={"300px"}
          width={"200px"}
          className="w-full"
        />
        <h1 className="text-lg font-medium">{interestData.header}</h1>
        <p>{interestData.price}/Unit</p>
        <p>Sold by :SAE Callibration </p>

        <div className="text-sm">
          <p>
            {interestData.d1.label} :{interestData.d1.data}
          </p>
          <p>
            {interestData.d2.label} :{interestData.d2.data}
          </p>
          <p>
            {interestData.d3.label} :{interestData.d3.data}
          </p>
          <p>
            {interestData.d4.label} :{interestData.d4.data}
          </p>
        </div>
      </div>
      <div className="p-2  flex flex-col gap-2  ">
        <div className="flex justify-end  relative lg:right-0 bottom-3 right-16 p-2  ">
          <button
            className="bg-[#1D5B86] relative lg:left-0 lg:block hidden  left-7 w-[max-content] p-1 px-2  text-white"
            onClick={() => setInterest1(!interest1)}
          >
            X
          </button>
        </div>
        <h1 className="lg:text-xl text-lg mb-2 break-words">
          Connect With <strong>"SAE Callibration"</strong> and get Details on
          your mobile quickely
        </h1>
        <label htmlFor="Mobile Number" className="font-medium">
          Mobile Number
        </label>
        <div className="flex gap-3 border rounded p-1 w-80">
          <span className="bg-gray-200 p-1">+91</span>
          <input
            type="tel"
            className="outline-none text-gray-700"
            placeholder="Enter your mobile"
            value={form.number}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, number: e.target.value }))
            }
          />
        </div>
        <p className="text-sm">We will contact you on this number</p>

        <div className="flex gap-3 border rounded p-1 w-80">
          <span className="bg-gray-200 p-1">
            <IoPersonSharp />
          </span>
          <input
            type="text"
            className="outline-none text-gray-700"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <button
          onClick={() => setForm({ number: "", name: "" })}
          className="text-white w-max bg-[#1D5B86] text-lg px-6 p-2"
        >
          Submit Now
        </button>
      </div>
    </div>
  );
}

export default InterestData1;
