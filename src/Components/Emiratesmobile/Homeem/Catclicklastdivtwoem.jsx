import React, {useState} from 'react'
import villa from "../pictures/villa.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"


import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Componenttwoem from './Componenttwoem'

const Catclicklastdivtwoem = () => {
  const [like, setLike] = useState([]);


  return (


    <div className=' flex-col justify-start flex-nowrap xl:flex-wrap w-full'>

        

      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full'>

        <div className=' flex justify-center flex-wrap px-2'>    
          <Componenttwoem />
        </div>

        <div className=' flex justify-center flex-wrap px-2'>    
          <Componenttwoem />
        </div>

      </div>



      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full mt-1'>

        <div className=' flex justify-center flex-wrap px-2'>    
          <Componenttwoem />
        </div>

        <div className=' flex justify-center flex-wrap px-2'>    
          <Componenttwoem />
        </div>

      </div>



      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full mt-1'>

        <div className=' flex justify-center flex-wrap px-2 '>    
          <Componenttwoem />
        </div>

        <div className=' flex justify-center flex-wrap px-2 '>    
          <Componenttwoem />
        </div>

      </div>



    </div>

  )
}

export default Catclicklastdivtwoem


