import {React, useState} from 'react'

import funnel from "../pictures/funnel.svg"
import check from "../pictures/check.svg"
import gridm from "../pictures/gridm.svg"
import sortm from "../pictures/sortm.svg"
import Gridrop from './Gridrop'
import Sort from './Sort'
import Filterswipe from './Filterswipe'


import {MdKeyboardArrowLeft} from 'react-icons/md'
import Filterswipetwo from './Filterswipetwo'
import Filterswipethree from './Filterswipethree'
import Filterswipefour from './Filterswipefour'


const Catbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='bg-[#0092A0] h-[3.1rem] z-20'>
        <div className='flex '>


              <Filterswipe />

              <div className='border-r-[2px] border-white mt-1'></div>

              <div className='flex flex-col justify-center items-center mt-2 ml-[1.5rem] mr-[1.5rem]'>
                <img className='w-[1.1rem] py-1' src={check} alt="Company Logo" />
                <p className='text-[white] ml-1 text-[0.6rem]'>حفظ البحث</p> 
              </div>
        
              <div className='border-r-[2px] border-white mt-1'></div>

              <Gridrop className='z-20 ' />

              <div className='border-r-[2px] border-white mt-1'></div>

              <Sort />
        
        </div>
    </div>
  )
}

export default Catbar
