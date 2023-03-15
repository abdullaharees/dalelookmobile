import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

import editblue from "../pictures/editblue.svg"

const Backprof = () => {
  return (
    <div className='bg-[#0092A0] h-[2.6rem]'>
        <div className='flex'>
            <div className='flex'>
              <Link to='/'>
                <AiOutlineArrowLeft className='text-white text-[1.5rem] mt-2 ml-2'/>
              </Link>
              <p className='text-white mt-2 ml-2'>الرئيسية</p>
            </div>
            <div>
                <p className='flex items-center text-center text-[0.5rem] text-white ml-[3rem] mt-6'>تاريخ الإنتساب 01/07/2021</p>
            </div>
            <div>
                <button className='cursor-pointer bg-[white] w-[3.5rem] h-[20px] ml-[5rem] mt-3 rounded-md flex justify-center items-center arabic'>
                    <p className='text-[0.6rem]  text-right font mb-2 font-bold  mt-2 text-[#0092A0]'>تعديل</p>
                    <img className='w-3 mr-2 xl:mr-2 cursor-pointer fill-black' src={editblue} alt="editadbl" />
                </button>  
            </div>
        </div>
    </div>
  )
}

export default Backprof
