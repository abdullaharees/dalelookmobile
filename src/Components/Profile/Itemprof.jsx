import React, { useEffect, useState } from 'react'

const Itemprof = ({edit, setEdit}) => {
  useEffect(()=>{
    console.log(edit)
  },[edit])
  return (
    <div className='w-full flex flex-col justify-center items-center mt-5'>
              <div className='mt-5 bg-white w-[95%] mr-2 h-[33px] W rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <input className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"العنوان"}
                disabled={true}/>
                <input className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"القيمة"}
                disabled={edit === true ? false : true}/>
              </div>
              
              <div className='mt-2 bg-white w-[95%] mr-2 h-[33px] W rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <input className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"العنوان"}
                disabled={true}/>
                <input className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"القيمة"}
                disabled={edit === true ? false : true}/>
              </div>

              <div className='mt-2 bg-white w-[95%] mr-2 h-[33px] W rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <input className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"العنوان"}
                disabled={edit === true ? false : true}/>
                <input className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"القيمة"}
                disabled={edit === true ? false : true}/>
              </div>

              <div className='mt-2 bg-white w-[95%] mr-2 h-[33px] W rounded-md flex justify-between arabic border-[#757474] border-[0.01rem]'>
                <input className='text-[0.8rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"العنوان"}
                disabled={true}/>
                <input className='text-[0.8rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A] outline-none bg-white' placeholder={"القيمة"}
                disabled={edit === true ? false : true}/>
              </div>

              <div className={`px-2 py-1 bg-black text-white ${edit === true ? 'block' : 'hidden'}`} onClick={e => setEdit(false) }>
                ok
              </div>

              
          </div>
  )
}

export default Itemprof
