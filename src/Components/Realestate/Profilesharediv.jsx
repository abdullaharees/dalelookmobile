import React from 'react'

import sharem from "../pictures/sharem.svg"
import flag from "../pictures/flag.svg"
import testimgest from "../pictures/testimgest.svg"
 
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'

const Profilesharediv = () => {
  return (
    <div className='flex bg-[#F8F8F8] justify-between h-[2.9rem] mt-1'>
        <div className='flex'>
          <button className=' bg-[#B62121] w-[3.5rem] h-[25px] ml-2 rounded-sm flex justify-center items-center arabic cursor-pointer mt-2'>
              <p className='text-[0.55rem]  text-right font mb-2 font-bold  mt-2 text-white'>تبليغ</p>
              <img className='w-2  mr-1 cursor-pointer fill-black' src={flag} alt="flag" />
          </button>
          <button className='cursor-pointer bg-[#F87300] w-[4.3rem] h-[25px] ml-2 rounded-sm flex justify-center items-center arabic mt-2'>
              <p className='text-[0.6rem]  text-right font mb-2 font-bold  mt-2 text-[white]'>مشاركة</p>
              <img className='w-3 mr-2 xl:mr-2 cursor-pointer fill-black' src={sharem} alt="editadbl" />
          </button>       
        </div>

        <div className='text-sm flex justify-end '>
          <p className='font-bold mr-[0.7rem] mt-3'>اسم المعلن</p>
          <Link to='/profile'>
            <img className='w-[2.5rem]  mr-2.5 cursor-pointer fill-black' src={testimgest} alt="testimgest" />
          </Link>
        </div> 
      </div>
  )
}

export default Profilesharediv
