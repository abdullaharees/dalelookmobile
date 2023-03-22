import {React, useState} from 'react'

import checkem from "../pictures/checkem.svg"
import Gridropem from './Gridropem'
import Sortem from './Sortem'


import Filterswipetwoem from './Filterswipetwoem'


const Catbarem = () => {
const [nav, setNav] = useState(false)

  return (
    <div className=' z-20'>
        <div className='bg-[#FFCC00] flex justify-center'>
          <div className='flex justify-center space-x-0.5 bg-white w-[95%] max-w-[300px] mt-1'>
              

              <div className='bg-[#FFCC00] w-[50%]  flex flex-col justify-center items-center'>
                <img className='w-[1.1rem] py-1' src={checkem} alt="Company Logo" />
                <p className='text-[#333333] ml-1 text-[0.6rem]'>حفظ البحث</p> 
              </div>
        
              <div className='bg-[#FFCC00] w-[50%] flex justify-center'>
                <Gridropem className='z-20 ' />
              </div>

              
          </div>
              
        
        </div>
    </div>
  )
}

export default Catbarem
