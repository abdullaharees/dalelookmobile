import React, {useState} from 'react'


import tickblack from "../pictures/tickblack.svg"
import sidetext from "../pictures/sidetext.svg"
import Proceedthree from './Proceedthree'
// import proceedtwonone from '../pictures/proceedtwonone'

import cammob from "../pictures/cammob.svg"



const Proceedone = () => {
const [layout, setLayout] = useState(1)

  return (
<div className='flex justify-center'>

    <div className='flex flex-col w-[95%] lg:w-[72%] justify-center'>

        

        { layout === 1 ? (<>
        

        
        <div className='flex items-center justify-center'>

                   
            
            <div className='w-[95%]  bg-white flex flex-col h-[750px] rounded-b-sm object-cover'>
                    
                

                <div className='flex flex-col items-center justify-center'>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.6rem] mr-[3rem] font-bold text-[#333333] mt-8 mb-0.5 flex text-right'>الفئة*</p>
                        <select className='text-[0.6rem] mr-11  outline-none w-[70%]  text-[#868686] font-bold rounded-sm flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-l-sm bg-white arabic'>
                            <option className='arabic pl-2'>اختر التصنيف</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.6rem] mr-[3rem] font-bold text-[#333333] mt-2 mb-1  flex text-right'>اختر تصنيف فرعي*</p>
                        <select className='text-[0.6rem] mr-11  outline-none w-[70%]  text-[#868686] font-bold rounded-sm flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-l-sm bg-white arabic'>
                            <option className='arabic pl-2'>اختر التصنيف الفرعي</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.6rem] mr-[3rem] font-bold text-[#333333] mt-2 mb-1  flex text-right'>حقل مخصص*</p>
                        <select className='text-[0.6rem] mr-11  outline-none w-[70%]  text-[#868686] font-bold rounded-sm flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-l-sm bg-white arabic'>
                            <option className='arabic pl-2'>اختر التصنيف الفرعي</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>
                    
                    <div className='w-[70%] mt-1 ml-7 text-xs font-bold rounded-sm flex flex-col justify-end text-right px-3 py-[6px] '>
                        <p className='mb-1 text-[0.6rem] xl:text-xs '>حقل مخصص*</p>
                        <div className=' arabic text-right mt-1'>
                            <input type="radio" id="css" className=' text-xs' name="prof" value="CSS" />
                            <label for="css" className='text-[0.6rem] xl:text-xs  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label>

                            <input type="radio" id="css" className=' text-xs' name="prof" value="CSS" />
                            <label for="css" className='text-[0.6rem] xl:text-xs  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label> 

                            <input type="radio" id="css" className=' text-xs' name="prof" value="CSS" />
                            <label for="css" className='text-[0.6rem] xl:text-xs  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label> 

                            <input type="radio" id="css" className=' text-xs' name="prof" value="CSS" />
                            <label for="css" className='text-[0.6rem] xl:text-xs  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label>  
                        </div>
                    </div>

                    <div className='w-[70%] mt-1 ml-7 text-xs font-bold rounded-sm flex flex-col justify-end text-right px-3 py-[6px] '>
                        <p className='mb-1 text-[0.6rem] xl:text-xs '>*حقل مخصص</p>
                        <div className=' arabic text-right mt-1'>
                            <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                            <label for="css" className='text-[0.6rem] xl:text-xs  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label>

                            <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                            <label for="css" className='text-[0.6rem] xl:text-xs  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label> 

                            <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                            <label for="css" className='text-[0.6rem] xl:text-xs  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label> 

                            <input type="checkbox" id="css" className=' text-xs' name="value" value="CSS" />
                            <label for="css" className='text-[0.6rem] xl:text-xs  font-bold pt-1 pr-1 text-xs ml-2'>القيمة</label>  
                        </div>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.6rem] mr-[3rem] font-bold text-[#333333] mt-2 mb-1 flex text-right'>المدينة*</p>
                        <select className='text-[0.6rem] mr-11  outline-none w-[70%]  text-[#868686] font-bold rounded-sm flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-l-sm bg-white arabic'>
                            <option className='arabic pl-2'>اختر المدينة</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.6rem] mr-[3rem] font-bold text-[#333333] mt-2 mb-1 flex text-right'>الحي*</p>
                        <select className='text-[0.6rem] mr-11  outline-none w-[70%]  text-[#868686] font-bold rounded-sm flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-l-sm bg-white arabic'>
                            <option className='arabic pl-2'>اختر الحي</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.6rem] mr-[3rem] font-bold text-[#333333] mt-2 mb-1 flex text-right'>الشارع*</p>
                        <select className='text-[0.6rem] mr-11  outline-none w-[70%]  text-[#868686] font-bold rounded-sm flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-l-sm bg-white arabic'>
                            <option className='arabic pl-2'>اختر الشارع</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.6rem] mr-[3.2rem] font-bold text-[#333333] mt-2 mb-1 flex text-right'>السعر*</p>
                        <div className='flex arabic w-[70%] mr-[3rem]'>
                            <input className=' text-[0.6rem] xl:text-xs  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-sm flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] rounded-l-sm bg-white'
                            type="text"
                            placeholder='السعر*'></input>
                            <div className='text-xs border-[1px] px-1.5 flex border-[#9F9F9F] rounded-l-sm bg-[#F3F3F3]'>
                                <input type="checkbox" id="css" className='ml-1 text-xs px-1' name="negotiate" value="CSS" />
                                <label for="css" className='text-[#868686] text-[0.6rem] font-bold flex mt-2 mr-1'>قابل </label> 
                                <label for="css" className='text-[#868686] text-[0.6rem]  font-bold flex mt-2 mr-1'>للتفاوض </label> 
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.6rem] mr-[3.2rem] font-bold text-[#333333] mt-2 mb-1 flex text-right'>الوصف*</p>
                        <textarea className='text-[0.6rem] mr-[3.2rem]  w-[70%] overflow-y-scroll resize-none outline-none pt-2 h-[7rem] px-3 text-xs font-bold rounded-sm flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] rounded-l-sm bg-white'
                            type="text"
                            rows="4"
                            placeholder='اوصف ما الذي يجعل إعلانك واضح للعملاء'>
                        </ textarea>
                    </div>

                    <div className='flex justify-between space-x-[8rem]'>
                        <img className="w-[1.2rem] mt-2" src={cammob} alt="Company Logo" />
                        <p className='text-[0.6rem] font-bold text-[#333333] mt-2 flex text-right'>التقط أو اختر 8 صور</p>
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
                        shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[2px] border-[#0092A0]
                        hover:shadow-lg hover:text-[#0092A0] hover:border-[#0092A0] hover:border-2 border-1 hover:bg-white ease-linear transition-all duration-150'>
                        التالي </text>
                    </div>
                    

                </div>
            </div>


       </div>
       </>) :

       layout === 2 ? (
        <Proceedthree />
        )
        
        :null}

    </div>   

</div>            
  )
}

export default Proceedone
