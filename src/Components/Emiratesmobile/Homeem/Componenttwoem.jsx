         
import React, {useState} from 'react'
import villa from "../pictures/villa.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"


import { FaHeart, FaRegHeart } from 'react-icons/fa'
  

const Componenttwoem = () => {
    const [like, setLike] = useState([]);
  return (
    <div className=' py-[5px] mt-2 ml-2 mr-2 rounded-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                

                <div className='flex arabic'>
         
                    <img className='w-[50%] mr-1 mt-1' src={villa} alt="car" />
                  
                  <div className='w-[50%]'>
                    <p className='text-[#424242] font-bold text-[0.8rem] arabic pr-1 mb-3 pt-2'>اسم الشركة</p>
                    <div>
                        <p className='text-[0.6rem] text-[#5E5D5D] font-bold arabic mr-2'>رقم الجوال / رقم الهاتف الثابت</p>
                        <p className='text-[0.6rem] text-[#5E5D5D] font-bold arabic mr-2'>الموقع الإلكتروني / البريد الإلكتروني</p>
                    </div>
                    <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[93%] mt-[0.2rem] mb-[0.2rem]'></div>
                    </div>
                    <div>
                      <div className='relative'>
                        <div className='absolute top-1 left-1.5 border rounded-full p-[0.2rem]'>
                        <p onClick={() => like.includes(1) ? setLike(like.filter(item => item !== 1)) : setLike(prev => [...prev , 1])}>
                          {like.includes(1) && <FaHeart style={{color: 'red'}} className='text-gray-300 cursor-pointer text-[1rem]'/>}
                          {!like.includes(1) && <FaRegHeart className=' text-gray-300 cursor-pointer text-[1rem]' />}
                        </p>
                        </div>
                        <div className='flex text-[#5E5D5D] arabic'>
                          <img className='w-[0.55rem] mr-2 ml-1' src={time} alt="time" />
                          <p className='text-[0.65rem] font-bold '>اليوم</p>
                          <p className='text-[0.65rem] font-bold mr-1'>09.50</p>
                        </div>
                        <div className='flex text-[#5E5D5D] arabic'>
                          <img className='w-[0.5rem] mr-2 ml-1' src={location} alt="location" />
                          <p className='text-[0.6rem] font-bold pt-1'>دمشق , الميدان , المنصور</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
                
        </div>
  )
}

export default Componenttwoem
