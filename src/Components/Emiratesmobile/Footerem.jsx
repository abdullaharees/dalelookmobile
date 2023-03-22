import React from 'react'

import homepgfoot from "./pictures/homepgfoot.svg"
import addfootem from "./pictures/addfootem.svg"
import browseads from "./pictures/browseads.svg"
import userfoot from "./pictures/userfoot.svg"
import logoonlyem from "./pictures/logoonlyem.svg"
import navbarmobilem from "./pictures/navbarmobilem.svg"

import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'


const Footerem = () => {
  return (
    <div className='relative '>
        <div className='fixed w-full z-[999] bottom-0 drop-shadow-xl'>
            <img className='w-full' src={navbarmobilem} alt="navbarmobilem" />
        </div> 
        <div className='z-[1000] bg-[#FFCC00] h-[4rem]  flex justify-between fixed bottom-0 w-full'>
            <Link to='/homeem'>
                <div className='ml-2 mt-1'>
                    <img className=' ml-1' src={homepgfoot} alt="homepgfoot" />
                    <p className='text-[0.6rem] mt-0.5'>الرئيسية</p>
                </div>
            </Link>
            
            <Link to='/categoryem'>
                <div className=' mt-1'>
                    <img className='' src={browseads} alt="browseads" />
                    <p className='text-[0.6rem] mt-0.5'>البحث</p>
                </div>
            </Link>

                <div className='relative'>
                    <Link to='/'>
                        <div className='absolute -right-[26px] bottom-[24%]'>
                            <img className='min-w-[49px]' src={addfootem} alt="addfootem" />
                            <p className='text-[0.6rem] text-center mt-0.5'>أضف إعلانك</p>    
                        </div>
                    </Link>
                </div>

            <Link to='/profileem'>
                <div className=' mt-1'>
                    <img className=' ml-0.5' src={userfoot} alt="userfoot" />
                    <p className='text-[0.6rem] mt-0.5'>حسابي</p>
                </div>
            </Link>

            <Link to='/'>
                <div className='mr-2 mt-1'>
                    <img className="mr-2 w-[1.6rem]" src={logoonlyem} alt="Company Logo two" />
                    <p className='text-[0.6rem] mt-0.5'>الدليل</p>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Footerem
