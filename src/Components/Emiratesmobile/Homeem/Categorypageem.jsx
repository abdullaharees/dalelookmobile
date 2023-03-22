import React from 'react'
import Catclicklastdivtwoem from './Catclicklastdivtwoem'
import Catbarem from "./Catbarem"
import Navbarem from '../Navbarem'
import Searchbarem from './Searchbarem'
import Topslideroneem from './Topslideroneem'
import Footerem from '../Footerem'

const Categorypageem = () => {
  return (
    <div className='overflow-hidden pb-24'>
        <Navbarem />
        <Catbarem className='z-50' />
        <Searchbarem />
        <Topslideroneem className='-z-10' />
        <Catclicklastdivtwoem />
        <Footerem />
    </div>
  )
}

export default Categorypageem
