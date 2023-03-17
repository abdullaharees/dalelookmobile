import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'


const Backprod = () => {
  return (
    <div className='bg-[#0092A0] h-[2.6rem]'>
        <div className='flex'>
            <div className='flex'>
              <Link to='/'>
                <AiOutlineArrowLeft className='text-white font-bold text-[1.3rem] mt-2.5 ml-2'/>
              </Link>
              <p className='text-white text-sm mt-2.5 ml-2 font-bold'>عقارات > عقارات للبيع > شقق</p>
            </div>
        </div>
    </div>
  )
}

export default Backprod