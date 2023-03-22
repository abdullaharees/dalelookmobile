import React from 'react'
import Navbar from '../Navbar'
import Catclicklastdiv from './Catclicklastdiv'
import Catclicklastdivtwo from './Catclicklastdivtwo'
import Divcheckbox from './Divcheckbox'
import Searchbar from './Searchbar'
import Topsliderone from './Topsliderone'
import Catbar from "./Catbar"
import Footer from '../Footer'

const Categorypage = () => {
  return (
    <div className='overflow-hidden pb-24'>
        <Navbar />
        <Catbar className='z-50' />
        <Searchbar />
        <Topsliderone className='-z-10' />
        <Catclicklastdivtwo />
        <Footer />
    </div>
  )
}

export default Categorypage
