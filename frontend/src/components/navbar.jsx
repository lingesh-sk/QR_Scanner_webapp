import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (


<nav className="bg-[#3b82f6] fixed w-full top-0 border-b border-gray-200">
      <div className="flex justify-end p-[14px]">
        <div className="text-white bg-violet-950 hover:bg-white hover:text-violet-950 font-medium rounded text-sm px-4 py-2 text-center">
          <Link to="/admin/addproduct">Create Product</Link>
        </div>
      </div>
    </nav>


  )
} 

export default Navbar