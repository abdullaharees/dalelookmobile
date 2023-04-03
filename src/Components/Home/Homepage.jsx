import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Boxcomp from './Boxcomp'
import Clicklastdiv from './Clicklastdiv'
import Slidermiddiv from './Slidermiddiv'
import Sliders from './Sliders'

const Homepage = () => {
  return (
    <div className='overflow-hidden pb-24'>
      <Navbar />
    
        <Sliders />
        <Boxcomp />
        <Slidermiddiv />
        <p className='text-xl text-[#0092A0] text-right font-bold mr-3'>أحدث الإعلانات  </p>

        <Clicklastdiv />

        <Footer />
    </div>
    
    
  )
}

export default Homepage
