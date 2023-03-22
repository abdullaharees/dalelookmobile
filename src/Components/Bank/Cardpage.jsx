import React from 'react'
import Cardone from './Cardone'
import Backcard from './Backcard'
import Footer from '../Footer'

const Cardpage = () => {
  return (
    <div className='overflow-hidden pb-24'>
      <Backcard />
      <Cardone />
      <Footer />
    </div>
  )
}

export default Cardpage
