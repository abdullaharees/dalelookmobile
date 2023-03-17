import React from 'react'
import Backconvo from './Backconvo'
import {AiOutlineSend} from 'react-icons/ai'
import attachment from "../pictures/attachment.svg"

const Mainconvo = () => {
  return (
    <div className='bg-[#EBF1FF] h-full w-full'>
      <Backconvo />
      <div className='mt-[34rem] mb-5 flex'>
        <div className='mb-2'>
          <AiOutlineSend className='text-white font-bold text-[2rem] rounded-sm mb-2 ml-2 px-2 py-2 bg-[#0092A0]'/>
        </div>
        <div className='flex bg-white w-[20rem] ml-2 h-[2rem] justify-between rounded-sm'>
          <img className="w-[1rem] mr-1.5 ml-2 " src={attachment} alt="attachment" />
          <input className=' w-[20rem] ml-2 h-[2rem]mt-2 mr-2 text-xs text-right outline-none' placeholder='اكتب
الرد'/>
        </div>
      </div>

      
    </div>
  )
}

export default Mainconvo
