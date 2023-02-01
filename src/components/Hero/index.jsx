import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import StickyNav from './StickyNav'

const Hero = () => {
  return (
    <>
    <StickyNav />
      <Navbar />
      <div className='skylark-slider'>
      <Slider />
      </div>
    </>
  )
}

export default Hero