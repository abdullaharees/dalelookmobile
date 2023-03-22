import {React, useState} from 'react'
import funnel from "../pictures/funnel.svg"
import check from "../pictures/check.svg"
import gridm from "../pictures/gridm.svg"
import sortm from "../pictures/sortm.svg"
import Gridrop from './Gridropem'
import Sort from './Sortem'


import {MdKeyboardArrowLeft} from 'react-icons/md'

const Filterswipeem = () => {
const [nav, setNav] = useState(false)
  return (
    <div>
      <div onClick={() => setNav(!nav)} 
              className='flex flex-col justify-center items-center mt-2 mr-[2rem] ml-[2.5rem]'>
                <img className='w-[1.1rem] py-1' src={funnel} alt="Company Logo" />
                <p className='text-[white] text-[0.6rem] '>فلترة</p> 
              </div>

              {nav ? <div 
                    onClick={() => setNav(!nav)} 
                    className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
                    
              <div className={nav ? 'flex flex-col fixed top-0 right-0 w-[19rem] h-full bg-white z-30 duration-300' : 'fixed top-0 right-[-100%] w-[350px] h-screen bg-white z-10 duration-300'}>

              <div className='arabic'>
                <div className='mt-10 mr-5 text-sm'>
                  <p className='text-[#0092A0] text-sm'>وسائل النقل</p>
                </div>

                <div className='flex justify-center'>
                      <div className='mt-1 border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.3rem]'></div>
                  <p className='text-sm mt-1.5 ml-[5rem]'>جميع إعلانات التصنيف</p>
                  <div className='flex mt-0.5'>
                    <p className='text-[0.65rem] mt-2'>12.358 إعلان</p>
                    <MdKeyboardArrowLeft className='text-[#333333] mt-2' size={15}/>
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.3rem]'></div>
                  <p className='text-sm mt-1.5 ml-[10.4rem]'>المدينة</p>
                  <div className='flex'>
                    <p className='text-[0.65rem] mt-2'>12.358 إعلان</p>
                    <MdKeyboardArrowLeft className='text-[#333333] mt-2' size={15}/>
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.3rem]'></div>
                  <p className='text-sm mt-1.5 ml-[10.4rem]'>الماركة</p>
                  <div className='flex'>
                    <p className='text-[0.65rem] mt-2'>12.358 إعلان</p>
                    <MdKeyboardArrowLeft className='text-[#333333] mt-2' size={15}/>
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.3rem]'></div>
                  <p className='text-sm mt-1.5 ml-[10.4rem]'>السعر</p>
                  <div className='flex'>
                    <p className='text-[0.65rem] mt-2'>12.358 إعلان</p>
                    <MdKeyboardArrowLeft className='text-[#333333] mt-2' size={15}/>
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.3rem]'></div>
                  <p className='text-sm mt-1.5 ml-[8.2rem]'>سنة التصنيع</p> 
                  <div className='flex'>
                    <p className='text-[0.65rem] mt-2'>12.358 إعلان</p>
                    <MdKeyboardArrowLeft className='text-[#333333] mt-2' size={15}/>
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.3rem]'></div>
                  <p className='text-sm mt-1.5 ml-[10.4rem]'>الناقل</p>
                  <div className='flex'>
                    <p className='text-[0.65rem] mt-2'>12.358 إعلان</p>
                    <MdKeyboardArrowLeft className='text-[#333333] mt-2' size={15}/>
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.3rem]'></div>
                  <p className='text-sm mt-1.5 ml-[10.4rem]'>الوقود</p>
                  <div className='flex'>
                    <p className='text-[0.65rem] mt-2'>12.358 إعلان</p>
                    <MdKeyboardArrowLeft className='text-[#333333] mt-2' size={15}/>
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.3rem]'></div>
                  <p className='text-sm mt-1.5 ml-[7.2rem]'>التصنيف الفرعي</p>
                  <div className='flex'>
                    <p className='text-[0.65rem] mt-2'>12.358 إعلان</p>
                    <MdKeyboardArrowLeft className='text-[#333333] mt-2' size={15}/>
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>
                
              </div>

                <div onClick={() => setNav(!nav)}  className='flex justify-center mt-[10rem] absolute bottom-24 self-center w-full'>
                    <text className='mt-1 py-2 px-6 text-xs font-bold bg-[#0092A0] rounded-full text-white text-center cursor-pointer '>موافق
                    </text>
                </div>
                
              </div>
    </div>
  )
}

export default Filterswipeem
