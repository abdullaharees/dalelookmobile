import React, { useEffect, useState } from 'react'

const Itemprof = ({edit, setEdit}) => {
  useEffect(()=>{
    console.log(edit)
  },[edit])
  return (
    <div className='relative w-full flex flex-col justify-center items-center mt-5'>
              <div className='mt-5 bg-white w-[95%]  h-[33px] W rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <input className='text-[0.8rem] text-right font mb-2 pr-1  font-bold  mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"العنوان"}
                disabled={true}/>
                <input className='text-[0.8rem] text-left w-[50%] pl-1 font mb-2 mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"القيمة"}
                disabled={edit === true ? false : true}/>
              </div>
              
              <div className='mt-2 bg-white w-[95%]  h-[33px] W rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <input className='text-[0.8rem] text-right font mb-2 pr-1  font-bold  mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"العنوان"}
                disabled={true}/>
                <input className='text-[0.8rem] text-left w-[50%] pl-1 font mb-2 mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"القيمة"}
                disabled={edit === true ? false : true}/>
              </div>

              <div className='mt-2 bg-white w-[95%]  h-[33px] W rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <input className='text-[0.8rem] text-right font mb-2 pr-1  font-bold  mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"العنوان"}
                disabled={edit === true ? false : true}/>
                <input className='text-[0.8rem] text-left w-[50%] pl-1 font mb-2 mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"القيمة"}
                disabled={edit === true ? false : true}/>
              </div>

              <div className='mt-2 bg-white w-[95%]  h-[33px] W rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <input className='text-[0.8rem] text-right font mb-2 pr-1  font-bold  mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"العنوان"}
                disabled={true}/>
                <input className='text-[0.8rem] text-left w-[50%] pl-1 font mb-2 mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"القيمة"}
                disabled={edit === true ? false : true}/>
              </div>

              
              <div onClick={e => setEdit(false) }  className={`flex justify-center mt-[5rem] self-center w-full ${edit === true ? 'block' : 'hidden'}`}>
                    <text className='py-2 px-6 text-xs font-bold bg-[#0092A0]  rounded-full text-white text-center cursor-pointer'>موافق
                    </text>
              </div>
              
          </div>
  )
}

export default Itemprof
