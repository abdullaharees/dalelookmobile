import React, {useState} from 'react'


import tickblack from "../pictures/tickblack.svg"
import sidetext from "../pictures/sidetext.svg"
import Proceedthree from './Proceedthree'
// import proceedtwonone from '../pictures/proceedtwonone'

import cammob from "../pictures/cammob.svg"



const Proceedone = ({layout, setLayout, target, setTarget}) => {

  return (
<div className='flex justify-center '>

    <div className='flex flex-col w-full justify-center'>

        

        

        
        <div className='flex items-center justify-center pb-[22rem]'>

                   
            
            <div className='w-full bg-white flex flex-col h-[750px] rounded-b-sm object-cover'>
              

                <div className='flex flex-col items-center justify-center'>

                    <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-8 mb-0.5 flex text-right'>الفئة*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>اختر التصنيف</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>اختر التصنيف الفرعي*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'> اختر التصنيف الفرعي</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>حقل مخصص*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'> اختر التصنيف الفرعي</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>
                    
                    <div className='w-[85%] mt-2 ml-7 text-xs font-bold rounded-sm flex flex-col justify-end text-right px-3 py-[6px] '>
                        <p className='mb-1 text-[0.8rem] '>حقل مخصص*</p>
                        <div className=' arabic text-right mt-1'>
                            <input type="radio" id="css" className=' text-xs' name="prof" value="CSS" />
                            <label for="css" className='text-[0.6rem  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label>

                            <input type="radio" id="css" className=' text-xs mr-3' name="prof" value="CSS" />
                            <label for="css" className='text-[0.6rem]  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label> 

                            <input type="radio" id="css" className=' text-xs mr-3' name="prof" value="CSS" />
                            <label for="css" className='text-[0.6rem]  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label> 

                            <input type="radio" id="css" className=' text-xs mr-3' name="prof" value="CSS" />
                            <label for="css" className='text-[0.6rem]  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label>  
                        </div>
                    </div>

                    <div className='w-[85%] mt-1 ml-7 text-xs font-bold rounded-sm flex flex-col justify-end text-right px-3 py-[6px] '>
                        <p className='mb-1 text-[0.8rem] '>*حقل مخصص</p>
                        <div className=' arabic text-right mt-1'>
                            <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                            <label for="css" className='text-[0.6rem]  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label>

                            <input type="checkbox" id="css" className='mr-3 text-xs' name="value" value="CSS" />
                            <label for="css" className='text-[0.6rem]  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label> 

                            <input type="checkbox" id="css" className='mr-3 text-xs' name="value" value="CSS" />
                            <label for="css" className='text-[0.6rem]  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label> 

                            <input type="checkbox" id="css" className='mr-3 text-xs' name="value" value="CSS" />
                            <label for="css" className='text-[0.6rem]  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label>  
                        </div>
                    </div>

                    <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>المدينة*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>اختر المدينة</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>الحي*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>اختر الحي</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>الشارع*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>اختر الشارع</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>السعر*</p>
                        <div className='flex arabic w-[90%] mr-[1.5rem]'>
                            <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-r-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                            type="text"
                            placeholder=''></input>
                            <div className='text-xs border-[1px] px-1.5 flex border-[#9F9F9F] rounded-l-md bg-[#F3F3F3]'>
                                <input type="checkbox" id="css" className='ml-1 text-xs px-1' name="negotiate" value="CSS" />
                                <label for="css" className='text-[#868686] text-[0.7rem] flex mt-2 mr-1'>قابل </label> 
                                <label for="css" className='text-[#868686] text-[0.7rem] flex mt-2 mr-1'>للتفاوض </label> 
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>الوصف*</p>
                        <textarea className='text-[0.6rem] mr-[1.5rem] w-[90%] overflow-y-scroll resize-none outline-none pt-2 h-[11rem] px-3 text-xs  flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] rounded-md bg-white'
                            type="text"
                            rows="4"
                            placeholder='اوصف ما الذي يجعل إعلانك واضح للعملاء'>
                        </ textarea>
                    </div>

                    <div className='flex justify-between space-x-[12rem] mt-2'>
                        <img className="w-[1.3rem] mt-2" src={cammob} alt="Company Logo" />
                        <p className='text-[0.8rem] font-bold text-[#333333] mt-2 flex text-right'>التقط أو اختر 8 صور</p>
                    </div>

                    <div className='mt-10 arabic flex'>
                        <p className='text-[0.6rem] lg:text-xs'>من خلال الاستمرار في هذا الموقع، فإنك تقبل لدينا  </p>
                        <p className='text-[#0055E4] text-[0.6rem] lg:text-xs mr-1'>تعليمات لاستخدام</p>
                    </div>

                    <div
                        onClick={(e) => {
                        e.preventDefault();
                        setLayout(2);
                        window.scrollTo(0, 0);
                        }}
                        className='flex justify-center mt-5'>
                        <text className='py-1 px-10 text-sm font-bold bg-[#0092A0] rounded-full text-white text-center cursor-pointer
                        shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[2px] border-[#0092A0] mb-5'>
                        التالي </text>
                    </div>
                    

                </div>
            </div>


       </div>

    </div>   

</div>            
  )
}

export default Proceedone
