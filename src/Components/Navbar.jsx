import {React, useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {RxExit} from 'react-icons/rx'
import {AiFillHeart} from 'react-icons/ai'
import {GiSandsOfTime} from 'react-icons/gi' 
import {RiFolder3Fill} from 'react-icons/ri' 
import {IoIosMail} from 'react-icons/io'
import {IoIosCloseCircle} from 'react-icons/io'

import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

import Logoonly from "./pictures/logoonly.svg"
import path from "./pictures/path.svg"
import price from "./pictures/price.svg"
import plusnav from "./pictures/plusnav.svg"
import menutop from "./pictures/menutop.svg"
import logowhite from "./pictures/logowhite.svg"
import darkmodem from "./pictures/darkmodem.svg"
import lightmodem from "./pictures/lightmodem.svg"
import Logo from "./pictures/mainlogonav.svg";
import pricebl from "./pictures/pricebl.svg"

import Notifdrop from './Home/Notifdrop';
import Languagedrop from './Home/Languagedrop'

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div>
        <div className=' bg-[#F8F8F8] h-[3rem] flex justify-between items-center'>

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

                    <div onClick={() => setNav(!nav)} className='cursor-pointer mr-5'>
                        <AiOutlineMenu className='text-[#333333] ' size={23}/>
                    </div>
                    
                    <div className={nav ? 'fixed top-0 right-0 w-[15rem] h-screen bg-white z-30 duration-300' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                                <img className="relative w-full" src={menutop} alt="price" />
                                <AiOutlineClose
                                onClick={() => setNav(!nav)} 
                                size={20} className='absolute right-4 top-3 cursor-pointer text-white'/>
                                <img className="absolute top-[3.5rem] right-[3rem] w-[9rem]" src={logowhite} alt="price" />

                        <nav className=' arabic'> 
                            <ul className='space-y-1.5 flex flex-col pt-[1rem] text-gray-800'>      
                                <Link to="/packages" onClick={() => setNav(!nav)} >
                                    <li className='text-xl mt-4 flex mr-5'>
                                        <BsFillHouseDoorFill className='arabic mt-1 mr-2 ml-3 text-[1.2rem] text-[#0092A0]'/>
                                        <p className='text-[#0092A0] ml-2 text-[0.9rem]'>????????????????</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                
                                <Link to='/myprofile' onClick={() => setNav(!nav)} >
                                    <li className='flex mr-5 text-[#0092A0]'>
                                        <img className='w-[1.1rem]  mr-2 ml-3' src={path} alt="user" />
                                        <p className='text-[#0092A0] ml-2  text-[0.9rem]'>???????? ???? ??????????</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                    <li className='flex mr-5 text-[#0092A0]'>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={Logoonly} alt="Company Logo two" />
                                        <p className='text-[#F89C35] ml-2 mt-[0.1rem] text-[0.9rem]'>???????????? ??????????????????</p> 
                                    </li>   

                                    <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/proceed" onClick={() => setNav(!nav)} >
                                    <li className='mt-[0.1rem] flex mr-5 text-[#0092A0]'>
                                        <img className="w-[15px] mr-2 ml-3" src={plusnav} alt="Company Logo" />
                                        <p className='text-[#0092A0] ml-2  text-[0.9rem]'>?????? ???????????? ????????????</p> 
                                    </li> 
                                </Link>    

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/packages" onClick={() => setNav(!nav)} >
                                    <li className=' flex mr-5 '>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={price} alt="price" />
                                        <p className='text-[#0092A0] ml-2  text-[0.9rem]'>??????????????</p> 
                                    </li>  
                                </Link>
                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                            </ul>
                        </nav> 

                        <div className='flex text-[#4E4E4E] flex-col arabic mr-6 space-y-3 mt-[2rem]'>
                            <div className='flex'>
                                <p>?????????? ????????????</p>
                                <img className="w-[1.7rem] mr-8 ml-3" src={darkmodem} alt="darkmodem" />
                                <img className="w-[1.7rem] mr-2 ml-3" src={lightmodem} alt="lightmodem" /> 
                            </div>    
                            <p>?????????? ????????</p>
                            <p>???? ???????? ??????????</p>
                            <div className='flex'>
                                <p>???????? ??????????</p>
                                <Languagedrop />
                            </div>
                            <p>???? ????????????</p>
                            <p>???????????? ?? ????????????</p>
                        </div>

                        <div
                        className='flex justify-center mt-8 ml-[4rem] py-[0.4rem] w-[8rem] bg-[#0092A0] rounded-full'>
                            <RxExit className='text-white mr-1' size={15}/>
                            <text className=' text-[0.7rem] font-bold  text-white text-center cursor-pointer'>
                             ?????????? ???????????? </text> 
                        </div>
                        
                        <div className='flex justify-center mt-3'>
                            <div className='content-between border-b-[2px] w-full mt-2 mb-1'></div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-[#737373] font-light'>???? ?????????? ?? ?????????? ?????? ?????????????? ????????????</p>
                            <p className='text-[#AD2822] text-xs'>Why Not Tech</p>
                        </div>
                    </div>

                    

            </div>    
      
         </div>
    </div>
  )
}

export default Navbar
