import React from 'react'
import Backconvo from './Backconvo'
import {AiOutlineSend} from 'react-icons/ai'
import attachment from "../pictures/attachment.svg"
import {ReactComponent as Msgbg} from "../pictures/msgbg.svg"

const Mainconvo = () => {
  return (
    <div className='overflow-y-hidden h-[100vh] w-full justify-center overflow-hidden bg-[#EBF1FF]'>
      <Backconvo />
      <div className='flex justify-center fixed bottom-2 w-full'>
        <div className=' px-2.5 h-[38px] flex justify-center items-center self-center ml-2 bg-[#0092A0] rounded-md'>
          <AiOutlineSend className='text-white font-bold text-[2.2rem] w-[20px]  '/>
        </div>
        <div className='flex h-[38px] bg-white w-full ml-2 mr-2 justify-between rounded-md'>
          <img className="w-[1.2rem] ml-2 " src={attachment} alt="attachment" />
          <input className='w-full ml-2 mr-2 text-xs text-right outline-none' placeholder='اكتب
الرد'/>
        </div>
      </div>

      <Msgbg className="w-full h-full " />
      
    </div>
  )
}

export default Mainconvo
