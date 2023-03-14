import React from 'react'



import Estateslider from "./Estateslider"
import Profilesharediv from "./Profilesharediv"
import Productprice from "./Productprice"


const Realestateone = () => {
  return (
    <div>
        <Estateslider />
        <Profilesharediv />
        <Productprice />
        <div className='arabic justify-center items-center'>
          <p className='text-[#0092A0] text-center font-bold mt-2'> تفاصيل</p>
          <div className='flex flex-col justify-center items-center'>
              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.6rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.6rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.6rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.6rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.6rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.6rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.6rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.6rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.6rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.6rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.6rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.6rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.6rem] text-right font mb-2 mr-2 font-bold  mt-2 xl:mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.6rem] text-left font mb-2 ml-2 mt-2 xl:mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>
          </div>
          <p className='text-[#0092A0] text-center font-bold mt-4'> الشرح</p>
          <div className='flex flex-col w-full justify-center items-center arabic'>
            <textarea className='text-[0.6rem] mb-2 mt-2 w-[95%] overflow-y-scroll resize-none outline-none pt-2 h-[11rem] px-3 text-xs  flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] rounded-md bg-white'
              type="text"
              rows="4"
              placeholder='القيمة القيمة القيمة القيمة القيمة القيمة القيمة القيمة'>
            </ textarea>
            </div>
        </div>
    </div>
  )
}

export default Realestateone
