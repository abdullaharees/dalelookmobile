import React from 'react'

import Componentfourem from './Componentfourem'

import editad from "../pictures/editad.svg"
import announce from "../pictures/announce.svg"
import deletew from "../pictures/deletew.svg"


const Myadsmem = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[95%]'>
      <Componentfourem className='' />
      <div className='flex justify-center items-center arabic mt-1'>
          <div className='cursor-pointer bg-[#0092A0] py-[0.5rem] flex justify-center rounded-md mb-2 ml-1'>
            <p className='text-white text-[0.7rem] font-bold pr-2'>تعديل الإعلان</p>
            <img className='w-[0.8rem] mr-2 ml-2' src={editad} alt="editad" />  
          </div>

          <div className='cursor-pointer bg-[#0092A0] py-[0.5rem] flex justify-center rounded-md mb-2 ml-1'>
            <p className='text-white text-[0.7rem] font-bold pr-2'> ترويج الإعلان</p>
            <img className='w-[0.8rem] mr-2 ml-2' src={announce} alt="announce" />  
          </div>
          
          <div className='cursor-pointer bg-[#E30109] py-[0.5rem] flex justify-center rounded-md mb-2'>
            <p className='text-white text-[0.7rem] font-bold pr-2'> حذف الإعلان</p>
            <img className='w-[0.7rem] mr-2 ml-2' src={deletew} alt="deletew" />  
          </div>
      </div>

    <Componentfourem className='' />
    <div className='flex justify-center items-center arabic mt-1'>
          <div className='cursor-pointer bg-[#0092A0] py-[0.5rem] flex justify-center rounded-md mb-2 ml-1'>
            <p className='text-white text-[0.7rem] font-bold pr-2'>تعديل الإعلان</p>
            <img className='w-[0.8rem] mr-2 ml-2' src={editad} alt="editad" />  
          </div>

          <div className='cursor-pointer bg-[#0092A0] py-[0.5rem] flex justify-center rounded-md mb-2 ml-1'>
            <p className='text-white text-[0.7rem] font-bold pr-2'> ترويج الإعلان</p>
            <img className='w-[0.8rem] mr-2 ml-2' src={announce} alt="announce" />  
          </div>
          
          <div className='cursor-pointer bg-[#E30109] py-[0.5rem] flex justify-center rounded-md mb-2'>
            <p className='text-white text-[0.7rem] font-bold pr-2'> حذف الإعلان</p>
            <img className='w-[0.7rem] mr-2 ml-2' src={deletew} alt="deletew" />  
          </div>
      </div>
      

      

    </div>
  )
}

export default Myadsmem
