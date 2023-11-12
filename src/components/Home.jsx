import React from 'react';
import { Link } from 'react-router-dom';
import SliderPage from './SliderPage';
import Footer from './Footer';
import NavBar from './NavBar';
import "./Styles.css"

export default function Home() {
  return (
    <div className="bg-gray-100  min-h-screen">
      <NavBar />
      <section className="">
        <div className="">
          <SliderPage />
        </div>
      </section>

      <div className='card md:flex md:h-screen md:mt-14 text-white'>
    <div className='md:bg-cyan-700  md:w-[40%] md:px-20 md:py-5'>
        <div className='card-title'>
            <p className='md:py-3 md:pb-10 md:font-extrabold md:text-4xl'>SINCE 2021</p>
        </div>
        <div className='card-description'>
            <p className='md:w-[] md:text-lg'>
                Bold flavor meets sophisticated design at our distinctive venue in the heart of Ikeja, Lagos. Watch as renowned chefs craft Asian street food with a contemporary twist. Savour small plates perfect for sharing. Get social while sipping cocktails at the vibrant bar. And celebrate special occasions in style at our lively indoor and outdoor venues.
            </p>
        </div>
        <Link to="/menu">
            <button className='cart-button md:p-2 md:border-solid md:border-2 md:mt-20 md:px-10 hover:bg-cyan-700 hover:text-white hover:border-cyan-700 hover:scale-105 '> View Menu</button>
        </Link>
    </div>
    <div className='card img md:w-[60%] md:relative'>
        <img src="https://www.wakamerestaurant.com/resourcefiles/home-first-snippet/mh-loslg-foodshot-01-osb.jpg" alt="food" className='md:h-[100vh] ' loading='lazy' />
    </div>
</div>




      <div className='cards md:flex md:h-[100vh] md:mt-14 md:text-cyan-700'>
        <div className='card-imgs'>
          <img src="https://www.wakamerestaurant.com/resourcefiles/home-second-snippet/wakame-terrace.jpg" alt="food" className='md:h-[100vh]' loading='lazy'/>
        </div>



        
        <div className=' bg-white md:w-[45%] md:px-20 md:py-5'>
          <div className=''>
          <p className='card-titles md:py-3 md:pb-10 '>FEATURED OFFERS</p>
            <p className='card-descriptions md:font-extrabold md:py-2 md:text-4xl'>Take your taste buds on a tour of Africa</p> </div>
            <div className='card-contents'>
            <p className='md:w-[25vw] md:text-lg'>
              Our semi-open kitchen displays our talented chefs in action as they craft mouth-watering dishes inspired by Nigerian street food. Feast your eyes on an array of traditional cooking techniques and styles including a lamb grill, duck oven, ukwa, ofang, abacha and more. All dishes are served on small plates and boards perfect for sharing.
            </p>
         </div>
          <Link to="/menu">
            <button className=' cart-buttons md:p-2  md:border-solid md:border-2 md:mt-6 md:px-10 hover:bg-cyan-700 hover:text-white hover:border-cyan-700 hover:scale-105 '> View Menu</button>
          </Link>
        </div>
      </div>
      <div className='h-[7vh] bg-[#0E8585] ' ></div>
      <div className=' cardss text-white md:flex md:h-[100vh] md:mt-14 md:text-cyan-700'>
        <div className='md:bg-white md:w-[45%] md:px-20 md:py-16'>
          <p className=' '>
            <p className=' md:font-extrabold md:py-4 md:text-4xl card-titles'>Chidinma Lounge</p>
            <p className='md:w-[25vw] md:text-lg card-contents'>
              <strong>The Lounge</strong> is located within the Chidinma African Kitchen & Grill and features the attractive and contemporary design and impeccable service that the restaurant is well known for.
              You can be sure to savor a variety of refreshing cocktails from the bar mixologists; an extensive wine and spirits menu plus entertainment from our in-house DJ will also be offered to ensure that all our patrons' needs are catered to.
            </p>
            <Link to="/about">
              <button className='md:p-2 cart-buttonss md:border-solid md:border-2 md:mt-6 md:px-10 hover:bg-cyan-700 hover:text-white hover:border-cyan-700 hover:scale-105 '> Learn More</button>
            </Link>
          </p>
        </div>
        <div className='card-imgs'>
          <img src="https://www.wakamerestaurant.com/resourcefiles/home-first-snippet/bar-on-home.jpg" alt="food" className='md:h-[100vh]' loading='lazy' />
        </div>
      </div>

      <Footer />
    </div>
  );
}
