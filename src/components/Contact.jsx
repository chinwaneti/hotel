import React from 'react'
import Footer from './Footer'
import int from "./images/int.webp"
import NavBar from './NavBar'
import MyMap from './Map'

export default function Contact() {
  return (
    <div>
      <NavBar /> 
      <div className='relative '>
        <img src={int} alt="img" className='h-[70vh] w-full mt-10'/>
      </div>
      <div className='text-center text-cyan-700 '>
        <p className='absolute top-60 md:right-[31%] right-12 font-extrabold md:text-6xl text-4xl  text-white'>Contact & Location</p>
        <p className=' md:text-5xl text-4xl font-extrabold py-10 mt-20 '>Welcome to Chidinma</p>
        <p className='w-[60%] mx-auto text-lg mb-10'>Our contemporary African restaurant is located at the Lagos Marriott Hotel Ikeja on the first floor.  </p>
      </div>


      <div className=' md:grid grid-cols-2 gap-20  p-20 md:ml-20 text-center text-cyan-700 md:w-[90%]'>
        <div className=' '>
        <div><p className='font-bold text-3xl  py-10'>Location</p><p className='uppercase'>23 Road, T close, Festac, Lagos, Nigeria
</p></div>
        <div><p className='font-bold text-3xl py-10 mt-10'>Hours</p><p>TUE - SUN : 12PM - 4PM AND 6PM - 10.30PM</p></div></div>
        <div className='md:border-l-2'><p className='font-bold text-3xl py-10'>Contact</p><p>INQUIRIES: +234 813 310 7964 EMAIL: CHIDINMANWANETI.CN@GMAIL.COM</p></div>
      </div>

      <div>
        <MyMap />
      </div>

      <Footer />
    </div>
  )
}
