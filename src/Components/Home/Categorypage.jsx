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
        <Catbar />
        <Searchbar />
        <Topsliderone />
        <Catclicklastdivtwo />
    </div>
  )
}

export default Categorypage
