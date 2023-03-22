         
import React, {useState} from 'react'
import bmw from "../pictures/bmw.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"


import { FaHeart, FaRegHeart } from 'react-icons/fa'
  

const Componentfourem = () => {
    const [like, setLike] = useState([]);
  return (
    <div className=' max-w-[23rem] w-[97%] mt-2 rounded-sm border-[2px] '>
                

                <div className='flex arabic'>
         
                    <img className='w-[9.2rem] mr-1 mt-1' src={bmw} alt="bmw" />
                  
                  <div className='w-full'>
                    <p className='text-[#0092A0] font-bold text-[0.8rem] arabic pr-1 mb-3 pt-1'>  العنوان الرئيسي للإعلان</p>
                    <div className='mt-10'>
                        <p className='text-[1.2rem] text-[#333333] arabic mr-2 font-bold'>600,000 <span className='text-[0.9rem]'>د.إ</span></p>
                        
                    </div>
                    
                    
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] mt-[0.2rem] '></div>
                </div>

                <div className='flex justify-end '>
                  <div className='mb-[0.1rem] arabic mr-3 w-[5rem] '>
                    <p className='text-[0.5rem] mb-[0.1rem]'>المشاركات</p>
                    <p className='text-[0.9rem] font-bold'>2</p>
                  </div>

                  <div className='border-r-[2px]  h-[2rem]'></div>

                  <div className='mb-[0.1rem] arabic mr-3 w-[5rem] '>
                    <p className='text-[0.5rem] '>المشاركات</p>
                    <p className='text-[0.9rem] font-bold'>2</p>
                  </div>

                  <div className='border-r-[2px] h-[2rem]'></div>

                  <div className='mb-[0.1rem] w-[5rem] arabic mr-3'>
                    <p className='text-[0.5rem]'>المشاركات</p>
                    <p className='text-[0.9rem] font-bold'>2</p>
                  </div>
                </div>
        </div>
  )
}

export default Componentfourem
