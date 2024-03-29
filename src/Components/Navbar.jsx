import {React, useEffect, useState} from 'react'

import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {RxExit} from 'react-icons/rx'
import {VscSignIn} from 'react-icons/vsc'
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
import gridham from "./pictures/gridham.svg"
import user from "./pictures/user.svg"
import heartham from "./pictures/heartham.svg"
import converham from "./pictures/converham.svg"
import checkham from "./pictures/checkham.svg"
import ppm from "./pictures/ppm.svg"


import Notifdrop from './Home/Notifdrop';
import Languagedrop from './Home/Languagedrop'
import Modes from './Home/Modes'
import Popupnavone from './Home/Popupnavone'
import Popupnavtwo from './Home/Popupnavtwo'
import Popupnavthree from './Home/Popupnavthree'

const Navbar = () => {
const [signedIn, setSignedIn] = useState(true)

    useEffect(() => {
        console.log(signedIn)
    },[signedIn])
const [nav, setNav] = useState(false)
const location = useLocation();
console.log(location.pathname);
  return (
    <div className='w-full flex'>
        <div className=' bg-[#F8F8F8] h-[2.7rem] flex justify-between items-center w-[100%]'>

            {/* Left Side */}
            <div className='flex ml-4 mr-2'>
                <Link to='/'>
                    <img className='max-w-[10rem] w-[85%] py-1' src={Logo} alt="Company Logo" />
                </Link> 
            </div>

            {/* Right Side */}
            <div className="flex flex-row items-center 
                my-[0.5rem] text-xs font-bold">
                
                <Link to="/packages">
                    <div className="flex items-center justify-center 
                        rounded cursor-pointer text-[#0092A0]
                        px-2 mt-[0.2rem]">
                        <img className="w-[1.3rem] mr-1 ml-1" src={pricebl} alt="price" />
                    </div>    
                </Link>

                    <div className="relative mr-1 z-[20]">
                        <Notifdrop />
                    </div>

                    <div onClick={() => setNav(!nav)} className='mt-[0.2rem] cursor-pointer mr-3'>
                        <AiOutlineMenu className='text-[#333333] ' size={23}/>
                    </div>

                    {nav ? <div 
                    onClick={() => setNav(!nav)} 
                    className='bg-black/80 fixed w-full h-screen z-[500] top-0 left-0'></div> : ''}
                    
                   { !signedIn ? <div className={nav ? 'z-[501] fixed top-0 right-0 w-[15rem] h-screen bg-white duration-300' : 'fixed top-0 right-[-100%]  bg-white z-10 duration-300'}>
                                <img className="relative w-full" src={menutop} alt="price" />
                                
                                <img className="absolute top-[3.5rem] right-[3rem] w-[9rem]" src={logowhite} alt="price" />

                        <nav className=' arabic'> 
                            <ul className=' flex flex-col pt-[1rem] text-gray-800'>      
                                <Link to="/" onClick={() => setNav(!nav)} >
                                    <li className='text-xl mt-4 flex mr-5'>
                                        <BsFillHouseDoorFill className='arabic mt-1 mr-2 ml-3 text-[1.2rem] text-[#0092A0]'/>
                                        <p className={`${location.pathname==='/' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>الرئيسية</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                
                                <Link to='/profile' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#0092A0]'>
                                        <img className='w-[1.1rem]  mr-2 ml-3' src={path} alt="user" />
                                        <p className={`${location.pathname==='/myprofile' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>ابحث عن إعلان</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to='/homeem' onClick={() => setNav(!nav)} >

                                    <li className='py-1 flex mr-5 text-[#0092A0]'>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={Logoonly} alt="Company Logo two" />
                                        <p className='text-[#F89C35] ml-2 mt-[0.1rem] text-[0.9rem]'>الدليل الإماراتي</p> 
                                    </li>   
                                    </Link>  

                                    <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/proceed" onClick={() => setNav(!nav)} >
                                    <li className='py-1 mt-[0.1rem] flex mr-5 text-[#0092A0]'>
                                        <img className="w-[15px] mr-2 ml-3" src={plusnav} alt="Company Logo" />
                                        <p className={`${location.pathname==='/proceed' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>أضف إعلانك مجاناً</p> 
                                    </li> 
                                </Link>    

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/packages" onClick={() => setNav(!nav)} >
                                    <li className='py-1  flex mr-5 '>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={price} alt="price" />
                                        <p className={`${location.pathname==='/packages' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>الباقات</p> 
                                    </li>  
                                </Link>
                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                            </ul>
                        </nav> 

                        <div className='flex text-[#4E4E4E] flex-col arabic mr-6 space-y-3 mt-[8rem]'>
                            <div className='flex items-center h-[1.25rem]'>
                                {/* <p>وضعية الظلام</p>
                                <img className="w-[1.9rem] mr-10 ml-3" src={darkmodem} alt="darkmodem" />
                                <img className="w-[1.9rem] mr-1 ml-3" src={lightmodem} alt="lightmodem" />  */}
                                <p className='ml-8'>وضعية الظلام</p>
                                <Modes className=""/>

                            </div>    
                            {/* <p>تواصل معنا</p> */}
                            <Popupnavone />
                            {/* <p>عن منصة دليلك</p> */}
                            <Popupnavthree />
                            <div className='flex'>
                                <p>احتر اللغة</p>
                                <Languagedrop />
                            </div>
                            <Popupnavtwo />
                            {/* <p>كن وكيلنا</p> */}
                            <p>البنود و الشروط</p>
                        </div>

                        <div onClick={(e) => {
                            e.preventDefault();
                            setSignedIn(true)}}
                        className='flex justify-center mt-8 ml-[4rem] py-[0.4rem] w-[8rem] bg-[#0092A0] rounded-full'>
                            <VscSignIn  className='text-white mr-1' size={15}/>
                            <text className=' text-[0.7rem] font-bold  text-white text-center cursor-pointer'>
                             تسجيل الدخول </text> 
                        </div>
                        
                        <div className='flex justify-center mt-3'>
                            <div className='content-between border-b-[2px] w-full mt-2 mb-1'></div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-[#737373] font-light'>تم تنفيذ و تطوير هذا التطبيق بواسطة</p>
                            <p className='text-[#AD2822] text-xs'>Why Not Tech</p>
                        </div>
                    </div> 
                    :
                    <div  className={nav ? 'fixed top-0 right-0 w-[15rem] min-h-screen bg-white z-[500] duration-300' : 'fixed top-0 right-[-100%] h-screen bg-white z-[500] duration-300'}>           
                                <img className="relative w-full" src={menutop} alt="price" />
                                
                                <img className="absolute top-[1rem] right-[5rem] w-[5rem]" src={ppm} alt="ppm" />
                                <div className='absolute right-[4rem] top-[6.5rem] flex'>
                                    <RxExit className='text-white mt-0.5 mr-1' size={10}/>
                                    <p className='text-[0.6rem] text-blue-400'>signed as<span className='text-white ml-1'>0102299154424</span></p>
                                </div>

                        <nav className=' arabic'> 
                            <ul className=' flex flex-col pt-[1rem] text-gray-800'>      
                                <Link to="/" onClick={() => setNav(!nav)} >
                                    <li className='text-xl mt-4 flex mr-5'>
                                        <BsFillHouseDoorFill className='arabic mt-1 mr-2 ml-3 text-[1.2rem] text-[#0092A0]'/>
                                        <p className={`${location.pathname==='/' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>الرئيسية</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                
                                <Link to='/category' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#0092A0]'>
                                        <img className='w-[1.1rem]  mr-2 ml-3' src={path} alt="user" />
                                        <p className={`${location.pathname==='/category' ? 'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>ابحث عن إعلان</p> 
                                    </li>   
                                </Link>  
                                
                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to='#' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#0092A0]'>
                                        <img className='w-[1rem]  mr-2 ml-3' src={gridham} alt="gridham" />
                                        <p className={`${location.pathname==='/grid' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>إعلاناتي</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to='/profile' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#0092A0]'>
                                        <img className='w-[1rem]  mr-2 ml-3' src={user} alt="user" />
                                        <p className={`${location.pathname==='/profile' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>ملفي الشخصي</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                
                                <Link to='#' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#0092A0]'>
                                        <img className='w-[1rem]  mr-2 ml-3' src={heartham} alt="heartham" />
                                        <p className={`${location.pathname==='/heart' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>المفضلة</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                    
                                <Link to='/homeem' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#0092A0]'>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={Logoonly} alt="Company Logo two" />
                                        <p className='text-[#F89C35] ml-2 mt-[0.1rem] text-[0.9rem]'>الدليل الإماراتي</p> 
                                    </li>   
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/proceed" onClick={() => setNav(!nav)} >
                                    <li className='py-1 mt-[0.1rem] flex mr-5 text-[#0092A0]'>
                                        <img className="w-[15px] mr-2 ml-3" src={plusnav} alt="Company Logo" />
                                        <p className={`${location.pathname==='/proceed' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>أضف إعلانك مجاناً</p> 
                                    </li> 
                                </Link>    

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/convo" onClick={() => setNav(!nav)} >
                                    <li className='py-1 mt-[0.1rem] flex mr-5 text-[#0092A0]'>
                                        <img className="w-[15px] mr-2 ml-3" src={converham} alt="converham" />
                                        <p className={`${location.pathname==='/convo' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>المحادثات</p> 
                                    </li> 
                                </Link>    

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/packages" onClick={() => setNav(!nav)} >
                                    <li className='py-1  flex mr-5 '>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={price} alt="price" />
                                        <p className={`${location.pathname==='/packages' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>الباقات</p> 
                                    </li>  
                                </Link>
                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/login" onClick={() => setNav(!nav)} >
                                    <li className='py-1  flex mr-5 '>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={checkham} alt="checkham" />
                                        <p className={`${location.pathname==='/login' ?  'text-[#0092A0] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>عمليات البحث</p> 
                                    </li>  
                                </Link>
                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                            </ul>
                        </nav> 

                        <div className='flex text-[#4E4E4E] flex-col arabic mr-6 space-y-3 mt-[2rem]'>
                            <div className='flex items-center h-[1.25rem]'>
                                {/* <p>وضعية الظلام</p>
                                <img className="w-[1.9rem] mr-10 ml-3" src={darkmodem} alt="darkmodem" />
                                <img className="w-[1.9rem] mr-1 ml-3" src={lightmodem} alt="lightmodem" />  */}
                                <p className='ml-8'>وضعية الظلام</p>
                                <Modes className=""/>

                            </div>    
                            {/* <p>تواصل معنا</p> */}
                            <Popupnavone />
                            {/* <p>عن منصة دليلك</p> */}
                            <Popupnavthree />
                            <div className='flex'>
                                <p>احتر اللغة</p>
                                <Languagedrop />
                            </div>
                            <Popupnavtwo />
                            {/* <p>كن وكيلنا</p> */}
                            <p>البنود و الشروط</p>
                        </div>

                        <div onClick={(e) => {
                            e.preventDefault();
                            setSignedIn(false)}}
                         className='flex justify-center mt-8 ml-[4rem] py-[0.4rem] w-[8rem] bg-[#0092A0] rounded-full'>
                                <RxExit className='text-white mr-1' size={15}/>
                                <text className=' text-[0.7rem] font-bold  text-white text-center cursor-pointer'>
                              تسجيل الخروج </text> 
                        </div>   
                      
                        
                        <div className='flex justify-center mt-3'>
                            <div className='content-between border-b-[2px] w-full mt-2 mb-1'></div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-[#737373] font-light'>تم تنفيذ و تطوير هذا التطبيق بواسطة</p>
                            <p className='text-[#AD2822] text-xs'>Why Not Tech</p>
                        </div>
                    </div>}

            </div>    
      
         </div>
    </div>
  )
}

export default Navbar
