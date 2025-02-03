import React, { useContext, useEffect } from "react";
import ImageSlider from "../Components/Homepage/ImageSlider";
import Slider2 from "../Components/Homepage/Slider2";
import Reviews from "../Components/Homepage/Review";
import ProductVideo from "../Components/Homepage/ProductVideo";
import ProductRange from "../Components/Homepage/ProductRange";
import { Context } from "./ContextApi";
import Interested from "./Interested";
import Enquiry from "./Enquiry";
import Strip from "../Components/Homepage/Strip";
import InterestedMail from "./InterestedEmail";


function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { interest,interestEmail } = useContext(Context);
  return (
    <div className="bg-[#F2F2F2] lg:pt-20 pt-24">
      <div className="flex lg:flex-row  flex-col">
        <ImageSlider />
        <Slider2 />
      </div>
      <ProductRange />

      <Strip />
      {interest && <Interested />}
      {interestEmail && <InterestedMail/>}
    </div>
  );
}

export default LandingPage;
