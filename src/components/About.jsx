import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import about from './images/about.webp'

export default function About() {
  return (
    <div>
      <NavBar /> 
      <div className='relative '>
        <img src={about} alt="img" className='h-[70vh] w-full mt-10'/>
      </div>
      <div className='text-center text-cyan-700'>
        <p className='absolute top-60 right-[42%] font-extrabold text-6xl  text-white'>About</p>
        <p className=' md:text-5xl text-4xl font-extrabold py-10 mt-20'>African Cuisine with a contemporary twist</p>
        <p className='w-[60%] mx-auto text-lg mb-10'>Bold flavor meets sophisticated design at our distinctive dining venue in the heart of Ikeja, Lagos. 

Watch as renowned chefs craft Asian street food with a contemporary twist. Savor small plates perfect for sharing. Get social while sipping exotic cocktails at the vibrant bar. And celebrate special occasions in style at our lively indoor and outdoor venues. </p>
      </div>
      <Footer />
    </div>
  )
}
