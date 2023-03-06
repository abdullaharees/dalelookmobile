import React, {useState} from 'react'
import villam from "../pictures/villam.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"


import { FaHeart, FaRegHeart } from 'react-icons/fa'
  

const Componenttwo = () => {
    const [like, setLike] = useState([]);
  return (
    <div className=' h-[14.45rem] w-[21rem] mt-2 ml-2 mr-2 xl:mr-5 rounded-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                
                <div className='justify-center object-cover'>
                        <img className='w-[22rem] mr-1 mt-1' src={villam} alt="car" />
                    </div> 
                <div className='flex flex-col'>
                    
                  <div className='w-full'>
                    <p className='text-[#0092A0] font-bold text-md arabic pr-1 pt-1'>العنوان الرئيسي للإعلان</p>
                    <div className='flex arabic'>
                        <p className='text-[1.2rem] text-[#333333] arabic mr-2 font-bold'>600,000 <span className='text-[0.8rem]'>د.إ</span></p>
                        <p className='text-[0.6rem] arabic mr-4 mt-2'>الفئة , الفرع , الفرع</p>
                    </div>
                    <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2.5px] w-[93%] mb-[0.3rem] mt-[0.2rem]'></div>
                    </div>
                    <div>
                      <div className='relative'>
                        <div className='absolute top-1 left-2 border rounded-full p-1'>
                        <p onClick={() => like.includes(1) ? setLike(like.filter(item => item !== 1)) : setLike(prev => [...prev , 1])}>
                          {like.includes(1) && <FaHeart style={{color: 'red'}} className='text-gray-300 cursor-pointer'/>}
                          {!like.includes(1) && <FaRegHeart className=' text-gray-300 cursor-pointer ' />}
                        </p>
                        </div>
                        <div className='flex text-[#5E5D5D] mb-[2px] arabic'>
                          <img className='w-[0.7rem] mr-2 ml-1' src={time} alt="time" />
                          <p className='text-[0.7rem] font-bold '>اليوم</p>
                          <p className='text-[0.7rem] font-bold mr-1'>09.50</p>
                        </div>
                        <div className='flex text-[#5E5D5D] arabic'>
                          <img className='text-[0.6rem] mr-2 ml-1' src={location} alt="location" />
                          <p className='text-[0.6rem] font-bold pt-1'>دمشق , الميدان , المنصور</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
                
        </div>
  )
}

export default Componenttwo
