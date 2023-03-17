import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Boxcomp from './Boxcomp'
import Clicklastdiv from './Clicklastdiv'
import Slidermiddiv from './Slidermiddiv'
import Sliders from './Sliders'

const Homepage = () => {
  return (
    <div>
      <Navbar />
    
        <Sliders />
        <Boxcomp />
        <Slidermiddiv />
        <Clicklastdiv />

        <Footer style={{position: "fixed", bottom: 0, left: 0, right: 0}} />
    </div>
    
    
  )
}

export default Homepage
