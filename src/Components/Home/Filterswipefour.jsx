import {React, useState} from 'react'
import funnel from "../pictures/funnel.svg"
import check from "../pictures/check.svg"
import gridm from "../pictures/gridm.svg"
import sortm from "../pictures/sortm.svg"
import Gridrop from './Gridrop'
import Sort from './Sort'


import {MdKeyboardArrowLeft} from 'react-icons/md'

const Filterswipefour = ({filterActive, setFilterActive}) => {
const [nav, setNav] = useState(false)
  return (
    <div>
      <div onClick={() => setNav(!nav)} 
              className='flex flex-col justify-center items-center mt-2 mr-[2rem] ml-[2.5rem]'>
                <img className='w-[1.1rem] py-1' src={funnel} alt="Company Logo" />
                <p className='text-[white] text-[0.6rem] '>فلترة</p> 
              </div>

              {(nav || filterActive === 'item4') ? <div 
                    onClick={() => {
                      setFilterActive('item1')
                      }} 
                    className='bg-black/80 fixed w-full h-screen z-[10002] top-0 left-0'></div> : ''}
                    
                    <div className={(nav || filterActive === 'item4') ? 'fixed top-0 right-0 w-[19rem] h-screen bg-white z-[10003] duration-300' : 'fixed top-0 right-[-100%] w-[350px] h-screen bg-white z-10 duration-300'}>

              <div className='arabic'>
                <div className='mt-10 mr-5 text-sm mb-1'>
                  <p className='text-[#0092A0] '>الكل</p>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.35rem]'></div>
                  <p className='text-sm mt-2 ml-[13.5rem]'>القيمة</p>
                  <div className='flex ml-3'>
                    <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.35rem]'></div>
                  <p className='text-sm mt-2 ml-[13.5rem]'>القيمة</p>
                  <div className='flex ml-3'>
                    <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.35rem]'></div>
                  <p className='text-sm mt-2 ml-[13.5rem]'>القيمة</p>
                  <div className='flex ml-3'>
                    <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.35rem]'></div>
                  <p className='text-sm mt-2 ml-[13.5rem]'>القيمة</p>
                  <div className='flex ml-3'>
                    <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>

                <div className=' flex justify-between'>
                  <div className='border-r-[2.5px] border-[#0092A0] h-[2.25rem] mr-[0.35rem]'></div>
                  <p className='text-sm mt-2 ml-[13.5rem]'>القيمة</p>
                  <div className='flex ml-3'>
                    <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                  </div>
                </div>

                <div className='flex justify-center'>
                      <div className='border-b-3 content-between border-b-[2px] w-[100%] '></div>
                </div>
                
              </div>

                <div onClick={() => {
                      setFilterActive('item1')
                      }} 
                        className='flex justify-center absolute bottom-24 self-center w-full'>
                    <text className='py-2 px-6 text-xs font-bold bg-[#0092A0] rounded-full text-white text-center cursor-pointer'>موافق
                    </text>
                </div>
                
              </div>
    </div>
  )
}

export default Filterswipefour
