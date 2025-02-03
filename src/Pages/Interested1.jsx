import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "./ContextApi";
import InterestData from "./InterestData";
import InterestData1 from "./InterestedData1";

function Interested1() {
  // const { interest, setInterest } = useContext(Context);

  return (
    <div>
      <div className="w-[40%] ">
        <div className="fixed w-full  inset-0 flex flex-col items-center justify-center    overflow-y-scroll  z-40 bg-black/50 ">
          <div className=" bg-white p-2 rounded-lg   shadow-lg  lg:w-[full] relative lg:top-10">
            <InterestData1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interested1;
