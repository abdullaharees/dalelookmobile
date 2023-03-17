         
import React, {useState} from 'react'
import villa from "../pictures/villa.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"


import { FaHeart, FaRegHeart } from 'react-icons/fa'
  

const Componentconvo = () => {
    const [like, setLike] = useState([]);
  return (
    <div className=' h-[5.2rem] w-[22rem] mt-2 ml-3 mr-2 rounded-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                

                <div className='flex '>
         
                    <img className='w-[7rem] ml-1 mr-1' src={villa} alt="car" />
                  
                  <div className='w-full'>
                    <p className='text-[#0092A0] font-bold text-[0.8rem] arabic pr-3 mb-1 pt-1'>عنوان الإعلان</p>
                    
                    <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[93%] mt-[0.1rem] mb-[0.1rem]'></div>
                    </div>
                    <div>
                      <div className='relative'>
                        
                        <div className='flex text-[#5E5D5D] arabic mr-3'>
                          <p className='text-[0.65rem] '>نص الرسالة نص الرسالة نص الرسالة نص الرسالة
نص الرسالة نص الرسالة نص الرسالة نص الرسالة</p>
                        </div>
                        <div className='flex text-[#5E5D5D] arabic mr-3'>
                          <p className='text-[0.65rem] pt-1'>22:22 - 2020/01/01</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
                
        </div>
  )
}

export default Componentconvo
