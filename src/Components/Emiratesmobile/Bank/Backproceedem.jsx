import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

import editblueem from "../pictures/editblueem.svg"

const Backproceedem = ({edit, setEdit}) => {
  return (
    <div className='bg-[#FFCC00] h-[2.6rem] flex justify-between'>
              <Link to='/homeem'>
                <AiOutlineArrowLeft className='text-[#333333] text-[1.3rem] mt-3 ml-2'/>
              </Link>
              
    </div>
  )
}

export default Backproceedem
