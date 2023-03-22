import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Componentem from './Componentem';


const Catclicklastdivem = () => {
const [like, setLike] = useState([]);

  return (
    <div className='flex w-full justify-center'>    
        <div className='flex flex-col w-full justify-center'>
            
            <div className='flex justify-center flex-wrap xl:flex-nowrap mt-2 xl:mt-6'>
                <div className='flex justify-center  py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Componentem />
                    </Link>
                </div>

                <div className=' flex justify-center flex-wrap xl:flex-nowrap py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Componentem />
                    </Link>
                </div>
            </div>

            <div className='flex justify-center flex-wrap xl:flex-nowrap mt-2 xl:mt-6  '>
                <div className=' flex justify-center  py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Componentem />
                    </Link>
                </div>

                <div className=' flex justify-center  py-1  px-1'>
                    <Link to='/product'>
                        <Componentem />
                    </Link>
                </div>
            </div>

            <div className='flex justify-center flex-wrap xl:flex-nowrap mt-2 xl:mt-6  '>
                <div className=' flex justify-center  py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Componentem />
                    </Link>
                </div>

                <div className=' flex justify-center  py-1  px-1'>
                    <Link to='/product'>
                        <Componentem />
                    </Link>
                </div>
            </div>
            
            <div className='flex justify-center flex-wrap xl:flex-nowrap mt-2 xl:mt-6  '>
                <div className=' flex justify-center  py-1 xl:py-0 px-1'>
                    <Link to='/product'>
                        <Componentem />
                    </Link>
                </div>

                <div className=' flex justify-center  py-1  px-1'>
                    <Link to='/product'>
                        <Componentem />
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Catclicklastdivem
