import React from 'react'

import taskm from "../pictures/taskm.svg"
import ppm from "../pictures/ppm.svg"
import plusprofm from "../pictures/plusprofm.svg"

import Addpicm from "./Addpicm"

const Taskbarprof = () => {
  return (
    <div>
        <div>
            <img className='relative w-[25rem] mr-2 cursor-pointer fill-black' src={taskm} alt="taskm" />
            {/* <img className="absolute top-[3.5rem] right-[8.7rem] w-[6.5rem]" src={ppm} alt="ppm" /> */}
            {/* <img className="absolute top-[8.2rem] right-[9rem] w-[1.2rem]" src={plusprofm} alt="plusprofm" />  */}
            <Addpicm />   
            <p className="font-bold flex absolute top-[10.4rem] right-[9.1rem] text-[1.1rem] text-white" >اسم </p>
            <p className="font-bold flex absolute top-[10.45rem] right-[11.7rem] text-[1.1rem] text-white" >الحساب </p>
        </div>
          
    </div>
  )
}

export default Taskbarprof
