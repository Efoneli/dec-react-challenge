import React from 'react'
import dancer from '../assets/dancer.png';
import diamond from '../assets/diamond.png'


function ProductDetail() {
  return (
    <div>
      
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

    <div className='h-screen table clear-both table border border-2xl border-gray-600 flex items-center justify-center'>
      <div className='flex w-1/2 h-[2/3] '>
        <div className='p-6border border-2xl border-gray-600'>
            <img src={dancer} alt='dancer' />
        </div>

        <div className='border border-2xl h-screen mx-6'>
        </div>

        <div className='w-6/12'>
          <div className='flex justify-between items-center flex-row'>
            <h1>Boolean Egyptian</h1>
            <div className='flex justify-center items-center'>
              <img src={diamond} alt='' />
              <p>0.09</p>
            </div>
          </div>
          <div className='border border-2xl w-[3/4screen] mx-6'>
        </div>        <div>
          <p>Creator: <span>Ali Dawa</span></p>
          <p>Made in Italy</p>
          <p>-   +   +</p>
          <div>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to cart-></button>
          </div>
        </div>
        </div>

      </div>
    </div>

    </div>
  )
}

export default ProductDetail