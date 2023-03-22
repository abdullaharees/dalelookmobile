import React from 'react'
import Navbar from '../Navbar'
import { Link, useNavigate } from 'react-router-dom'

import convow from "../pictures/convow.svg"

import Componentconvo from './Componentconvo'

const Convo = () => {
  return (
    <div>
      <Navbar />
      <div className='h-[2.3rem] bg-[#0092A0] flex justify-center items-center'>
        <img className="w-[15px] mr-2 ml-3" src={convow} alt="convow" />
        <p className='text-[white] text-center text-[0.9rem]'>الرسائل</p>
      </div>
      <div className='flex justify-center flex-wrap'>

        <div className=' flex justify-center items-center flex-wrap w-[95%]'>   
          <Link to='/mainconvo'>
            <Componentconvo />
          </Link> 
        </div>

        <div className=' flex justify-center flex-wrap w-[95%]'>    
          <Link to='/mainconvo'>
            <Componentconvo />
          </Link> 
        </div>

      </div>
      
    </div>
  )
}

export default Convo
