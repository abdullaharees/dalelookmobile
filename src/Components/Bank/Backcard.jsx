import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'


const Backcard = () => {
  return (
    <div className='bg-[#0092A0] h-[2.6rem] w-full'>
            <div className='flex justify-between'>
              <div>
                <Link to='/packages'>
                <AiOutlineArrowLeft className='text-white text-[1.5rem] mt-2 ml-2'/>
              </Link>
              </div>
              <div className='pr-3'>
              <p className='text-white mt-2 ml-2'>الدفع</p>

            </div>
            </div>
            
    </div>
  )
}

export default Backcard
