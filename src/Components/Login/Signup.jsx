import React from 'react'

import tickblack from "../pictures/tickblack.svg"
import bglogin from "../pictures/bglogin.svg"
import userlogin from "../pictures/userlogin.svg"
import usermail from "../pictures/usermail.svg"
import usernumber from "../pictures/usernumber.svg"
import userpassone from "../pictures/userpassone.svg"
import userpasstwo from "../pictures/userpasstwo.svg"
import Logo from "../pictures/mainlogonav.svg";

import { Link, useNavigate } from 'react-router-dom'

import {AiOutlineGooglePlus} from 'react-icons/ai'
import {AiFillApple} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'


const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <Link to='/'>
                        <img className='w-[15rem] mt-[4.5rem] py-1' src={Logo} alt="Company Logo" />
                    </Link>
                    <p className='mt-3  text-[#0092A0] text-lg font-bold'>أنشئ حسابك معنا</p>
                </div>


                <div className='pt-2 space-y-2'>

                    <div className='bg-[#3F5C98] px-10 py-[0.4rem] flex rounded-md'>
                        <GrFacebookOption className='text-white cursor-pointer mr-1' size={20}/>
                        <p className='font-bold text-sm text-white mt-0.5'>Facebook</p>
                        <p className='font-bold text-sm text-white ml-2 mt-0.5'>اشترك بواسطة</p>
                    </div>

                    <div className='bg-[#D9534F] px-10 py-[0.4rem] flex rounded-md'>
                        <AiOutlineGooglePlus className='text-white cursor-pointer mr-1' size={22}/>
                        <p className='font-bold text-sm text-white mt-0.5'>Google</p>
                        <p className='font-bold text-sm text-white ml-2 mt-0.5'>اشترك بواسطة</p>
                    </div>

                    <div className='bg-black px-10 py-[0.4rem] flex rounded-md'>
                        <AiFillApple className='text-white cursor-pointer mr-1' size={22}/>
                        <p className='font-bold text-sm text-white mt-0.5'>Apple</p>
                        <p className='font-bold text-sm text-white ml-2 mt-0.5'>اشترك بواسطة</p>
                    </div>        

                </div>
                

                <div className='relative pt-4 ml-3 border-b-[2px] w-[80%] mt-3'></div>


                <div className='absolute top-[19rem] bg-[#F2F2F2] py-1 px-3 rounded-md'>
                    <div className=' text-[#707070] font-bold'>أو</div>
                </div>

                <div className='flex flex-col justify-center items-center mt-5'>

                    <div class=" w-[20rem] flex-wrap items-stretch mb-3 arabic">
                        <span class="z-10 absolute bg-transparent items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[35px] mr-8' src={userlogin} alt="userlogin" /> 
                        </span>
                        <input type="text" class="px-14 py-3 text-[#29292a] font-bold relative bg-[#F2F3F7] rounded-full border-[1px]
                        text-[10px] w-full focus:outline-none " placeholder='الإسم الكامل*'/>
                    </div>
                    
                    <div class=" w-[20rem] flex-wrap items-stretch mb-3 arabic">
                        <span class="z-10 absolute bg-transparent items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[30px] mr-8 mt-1' src={usermail} alt="usermail" /> 
                        </span>
                        <input type="text" class="px-14 py-3 text-[#212121] font-bold relative bg-[#F2F3F7] rounded-full border-[1px]
                        text-[10px] w-full focus:outline-none " placeholder=' البريد الإلكتروني*'/>
                    </div>

                    <div class=" w-[20rem] flex-wrap items-stretch mb-3 arabic">
                        <span class="z-10 absolute bg-transparent items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[0.8rem] mr-8 mt-0.5' src={usernumber} alt="usernumber" /> 
                        </span>
                        <input type="text" class="px-14 py-3 text-[#212121] font-bold relative bg-[#F2F3F7] rounded-full border-[1px]
                        text-[10px] w-full focus:outline-none " placeholder=' رقم الجوال*'/>
                    </div>

                    <div class=" w-[20rem] flex-wrap items-stretch mb-3 arabic">
                        <span class="z-10 absolute bg-transparent items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[0.7rem]  mr-8' src={userpassone} alt="userpassone" /> 
                        </span>
                        <input type="text" class="px-14 py-3 text-[#212121] font-bold relative bg-[#F2F3F7] rounded-full border-[1px]
                        text-[10px] w-full focus:outline-none " placeholder=' كلمة المرور*'/>
                    </div>

                    <div class=" w-[20rem] flex-wrap items-stretch mb-3 arabic">
                        <span class="z-10 absolute bg-transparent items-center justify-center w-7 pl-3 py-3">
                            <img className='w-[0.7rem] mr-8' src={userpasstwo} alt="userpasstwo" /> 
                        </span>
                        <input type="text" class="px-14 py-3 text-[#212121] font-bold relative bg-[#F2F3F7] rounded-full border-[1px]
                        text-[10px]  w-full focus:outline-none " placeholder='تأكيد كلمة المرور*'/>
                    </div>

                </div>

                
                
                <div className='mt-10 arabic flex'>
                    <input type="checkbox" id="css" className=' text-xs ml-1' name="value" value="CSS" />
                    <p className='text-xs text-[#737373]'>لقد قرأت و وافقت على  </p>
                    <p className='text-[#0055E4] text-xs mr-1'> البنود و الشروط</p>
                </div>

                <div className='flex justify-center mt-5'>
                <text className='py-1 px-10 text-sm font-bold shadow-lg bg-[#0092A0] rounded-full text-white text-center cursor-pointer'>
                    تسجيل </text>
                </div>
                
                <img className='-z-10 absolute top-[31rem] w-[26rem] opacity-50' src={bglogin} alt="bglogin" /> 
                <Link to='/'>
                    <p className='text-xs mt-12 underline'>العودة إلى الرئيسية</p>
                </Link>

    </div>
  )
}

export default Signup
