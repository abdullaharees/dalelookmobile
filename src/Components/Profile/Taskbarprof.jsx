import React from 'react'

import taskm from "../pictures/taskm.svg"
import ppm from "../pictures/ppm.svg"
import plusprofm from "../pictures/plusprofm.svg"

const Taskbarprof = () => {
  return (
    <div>
        <div>
            <img className='relative w-[24rem] mr-2 cursor-pointer fill-black' src={taskm} alt="taskm" />
            <img className="absolute top-[3.5rem] right-[8.7rem] w-[6.5rem]" src={ppm} alt="ppm" />
            <img className="absolute top-[8.2rem] right-[9rem] w-[1.2rem]" src={plusprofm} alt="plusprofm" />    
            <p className="font-bold first-letter:flex absolute top-[10.2rem] right-[10rem] w-[1.2rem] text-white" >اسم </p>
            <p className="font-bold first-letter:flex absolute top-[10.25rem] right-[13.9rem] w-[1.2rem] text-white" >الحساب </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
              <div className=' bg-white w-[95%] mr-2 h-[33px] mt-[1.6rem]  rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <p className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>العنوان</p>
                <p className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[33px] mt-2  rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <p className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>العنوان</p>
                <p className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[33px] mt-2  rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <p className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>العنوان</p>
                <p className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[33px] mt-2  rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <p className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>العنوان</p>
                <p className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[33px] mt-2  rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <p className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>العنوان</p>
                <p className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[33px] mt-2  rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <p className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>العنوان</p>
                <p className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[33px] mt-2  rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <p className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>العنوان</p>
                <p className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>
          </div>
    </div>
  )
}

export default Taskbarprof
