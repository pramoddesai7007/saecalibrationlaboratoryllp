import React from "react";
import Header from "../Layout/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Layout/Foooter";
import Reviews from "../Components/Homepage/Review";
import ProductVideo from "../Components/Homepage/ProductVideo";
import Strip from "../Components/Homepage/Strip";
import Enquiry from "../Pages/Enquiry";

function Screen() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Outlet />
      <ProductVideo />
      <Strip />
      {location.pathname === "/enquiry" ? "" : <Enquiry />}
      <Strip />
      {location.pathname === "/testimonial" ? "" : <Reviews />}
      <Strip />
      <Footer />
    </div>
  );
}

export default Screen;
