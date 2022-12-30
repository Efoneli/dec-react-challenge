import React from 'react'
import Footer from '../components/Footer';
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import leaf from '../assets/leaf.png';
import seeds from '../assets/seeds.png';
import kangaroo from '../assets/kangaroo.png';
import dancer from '../assets/dancer.png';
import people from '../assets/people.png';
import sphnyx from '../assets/sphnyx.png';
import arrow from '../assets/arrow.png';
// import lady from '../assets/lady.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Home.css';



const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1"><img src={boy} alt='boy'/></div>,
  <div className="item" data-value="2"><img src={leaf} alt='leaf'/></div>,
  <div className="item" data-value="3"><img src={girl} alt='girl'/></div>,
  <div className="item" data-value="4"><img src={kangaroo} alt='kang'/></div>,
  <div className="item" data-value="5"><img src={seeds} alt='seeds'/></div>,
];


function Home() {

    
  return (
    <div className='mx-4 my-2'>
      <div className='text-center p-4 my-8'>
        <p className='text-4xl font-bold p-4'>
          Photography is poetry &<br /> beautiful untold stories
        </p>
        <p className='text-sm font-medium'>
          Flip through more than 10,000 vintage shots, old Photographs, historic <br /> images and captures seamlessly in one place. Register to get top access.
        </p>
      </div>
      <div>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />

      </div>
      <div>
        <h3 className='pb-4 font-medium text-3xl'>Featured products</h3>
        <hr/>
        <div className='flex justify-between items-center my-8'>
          <img src={dancer} alt='dancer' className='p-4'/>
          <div className='p-4'>
          <h3 className='pb-4 font-bold text-2xl'>The Boolean Egyptian</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A rerum voluptates harum. Neque rerum velit iste error amet quo a, aliquam consectetur quibusdam at. Repellendus iste assumenda odit laborum rem ex asperiores omnis quidem nihil dolore aperiam blanditiis quos voluptatum, fuga voluptates molestiae adipisci consequatur voluptate qui minus officia deleniti quo debitis error. Illum asperiores dicta sunt consequuntur incidunt voluptatem, distinctio sed ad. Iusto porro sapiente accusamus aut quam, illo quasi incidunt reiciendis nam corporis rerum! Nulla minima recusandae eveniet atque perferendis, esse, obcaecati quas ad doloremque, ipsam vel voluptas nostrum labore eius deleniti a quos rem enim aliquam laudantium.</p>
        </div>
        </div>
      </div>
      <hr />

      <div className='flex justify-between items-center my-8'>
        <div>
        <h3 className='pb-4 font-bold text-2xl'>The Boolean Egyptian</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate amet repudiandae suscipit ipsa consectetur perferendis atque veritatis fugit temporibus soluta fugiat dicta laudantium fuga nisi ea, ducimus exercitationem minus eligendi et tenetur. Aut nulla fuga eum rerum iusto culpa est, odit sapiente error laboriosam omnis assumenda eos nisi cumque, cum tenetur debitis adipisci accusantium eius molestias libero exercitationem blanditiis commodi. Dolorum laudantium, quasi vitae eligendi beatae odio odit rem culpa vero soluta inventore fugit nihil nulla numquam eaque ipsam laboriosam, eveniet reprehenderit suscipit quos pariatur! Ipsum nesciunt, architecto ad itaque mollitia eius consequatur, dolorem facere repellat quibusdam atque. Voluptatibus.</p>
        </div>
        <img src={people} alt='people' className='p-4'/>
      </div>
      <hr />

      <div className='flex my-8'>
        <img src={sphnyx} alt='sphnyx' className='p-4' />
        <div>
        <h3 className='pb-4 font-bold text-2xl'>The Boolean Egyptian</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium corrupti alias aliquam autem illum eum nesciunt fugit, ab quisquam labore possimus esse mollitia voluptatem accusamus delectus itaque rerum, dolore quasi cupiditate! Cumque eveniet omnis impedit aspernatur quod delectus totam enim explicabo aperiam. Quo animi enim nulla sed, accusamus inventore. Asperiores quaerat quo cupiditate? Aperiam nulla, impedit a beatae accusamus maxime ea nostrum quam magnam, doloribus est commodi voluptatum asperiores blanditiis inventore, debitis dicta doloremque amet fugit voluptatibus culpa tempora! Aliquam doloremque officiis error consequatur temporibus nulla ex nam esse voluptatum nobis, ducimus dolore obcaecati labore exercitationem eaque asperiores officia voluptas.</p>
        </div>
      </div>

      <div className='w-full h-[550px] bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[#C056097D] text-white  items-center my-8'>
        <h3 className='p-4 underline'>See Upcoming Auctions and Exhibitions</h3>
        {/* <hr className='w-[25%] pr-4'/> */}
        <div className='home-inter-decor'>
          <h3>MONALISA REDEFINED IN STYLE</h3>
          <p>START ON: 08:00 GTS. MONDAY</p>
          <div className=' flex justify-between items-center'>
            <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH <br /> INVESTORS AND AUCTIONEERS ACCROSS THE WORLD BRINGING THEIR <br />HIGHEST AND LOWEST BIDS.</p>
            <div className='flex'>
            <p className='underline'>See more</p>
            <button 
            className='text-white border-2 p-2 outline-white rounded ml-3'>
              Set Reminder
            </button>
            </div>
          </div>
        </div>      
      </div>
      <hr />
      <div className='p-8 text-3xl flex justify-between'>
        <p>Explore marketplace</p>
        <img src={arrow} alt='arrow' />
        </div>
      <hr />
      <div className='p-8 text-3xl flex justify-between'>
        <p>See auctions</p>
        <img src={arrow} alt='arrow' />
        </div>
      <hr />
      <div className='bg-[#E2E2E2] w-full px-8 m-6 '>
        <div className='flex justify-between pt-6 '>
        <h3 className='text-3xl text-[#161616] font-bold'>TOP CREATORS OF <br /> THE WEEK</h3>
        <ul className='text-2xl text-[#333333]'>
          <li>Editiorials</li>
          <li>Fashion</li>
          <li>Lifestyle</li>
          <li>Blueprint</li>
        </ul>
        </div>
        <div className='home-girl-div  flex justify-center flex-col items-center'>
          {/* <img src={lady} alt='lady' /> */}
          <p className='text-slate-600 text-xl'>
            “Everything always looked better in black and white. Everything always as if it<br /> were the first time; there’s always more people in a black and white <br />photograph. It just makes it seem that there were more<br /> people at a gig, more people at a football match, than with colour photography. Everything looks <br/>more exciting.”– Jack Lowden
          </p>
        </div>
      </div>
      <div className='text-[-[#333333]] w-full h-[200px] border-2 items-center flex flex-col p-4'>
        <h3 className='p-2 text-xl'>NEWSLETTER</h3>
        <p className='p-2'>Subscribe to get daily updates on new drops & exciting deals</p>
        <div className='flex p-4'>
        <input type='text' placeholder='ENTER YOUR EMAIL' className='border-2 py-2 px-6 mr-2'/> 
        <input type="SUBSCRIBE" placeholder='SUBSCRIBE' className='bg-[#333333] text-white text-center py-1 ml-2 cursor-pointer' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;