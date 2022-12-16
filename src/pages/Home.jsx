import React from 'react'
import Footer from '../components/Footer';
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import leaf from '../assets/leaf.png';
import seeds from '../assets/.png';
import kangaroo from '../assets/kangaroo.png';



function Home() {
  return (
    <div>
      <div className='text-center p-2'>
        <p className='text-4xl font-bold p-4'>
          Photography is poetry &<br /> beautiful untold stories
        </p>
        <p className='text-sm font-medium'>
          Flip through more than 10,000 vintage shots, old Photographs, historic <br /> images and captures seamlessly in one place. Register to get top access.
        </p>
      </div>
      <div>
        <img src={boy} alt='boy'/>
        <img src={girl} alt='girl'/>
        <img src={leaf} alt='leaf'/>
        <img src={seeds} alt='seeds'/>
        <img src={kangaroo} alt='kangaroo'/>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <Footer />
    </div>
  )
}

export default Home