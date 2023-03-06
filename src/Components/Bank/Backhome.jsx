import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'


const Backhome = () => {
  return (
    <div className='bg-[#0092A0] h-[2.6rem]'>
        <div className='flex'>
            <div className='flex'>
              <Link to='/'>
                <AiOutlineArrowLeft className='text-white text-[1.5rem] mt-2 ml-2'/>
              </Link>
              <p className='text-white mt-2 ml-2'>اختر باقتك</p>
            </div>
        </div>
    </div>
  )
}

export default Backhome
