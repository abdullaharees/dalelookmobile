import {React, useState} from 'react'

import funnel from "../pictures/funnel.svg"
import check from "../pictures/check.svg"
import gridm from "../pictures/gridm.svg"
import sortm from "../pictures/sortm.svg"
import Gridrop from './Gridrop'
import Sort from './Sort'
import Filterswipe from './Filterswipe'


import {MdKeyboardArrowLeft} from 'react-icons/md'
import Filterswipetwo from './Filterswipetwo'
import Filterswipethree from './Filterswipethree'
import Filterswipefour from './Filterswipefour'


const Catbar = ({activeItem, setActiveItem}) => {
const [nav, setNav] = useState(false)
const [filterActive, setFilterActive] = useState('item1')

  return (
    <div className=' z-20'>
        <div className='bg-[#0092A0] flex justify-center items-center self-center'>
          <div className='flex justify-center space-x-0.5 bg-white w-[95%] max-w-[300px] mt-1'>
              <div className='bg-[#0092A0] w-[25%] flex justify-center'>
              {filterActive === 'item1' && <Filterswipe setFilterActive={setFilterActive} />}
              {filterActive === 'item2' && <Filterswipetwo filterActive={filterActive} setFilterActive={setFilterActive}/>}
              {filterActive === 'item3' && <Filterswipethree filterActive={filterActive} setFilterActive={setFilterActive}/>}
              {filterActive === 'item4' && <Filterswipefour filterActive={filterActive} setFilterActive={setFilterActive}/>}

              </div>

              <div className='bg-[#0092A0] w-[25%]  flex flex-col justify-center items-center'>
                <img className='w-[1.1rem] py-1 ' src={check} alt="Company Logo" />
                <p className='text-[white] ml-1 text-[0.6rem]'>حفظ البحث</p> 
              </div>
        
              <div className='bg-[#0092A0] w-[25%] flex justify-center'>
                <Gridrop activeItem={activeItem} setActiveItem={setActiveItem}  className='z-20 ' />
              </div>

              <div className='bg-[#0092A0] w-[25%] flex justify-center'>
                <Sort />  
              </div>
          </div>
              
        
        </div>
    </div>
  )
}

export default Catbar
