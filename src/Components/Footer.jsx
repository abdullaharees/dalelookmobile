import React from 'react'

import homepgfoot from "./pictures/homepgfoot.svg"
import addfoot from "./pictures/addfoot.svg"
import browseads from "./pictures/browseads.svg"
import userfoot from "./pictures/userfoot.svg"
import Logoonly from "./pictures/logoonly.svg"
import navbarmobile from "./pictures/navbarmobile.svg"

import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='relative '>
        <div className='fixed w-full z-[10005] bottom-0 drop-shadow-xl'>
            <img className='w-full' src={navbarmobile} alt="navbarmobile" />
        </div> 
        <div className='z-[10006] bg-[#F7F7F7] h-[4rem]  flex justify-between fixed bottom-0 w-full'>
            <Link to='/'>
                <div className='ml-2 mt-1'>
                    <img className=' ml-1' src={homepgfoot} alt="homepgfoot" />
                    <p className='text-[0.6rem] mt-0.5'>الرئيسية</p>
                </div>
            </Link>
            
            <Link to='/category'>
                <div className=' mt-1'>
                    <img className='' src={browseads} alt="browseads" />
                    <p className='text-[0.6rem] mt-0.5'>البحث</p>
                </div>
            </Link>

                <div className='relative'>
                    <Link to='/proceed'>
                        <div className='absolute -right-[28px] bottom-[25%]'>
                            <img className='min-w-[55px]' src={addfoot} alt="addfoot" />
                            <p className='text-[0.6rem] text-center mt-0.5'>أضف إعلانك</p>    
                        </div>
                    </Link>
                </div>

            <Link to='/profile'>
                <div className=' mt-1'>
                    <img className=' ml-0.5' src={userfoot} alt="userfoot" />
                    <p className='text-[0.6rem] mt-0.5'>حسابي</p>
                </div>
            </Link>

            <Link to='/homeem'>
                <div className='mr-2 mt-1'>
                    <img className="mr-2 w-[1.6rem]" src={Logoonly} alt="Company Logo two" />
                    <p className='text-[0.6rem] mt-0.5'>الدليل</p>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Footer
