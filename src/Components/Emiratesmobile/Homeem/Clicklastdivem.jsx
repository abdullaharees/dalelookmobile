import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Component from './Componentem';


const Clicklastdivem = () => {
const [like, setLike] = useState([]);

  return (
    <div className='flex w-full justify-center'>    
        <div className='flex flex-col justify-center w-[95%] mt-5'>

            
            
            {/* <p className='text-xl text-[#0092A0] text-right font-bold mr-3'>أحدث الإعلانات  </p> */}


            <div className='flex justify-center flex-nowrap mt-1 space-x-2'>
                <div className='flex justify-center w-[50%]'>
                        <Component />
                </div>

                <div className=' flex justify-center  w-[50%]'>
                        <Component />
                </div>
            </div>

            <div className='flex justify-center flex-nowrap mt-1 space-x-2'>
                <div className='flex justify-center w-[50%]'>
                        <Component />
                </div>

                <div className=' flex justify-center  w-[50%]'>
                        <Component />
                </div>
            </div>

            <div className='flex justify-center flex-nowrap mt-1 space-x-2'>
                <div className='flex justify-center w-[50%]'>
                        <Component />
                </div>

                <div className=' flex justify-center  w-[50%]'>
                        <Component />
                </div>
            </div>
            
            <div className='flex justify-center flex-nowrap mt-1 space-x-2'>
                <div className='flex justify-center w-[50%]'>
                        <Component />
                </div>

                <div className=' flex justify-center  w-[50%]'>
                        <Component />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Clicklastdivem
