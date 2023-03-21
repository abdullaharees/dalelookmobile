import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
 
import Backproceed from "./Backproceedone"
import Proceedone from './Proceedone'
import Proceedthree from './Proceedthree'
const Homeproceed = () => {
  const [layout, setLayout] = useState(1)
  const [target, setTarget] = useState('')
  useEffect(() => {
    console.log(layout)
  },[layout])
  return (
    <div >
        <Backproceed layout={layout} setLayout={setLayout} />
        {layout === 1 ? <Proceedone layout={layout} setLayout={setLayout} /> : <Proceedthree />}
        {/* <Proceedone   */}
        {/* target={target} setTarget={setTarget}/> */}
        <Footer />
    </div>
  )
}

export default Homeproceed
