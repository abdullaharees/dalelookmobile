import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

import editblueem from "../pictures/editblueem.svg"

const Backproductem = ({edit, setEdit}) => {
  return (
    <div className='bg-[#FAD606] h-[2.6rem] flex justify-between'>
            <div className='flex'>
              <Link to='/homeem'>
                <AiOutlineArrowLeft className='text-[#333333] text-[1.3rem] mt-3 ml-2'/>
              </Link>
              <p className='text-[#333333] text-sm mt-3 ml-2'>الرئيسية</p>
            </div>
            <div className='z-10 mt-3.5 flex '>
                <p className='text-[0.7rem] mr-2 text-[#333333] '>01/07/2021</p>
                <p className='text-center mr-0.5 text-[0.7rem] text-[#333333] '> الإنتساب </p>
                <p className='text-center  text-[0.7rem] text-[#333333] '>تاريخ  </p>
            </div>
            <div onClick={e => setEdit(true)}>
                <button  className='cursor-pointer bg-[#333333] w-[3.5rem] h-[23px] mr-2 mt-3 rounded-md flex justify-center items-center arabic'>
                    <p className='text-[0.6rem]  text-right font mb-2 font-bold  mt-2 text-[white]'>تعديل</p>
                    <img className='w-3 mr-2 xl:mr-2 cursor-pointer fill-black' src={editblueem} alt="editadbl" />
                </button>  
            </div>
    </div>
  )
}

export default Backproductem
