import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Component from './Component';


const Clicklastdiv = () => {
const [like, setLike] = useState([]);

  return (
    <div className='flex w-full justify-center'>    
        <div className='flex flex-col justify-center w-[95%]'>

            
            


            <div className='flex justify-center flex-nowrap mt-3 space-x-2'>
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

export default Clicklastdiv
