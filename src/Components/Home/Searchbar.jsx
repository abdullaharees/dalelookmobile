import React from 'react'

import path from "../pictures/path.svg"

const Searchbar = () => {
  return (
    <div className='bg-[#0092A0] pb-1'>
        <div className='flex justify-center'>
            <div className='bg-white mt-1.5 rounded flex items-center px-2 max-w-[21.5rem] w-[97%] h-[33px]'>
                <input className='bg-transparent focus:outline-none p-2 place-items-center mt-.9 w-full arabic' type="text" placeholder='ابحث عن إعلان'></input>
                <img className='w-[15px] mr-2 ml-1' src={path} alt="path" />
            </div>
        </div>
    </div>
  )
}

export default Searchbar
