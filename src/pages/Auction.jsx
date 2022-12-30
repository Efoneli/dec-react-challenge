import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import twilightgirl from '../assets/twilightgirl.png';
import decor from '../assets/decor.png';
import clothe from '../assets/clothe.png';
import cube from '../assets/cube.png';
import chairs from '../assets/chairs.png';
import { FiHeart,  } from "react-icons/fi";




const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  
  const items = [
    <div className="item" data-value="1">
        <img src={twilightgirl} alt='twilightgirl'/>
            <span
                class="absolute bottom-0 right-0 left-0 items-center inline-flex m-4 mb-8 px-3 py-2 pl-12 rounded bg-white bg-opacity-25 text-sm font-medium text-white select-none dark:bg-gray-400">
                {/* <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span> */}
                <p class="text-sm text-white dark:text-gray-100 ml-14 pl-6">6hrs: 40mins: 15s</p>
            </span>
    </div>,
    <div className="item" data-value="2">
        <img src={decor} alt='leaf'/>
        <span
                class="absolute bottom-0 right-0 left-0 items-center inline-flex m-4 mb-8 px-3 py-2 pl-12 rounded bg-white bg-opacity-25 text-sm font-medium text-white select-none dark:bg-gray-400">
                {/* <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span> */}
                <p class="text-sm text-white dark:text-gray-100 ml-14 pl-6">6hrs: 40mins: 15s</p>
            </span>
    </div>,
    <div className="item" data-value="3">
        <img src={clothe} alt='girl'/>
        <span
                class="absolute bottom-0 right-0 left-0 items-center inline-flex m-4 mb-8 px-3 py-2 pl-12 rounded bg-white bg-opacity-25 text-sm font-medium text-white select-none dark:bg-gray-400">
                {/* <span class="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 dark:bg-green-700"></span> */}
                <p class="text-sm text-white dark:text-gray-100 ml-14 pl-6">6hrs: 40mins: 15s</p>
            </span>
    </div>,
   
  ];
  


function Auction() {
  return (
    <div className='mx-4 my-2'>
        <nav class="bg-gray-50 px-5 py-3 rounded-md w-full">
        <ol class="list-reset flex">
            <li><a href="#" class="text-gray-400 hover:text-gray-600">Home</a></li>
            <li><span class="text-gray-500 mx-2">/</span></li>
            <li class="text-gray-900">Auctions</li>
        </ol>
        </nav>
        <p className='px-5 p-3'>Here's an overview of products actively on auction, explore!</p>

        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        />
        <div>
            <p className='m-4 text-xl font-bold'>Top bids from popular creators</p>
        </div>

        <div className='flex justify-between m-3'>
            <div className='my-5'>
        <div className=' py-4 px-0 border border-2xl rounded m-2'>
            <div className='bg-red-500 top-0 right-0  border border-2xl rounded-full'>
            <FiHeart />
            </div>
            <img src={cube} alt='girls' />
            <div className='flex justify-between items-center'>
            <p className='text-3xl font-bold m-4'>Out of the box</p>    
            </div>
        </div>
        <div className='my-4 text-xl'>
            <p className='p-4'>Creator: <span className='font-bold'>Dan Murray</span></p>
            <p className='p-4'>Date: <span className='font-bold'>12/08/22</span></p>
            <p className='p-4'>Highest bid: <span className='font-bold'>0.57 ETH</span></p>
            <div className='p-4 flex justify-between items-center bg-gray-100 rounded'>
                <div className=''>
                    <p className='p-4'>Current bid</p>
                    <p className='p-4 font-bold'>0.987 ETH</p>
                </div>
                <button class="bg-blue-500  hover:bg-blue-700 text-white text-sm font-bold py-3 px-8 rounded">
                    Place bid
                </button>
            </div>
        </div>
            </div>

            <div className='my-5'>
        <div className='py-4 px-0 border border-2xl rounded m-2'>
            <div className='bg-red-200 top-0 right-0  border border-2xl rounded-full'>
            <FiHeart />
            </div>
            <img src={chairs} alt='chair' />
            <div className='flex justify-between items-center'>
            <p className='text-3xl font-bold m-4'>Falling apart</p>    
            </div>
        </div>
        <div className='my-4 text-xl'>
            <p className='p-4'>Creator: <span className='font-bold'>Jacob Banks</span></p>
            <p className='p-4'>Date: <span className='font-bold'>12/08/22</span></p>
            <p className='p-4'>Highest bid: <span className='font-bold'>0.34 ETH</span></p>
            <div className='p-4 flex justify-between items-center bg-gray-100 rounded'>
                <div className=''>
                    <p className='p-4'>Current bid</p>
                    <p className='p-4 font-bold'>0.99 ETH</p>
                </div>
                <button class="bg-blue-500  hover:bg-blue-700 text-white text-sm font-bold py-3 px-8 rounded">
                    Place bid
                </button>
            </div>
        </div>
            </div>
        </div>
        

    </div>
  )
}

export default Auction