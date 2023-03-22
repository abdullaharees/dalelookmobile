import React, {useState} from 'react'
import villa from "../pictures/villa.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"


import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Componenttwoem from './Componenttwoem'

const Catclicklastdivtwoem = () => {
  const [like, setLike] = useState([]);


  return (


    <div className='mt-2 flex-col justify-start flex-nowrap xl:flex-wrap w-full'>

        <div className='flex text-[#424242] items-center justify-center px-2 w-full text-lg  arabic'>
            <p>اسم الصفحة</p>
            <p className='font-bold mr-2'>( الطب و الصحة )</p>
        </div>

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


