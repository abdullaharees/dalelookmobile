import React from 'react'
import Navbar from '../Navbar'
import Catclicklastdiv from './Catclicklastdiv'
import Catclicklastdivtwo from './Catclicklastdivtwo'
import Divcheckbox from './Divcheckbox'
import Searchbar from './Searchbar'
import Topsliderone from './Topsliderone'
import Catbar from "./Catbar"

const Categorypage = () => {
  return (
    <div>
        <Navbar />
        <Catbar className='z-50' />
        <Searchbar />
        <Topsliderone className='-z-10' />
        <Catclicklastdivtwo />
    </div>
  )
}

export default Categorypage
