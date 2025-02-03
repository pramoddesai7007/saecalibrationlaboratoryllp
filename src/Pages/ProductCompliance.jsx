import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Context } from "./ContextApi";
import Interested from "./Interested";
import InterestedMail from "./InterestedEmail";

function ProductCompliance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
   const { interest,interestEmail } = useContext(Context);
  return (
    <div className="rouned-xl p-2 shadow-lg m-3 bg-gray-100 rounded-xl lg:pt-20 pt-24">
      <div className="flex justify-between bg-gray-100 lg:px-10 p-4 cursor-pointer">
        <div className="flex gap-1">
          <p className="flex gap-1" onClick={() => navigate("/")}>
            {" "}
            Home <MdKeyboardDoubleArrowRight className="relative top-1" />
          </p>
          <p className="flex gap-1" onClick={() => navigate("/products")}>
            Products <MdKeyboardDoubleArrowRight className="relative top-1" />
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
      <h1 className="underline text-2xl font-medium text-center p-5">
        Quality Compliance
      </h1>
      <div className="flex lg:flex-row gap-10 flex-col justify-center items-center">
        <div
          className="h-96 w-72"
          style={{
            backgroundImage: "url(certificate.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
        <p className="w-[70%] text-justify lg:text-base text-sm">
          MATRIX TESTING MACHINE SERVICES (CALIBRATIONDIVISION)has been assessed
          and accredited in accordance with the standardISO/IEC
          17025:2017"General Requirements for the Competence of Testing
          &Calibration Laboratories"for its facilities atOFFICE NO. 813, EIGHTH
          FLOOR, RAMA EQUATOR, SAMRAT CHOWK, PIMPRI, NEAR FINOLEXCHOWK, PUNE,
          MAHARASHTRA, INDIAin the field ofCALIBRATIONCertificate Number:
          CC-3069Issue Date: 23/10/2019 Valid Until: 22/10/2021 This certificate
          remains valid for the Scope of Accreditation as specified in the
          annexure subject to continuedsatisfactory compliance to the above
          standard & the relevant requirements of NABL. (To see the scope of
          accreditation of this laboratory, you may also visit NABL website
          www.nabl-india.org)Signed for and on behalf of NABLN. Venkateswaran
          Chief Executive OfficerS.No Discipline / Group Measurand
          orReferenceMaterial/Type ofinstrument ormaterial to becalibrated
          ormeasured / Quantity Measured/InstrumentMeasurement rangeand
          additionalparameters whereapplicable (Rangeand Frequency) Calibration
          and MeasurementCapability (CMC)(±)Calibration orMeasurementMethod
          orprocedure) Site Facility 1 MECHANICALHARDNESSTESTINGMACHINESDirect
          Verification ofBrinell Hardness Tester612.9 N to 9807 N 0.58% Using
          Class 1Dynamometer & LoadCell as per IS 1500(Part 2): 2013/ISO6506-22
          MECHANICALHARDNESSTESTINGMACHINES Direct Verification ofRockwell
          Hardness Tester Test Force ofRockwell Hardness Tester & Superficial
          Hardness Tester98.07 N to 1471 N 0.43% Using Class 1 Dynamometer &
          LoadCell as per IS 1586(Part 2): 2018 / ISO6508-23
          MECHANICALHARDNESSTESTINGMACHINESDirect Verification ofVickers
          Hardness Tester98.07 N to 980.7 N 0.58% Using Class 1Dynamometer &
          LoadCell as per IS 1501(Part 2): 2013 / ISO65074
          MECHANICALHARDNESSTESTINGMACHINESIndirect Verification ofBrinell
          Hardness Tester125 HBW 10/3000 to600 HBW 10/30002.5% Using Standard
          Hardness Test Blocksas per IS 1500 (Part 2):2013 / ISO 6506-25
          MECHANICALHARDNESSTESTINGMACHINESIndirect Verification ofBrinell
          Hardness Tester125 HBW 5/750 to600 HBW 5/7502.5% Using
          StandardHardness Test Blocksas per IS 1500 (Part 2)/ ISO 6506-2This is
          annexure to 'Certificate of Accreditation' and does not require any
          signature. Laboratory Name MATRIX TESTING MACHINE SERVICES
          (CALIBRATION DIVISION), OFFICE NO.813, EIGHTH FLOOR, RAMA EQUATOR,
          SAMRAT CHOWK, PIMPRI,
        </p>
      </div>
      {interest && <Interested />}
      {interestEmail && <InterestedMail/>}
    </div>
  );
}

export default ProductCompliance;
