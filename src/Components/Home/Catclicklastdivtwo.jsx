import React, {useState} from 'react'
import villa from "../pictures/villa.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"


import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Componenttwo from './Componenttwo'

const Catclicklastdivtwo = () => {
  const [like, setLike] = useState([]);


  return (


    <div className='flex-col justify-start flex-nowrap xl:flex-wrap w-full'>

        <div className='flex items-center justify-center px-2 w-full text-lg text-[#2D4373] arabic'>
            <p>اسم الصفحة </p>
            <p className='font-bold mr-2'> ( العقارات )</p>
        </div>

      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full'>

        <div className=' flex justify-center flex-wrap px-2'>    
          <Componenttwo />
        </div>

        <div className=' flex justify-center flex-wrap px-2'>    
          <Componenttwo />
        </div>

      </div>



      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full mt-1'>

        <div className=' flex justify-center flex-wrap px-2'>    
          <Componenttwo />
        </div>

        <div className=' flex justify-center flex-wrap px-2'>    
          <Componenttwo />
        </div>

      </div>



      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full mt-1'>

        <div className=' flex justify-center flex-wrap px-2 '>    
          <Componenttwo />
        </div>

        <div className=' flex justify-center flex-wrap px-2 '>    
          <Componenttwo />
        </div>

      </div>



    </div>

  )
}

export default Catclicklastdivtwo


