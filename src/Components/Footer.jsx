import React from 'react'

import homepgfoot from "./pictures/homepgfoot.svg"
import addfoot from "./pictures/addfoot.svg"
import browseads from "./pictures/browseads.svg"
import userfoot from "./pictures/userfoot.svg"
import Logoonly from "./pictures/logoonly.svg"
import navbarmobile from "./pictures/navbarmobile.svg"


const Footer = () => {
  return (
    <div className='relative '>
        <div className='fixed w-full z-[999] bottom-0 drop-shadow-xl'>
            <img className='w-full' src={navbarmobile} alt="navbarmobile" />
        </div> 
        <div className='z-[1000] bg-[#F7F7F7] h-[4rem]  flex justify-between fixed bottom-0 w-full'>
            <div className='ml-2 mt-1'>
                <img className=' ml-1' src={homepgfoot} alt="homepgfoot" />
                <p className='text-[0.6rem] mt-0.5'>الرئيسية</p>
            </div>

            <div className=' mt-1'>
                <img className='' src={browseads} alt="browseads" />
                <p className='text-[0.6rem] mt-0.5'>البحث</p>
            </div>

            <div className='relative'>
                <div className='absolute -right-[26px] bottom-[24%]'>
                    <img className='min-w-[49px]' src={addfoot} alt="addfoot" />
                    <p className='text-[0.6rem] text-center mt-0.5'>أضف إعلانك</p>    
                </div>
            </div>

            <div className=' mt-1'>
                <img className=' ml-0.5' src={userfoot} alt="userfoot" />
                <p className='text-[0.6rem] mt-0.5'>حسابي</p>
            </div>

            <div className='mr-2 mt-1'>
                <img className="mr-2 w-[1.6rem]" src={Logoonly} alt="Company Logo two" />
                <p className='text-[0.6rem] mt-0.5'>الدليل</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
