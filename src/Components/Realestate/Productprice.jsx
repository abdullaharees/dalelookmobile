import React from 'react'

import imgpath from "../pictures/imgpath.svg"
import timew from "../pictures/timew.svg"


const Productprice = ({target, setTarget}) => {
  return (
    <div className='bg-[#0092A0] h-[3.8rem] '>
        <div className='flex justify-between'>
            <div className='flex mt-[0.3rem]'>
                <img className='w-[0.7rem]  ml-3' src={imgpath} alt="imgpath" />
                <p className='text-white ml-1 text-[0.7rem] mt-1'>{target+1}</p>
            </div>
            <div className='flex mt-[0.3rem]'>
                <p className='text-[1rem] text-[white] arabic mr-2 font-bold'>188,000 <span className='text-[0.8rem]'>د.إ</span></p>
            </div>
        </div>

        <div className='flex justify-center'>
            <div className='content-between border-b-[2.3px] w-[95%] mb-[0.1rem]'></div>
        </div>     

        <div className='flex justify-between'>
            <div className='flex arabic mt-[0.rem]'>
                <img className='w-[0.6rem] mt-[0.1rem] mr-2 ml-1' src={timew} alt="time" />
                <p className='text-white ml-2 text-[0.7rem] mt-[0.3rem]'>11/3/2020</p>
                <p className='text-white ml-3 text-[0.7rem] mt-[0.3rem]'>17:41</p>
            </div>
            <div className='flex mt-[0.rem]'>
                <p className='text-[1rem] text-[white] arabic mr-2 '>عنوان الإعلان</p>
            </div>
        </div>   
    </div>
  )
}

export default Productprice
