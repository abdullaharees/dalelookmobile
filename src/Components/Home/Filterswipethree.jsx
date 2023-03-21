import {React, useState} from 'react'
import funnel from "../pictures/funnel.svg"
import check from "../pictures/check.svg"
import gridm from "../pictures/gridm.svg"
import sortm from "../pictures/sortm.svg"
import Gridrop from './Gridrop'
import Sort from './Sort'


import {RiCloseCircleLine} from 'react-icons/ri'

const Filterswipethree = () => {
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
                    
              <div className={nav ? 'fixed top-0 right-0 w-[19rem] h-screen bg-white z-30 duration-300' : 'fixed top-0 right-[-100%] w-[350px] h-screen bg-white z-10 duration-300'}>

              <div className='arabic'>
                <div className='mt-10 mr-5 text-sm'>
                  <p className='text-[#0092A0] '>السعر</p>
                </div>
                
                <div className='flex mr-4 arabic'>
                    <div className='bg-white mt-1 rounded flex items-center px-2 w-[100px] h-[35px] text-xs border-[2px]'>
                    <input className='bg-transparent focus:outline-none place-items-center mt-.9 w-full arabic font-semibold' type="text" placeholder='السعر من '></input>
                    <RiCloseCircleLine className='text-[#a2a1a1] text-[1.3rem] mr-2 '/>
                    
                    </div>
                    <p className='mt-3 font-bold text-sm px-1'> - </p>
                    <div className='bg-white mt-1 rounded flex items-center px-2 w-[100px] h-[35px] text-xs border-[2px]'>
                    <input className='bg-transparent focus:outline-none place-items-center mt-.9 w-full arabic font-semibold ' type="text" placeholder=' السعر إلى'>                    
                    </input>
                    <RiCloseCircleLine className='text-[#a2a1a1] text-[1.3rem] mr-2 '/>

                    </div>
                </div>
              </div>

                <div onClick={() => setNav(!nav)}  className='flex justify-center absolute bottom-6 self-center w-full'>
                    <text className='py-2 px-6 text-xs font-bold bg-[#0092A0] rounded-full text-white text-center '>موافق
                    </text>
                </div>
                
              </div>
    </div>
  )
}

export default Filterswipethree
