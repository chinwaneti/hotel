import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import about from './images/lounge.webp'

export default function Lounge() {
  return (
    <div>
      <NavBar /> 
      <div className='relative '>
        <img src={about} alt="img" className='h-[70vh] w-full mt-10'/>
      </div>
      <div className='text-center px-4 text-cyan-700'>
        <p className='absolute top-56 right-[42%] font-extrabold md:text-6xl text-4xl  text-white'>Lounge</p>
        <p className=' md:text-5xl text-4xl font-extrabold py-10 mt-20'>Welcome to The Chidinma Lounge</p>
        <p className='md:w-[60%] mx-auto text-lg mb-10'><strong>The Lounge</strong> is located within the Chidinma African Kitchen & Grill and will feature the attractive and contemporary design and impeccable service that the restaurant is well known for.

The Lounge at Chidinma is strategically located within the hotel facility on the first floor and it is purposefully designed to reflect your lifestyle experiences for social evenings and late night hangout with friends and colleagues. The restaurant's décor is contemporary, elegant yet functional for chilling with friends and dancing the night away.

You can be sure to savor a variety of refreshing cocktails from the bar mixologists; an extensive wine and spirits menu plus entertainment from our in-house DJ will also be offered to ensure that all our patrons needs are catered to.

Chidinma Lounge will deliver warm and professional service tailored to our brand name and promise. Operating days and hours will be Tuesdays & Wednesday from 12pm-10.30pm and Thursday to Sundays from 12pm until 01h00; closed on Mondays. </p>
      </div>
      <Footer />
    </div>
  )
}
