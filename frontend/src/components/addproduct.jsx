import React, { useContext, useState } from "react";
import { StoreContext } from './Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Addproduct() {
  const { setFormDetails } = useContext(StoreContext);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit  = async (e) => {
    e.preventDefault();
    const ProductID = parseInt(e.target.productId.value, 10);; 
    const Name = e.target.name.value; 
    const GHGFootprint = e.target.GHGFootprint.value; 
    const IGHGFootprint = e.target.ighgfootprint.value; 
    const PGHGFooting = e.target.pghgfootprint.value; 
    const RecycledPlas = e.target.recycledplastic.value; 
    const recycledCardboard = e.target.recycledcardboard.value; 
    const SSM = e.target.ssm.value; 
    const Palmoil = e.target.palmoil.value; 
    const PFAS = e.target.pfas.value; 
    const Parabens = e.target.Parabens.value; 
    const Phalates = e.target.Pthalates.value; 
    const Country = e.target.country.value; 
    const REU = e.target.reu.value; 
    const UWS = e.target.uws.value; 
    const WtL = e.target.wtl.value; 
    const FCF = e.target.fcf.value; 
    const TextGHGFootprint = e.target.tGHGFootprint.value; 
    const TextIGHGFootprint = e.target.tiGHGFootprint.value; 
    const TextPGHGFooting = e.target.tpGHGFootprint.value; 
    const TextRecycledPlas = e.target.trecycledplas.value; 

    setFormDetails({ ProductID });
    try {
      const response = await axios.post('http://localhost:8080/product/create', {
        ProductID,
        Name,
        GHGFootprint,
        IGHGFootprint,
        PGHGFooting,
        RecycledPlas,
        recycledCardboard,
        SSM,
        Palmoil,
        PFAS,
        Parabens,
        Phalates,
        Country,
        REU,
        UWS,
        WtL,
        FCF,
        TextGHGFootprint,
        TextIGHGFootprint,
        TextPGHGFooting,
        TextRecycledPlas

      });

      console.log('POST request successful:', response.data);

      navigate('/admin/qrcode');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('Product with the same ProductID already exists');
        alert('Product ID already exist')
      } else {
        console.error('Error making POST request:', error.message);
      }
    }
  };
  return (
    <div>
      <>
        <form class="max-w-md md:max-w-lg lg:max-w-xl mx-auto p-5 shadow-lg"  onSubmit={handleSubmit}>
          <div className="p-4 text-white bg-violet-950 rounded-lg ">
            Add Product
          </div>
          <div class="mt-6 mb-3 ">
            <label
              for="product id"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Product Id
            </label>
            <input
              type="number"
              name="productId"
              id="product id"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="title"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the Title"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="ghg footprint"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              GHG Footprint
            </label>
            <input
              type="text"
              id="ghg footprint"
              name="GHGFootprint"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of GHG Footprint"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="ingerdients ghg footprint"
              class="block text-start mb-2 text-sm font-medium text-gray-900"
            >
              Ingredients GHG Footprint
            </label>
            <input
              type="text"
              name="ighgfootprint"
              id="ingerdients ghg footprint"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Ingredients GHG Footprint"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="packaging ghg footprint"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Packaging GHG Footprint
            </label>
            <input
              type="text"
              name="pghgfootprint"
              id="packaging ghg footprint"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of packaging GHG Footprint"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="sustainably sourced material"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Sustainably Sourced Material
            </label>
            <input
              type="text"
              name="ssm"
              id="sustainably sourced material"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Sustainably Sourced Material"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="palm oil"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Palm Oil
            </label>
            <input
              type="text"
              name="palmoil"
              id="palm oil"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Palm Oil"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="parabens"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Parabens
            </label>
            <input
              type="text"
              name="Parabens"
              id="parabens"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Parabens"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="pfas"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              PFAS
            </label>
            <input
              type="text"
              name="pfas"
              id="pfas"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of PFAS"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="pthalates"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Pthalates
            </label>
            <input
              type="text"
              name="Pthalates"
              id="pthalates"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Pthalates"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="recycled plastic"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Recycled Plastic
            </label>
            <input
              type="text"
              name="recycledplastic"
              id="recycled plastic"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Recycled Plastic"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="recycled cardboard"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Recycled Cardboard
            </label>
            <input
              type="text"
              name="recycledcardboard"
              id="recycled cardboard"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Recycled Cardboard"
              required
            />
          </div>

          <div class="my-3 ">
            <label
              for="country"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the Country Name"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="renewable energy usage"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Renewable Energy Usage
            </label>
            <input
              type="text"
              name="reu"
              id="renewable energy usage"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Renewable Energy Usage"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="unstressed water source"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Unstressed Water Source
            </label>
            <input
              type="text"
              name="uws"
              id="unstressed water source"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Unstressed Water Source"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="water quantity to landfill"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Water quantity to landfill
            </label>
            <input
              type="text"
              name="wtl"
              id="water quantity to landfill"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Water quantity to landfill"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="factory carbon footprint"
              class="block text-start mb-2 text-sm font-medium text-gray-900  "
            >
              Factory Carbon Footprint
            </label>
            <input
              type="text"
              name="fcf"
              id="factory carbon footprint"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter the value of Factory Carbon Footprint"
              required
            />
          </div>
          <div class="my-3 ">
            <label
              for="ghg footprint info"
              class="block mb-2 text-sm font-medium text-start text-gray-900"
            >
              GHG Footprint info
            </label>
            <textarea
              id="ghg footprint info"
              name="tGHGFootprint"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write about the product"
            ></textarea>
          </div>
          <div class="my-3 ">
            <label
              for="ingredients footprint info"
              class="block mb-2 text-sm font-medium text-start text-gray-900"
            >
              Ingredients Footprint info
            </label>
            <textarea
              id="ingredients footprint info"
              name="tiGHGFootprint"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write about the product"
            ></textarea>
          </div>
          <div class="my-3 ">
            <label
              for="packaging ghg footprint info"
              class="block mb-2 text-sm font-medium text-start text-gray-900"
            >
              Packaging GHG Footprint info
            </label>
            <textarea
              id="packaging ghg footprint info"
              name="tpGHGFootprint"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write about the product"
            ></textarea>
          </div>
          <div class="my-3 ">
            <label
              for="recycled plastic info"
              class="block mb-2 text-sm font-medium text-start text-gray-900"
            >
              Recycled Plastic info
            </label>
            <textarea
              id="recycled plastic info"
              name="trecycledplas"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write about the product"
            ></textarea>
          </div>
          <button
            
            class="text-white  bg-violet-950  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </>
    </div>
  );
}

export default Addproduct;