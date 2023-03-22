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
        <Clicklastdiv />

        <Footer />
    </div>
    
    
  )
}

export default Homepage
