import React from 'react'

import check from "../pictures/check.svg"
import gridm from "../pictures/gridm.svg"
import sortm from "../pictures/sortm.svg"



const Catbar = () => {
  return (
    <div className='bg-[#0092A0] h-[5rem]'>
        <div className='flex justify-center'>
              <div className='flex flex-col justify-center items-center mt-2 mr-3'>
                <img className='w-[1.7rem] py-1' src={check} alt="Company Logo" />
                <p className='text-[white] ml-2'>حفظ البحث</p> 
              </div>
        
              <div className='border-r-[2px] border-white mt-2'></div>

              <div className='flex flex-col justify-center items-center mt-2 mr-3 ml-2'>
                <img className='w-[1.5rem] py-1' src={gridm} alt="Company Logo" />
                <p className='text-[white] ml-2 mt-1'>عرض الإعلانات</p> 
              </div>

              <div className='border-r-[2px] border-white mt-2'></div>

              <div className='flex flex-col justify-center items-center mt-2 ml-7 mr-5'>
                <img className='w-[1.7rem] py-1' src={sortm} alt="Company Logo" />
                <p className='text-[white] ml-2'>فرز</p> 
              </div>
        
        </div>
    </div>
  )
}

export default Catbar
