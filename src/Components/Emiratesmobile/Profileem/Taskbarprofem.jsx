import React, { useState } from 'react'

import taskm from "../pictures/taskm.svg"
import ppm from "../pictures/ppm.svg"
import plusprofm from "../pictures/plusprofm.svg"
import infoprofm from "../pictures/infoprofm.svg"
import adsprofm from "../pictures/adsprofm.svg"
import heartprofm from "../pictures/heartprofm.svg"
import activerect from "../pictures/activerect.svg"

import Addpicm from "./Addpicmem"

const Taskbarprofem = ({layout, setLayout}) => {

  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[100%] relative top-[]'>
            {/* <img className=' w-[100%] cursor-pointer' src={taskm} alt="taskm" /> */}
            <div className='w-full bg-[#FAD606] h-[10rem] rounded-b-[3rem]'></div>
           <div className='absolute top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
            <Addpicm />   
            <p className="font-bold flex absolute  text-[1.1rem] text-[#333333]" >اسم الحساب</p>
           </div>

           

          </div>
        </div>
          
    </div>
  )
}

export default Taskbarprofem

      