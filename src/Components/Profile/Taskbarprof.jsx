import React, { useState } from 'react'

import taskm from "../pictures/taskm.svg"
import ppm from "../pictures/ppm.svg"
import plusprofm from "../pictures/plusprofm.svg"
import infoprofm from "../pictures/infoprofm.svg"
import adsprofm from "../pictures/adsprofm.svg"
import heartprofm from "../pictures/heartprofm.svg"
import activerect from "../pictures/activerect.svg"

import Addpicm from "./Addpicm"

const Taskbarprof = ({layout, setLayout}) => {

  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[100%] relative top-[]'>
            {/* <img className=' w-[100%] cursor-pointer' src={taskm} alt="taskm" /> */}
            <div className='w-full bg-[#0092A0] h-[10rem] rounded-b-[3rem]'></div>
           <div className='absolute top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
            <Addpicm />   
            <p className="font-bold flex absolute  text-[1.1rem] text-white" >اسم الحساب</p>
           </div>

           <div className='flex justify-between absolute top-[88%] left-[50%] -translate-x-1/2 bg-[#DADEE2] w-[8.5rem] h-[2.5rem] rounded-lg'>
        <div 
        onClick={(e) => {
          e.preventDefault();
          setLayout(1);
          }} 
          className={`ml-1 ${(layout === 1)? 'bg-white px-1 rounded-lg my-[0.1rem] mt-[0.1rem] ' : 'bg-[#DADEE2] rounded-lg'}`}>
          <img className='ml-2.5 mt-2 w-[0.8rem]' src={infoprofm} alt="infoprofm" />
          <p className='text-[0.6rem]'>التفاصيل</p>
          {/* <img className='z-10 absolute -top-[0.2rem] ml-2.5 mt-2 w-[2.4rem]' src={activerect} alt="activerect" /> */}
        </div>
          


        <div onClick={(e) => {
          e.preventDefault();
          setLayout(2);
          }}
          className={` ${(layout === 2)? 'bg-white px-1 rounded-lg my-[0.1rem] mt-[0.1rem] mr-[0.1rem]' : 'bg-[#DADEE2] rounded-lg'}`}>
          <img className='ml-2 mt-2 w-[0.89rem]' src={adsprofm} alt="adsprofm" />
          <p className='mr-1 text-[0.6rem]'>إعلاناتي</p>
        </div>



        <div onClick={(e) => {
          e.preventDefault();
          setLayout(3);
          }} 
          className={`mr-1 mt-[0.08rem] ${(layout === 3)? 'bg-white px-1 rounded-lg my-[0.1rem] mt-[0.1rem] mr-[0.1rem]' : 'bg-[#DADEE2] rounded-lg'}`}>
          <img className='ml-2.5 mt-2 w-[0.8rem]' src={heartprofm} alt="heartprofm" />
          <p className='text-[0.6rem]'>المفضلة</p>
        </div>
            </div>

          </div>
        </div>
          
    </div>
  )
}

export default Taskbarprof

      