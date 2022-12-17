import React from 'react'
import { FiBell, FiSearch, FiShoppingCart } from "react-icons/fi";
import './myStyle.css'


function Header() {
  return (
    <div className='header-position flex justify-between items-center bg-white cursor-pointer '>
      <ul>
        <li className='font-bold text-xl pl-10'>ARTSY.</li>
      </ul>
      <ul className='flex justify-between items-center'>
        <li className='p-2 hover:underline'>Home</li>
        <li className='hover:underline p-2'>Marketplace</li>
        <li className='hover:underline p-2'>Actions</li>
        <li className='hover:underline p-2'>Drop</li>
      </ul>
      <div className='flex justify-between items-center'>
        <div className='p-2'>
          <FiSearch />
        </div>
        <div className='p-2'>
          <FiShoppingCart />
        </div>
        <div className='p-2'>
          <FiBell />
        </div>
      </div>
    </div>
  )
}

export default Header