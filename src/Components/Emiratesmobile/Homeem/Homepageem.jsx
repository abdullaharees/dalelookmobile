import React from 'react'
import Clicklastdivem from './Clicklastdivem'
import Footerem from '../Footerem'
import Navbarem from '../Navbarem'
import Boxcompem from './Boxcompem'
import Slidermiddivem from './Slidermiddivem'
import Slidersem from './Slidersem'

const Homepageem = () => {
  return (
    <div className='overflow-hidden pb-24'>
      <Navbarem />
    
        <Slidersem />
        <Boxcompem />
        <Clicklastdivem />

        <Footerem />
    </div>
    
    
  )
}

export default Homepageem
