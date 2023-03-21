import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'


const Backproceedone = ({layout, setLayout}) => {
  
  return (
    <div className='bg-[#0092A0] h-[2.6rem]'>
            <div className='flex justify-between'>
               { layout === 2 &&  <div>
                
                    <AiOutlineArrowLeft
                    onClick={e => setLayout(1)}
                    className='text-white font-bold text-[1.5rem] mt-2 ml-2'/>
                </div>}
                { layout === 1 &&  
                <Link to='/'>
                <div>
                    <AiOutlineArrowLeft
                    className='text-white font-bold text-[1.5rem] mt-2 ml-2'/>
                </div>
                </Link>}
                <div className='mr-3'>
                  <p className='text-white mt-2 ml-2 font-bold'>إضافة إعلان</p>
                </div>
            </div>
    </div>
  )
}

export default Backproceedone
