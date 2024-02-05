import React, { useContext, useEffect } from "react";
import Productinfo from "./productinfo";
import Manufacinfo from "./manufacinfo";
import "../App.scss";
import { StoreContext } from "./Context";

function Dashboardpage() {
  let { response, setScanResult } = useContext(StoreContext);
  useEffect(() => {
    setScanResult(0);
  }, []);

  return (
    <div className="relative">
      <div className=" grid grid-cols-2 ">
        <div className="bg-[#3b82f6] heading-section text-white text-left top-[10px] tracking-wide flex flex-col justify-center p-5 tracking-wide ">
          <p className="md:text-2xl xs:text-sm font-meduim first-heading">
            Personal Care
          </p>
          <p className="md:text-4xl text-2xl font-semibold second-heading">
            {response[0]?.Name}
            <br /> Intense repair
          </p>
        </div>
        <div className="bg-blue-500">
          <img
            className="max-h-96 float-right"
            src="https://i.ibb.co/Kz7Tc0m/homeimagebg-preview.jpg"
            alt="description"
          />
        </div>
      </div>

      <div className="w-full absolute detail-section">
        <Productinfo />
        <Manufacinfo />
      </div>
    </div>
  );
}

export default Dashboardpage;
