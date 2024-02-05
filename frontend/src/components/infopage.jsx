import React, { Fragment, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { StoreContext } from './Context'
import { useEffect } from 'react';

function Infopage() {
  let {response}= useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigation = (event) => {
      event.preventDefault();
      navigate("/dashboard");
    }
  }, [navigate]);


  var res=response[0]
  return (
    <>
    <div className='bg-[#0b2488] p-5 text-start text-white font-bold px-5'> GLOSSARY</div>
    <div className='text-start p-5 divide-y '>
   
    <div className='pb-3'>
      <p className='font-bold '>GHG Footprint</p>
      <p >{res?.TextGHGFootprint}</p>
    </div>

    <div className='py-3'>
      <p className='font-bold'>Ingredients Footprint</p>
      <p >{res?.TextIGHGFootprint}</p>
    </div>

    <div className='py-3' >
      <p className='font-bold'>Packaging GHG Footprint</p>
      <p >{res?.TextPGHGFooting}</p>
    </div>

    <div className='py-3'>
      <p className='font-bold'>Recycled Plastic</p>
      <p >{res?.TextRecycledPlas}</p>
    </div>
    </div>
    </>
  )
}

export default Infopage
