import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Component from './Component';


const Catclicklastdiv = () => {
const [like, setLike] = useState([]);

  return (
    <div className='flex w-full justify-center'>    
        <div className='flex flex-col w-full justify-center'>
            
            <div className='flex justify-center flex-wrap xl:flex-nowrap mt-2 xl:mt-6'>
                <div className='flex justify-center flex-wrap xl:flex-nowrap py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Component />
                    </Link>
                </div>

                <div className=' flex justify-center flex-wrap xl:flex-nowrap py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Component />
                    </Link>
                </div>
            </div>

            <div className='flex justify-center flex-wrap xl:flex-nowrap mt-2 xl:mt-6  '>
                <div className=' flex justify-center flex-wrap xl:flex-nowrap py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Component />
                    </Link>
                </div>

                <div className=' flex justify-center flex-wrap xl:flex-nowrap py-1  px-1'>
                    <Link to='/product'>
                        <Component />
                    </Link>
                </div>
            </div>

            <div className='flex justify-center flex-wrap xl:flex-nowrap mt-2 xl:mt-6  '>
                <div className=' flex justify-center flex-wrap xl:flex-nowrap py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Component />
                    </Link>
                </div>

                <div className=' flex justify-center flex-wrap xl:flex-nowrap py-1  px-1'>
                    <Link to='/product'>
                        <Component />
                    </Link>
                </div>
            </div>
            
            <div className='flex justify-center flex-wrap xl:flex-nowrap mt-2 xl:mt-6  '>
                <div className=' flex justify-center flex-wrap xl:flex-nowrap py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Component />
                    </Link>
                </div>

                <div className=' flex justify-center flex-wrap xl:flex-nowrap py-1  px-1'>
                    <Link to='/product'>
                        <Component />
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Catclicklastdiv
