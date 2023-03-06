import React, {useState, useRef} from 'react'

import car from "../pictures/carslider.svg"
import cam from "../pictures/cam.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"
import { FaHeart, FaRegHeart } from 'react-icons/fa'


const Component = () => {
  const [like, setLike] = useState([]);

  return (
    <div className='flex w-[10rem]  h-[13.5rem] rounded-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  
        <div>
                    <div className='relative'>
                      <img className='w-[100%] pt-[2px]' src={car} alt="car" />
                        <div className='absolute top-2 left-2 flex border w-[30px] rounded-sm bg-white'>
                          <img className='w-[10px] ml-1' src={cam} alt="cam" />
                          <p className='text-[0.7rem] pl-1'>3</p>
                        </div>
                    </div>

                    <p className='text-[#0092A0] font-bold text-[0.8rem] arabic pr-2 mb-1 mt-[0.1rem]'>العنوان الرئيسي للإعلان</p>
                    
                    <p className='text-[1rem] text-[#333333] arabic mr-2 font-bold'>600,000 <span className='text-[0.8rem]'>د.إ</span></p>
                    <p className='text-[0.56rem] arabic mr-2'>الفئة , الفرع , الفرع</p>

                    <div className='flex justify-center'>
                      <div className='content-between border-b-[2.5px] w-[95%] mt-1 mb-1'></div>
                    </div>

                    <div>

                      <div className='relative'>
                        <div className='absolute top-1 left-2 border rounded-full p-1'>
                          <p onClick={() => like.includes(1) ? setLike(like.filter(item => item !== 1)) : setLike(prev => [...prev , 1])}>
                            {like.includes(1) && <FaHeart style={{color: 'red'}} className='text-gray-300 cursor-pointer'/>}
                            {!like.includes(1) && <FaRegHeart className=' text-gray-300 cursor-pointer ' />}
                          </p>
                        </div>

                        <div className='flex text-[#5E5D5D] mb-[0.1rem] arabic'>
                          <img className='w-[0.6rem] mr-2 ml-1' src={time} alt="time" />
                          <p className='text-[0.6rem] font-bold '>اليوم</p>
                          <p className='text-[0.6rem] font-bold mr-1'>09.50</p>
                        </div>

                        <div className='flex text-[#5E5D5D] arabic'>
                          <img className='text-[0.5rem] mr-2 ml-1' src={location} alt="location" />
                          <p className='text-[0.5rem] font-bold pt-1'>دمشق , الميدان , المنصور</p>
                        </div> 
                      </div>

                    </div>
        </div>
                  
    </div>
  )
}

export default Component
