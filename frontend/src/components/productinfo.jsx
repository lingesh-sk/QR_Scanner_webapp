import React, { useContext } from "react";
import TwoLeaves from "../images/two leaves.png"
import RecycleImage from "../images/recycle image.png"
import CO2 from "../images/co2.png"
import RecycledCardboard from "../images/recycled cardboard.png"
import { StoreContext } from "./Context";
import { useNavigate } from "react-router-dom";

function Productinfo() {
  let navigate= useNavigate()
  let {response}= useContext(StoreContext)
  var res=response[0]
  return (
    <div>
      <div className="grid grid-cols-1 text-start p-3 ">
        <div className="text-start bg-neutral-200 ps-4 p-3 font-bold md:text-xl text-md rounded-t-lg">
          Product Details
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 xl:grid-cols-12 relative text-start rounded-b-lg border-2 border-gray-200 shadow-inner">
          <div className="col-span-1 lg:col-span-4 ">
            <div className="flex">
              <div className="pt-3">
                <img
                  className="w-10 h-10 m-2 rounded-full "
                  src={CO2}
                  alt="Neil"
                />
              </div>

              <div className="ml-4 w-full pt-4">
                <p className="text-sm  md:text-md text-start font-medium text-gray-900">
                  GHG Footprint
                </p>
                <p className="text-sm md:text-md font-bold text-gray-900">
                  {res?.GHGFootprint}
                </p>
                <div className="grid grid-cols-2 my-3  pb-4 border-b-2 xl:border-none border-gray-300">
                  <div>
                    <p className="text-sm md:text-md font-medium text-gray-500">
                      Ingredients
                    </p>
                    <p className="text-sm md:text-md font-medium text-gray-500">
                      GHG Footprint
                    </p>
                    <p className="text-sm md:text-md font-bold text-gray-900 ">
                    {res?.IGHGFootprint}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-md font-medium text-gray-500">
                      Packaging
                    </p>
                    <p className="text-sm md:text-md font-medium text-gray-500">
                      GHG Footprint
                    </p>
                    <p className="text-sm md:text-md font-bold text-gray-900">
                     {res?.PGHGFooting}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-span-1 lg:col-span-4 md:pt-2.5 ">
            <div className="flex">
              <div className="pt-1">
                <img
                  className="w-full h-10 m-1"
                  src={TwoLeaves}
                  alt="Neil"
                />
              </div>

              <div className="ml-4 w-full pb-1 md:pb-[22px]  border-b-2 border-gray-300 xl:border-none  text-start ">
                <p className="text-sm font-medium text-gray-500 pt-2">
                  Sustainably Sourced Material
                </p>
                <p className="text-sm font-bold text-gray-900"> {res?.SSM} </p>
                <div className="grid grid-cols-2 ">
                  <div className=" grid grid-cols-2 py-2">
                    <p className="text-sm font-medium text-gray-500">Palm Oil</p>
                    <p className="text-gray-900 font-semibold text-center">
                      {res?.Palmoil}
                    </p>
                    <p className="text-sm font-medium text-gray-500">Parabens</p>
                    <p className="text-gray-900 font-semibold text-center">
                      {res?.Parabens}
                    </p>
                  </div>
                  <div className=" grid grid-cols-2 py-2">
                    <p className="text-sm font-medium text-gray-500">PFAS </p>
                    <p className=" text-gray-900 font-semibold text-center ">
                      {res?.PFAS}
                    </p>
                    <p className="text-sm font-medium text-gray-500">Pthalates</p>
                    <p className="text-gray-900 font-semibold text-center">
                      {res?.Phalates}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4 ">
            <div className="flex">
              <div className="pt-3">
                <img
                  className="w-8 h-8 m-3"
                  src={RecycleImage}
                  alt="Neil"
                />
              </div>

              <div className="grid grid-cols-2 ml-4 my-4 w-full mr-7">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Recycled <br />
                    Plastic
                  </p>
                  <p className="text-sm font-bold text-gray-900">{res?.RecycledPlas}</p>
                </div>
                <div className=" grid grid-cols-2 w-full mr-4">
                  <img
                    className="w-10 h-10 rounded-full mx-1 "
                    src={RecycledCardboard}
                    alt="Neil"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-500 pr-2">
                      Recycled Cardboard
                    </p>
                    <p className="text-sm font-bold text-gray-900">{res?.recycledCardboard}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* i button code starts here */}

          <div className="absolute right-1 top-2"><button onClick={()=>navigate("/info")}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0,0,256,256"
              style={{ fill: "#000000" }}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ "mixBlendMode": "normal" }}
              >
                <g transform="scale(0.5,0.5)">
                  <path
                    d="M504.1,256c0,-137 -111.1,-248.1 -248.1,-248.1c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1z"
                    fill="#430c94"
                  ></path>
                  <path
                    d="M323.2,367.5c-1.4,-2 -4,-2.8 -6.3,-1.7c-24.6,11.6 -52.5,23.9 -58,25c-0.1,-0.1 -0.4,-0.3 -0.6,-0.7c-0.7,-1 -1.1,-2.3 -1.1,-4c0,-13.9 10.5,-56.2 31.2,-125.7c17.5,-58.4 19.5,-70.5 19.5,-74.5c0,-6.2 -2.4,-11.4 -6.9,-15.1c-4.3,-3.5 -10.2,-5.3 -17.7,-5.3c-12.5,0 -26.9,4.7 -44.1,14.5c-16.7,9.4 -35.4,25.4 -55.4,47.5c-1.6,1.7 -1.7,4.3 -0.4,6.2c1.3,1.9 3.8,2.6 6,1.8c7,-2.9 42.4,-17.4 47.6,-20.6c4.2,-2.6 7.9,-4 10.9,-4c0.1,0 0.2,0 0.3,0c0,0.2 0.1,0.5 0.1,0.9c0,3 -0.6,6.7 -1.9,10.7c-30.1,97.6 -44.8,157.5 -44.8,183c0,9 2.5,16.2 7.4,21.5c5,5.4 11.8,8.1 20.1,8.1c8.9,0 19.7,-3.7 33.1,-11.4c12.9,-7.4 32.7,-23.7 60.4,-49.7c1.7,-1.8 2,-4.5 0.6,-6.5zM322.2,84.6c-4.9,-5 -11.2,-7.6 -18.7,-7.6c-9.3,0 -17.5,3.7 -24.2,11c-6.6,7.2 -9.9,15.9 -9.9,26.1c0,8 2.5,14.7 7.3,19.8c4.9,5.2 11.1,7.8 18.5,7.8c9,0 17,-3.9 24,-11.6c6.9,-7.6 10.4,-16.4 10.4,-26.4c0,-7.7 -2.5,-14.1 -7.4,-19.1z"
                    fill="#ffffff"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
