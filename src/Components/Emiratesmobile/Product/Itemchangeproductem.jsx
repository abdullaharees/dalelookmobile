import React, {useState} from 'react'

import Favproductem from './Favproductem'
import Itemproductem from './Itemproductem'
import Myadsproductem from './Myadsproductem'
import phonem from "../pictures/phonem.svg"
import whatsappm from "../pictures/whatsappm.svg"
import converwhitem from "../pictures/converwhitem.svg"

const Itemchangeproductem = ({edit, setEdit, layout }) => {
  return (
    <div className='flex justify-center pt-3'>
      

      { layout === 1 ? (<>
        <Itemproductem edit={edit} setEdit={setEdit} className='w-full' />
      </>) :

        layout === 2 ? (<>
          <Myadsproductem className='w-full' />
        </>) :
      
       layout === 3 ? (<>
      <Favproductem />
      </>
      ): null}

    <div className='flex items-center justify-center w-full mt-1 mb-5 arabic fixed bottom-20'>
                  <button className=' bg-[#CA0000] w-[30%]  h-[27px] mt-8 ml-2 rounded-md flex justify-center items-center arabic cursor-pointer'>
                      <p className='text-[0.65rem]  text-right font mb-2 font-bold  mt-2 text-white'>محادثة</p>
                      <img className='w-3 mr-2  ml-1  fill-black' src={converwhitem} alt="converwhitem" />
                  </button>
                  
                  <button className=' bg-[#2FB944] w-[30%]  h-[27px] mt-8 ml-2 rounded-md flex justify-center  items-center arabic'>
                      <p className='text-[0.65rem] text-right font mb-2 font-bold  mt-2 text-white'> واتس آب</p>
                      <img className='w-3.5 mr-2  fill-black' src={whatsappm} alt="whatsappem" />
                  </button>

                  <button className=' bg-[#4F4386] w-[30%]  h-[27px]  mt-8  rounded-md flex justify-center items-center arabic '>
                      <p className='text-[0.65rem]  text-right font mb-2 font-bold  mt-2 text-white'>إتصال</p>
                      <img className='w-3  mr-2  fill-black' src={phonem} alt="phonem" />
                  </button>
        </div>
    </div>
  )
}

export default Itemchangeproductem
