import {React, useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

import Logoonly from "./pictures/logoonly.svg"
import user from "./pictures/user.svg"
import price from "./pictures/price.svg"
import plus from "./pictures/plus.svg"
import menutop from "./pictures/menutop.svg"
import logowhite from "./pictures/logowhite.svg"


import Notifdrop from './Home/Notifdrop';

import Logo from "./pictures/mainlogonav.svg";
import pricebl from "./pictures/pricebl.svg"

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div>
        <div className='max-w-[375px] bg-[#F8F8F8] h-[3rem] flex justify-between items-center'>

            {/* Left Side */}
            <div className='flex ml-4 mr-2'>
                <Link to='/'>
                    <img className='w-[10rem] py-1' src={Logo} alt="Company Logo" />
                </Link> 
            </div>

            {/* Right Side */}
            <div className="flex flex-row flex-wrap items-center 
                my-[0.5rem] text-xs font-bold">
                
                <Link to="/packages">
                    <div className="flex items-center justify-center 
                        rounded cursor-pointer text-[#0092A0]
                        px-2 py-2.5">
                        <img className="w-[1.3rem] mr-1 ml-1" src={pricebl} alt="price" />
                    </div>    
                </Link>

                    <div className="relative mr-1 z-20">
                        <Notifdrop />
                    </div>

                    <div onClick={() => setNav(!nav)} className='cursor-pointer pt-1 mr-5'>
                        <AiOutlineMenu className='text-[#333333] ' size={25}/>
                    </div>
                    
                    <div className={nav ? 'fixed top-0 right-0 w-[15rem] h-screen bg-white z-30 duration-300' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                                <img className="relative w-full" src={menutop} alt="price" />
                                <AiOutlineClose
                                onClick={() => setNav(!nav)} 
                                size={20} className='absolute right-4 top-3 cursor-pointer text-white'/>
                                <img className="absolute top-[3.5rem] right-[3rem] w-[9rem]" src={logowhite} alt="price" />

                        <nav className='ml-5'>
                            <ul className=' flex flex-col pt-[2rem] text-gray-800'>                            
                                <Link to="/packages" onClick={() => setNav(!nav)} >
                                    <li className='text-xl py-3 flex '>
                                        <img className="w-[1.3rem] mr-2 ml-1" src={price} alt="price" />
                                        <p className='text-[#0092A0] ml-2'>الباقات</p> 
                                    </li>  
                                </Link>
                                <Link to='/myprofile' onClick={() => setNav(!nav)} >
                                    <li className='text-xl py-3 flex text-[#0092A0]'>
                                        <img className='w-[1.25rem] mr-2 ml-1' src={user} alt="user" />
                                        <p className='text-[#0092A0] ml-2'>ملفي الشخصي</p> 
                                    </li>  
                                </Link>  

                                    <li className='text-xl py-3 flex text-[#0092A0]'>
                                        <img className="w-[1.3rem] mr-2 ml-1" src={Logoonly} alt="Company Logo two" />
                                        <p className='text-[#F89C35] ml-2'>الدليل الإماراتي</p> 
                                    </li>   

                                <Link to="/proceed" onClick={() => setNav(!nav)} >
                                    <li className='text-xl py-3 flex text-[#0092A0]'>
                                        <img className="w-[15px] mr-2 ml-1" src={plus} alt="Company Logo" />
                                        <p className='text-[#0092A0] ml-2'>أضف إعلانك مجاناً</p> 
                                    </li> 
                                </Link>         
                            </ul>
                        </nav> 
                    </div>
            </div>    
      
         </div>
    </div>
  )
}

export default Navbar
