import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

import editblue from "../pictures/editblue.svg"

const Backprof = () => {
  return (
    <div className='bg-[#0092A0] h-[2.6rem] flex justify-between'>
            <div className='flex'>
              <Link to='/'>
                <AiOutlineArrowLeft className='text-white text-[1.3rem] mt-3 ml-2'/>
              </Link>
              <p className='text-white text-sm mt-3 ml-2'>الرئيسية</p>
            </div>
            <div className='z-10 mt-3.5 flex '>
                <p className='text-[0.7rem] mr-2 text-white '>01/07/2021</p>
                <p className='text-center mr-0.5 text-[0.7rem] text-white '>تاريخ  </p>
                <p className='text-center text-[0.7rem] text-white '> الإنتساب </p>
            </div>
            <div>
                <button className='cursor-pointer bg-[white] w-[3.5rem] h-[23px] mr-2 mt-3 rounded-md flex justify-center items-center arabic'>
                    <p className='text-[0.6rem]  text-right font mb-2 font-bold  mt-2 text-[#0092A0]'>تعديل</p>
                    <img className='w-3 mr-2 xl:mr-2 cursor-pointer fill-black' src={editblue} alt="editadbl" />
                </button>  
            </div>
    </div>
  )
}

export default Backprof
