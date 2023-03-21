import React, {useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import pricew from "../pictures/pricew.svg"
import paypal from "../pictures/paypal.svg"
import tick from "../pictures/tick.svg"
import bookmark from "../pictures/bookmark.svg"
import Cardone from './Cardone'
import Cardtwo from './Cardtwo'
import Creditcard from './Creditcard'




const Packages = () => {
const [layout, setLayout] = useState(1)

  return (
<div className='flex justify-center'>

    <div className='flex flex-col w-[72%] justify-center'>


        <div className='flex justify-center flex-col'>

            <div className='h-[45px] mt-[2rem] '>
                <div className='flex w-full  justify-center'>
                    <div className='flex arabic justify-center'>
                        <p className='text-xs font-bold text-right text-[#494949]'>هل تريد أن يبرز إعلانك أكثر؟ اختر واحدة من باقاتنا</p>
                    </div>
                </div>
            </div>


            <div className='w-full bg-white flex flex-col justify-center h-[65rem] 
             rounded-b-sm object-cover '>
                <div className="flex flex-wrap justify-center items-center gap-10 ">

                <Link to='/cardpage'>
                    <div className='cursor-pointer w-[14rem]  pt-[2.3rem] rounded-t-md flex flex-col justify-center arabic border-[#3CB878] border-[1px]
                    '>

                            <div className='flex flex-col mr-6'>
                                <p className='text-right font mb-1 font-bold text-[1rem] mt-1'>الإعلان البرونزي</p>
                                <p className='text-[2rem] text-[#2A8857] arabic font-bold'>30000<span className='text-[1.1rem] mr-1'>د.إ /</span>
                                <span className='mr-1 text-[#707070] text-[0.8rem]'>سنوياً</span></p> 
                                <p className='text-[0.6rem] text-right mb-4 font-light mt-2'> هذه الأسعار بمناسبة افتتاح منصة دليلك</p>
                            </div>

                            <div className='bg-[#3CB878]'>
                                <div className='flex mt-2  mr-3'>
                                    <img className='w-[0.8rem] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-2'>5</p>  
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-1'>إعلان</p>    
                                </div>

                                <div className='flex mr-3'>
                                    <img className='w-[0.8rem] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-2'>20</p>  
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-1'>صورة للإعلان الواحد</p>    
                                </div>

                                <div className='flex mb-4 mr-3'>
                                    <img className='w-[0.8rem]] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem]  text-right text-white font mb-2 font-bold mt-2 mr-2'>90</p>  
                                    <p className='text-[0.8rem]  text-right text-white font mb-2 font-bold mt-2 mr-1'>يوم مدة الإعلان</p>    
                                </div>    
                            </div>

                            <div className='bg-[#0A8546] py-2 items-center flex justify-center'>
                                <button className='text-[0.9rem] flex justify-center items-center text-white  font-bold'>إشترك الآن</button>
                            </div>

                    </div>    
                </Link>

                <Link to='/cardpage'>
                <div className='cursor-pointer w-[14rem]  pt-[2.3rem] rounded-t-md flex flex-col justify-center arabic border-[#448CCB] border-[1px]
                    '>

                        <div className='flex relative'>

                            <div className='flex flex-col mr-6'>
                                <p className='text-right font mb-1 font-bold text-[1rem] mt-1'>الإعلان البريميوم</p>
                                <img className='absolute w-[2.5rem] -top-[2.35rem] mr-[8.5rem]' src={bookmark} alt="bookmark" />
                                <p className='text-[2rem] text-[#1464AA] arabic font-bold'>40000<span className='text-[1.1rem] mr-1'>د.إ /</span>
                                <span className='mr-1 text-[#707070] text-[0.8rem]'>سنوياً</span></p> 
                                <p className='text-[0.6rem] text-right mb-4 font-light mt-2'> هذه الأسعار بمناسبة افتتاح منصة دليلك</p>
                            </div>

                            <div>
                            </div>
                            
                        </div>

                        <div className='bg-[#448CCB]'>
                                <div className='flex mt-2  mr-3'>
                                    <img className='w-[0.8rem] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-2'>5</p>  
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-1'>إعلان</p>    
                                </div>

                                <div className='flex mr-3'>
                                    <img className='w-[0.8rem] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-2'>20</p>  
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-1'>صورة للإعلان الواحد</p>    
                                </div>

                                <div className='flex mb-4 mr-3'>
                                    <img className='w-[0.8rem] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem]  text-right text-white font mb-2 font-bold mt-2 mr-2'>90</p>  
                                    <p className='text-[0.8rem]  text-right text-white font mb-2 font-bold mt-2 mr-1'>يوم مدة الإعلان</p>    
                                </div>    
                            </div>

                            <div className='bg-[#0E5593] py-2 items-center flex justify-center'>
                                <button className='text-[0.9rem] flex justify-center items-center text-white  font-bold'>إشترك الآن</button>
                            </div>


                    </div>
                </Link>

                    <Link to='/cardpage'>
                    <div className='cursor-pointer w-[14rem]  pt-[2.3rem] rounded-t-md flex flex-col justify-center arabic border-[#0092A0] border-[1px]
                    '>

                            <div className='flex flex-col mr-6'>
                                <p className='text-right font mb-1 font-bold text-[1rem] mt-1'>الإعلان الماسي</p>
                                <p className='text-[2rem] text-[#4A3F80] arabic font-bold'>68000<span className='text-[1.1rem] mr-1'>د.إ /</span>
                                <span className='mr-1 text-[#707070] text-[0.8rem]'>سنوياً</span></p> 
                                <p className='text-[0.6rem] text-right mb-4 font-light mt-2'> هذه الأسعار بمناسبة افتتاح منصة دليلك</p>
                            </div>

                            <div className='bg-[#0092A0]'>
                                <div className='flex mt-2  mr-3'>
                                    <img className='w-[0.8rem] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-2'>20</p>  
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-1'>إعلان</p>    
                                </div>

                                <div className='flex mr-3'>
                                    <img className='w-[0.8rem] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-2'>35</p>  
                                    <p className='text-[0.8rem] text-right text-white font mb-2 font-bold mt-2 mr-1'>صورة للإعلان الواحد</p>    
                                </div>

                                <div className='flex mb-4 mr-3'>
                                    <img className='w-[0.8rem] mr-3 ' src={tick} alt="tick" />
                                    <p className='text-[0.8rem]  text-right text-white font mb-2 font-bold mt-2 mr-2'>150</p>  
                                    <p className='text-[0.8rem]  text-right text-white font mb-2 font-bold mt-2 mr-1'>يوم مدة الإعلان</p>    
                                </div>    
                            </div>

                            <div className='bg-[#2F2851] py-2 items-center flex justify-center'>
                                <button className='text-[0.9rem] flex justify-center items-center text-white  font-bold'>إشترك الآن</button>
                            </div>

                    </div>    
                </Link>
                    
                </div>
            </div>


       </div> 


    </div> 

    

</div>            
  )
}

export default Packages
