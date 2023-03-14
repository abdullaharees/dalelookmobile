import React, {useState} from 'react'


import pricebl from "../pictures/pricebl.svg"
import starm from "../pictures/starm.svg"
import Popupads from './Popupads'
import Proceedone from './Proceedone'


const Proceedthree = () => {
const [layout, setLayout] = useState(3)

  return (
<div className='flex justify-center'>

    <div className='flex flex-col w-full justify-center'>

        

        <div className='flex justify-center flex-col'>

        { layout === 3 ? (<>        

            <div className='h-[50px] mt-[1rem] justify-end rounded-t-sm'>
                <div className='flex w-full mt-2.5 justify-end'>
                    <div className='flex arabic justify-end mr-6'>
                        <p className=' text-md font-bold mr-1 text-right'>اختار نوع الإعلان</p>
                        <img className='relative w-[1.2rem] mr-3' src={pricebl} alt="pricew" />
                    </div>
                </div>
            </div>

               

                    <div className='flex justify-between'>

                        <div className='flex text-sm ml-10'>
                            <p className='font-light'>إعلانات متبقية</p>
                            <p className='font-bold ml-2'>5</p>
                        </div>

                        <div className=' arabic text-right mr-6'>
                            <input type="radio" id="css" className='ml-1' name="prof" value="CSS" />
                            <label for="css" className='text-[#444444] font-bold  pr-1 text-sm'>الإعلان المجاني</label> 
                        </div>

                    </div>

                    <div className='ml-3 border-b w-[98%] mt-1'></div>

                    <div className='flex justify-between mt-1'>

                        <div className='flex text-sm ml-10'>
                            <p className='font-light'>إعلانات متبقية</p>
                            <p className='font-bold ml-2'>13</p>
                        </div>

                        <div className=' arabic text-right mr-6'>
                            <input type="radio" id="css" className='ml-1 text-sm' name="prof" value="CSS" />
                            <label for="css" className='text-[#444444] font-bold pr-1 text-sm'>الإعلان الممول</label> 
                        </div>

                    </div>

                    <div className='ml-3 border-b w-[98%] mt-1'></div>

                    <div className='flex grid-cols-2 gap-3 justify-center items-center'>      
                        <Popupads />
                    </div>

                    <div className='arabic flex mr-3 mt-2'>
                        <img className='relative w-[0.8rem] ml-1 mr-3' src={starm} alt="starm" />
                        <p className='text-xs font-bold text-[#444444] '>ميز إعلاناتك</p>
                    </div>

                    <div className='flex arabic'>
                        <div className='arabic mr-10 mt-1 flex'>
                            <p className='font-light text-xs mt-1'>تساعد باقة الإعلانات المميزة الباعة على الترويج لمنتجاتهم أو خدماتهم من خلال إعطاء المزيد من الوضوح لإعلاناتهم لجذب المزيد من المشتريين و البيع بشكل أسرع</p>
                        </div>             
                        
                        
                    </div>

                    

                
                <div className='flex grid-cols-2 gap-3 justify-center items-center'>      
                    

                    <div
                    onClick={(e) => {
                        e.preventDefault();
                        setLayout(2);
                        window.scrollTo(0, 0);
                        }}
                    className='flex justify-center mt-3.5 mb-5'>

                        <text className='py-1 px-5 text-xs font-bold bg-[#0092A0] rounded-full text-white text-center cursor-pointer
                        shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[2px] border-[#0092A0]'>
                        الباقات و الأسعار</text>
                    </div>
                </div>

            </>) :
            layout === 2 ? (
                <Proceedone />
                )
 
         :null}
            
       </div>

    </div>   

</div>            
  )
}

export default Proceedthree
