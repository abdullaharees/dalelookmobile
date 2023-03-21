import React, {useState} from 'react'

import infoprofm from "../pictures/infoprofm.svg"
import adsprofm from "../pictures/adsprofm.svg"
import heartprofm from "../pictures/heartprofm.svg"
import activerect from "../pictures/activerect.svg"

import Itemprof from './Itemprof'
import Favprof from './Favprof'
import Myadsm from './Myadsm'

const Itemchange = ({edit, setEdit}) => {
  const [layout, setLayout] = useState(1)
  return (
    <div className='flex justify-center pt-10'>
      <div className='flex justify-between absolute top-[12.5rem] bg-[#DADEE2] w-[8.5rem] h-[2.5rem] rounded-lg'>
        <div
        onClick={(e) => {
          e.preventDefault();
          setLayout(1);
          }} 
          className={`ml-1 ${(layout === 1)? 'bg-white px-1 rounded-lg h-[2.3rem] mt-[0.1rem] ' : 'bg-[#DADEE2] rounded-lg'}`}>
          <img className='ml-2.5 mt-2 w-[0.8rem]' src={infoprofm} alt="infoprofm" />
          <p className='text-[0.6rem]'>التفاصيل</p>
          {/* <img className='z-10 absolute -top-[0.2rem] ml-2.5 mt-2 w-[2.4rem]' src={activerect} alt="activerect" /> */}
        </div>
          


        <div onClick={(e) => {
          e.preventDefault();
          setLayout(2);
          }}
          className={` ${(layout === 2)? 'bg-white px-1 rounded-lg h-[2.3rem] mt-[0.1rem] mr-[0.1rem]' : 'bg-[#DADEE2] rounded-lg'}`}>
          <img className='ml-2 mt-2 w-[0.89rem]' src={adsprofm} alt="adsprofm" />
          <p className='mr-1 text-[0.6rem]'>إعلاناتي</p>
        </div>



        <div onClick={(e) => {
          e.preventDefault();
          setLayout(3);
          }} 
          className={`mr-1 mt-[0.08rem] ${(layout === 3)? 'bg-white px-1 rounded-lg h-[2.3rem] mt-[0.1rem] mr-[0.1rem]' : 'bg-[#DADEE2] rounded-lg'}`}>
          <img className='ml-2.5 mt-2 w-[0.8rem]' src={heartprofm} alt="heartprofm" />
          <p className='text-[0.6rem]'>المفضلة</p>
        </div>
      </div>

      { layout === 1 ? (<>
        <Itemprof edit={edit} setEdit={setEdit} className='w-full' />
      </>) :

        layout === 2 ? (<>
          <Myadsm className='w-full' />
        </>) :
      
       layout === 3 ? (<>
      <Favprof />
      </>
      ): null}
    </div>
  )
}

export default Itemchange
