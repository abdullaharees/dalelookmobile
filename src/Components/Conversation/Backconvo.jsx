import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import lightbulb from "../pictures/lightbulb.svg"
import phoneconvo from "../pictures/phoneconvo.svg"
import deleteconvo from "../pictures/deleteconvo.svg"


const Backconvo = () => {
  return (
    <div className='bg-[#0092A0] h-[4.8rem] shadow-md'>
        <div className='flex justify-between mb-1'>
            <div className='flex'>
              <Link to='/'>
                <AiOutlineArrowLeft className='text-white font-bold text-[1.3rem] mt-2.5 ml-2'/>
              </Link>
              <img className="w-[0.7rem] mr-1.5 ml-5 mt-2" src={lightbulb} alt="convow" />
            </div>
            <div>
                <p className='text-[white] text-center text-[0.9rem] mt-2.5'>اسم المستلم</p>
            </div>
            <div className='flex'>
              <img className="w-[0.8rem] mr-2 ml-3 mt-2" src={phoneconvo} alt="phoneconvo" />
              <img className="w-[0.8rem] mr-3 ml-3 mt-2" src={deleteconvo} alt="deleteconvo" />
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='border-b-3 content-between border-b-[1.5px] w-[93%] mt-[0.3rem] mb-[0.1rem]'></div>
        </div>
        <div className=' flex justify-between'>
            <div className='flex'>
                <MdKeyboardArrowLeft className='text-[white] ml-2 mt-2' size={15}/>
            </div>
            <p className='text-xs text-[white] mt-2 mr-4'>عنوان الإعلان  </p>    
        </div>
    </div>
  )
}

export default Backconvo
