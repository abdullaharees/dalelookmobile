import React from 'react'

import funnel from "../pictures/funnel.svg"
import check from "../pictures/check.svg"
import gridm from "../pictures/gridm.svg"
import sortm from "../pictures/sortm.svg"



const Catbar = () => {
  return (
    <div className='bg-[#0092A0] h-[3.1rem]'>
        <div className='flex justify-center'>
              <div className='flex flex-col justify-center items-center mt-2 mr-[2rem]'>
                <img className='w-[1.1rem] py-1' src={funnel} alt="Company Logo" />
                <p className='text-[white] text-[0.6rem] '>فلترة</p> 
              </div>
        
              <div className='border-r-[2px] border-white mt-1'></div>

              <div className='flex flex-col justify-center items-center mt-2 ml-[1rem] mr-[1.25rem]'>
                <img className='w-[1.1rem] py-1' src={check} alt="Company Logo" />
                <p className='text-[white] ml-1 text-[0.6rem]'>حفظ البحث</p> 
              </div>
        
              <div className='border-r-[2px] border-white mt-1'></div>

              <div className='flex flex-col justify-center items-center mt-2 mr-3 ml-2'>
                <img className='w-[1.1rem] py-1' src={gridm} alt="Company Logo" />
                <p className='text-[white] ml-2 mt-[0.15rem] text-[0.6rem]'>عرض الإعلانات</p> 
              </div>

              <div className='border-r-[2px] border-white mt-1'></div>

              <div className='flex flex-col justify-center items-center mt-2 ml-7 mr-5'>
                <img className='w-[1.1rem] py-1' src={sortm} alt="Company Logo" />
                <p className='text-[white] ml-1 text-[0.6rem]'>فرز</p> 
              </div>
        
        </div>
    </div>
  )
}

export default Catbar
