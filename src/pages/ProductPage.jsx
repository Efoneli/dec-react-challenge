import React from 'react'
import { BsSliders } from "react-icons/bs";
import { FiSearch, FiChevronUp, FiChevronDown } from "react-icons/fi";
import ladylight from '../assets/ladylight.png';
import dancer from '../assets/dancer.png';
import pinklady from '../assets/pinklady.png';
import cameraman from '../assets/cameraman.png';
import oldmen from '../assets/oldmen.png';
import curlyhair from '../assets/curlyhair.png';
import hand from '../assets/hand.png';
import sunkiss from '../assets/sunkiss.png';
import mountain from '../assets/mountain.png';



function Productpage() {
  return (
    <div>
    <div className='flex gap-2 mt-6'>
        <div className='w-[20%]  m-6'>
        <div className=''>
            <div class=" flex bg-gray-200">
                <div class="flex border-2 rounded-xl">
                    <button 
                        class="flex items-center justify-between px-4 border-r rounded-lg">
                        <FiSearch/>
                    </button>
                 <input type="text" class="" placeholder="Search..." className='bg-gray-200 rounded-lg py-2'/>
                </div>
            </div> 
            <div className='flex my-6'>
                <BsSliders /> 
                <h1 className='ml-8'>Filter</h1>
            </div>
            <hr />
            
            <div className=' my-6'>
                <div className='flex justify-between'>
                    <h1 className='font-bold'>By category</h1>
                    <FiChevronUp />
                </div>
                <form className='mt-2'>
                    <input type="checkbox" value='Editorials' className='mr-3 ' />Editorials
                    <br />
                    <input type="checkbox" value='Fashion' className='mr-3 '/>Fashion
                    <br />
                    <input type="checkbox" value='Optics' className='mr-3 '/>Optics
                    <br />
                    <input type="checkbox" value='Arts & Museum' className='mr-3 '/>Arts & Museum
                    <br />
                    <input type="checkbox" value='Nature' className='mr-3 bg-gray-900'/>Nature
                </form>
            </div>
            <div className='my-6'>
                <div className='flex justify-between mb-2'>
                    <h1 className='font-bold'>By Price</h1>
                    <FiChevronUp />
                </div>
                <p>$100.00 - $150.00</p>
                <input type='range' />
            </div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='font-bold mb-2'>By artist</h1>
                    <FiChevronUp />
                </div>
                <p className=''>All</p>
                <p>Below $100.00</p>
                <p>$100.00 - $150.00</p>
                <p>$150.00 - $200.00</p>
                <p>Above $200.00</p>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='font-bold'>Collection year</h1>
                    <FiChevronUp />
                </div>
            </div>
           
        </div>
        </div>     

        <div className='w-[80%] container'>
        <div className='container w-full h-[50px] rounded-lg shadow-lg shadow-[#1E1E1E] bg-white flex justify-between items-center m-6 p-6'>
                    <div>
                        <p>See 1-6 of 15 results</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='border border-2xl rounded py-2'>
                            <div className='px-6 '>Sort by</div>
                            
                        </div>
                        <div>
                            <FiChevronDown />
                        </div>
                    </div>
                    
                </div>
            <div className=' grid grid-cols-3 gap-8 bg-gray-50'>
               
                <div className='bg-white group container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                    <img src={ladylight} alt='lady' className='py-2 px-0'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>PHILOMENA '22</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>

                <div className='bg-white  container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                <img src={dancer} alt='dancer' className='py-2 w-[250px] h-[300px] rounded-md object-cover'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>BOOLEAN EGYPTIAN</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>
                <div className='bg-white  group container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                <img src={pinklady} alt='pink' className='py-2'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>BLANC</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>
                <div className='bg-white  group container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                <img src={cameraman} alt='cm' className='py-2'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>ELLIPSIA</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>
                <div className='bg-white group container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                <img src={oldmen} alt='old' className='py-2'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>THE LAWMAKERS</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>
                <div className='bg-white group container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                <img src={curlyhair} alt='curl'  className='py-2'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>VEIL</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>
                <div className='bg-white group container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                <img src={hand} alt='hand'  className='py-2'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>ALTERNATING '22</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>
                <div className='bg-white group container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                <img src={sunkiss} alt='sunkiss' className='py-2'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>ROSEMARY '22</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>
                <div className='bg-white group container rounded-md transform transition duration-500 hover:scale-110 flex items-center flex-col m-4'>
                <img src={mountain} alt='mountain' className='py-2'/>
                    <div className='flex justify-start items-start flex-col'>
                    <p className='top-0'>BEVERLY '22</p>
                    <span className='font-bold items-start pt-4'>$3.90</span>
                    </div>
                </div>
           
            </div>         
        </div>
       
        </div>
        <div className='h-[1/4] flex justify-center items-center'>
            <button className='border border-2xl rounded py-2 px-6 '>
                See more
            </button>
        </div>
    </div>
  )
}

export default Productpage