import React from "react";
import { Route, Routes } from "react-router-dom";
import Screen from "../Main/Screen";
import LandingPage from "../Pages/LandingPage";
import Contact from "../Pages/Contact";
import KnowUs from "../Components/Cards/KnowUs";
import Testimonial from "../Pages/Testimonial";
import ProductCompliance from "../Pages/ProductCompliance";
import Products from "../Pages/Products";
import PortableHardnessTester from "../Components/ProductRange/PortableHardnessTester";
import UniversalTesting from "../Components/ProductRange/UniversalTesting";
import BrinellHArdnessTester from "../Components/ProductRange/BrinellHArdnessTester";
import RockwellHardnessTester from "../Components/ProductRange/RockwellHardnessTester";
import ImpactTestingMachine from "../Components/ProductRange/ImpactTestingMachine";
import MicroVickerHardnessTester from "../Components/ProductRange/MicroVickerHardnessTester.";
import TestBlockIdentetor from "../Components/ProductRange/TestBlock&Identetor";
import MetalurgicalMicroscope from "../Components/ProductRange/MetalurgicalMicroscope";
import OpticalEmissionSpectrometer from "../Components/ProductRange/OpticalEmmisonSpectrometer";
import VickerHardnessTester from "../Components/ProductRange/VickerHardnessTester";
import Enquiry from "../Pages/Enquiry";
import SiteMap from "../Pages/Sitemap";
import Interested from "../Pages/Interested";
import NewsCoverage from "../Pages/NewsCoverage";
import Job from "../Pages/Job";
import CallibrationService from "../Pages/CallibrationService";
function Index() {
  return (
    <Routes>
      <Route path="/" element={<Screen />}>
        <Route index element={<LandingPage />} />

        <Route path="landingPage" element={<LandingPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="knowUs" element={<KnowUs />} />
        <Route path="enquiry" element={<Enquiry />} />
        <Route path="siteMap" element={<SiteMap />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="quality" element={<ProductCompliance />} />
        <Route path="products" element={<Products />} />
        <Route path="portable" element={<PortableHardnessTester />} />
        <Route path="universal" element={<UniversalTesting />} />
        <Route path="brinell" element={<BrinellHArdnessTester />} />
        <Route path="rockwell" element={<RockwellHardnessTester />} />
        <Route path="impact" element={<ImpactTestingMachine />} />
        <Route path="micro" element={<MicroVickerHardnessTester />} />
        <Route path="testBlock" element={<TestBlockIdentetor />} />
        <Route path="metallurgical" element={<MetalurgicalMicroscope />} />
        <Route path="interest" element={<Interested />} />
        <Route path="newsCoverage" element={<NewsCoverage />} />
        <Route path="job" element={<Job />} />
        <Route path="callibrationService" element={<CallibrationService />} />

        <Route
          path="opticalEmission"
          element={<OpticalEmissionSpectrometer />}
        />
        <Route path="vicker" element={<VickerHardnessTester />} />
      </Route>
    </Routes>
  );
}

export default Index;
