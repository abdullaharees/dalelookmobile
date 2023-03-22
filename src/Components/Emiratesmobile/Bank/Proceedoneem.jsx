import React, {useState} from 'react'


import tickblack from "../pictures/tickblack.svg"
import sidetext from "../pictures/sidetext.svg"
// import proceedtwonone from '../pictures/proceedtwonone'

import cammob from "../pictures/cammob.svg"
import Popupcloseem from './Popupcloseem'



const Proceedoneem = ({layout, setLayout, target, setTarget}) => {

  return (
<div className='flex justify-center '>

    <div className='flex flex-col w-full justify-center'>

        

        

        
        <div className='flex items-center justify-center pb-[7rem]'>

            
            <div className='w-full bg-white flex flex-col rounded-b-sm object-cover'>
              
                <div className='flex justify-center mt-5'>
                    <p className='text-[#333333] font-bold'>أنشئ حساب عملك في الدليل السوري</p>       
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='flex w-[90%] ml-5'>
                        <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-8 mb-0.5 flex text-right'>التصنيف الفرعي*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>التصنيف الفرعي </option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                        </div>

                        <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-8 mb-0.5 flex text-right'>اسم التصنيف*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>اسم التصنيف</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                        </div> 
                    </div>

                    <div className='flex flex-col w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>اسم الشركة*</p>
                        <div className='flex arabic w-[90%] mr-[1.5rem]'>
                            <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                            type="text"
                            placeholder=''></input>
                            
                        </div>
                    </div>
                    
                    <div className='flex w-[90%] ml-5'>
                        <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-2 mb-0.5 flex text-right'>الشارع*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>الشارع </option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                        </div>

                        <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-2 mb-0.5 flex text-right'>الحي*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>الحي </option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
                        </div> 

                        <div className='flex flex-col justify-center w-full arabic'>
                        <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-2 mb-0.5 flex text-right'>المدينة*</p>
                        <select className='text-[0.8rem]  outline-none w-[90%] mr-5  text-[#868686] flex justify-end text-right border-[1px] px-3 py-[8px] border-[#9F9F9F] rounded-md bg-white arabic'>
                            <option className='arabic pl-2'>المدينة</option> 
                            <option className='arabic pl-2'>1</option>
                            <option className='arabic pl-2 '>1</option>
                        </select>
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

                    <div className='flex w-[90%] ml-5'>
                        <div className='flex flex-col w-full arabic'>
                            <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>رقم الجوال*</p>
                            <div className='flex arabic w-[90%] mr-[1.5rem]'>
                                <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                                type="text"
                                placeholder=''></input>
                                
                            </div>
                        </div>

                        <div className='flex flex-col w-full arabic'>
                            <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>الهاتف الثابت*</p>
                            <div className='flex arabic w-[90%] mr-[1.5rem]'>
                                <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                                type="text"
                                placeholder=''></input>
                                
                            </div>
                        </div>
                    </div>

                    <div className='flex w-[90%] ml-5'>
                        <div className='flex flex-col w-full arabic'>
                            <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>البريد الإلكتروني</p>
                            <div className='flex arabic w-[90%] mr-[1.5rem]'>
                                <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                                type="text"
                                placeholder=''></input>
                                
                            </div>
                        </div>

                        <div className='flex flex-col w-full arabic'>
                            <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>الموقع الإلكتروني</p>
                            <div className='flex arabic w-[90%] mr-[1.5rem]'>
                                <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                                type="text"
                                placeholder=''></input>
                                
                            </div>
                        </div>
                    </div>

                    <div className='flex w-[90%] ml-5'>
                        <div className='flex flex-col w-full arabic'>
                            <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>حساب التويتر</p>
                            <div className='flex arabic w-[90%] mr-[1.5rem]'>
                                <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                                type="text"
                                placeholder=''></input>
                                
                            </div>
                        </div>

                        <div className='flex flex-col w-full arabic'>
                            <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>صفحة الفيسبوك</p>
                            <div className='flex arabic w-[90%] mr-[1.5rem]'>
                                <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                                type="text"
                                placeholder=''></input>
                                
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center w-[90%] ml-5'>
                        <div className='flex flex-col w-full arabic'>
                            <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>حساب لنكدإن</p>
                            <div className='flex arabic w-[90%] mr-[1.5rem]'>
                                <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                                type="text"
                                placeholder=''></input>
                                
                            </div>
                        </div>

                        <div className='flex flex-col w-full arabic'>
                            <p className='text-[0.8rem] mr-[1.5rem] font-bold text-[#333333] mt-3 mb-0.5 flex text-right'>حساب الإنستاغرام</p>
                            <div className='flex arabic w-[90%] mr-[1.5rem]'>
                                <input className=' text-[0.6rem]  outline-none w-full text-xs py-[8px] px-3 font-bold rounded-md flex flex-col justify-end text-right border-[1px] border-[#9F9F9F] bg-white'
                                type="text"
                                placeholder=''></input>
                                
                            </div>
                        </div>
                    </div>

                    <Popupcloseem />
                    

                </div>
            </div>


       </div>

    </div>   

</div>            
  )
}

export default Proceedoneem
 
