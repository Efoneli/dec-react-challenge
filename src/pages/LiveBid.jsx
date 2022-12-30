import React from 'react'

function LiveBid() {
  return (
    <div>
        <nav class="bg-gray-50 px-5 py-3 rounded-md w-full">
        <ol class="list-reset flex">
            <li><a href="#" class="text-gray-400 hover:text-gray-600">Home</a></li>
            <li><span class="text-gray-500 mx-2">/</span></li>
            <li><a href="#" class="text-gray-400 hover:text-gray-600">Auctions</a></li>
            <li><span class="text-gray-500 mx-2">/</span></li>
            <li class="text-gray-900">Auctions</li>
        </ol>
        </nav>
        <div className='container  h-screen table clear-both table border border-2xl border-gray-600 flex items-center justify-center my-8 mx-4'>

        </div>
    </div>
  )
}

export default LiveBid