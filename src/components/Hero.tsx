import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/images.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"35%"}}>
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-600px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center mt-20'>
          <div>
            <p data-aos="zoom-in-up" className='text-cyan-600'>I'm</p>
            <p data-aos="zoom-in-up" className='text-white'>Anoosha</p>
            <p data-aos="zoom-in-up" className='text-cyan-600'>Naz</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
