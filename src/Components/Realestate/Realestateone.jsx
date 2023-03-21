import React, { useRef, useState, useEffect } from "react";
import flag from "../pictures/flag.svg"
import sharem from "../pictures/sharem.svg"
import phonem from "../pictures/phonem.svg"
import whatsappm from "../pictures/whatsappm.svg"
import converwhitem from "../pictures/converwhitem.svg"



import Estateslider from "./Estateslider"
import Profilesharediv from "./Profilesharediv"
import Productprice from "./Productprice"
import Backprod from "./Backprod"
import Footer from "../Footer";


const Realestateone = () => {
  const [target, setTarget] = useState(0);

  return (
    <div>
        <Backprod />
        <Estateslider target={target} setTarget={setTarget}  />
        <Profilesharediv />
        <Productprice target={target} setTarget={setTarget} />
        <div className='arabic justify-center items-center'>
          <p className='text-[#0092A0] text-center font-bold mt-2'> تفاصيل</p>
          <div className='flex flex-col justify-center items-center'>
              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.9rem] text-right font mb-2 mr-2 font-bold mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.9rem] text-left font mb-2 ml-2 mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.9rem] text-right font mb-2 mr-2 font-bold mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.9rem] text-left font mb-2 ml-2 mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.9rem] text-right font mb-2 mr-2 font-bold mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.9rem] text-left font mb-2 ml-2 mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.9rem] text-right font mb-2 mr-2 font-bold mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.9rem] text-left font mb-2 ml-2 mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.9rem] text-right font mb-2 mr-2 font-bold mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.9rem] text-left font mb-2 ml-2 mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.9rem] text-right font mb-2 mr-2 font-bold mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.9rem] text-left font mb-2 ml-2 mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>

              <div className=' bg-white w-[95%] mr-2 h-[30px] mt-2  rounded-md flex justify-between arabic shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                <p className='text-[0.9rem] text-right font mb-2 mr-2 font-bold mt-1 text-[#5B5A5A]'>المعلومات الأساسية</p>
                <p className='text-[0.9rem] text-left font mb-2 ml-2 mt-1 text-[#5B5A5A]'>القيمة</p>
              </div>
          </div>

          <p className='text-[#0092A0] text-center font-bold mt-4'> الشرح</p>
          
          <div className='flex flex-col w-full justify-center items-center arabic'>
            <div className='read-only text-[0.6rem]  mt-2 w-[95%] overflow-y-scroll resize-none outline-none pt-2 h-[11rem] px-3 text-xs  flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] rounded-md bg-white'
              type="text"
              rows="4"
              placeholder='القيمة القيمة القيمة القيمة القيمة القيمة القيمة القيمة'>
            </ div>
          </div> 
          
          <div className='bg-white mt-1 h-5'></div>

        </div>
        <div className='flex items-center justify-center w-full mt-1 mb-5 arabic fixed bottom-0'>
                  <button className=' bg-[#CA0000] w-[30%]  h-[27px] mt-8 ml-2 rounded-md flex justify-center items-center arabic cursor-pointer'>
                      <p className='text-[0.65rem]  text-right font mb-2 font-bold  mt-2 text-white'>محادثة</p>
                      <img className='w-3 mr-2  ml-1  fill-black' src={converwhitem} alt="converwhitem" />
                  </button>
                  
                  <button className=' bg-[#2FB944] w-[30%]  h-[27px] mt-8 ml-2 rounded-md flex justify-center  items-center arabic'>
                      <p className='text-[0.65rem] text-right font mb-2 font-bold  mt-2 text-white'> واتس آب</p>
                      <img className='w-3.5 mr-2  fill-black' src={whatsappm} alt="whatsappem" />
                  </button>

                  <button className=' bg-[#0092A0] w-[30%]  h-[27px]  mt-8  rounded-md flex justify-center items-center arabic '>
                      <p className='text-[0.65rem]  text-right font mb-2 font-bold  mt-2 text-white'>إتصال</p>
                      <img className='w-3  mr-2  fill-black' src={phonem} alt="phonem" />
                  </button>
        </div>

    </div>
  )
}

export default Realestateone
