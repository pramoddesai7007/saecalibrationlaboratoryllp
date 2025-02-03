import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "./ContextApi";
import InterestData from "./InterestData";

function Interested() {
  // const { interest, setInterest } = useContext(Context);

  return (
    <div>
      <div className="w-[40%] ">
        <div className="fixed w-full  inset-0 flex flex-col items-center justify-center     overflow-y-scroll  z-40 bg-black/50 ">
          <div className=" bg-white p-2 rounded-lg   shadow-lg w-[400px]   lg:w-[900px] relative lg:top-10 top-20 ">
            <InterestData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interested;
