import React from 'react'

import searchem from "../pictures/searchem.svg"

const Searchbarem = () => {
  return (
    <div className='bg-[#FAD606] pb-1'>
        <div className='flex justify-center'>
            <div className='bg-white mt-1.5 rounded flex items-center px-2 max-w-[21.5rem] w-[97%] h-[33px]'>
                <input className='bg-transparent focus:outline-none p-2 place-items-center mt-.9 w-full arabic' type="text" placeholder='ابحث عن إعلان'></input>
                <img className='w-[15px] mr-2 ml-1' src={searchem} alt="searchem" />
            </div>
        </div>
    </div>
  )
}

export default Searchbarem
