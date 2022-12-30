import React from 'react'

function Auction() {
  return (
    <div>
        <nav class="bg-gray-50 px-5 py-3 rounded-md w-full">
        <ol class="list-reset flex">
            <li><a href="#" class="text-gray-400 hover:text-gray-600">Home</a></li>
            <li><span class="text-gray-500 mx-2">/</span></li>
            <li class="text-gray-900">Auctions</li>
        </ol>
        </nav>
        <p>Here's an overview of products actively on auction, explore!</p>
    </div>
  )
}

export default Auction