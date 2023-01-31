import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='skylark-slider'>
      <Slider />
      </div>
    </>
  )
}

export default Hero