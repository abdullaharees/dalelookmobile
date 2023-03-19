import React from 'react'

import homepgfoot from "./pictures/homepgfoot.svg"
import addfoot from "./pictures/addfoot.svg"
import browseads from "./pictures/browseads.svg"
import userfoot from "./pictures/userfoot.svg"
import Logoonly from "./pictures/logoonly.svg"


const Footer = () => {
  return (
    <div className='bg-[#F7F7F7] h-[3rem] mt-5 flex justify-between border-[1.5px] fixed bottom-0 w-full'>
        <div className='ml-2 mt-1.5'>
            <img className='w-[1.5rem] ml-1' src={homepgfoot} alt="homepgfoot" />
            <p className='text-[0.6rem] mt-0.5'>الرئيسية</p>
        </div>

        <div className=' mt-1.5'>
            <img className='w-[1.45rem]' src={browseads} alt="browseads" />
            <p className='text-[0.6rem] mt-0.5'>البحث</p>
        </div>

        <div className=' mt-1.5'>
            <img className='w-[1.5rem] ml-3' src={addfoot} alt="addfoot" />
            <p className='text-[0.6rem] mt-0.5'>أضف إعلانك</p>
        </div>

        <div className=' mt-1.5'>
            <img className='w-[1.5rem] ml-0.5' src={userfoot} alt="userfoot" />
            <p className='text-[0.6rem] mt-0.5'>حسابي</p>
        </div>

        <div className='mr-2 mt-1.5'>
            <img className="w-[1.5rem] mr-2" src={Logoonly} alt="Company Logo two" />
            <p className='text-[0.6rem] mt-0.5'>الدليل</p>
        </div>
    </div>
  )
}

export default Footer
