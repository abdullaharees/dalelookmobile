import React from 'react'

import bglogin from "../pictures/bglogin.svg"
import usermail from "../pictures/usermail.svg"
import userpassone from "../pictures/userpassone.svg"
import Logo from "../pictures/mainlogonav.svg";
import eyetwo from "../pictures/eyetwo.svg"
import eyeone from "../pictures/eyeone.svg"


import {AiOutlineGooglePlus} from 'react-icons/ai'
import {BsApple} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import Languagedroplogin from './Languagedroplogin';


const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    
                    <Languagedroplogin className='mt-[15rem]'/>

                    <img className='w-[15rem] mt-[4.5rem] py-1' src={Logo} alt="Company Logo" />
                    <p className='mt-3  text-[#7F7F7F] text-md font-bold text-center w-[20rem]'>المنصة الأولى في سوريا للإعلانات الإلكترونية المبوبة و دليل الشركات و المؤسسات و المحلات في كافة المدن السورية  </p>
                </div>


                
                


                <div className='flex flex-col justify-center items-center mt-5'>

                   
                    <div class=" w-[20rem] flex-wrap items-stretch mb-3 arabic">
                        <span class="z-10 h-full absolute bg-transparent items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[30px] mr-8 mt-1' src={usermail} alt="usermail" /> 
                        </span>
                        <input type="text" class="px-14 py-3 text-[#212121] font-bold relative bg-[#F2F3F7] rounded-full border-[1px]
                        text-[10px] w-full focus:outline-none " placeholder='البريد الإلكتروني أو رقم الجوال*'/>

                        <span class="z-10 left-10 h-full leading-snug absolute bg-transparent text-base items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[30px] mt-1' src={eyeone} alt="eyeone" /> 
                        </span>
                    </div>


                    <div class=" w-[20rem] flex-wrap items-stretch mb-1 arabic">
                        <span class="z-10 h-full absolute bg-transparent items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[0.7rem]  mr-8' src={userpassone} alt="userpassone" /> 
                        </span>
                        <input type="text" class="px-14 py-3 text-[#212121] font-bold relative bg-[#F2F3F7] rounded-full border-[1px]
                        text-[10px] w-full focus:outline-none " placeholder=' كلمة المرور*'/>

                        <span class="z-10 left-10 h-full leading-snug absolute bg-transparent text-base items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[30px] mt-1' src={eyetwo} alt="eyetwo" /> 
                        </span>
                    </div>

                    <div className='ml-[13rem] flex arabic'>
                        <p className='text-xs text-right text-[#4F4386]'>فقدت  كلمة المرور</p>
                    </div>
                    

                </div>

                <div className='flex justify-center mt-5'>
                <text className='py-2 px-6 text-xs font-bold shadow-lg bg-[#0092A0] rounded-full text-white text-center cursor-pointer'>
                تسجيل الدخول </text>
                </div>
                
                <div className=' mt-5 flex arabic'>
                        <p className='underline text-xs text-right text-[#4F4386]'>أو قم بتسجيل الدخول / التسجيل باستخدام</p>
                </div>
                
                <div className='mt-5 space-x-5 flex'>
                    <button className='bg-[#3F5C98] px-3 py-3 flex rounded-md cursor-pointer'>
                            <GrFacebookOption className='text-white cursor-pointer text-[1.3rem]'/>
                    </button>

                    <button className='bg-[#D9534F] px-3 py-3 flex rounded-md cursor-pointer'>
                            <AiOutlineGooglePlus className='text-white cursor-pointer text-[1.3rem]'/>
                    </button>

                    <button className='bg-[black] px-3 py-3 flex rounded-md cursor-pointer'>
                            <BsApple className='text-white cursor-point text-[1.3rem]'/>
                    </button>
                </div>

                
                
                <img className='-z-10 absolute top-[31rem] w-[25rem]' src={bglogin} alt="bglogin" /> 

                <p className='mt-[9rem] text-xs underline'>ليس لديك حساب بعد</p>
                <div className='flex justify-center mt-1'>
                <text className='py-2 px-6 text-xs font-bold shadow-lg bg-[#0092A0] rounded-full text-white text-center cursor-pointer'>اشترك الآن
                  </text>
                </div>

                <p className='text-xs mt-16 underline'>العودة إلى الرئيسية</p>

    </div>
  )
}

export default Login
