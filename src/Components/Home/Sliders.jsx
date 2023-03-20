import React from 'react';
import Topsliderone from './Topsliderone';
import Topslidertwo from './Topslidertwo';
import Topsliderthree from './Topsliderthree';


const Sliders = () => {
  return (
    <div className='flex flex-col w-full'>

        <div className='w-full'>
            <Topsliderone />
        </div>

        <div className='flex space-x-[0.1rem] mt-[0.1rem]'>
            <div className='flex w-1/2 h-[9.2rem] '>
                <Topslidertwo />
            </div>
            <div className='flex w-1/2 h-[9.2rem]'>
                <Topsliderthree />
            </div>
        </div>
        

    </div>
  )
}

export default Sliders