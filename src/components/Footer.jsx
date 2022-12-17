import React from 'react'
import { FiMail, FiMapPin } from "react-icons/fi";

function Footer() {
  return (
    <div>
    <div className='flex justify-between m-4 p-4 text-[#333333] cursor-pointer'>
      <h1 className='text-3xl font-bold'>ARTSY.</h1>
      <div>
        <p className='p-2'>Home</p>
        <p className='p-2'>Marketplace</p>
        <p className='p-2'>Auctions</p>
        <p className='p-2'>Drops</p>
      </div>
      <div>
        <p className='p-2'>Blog</p>
        <p className='p-2'>Wallets</p>
        <p className='p-2'>Rates</p>
        <p className='p-2'>High bids</p>
      </div>
      <div>
        <div className='flex p-4'>
          <div className='p-2 text-2xl'>
            <FiMail/>
          </div>
          <p className='p-2'>artsystudios@gmail.com</p>
        </div>
        <div className='flex p-4'>
          <div className='p-2 text-2xl'>
            <FiMapPin/>
          </div>
          <p className='p-2'>Lagos, Nigeria.</p>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      Artsystuios &copy;	2022. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer