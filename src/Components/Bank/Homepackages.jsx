import React from 'react'
import Footer from '../Footer'

import Backhome from './Backhome'
import Packages from './Packages'
import Packagesone from './Packagesone'

const Homepackages = () => {
  return (
    <div className='pb-24'>
      <Backhome />
      <Packages />
      <Footer />
    </div>
  )
}

export default Homepackages
