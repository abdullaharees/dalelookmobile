import React from 'react'

import Componentfour from './Componentfour'

import editad from "../pictures/editad.svg"
import announce from "../pictures/announce.svg"
import deletew from "../pictures/deletew.svg"


const Myadsm = () => {
  return (
    <div>
      <Componentfour className='' />
      <div className='flex justify-between arabic mt-1'>
        <div className='cursor-pointer bg-[#0092A0] py-[0.5rem] flex justify-center rounded-md mb-2 mr-2'>
          <p className='text-white text-[0.7rem] font-bold mr-2'>تعديل الإعلان</p>
          <img className='w-[0.8rem] mr-2 ml-2' src={editad} alt="editad" />  
        </div>

        <div className='cursor-pointer bg-[#0092A0] py-[0.5rem] flex justify-center rounded-md mb-2'>
          <p className='text-white text-[0.7rem] font-bold mr-2'> ترويج الإعلان</p>
          <img className='w-[0.8rem] mr-2 ml-2' src={announce} alt="announce" />  
        </div>
        
        <div className='cursor-pointer bg-[#E30109] py-[0.5rem] flex justify-center rounded-md mb-2 ml-2'>
          <p className='text-white text-[0.7rem] font-bold mr-2'> حذف الإعلان</p>
          <img className='w-[0.7rem] mr-2 ml-2' src={deletew} alt="deletew" />  
        </div>
      </div>

    <div className='mt-3' >
      <Componentfour />
        <div className='flex justify-between arabic mt-1'>
          <div className='cursor-pointer bg-[#0092A0] py-[0.5rem] flex justify-center rounded-md mb-2 mr-2'>
            <p className='text-white text-[0.7rem] font-bold mr-2'>تعديل الإعلان</p>
            <img className='w-[0.8rem] mr-2 ml-2' src={editad} alt="editad" />  
          </div>

          <div className='cursor-pointer bg-[#0092A0] py-[0.5rem] flex justify-center rounded-md mb-2'>
            <p className='text-white text-[0.7rem] font-bold mr-2'> ترويج الإعلان</p>
            <img className='w-[0.8rem] mr-2 ml-2' src={announce} alt="announce" />  
          </div>
          
          <div className='cursor-pointer bg-[#E30109] py-[0.5rem] flex justify-center rounded-md mb-2 ml-2'>
            <p className='text-white text-[0.7rem] font-bold mr-2'> حذف الإعلان</p>
            <img className='w-[0.7rem] mr-2 ml-2' src={deletew} alt="deletew" />  
          </div>
        </div>
    </div>
      

      

    </div>
  )
}

export default Myadsm
