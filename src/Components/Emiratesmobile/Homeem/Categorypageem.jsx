import React, { useState } from 'react'
import Catclicklastdivtwoem from './Catclicklastdivtwoem'
import Catbarem from "./Catbarem"
import Navbarem from '../Navbarem'
import Searchbarem from './Searchbarem'
import Topslideroneem from './Topslideroneem'
import Footerem from '../Footerem'
import Clicklastdivem from './Clicklastdivem'

const Categorypageem = () => {
  const [activeItem, setActiveItem] = useState('item1')

  return (
    <div className='overflow-hidden pb-24'>
        <Navbarem />
        <Catbarem activeItem={activeItem} setActiveItem={setActiveItem} className='z-50' />
        <Searchbarem />
        <Topslideroneem className='-z-10' />
        <div className='flex text-[#424242] items-center justify-center mt-2 w-full text-lg  arabic'>
            <p>اسم الصفحة</p>
            <p className='font-bold mr-2'>( الطب و الصحة )</p>
        </div>
        {activeItem === 'item1' && <Clicklastdivem />}
        {activeItem === 'item2' && <Catclicklastdivtwoem />}
        <Footerem />
    </div>
  )
}

export default Categorypageem
