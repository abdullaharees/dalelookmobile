import React, {useState} from 'react'
import villa from "../pictures/villa.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"


import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Componenttwo from './Componenttwo'

const Catclicklastdivtwo = () => {
  const [like, setLike] = useState([]);


  return (


    <div className='flex-col justify-start flex-nowrap xl:flex-wrap bg-white shadow-lg sm:h-[160rem] md:h-[80rem] xl:h-[45rem] rounded-b-sm py-2 px-8 w-full'>



      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full mt-4'>

        <div className=' flex justify-center flex-wrap xl:flex-nowrap py-2 xl:py-0 px-2 xl:px-0'>    
          <Componenttwo />
        </div>

        <div className=' flex justify-center flex-wrap xl:flex-nowrap py-2 xl:py-0 px-2 xl:px-0'>    
          <Componenttwo />
        </div>

      </div>



      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full mt-4'>

        <div className=' flex justify-center flex-wrap xl:flex-nowrap py-2 xl:py-0 px-2 xl:px-0'>    
          <Componenttwo />
        </div>

        <div className=' flex justify-center flex-wrap xl:flex-nowrap py-2 xl:py-0 px-2 xl:px-0'>    
          <Componenttwo />
        </div>

      </div>



      <div className='flex justify-center flex-wrap xl:flex-nowrap w-full mt-4'>

        <div className=' flex justify-center flex-wrap xl:flex-nowrap py-2 xl:py-0 px-2 xl:px-0'>    
          <Componenttwo />
        </div>

        <div className=' flex justify-center flex-wrap xl:flex-nowrap py-2 xl:py-0 px-2 xl:px-0'>    
          <Componenttwo />
        </div>

      </div>



    </div>

  )
}

export default Catclicklastdivtwo


