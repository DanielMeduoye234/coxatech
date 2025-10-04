import React from 'react'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Expertise from '@/components/Expertise/Expertise'
import Slider from '@/components/Slider/Slider'

const page = () => {
  return (
    <div> 
      <Hero/>
      <Slider/>
      <About/>
      <Expertise/>

    </div>
  )
}

export default page