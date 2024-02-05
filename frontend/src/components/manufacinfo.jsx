import React, { useContext } from 'react'
import RenewableEnergy from "../images/renewable energy.png"
import WasteImage from "../images/waste image.png"
import WaterImage from "../images/water image.png"
import IndustryImage from "../images/industry image.png"
import GlobeImage from "../images/globe image.png"
import { StoreContext } from './Context'

function Manufacinfo() {
  let {response}= useContext(StoreContext)
  var res=response[0]
  return (
    <div className=" p-3 ">
      <div className="text-start bg-neutral-200 ps-4 pt-3 pb-5 font-bold md:text-xl xs:text-md rounded-t-lg">
        <p>Where was it made</p>
        <div className="grid grid-cols-3 grid-rows-1 gap-0">
          <div className="col-span-2">
            <div className="flex pt-3">
              <img
                className="w-5 h-5 rounded-full my-auto"
                src={GlobeImage}
                alt="Neil"
              />
              <div className="ps-3">
                <p className="text-sm font-bold text-gray-900">
                  PT Technopia Lever
                </p>
                <p className="text-sm font-medium text-gray-900">{res?.Country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 grid-rows-2 lg:grid-rows-1  gap-0 text-start border-2 border-gray-200 rounded-b-lg shadow-inner pb-5 lg:pb-10 ">
        <div className="pt-3">
          <img
            className="w-20 h-10 rounded-full m-auto"
            src={RenewableEnergy}
            alt="Neil"
          />
        </div>
        <div>
          <div className="grid grid-cols-3 grid-rows-1 gap-0 ">
            <div className="col-span-3">
              <div className="pt-3">
                <p className="text-sm font-medium text-gray-500">
                  Renewable Energy Usage
                </p>
                <p className="text-sm font-bold text-gray-900"> {res?.REU}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <img
            className="w-10 h-10 rounded-full m-auto"
            src={WaterImage}
            alt="Neil"
          />
        </div>
        <div className="pt-3">
          <p className="text-sm font-medium text-gray-500">
            Unstressed Water Source
          </p>
          <p className="text-sm font-bold text-gray-900">{res?.UWS}</p>
        </div>
        <div className="pt-3">
          <img
            className="w-10 h-10 rounded-full m-auto"
            src={WasteImage}
            alt="Neil"
          />
        </div>
        <div className="pt-3">
          <p className="text-sm font-medium text-gray-500">Water to Landfill</p>
          <p className="text-sm font-bold text-gray-900">{res?.WtL}</p>
        </div>
        <div className="pt-3 ">
          <img
            className="w-10 h-10 rounded-full m-auto"
            src={IndustryImage}
            alt="Neil"
          />
        </div>
        <div className="pt-3 ">
          <p className="text-sm font-medium text-gray-500">
            Factory Carbon Footprint
          </p>
          <p className="text-sm font-bold text-gray-900">{res?.FCF}</p>
        </div>
      </div>
    </div>
  );
}

export default Manufacinfo;