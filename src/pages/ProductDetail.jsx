import React from 'react'
import dancer from '../assets/dancer.png';
import diamond from '../assets/diamond.png'
import twogirls from '../assets/twogirls.png';
import girl from '../assets/girl.png';
import halfflower from '../assets/halfflower.png';
import { FiHeart, FiChevronDown, FiChevronRight, FiChevronLeft } from "react-icons/fi";


function ProductDetail() {
  return (
    <div className='mx-4 my-2'>
      
      <nav class="bg-gray-50 px-5 py-3 rounded-md w-full">
      <ol class="list-reset flex">
        <li><a href="#" class="text-gray-400 hover:text-gray-600">Home</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-600">Marketplace</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li><a href="#" class="text-gray-400 hover:text-gray-600">Editorials</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-900">Philomena '22</li>
      </ol>
      </nav>

    <div className='container  h-screen table clear-both table border border-2xl border-gray-600 flex items-center justify-center my-8 mx-4'>
      <div className='flex item-center h-screen '>
        <div className='p-6 border border-2xl border-gray-600'>
            <img src={dancer} alt='dancer' className='h-full object-cover' />
        </div>

        <div className='border border-2xl h-screen '>
        </div>

        <div className='w-[100%]'>
          <div className='container flex justify-between items-center p-4'>
            <div>
              <h1 className='text-3xl font-bold'>Boolean Egyptian</h1>
            </div>
            <div className='flex justify-center items-center p-3'>
              <img src={diamond} alt='' />
              <p className='font-bold text-xl p-2'>0.09</p>
            </div>
          </div>
          <div className='border border-2xl '>
        </div>        
        <div className='p-4'>
          <p className='text-xl p-2'>Creator: <span className='text-blue-500'>Ali Dawa</span></p>
          <p className='text-sm p-2'>Made in Italy</p>
          <p className='text-xl p-2'>Total views: <span className='text-sm'>1.7k views</span></p>
          <p className='p-4 font-bold text-2xl'>-   1   +</p> 
          <div className='flex m-2'>
          <div>
            <button 
              type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to cart ->
            </button>
            </div>
              <div className='border border-2xl p-4'>
                <FiHeart />
              </div>
            </div>                
          </div>
          <div className='border border-2xl '>
          </div>
          <div className='flex justify-between items-center font-bold m-4 p-2'>
            <p>Description</p>
            <FiChevronDown />
          </div>
          <div className='border border-2xl '>
          </div>
          <div className='flex justify-between items-center font-bold m-4 p-2'>
            <p>Listings</p>
            <FiChevronDown />
          </div>
          <div className='border border-2xl '>
          </div>
          <div className='flex justify-between items-center font-bold m-4 p-2'>
            <p>Status</p>
            <FiChevronDown />
          </div>
        </div>

      </div>
    </div>

    <div className='m-4 px-2 flex justify-between items-center bg-white rounded-lg shadow shadow-[#1E1E1E]'>
      <p className='font-bold text-xl'>Explore more from this colletion</p>
      <div className='flex'>
        <div className='border border-2xl rounded-full p-3 m-2'>
          <FiChevronLeft />
        </div>
        <div className='border border-2xl rounded-full p-3 m-2'>
          <FiChevronRight />
        </div>
      </div>
    </div>

    <div className='flex m-2 overflow-x-scroll'>
      <div className='w-[500px] p-4 border border-2xl m-2'>
        <div className='p-2 right-0'>
          <FiHeart />
        </div>
        <img src={twogirls} alt='girls' />
        <div className='flex justify-between items-center'>
          <p>Sassy</p>
          <div className='flex'>
            <img src={diamond} alt='' />
            <p>3.20</p>
          </div>
        </div>
      </div>

      <div className='w-[500px] p-4 border border-2xl m-2'>
        <div className='p-2 right-0'>
          <FiHeart />
        </div>
        <img src={girl} alt='girls' />
        <div className='flex justify-between items-center'>
          <p>Escape</p>
          <div className='flex'>
            <img src={diamond} alt='' />
            <p>0.03</p>
          </div>
        </div>
      </div>

      <div className='w-[500px] p-4 border border-2xl m-2'>
        <div className='p-2 right-0'>
          <FiHeart />
        </div>
        <img src={halfflower} alt='girls' />
        <div className='flex justify-between items-center'>
          <p>Sassy</p>
          <div className='flex'>
            <img src={diamond} alt='' />
            <p>3.20</p>
          </div>
        </div>
      </div>
    </div>

    <div className="p-0.5 rounded bg-gradient-to-r from-[#78A3AD] to-[#C056097D] place">
    <button
      className="px-6 py-2 text-[#C056097D] bg-white">
      Explore all
    </button>
    </div>

    </div>
  )
}

export default ProductDetail