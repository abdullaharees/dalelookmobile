import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Catclicklastdiv from './Catclicklastdiv'
import Catclicklastdivtwo from './Catclicklastdivtwo'
import Divcheckbox from './Divcheckbox'
import Searchbar from './Searchbar'
import Topsliderone from './Topsliderone'
import Catbar from "./Catbar"
import Footer from '../Footer'
import Clicklastdiv from './Clicklastdiv'

const Categorypage = () => {
  const [activeItem, setActiveItem] = useState('item1')
  
  useEffect(() => {
    if (activeItem !== null) {
      // do something with the active item
      console.log(activeItem)
    }
  }, [activeItem]);

  return (
    <div className='overflow-hidden pb-24'>
        <Navbar />
        <Catbar activeItem={activeItem} setActiveItem={setActiveItem} className='z-50' />
        <Searchbar />
        <Topsliderone className='-z-10' />
        {activeItem === 'item1' && <Clicklastdiv />}
        {activeItem === 'item2' && <Catclicklastdivtwo />}
        {activeItem === 'item3' && <Catclicklastdiv />}
        <Footer />
    </div>
  )
}

export default Categorypage
