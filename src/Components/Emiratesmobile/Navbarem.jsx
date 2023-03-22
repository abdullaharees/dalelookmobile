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

import logoonlyem from "./pictures/logoonlyem.svg"
import pathem from "./pictures/pathem.svg"
import price from "./pictures/price.svg"
import plusnavem from "./pictures/plusnavem.svg"
import menutopem from "./pictures/menutopem.svg"
import logowhiteem from "./pictures/logowhiteem.svg"
import darkmodem from "./pictures/darkmodem.svg"
import lightmodem from "./pictures/lightmodem.svg"
import Logo from "./pictures/mainlogonav.svg";
import pricebl from "./pictures/pricebl.svg"
import gridham from "./pictures/gridham.svg"
import userem from "./pictures/userem.svg"
import hearthamem from "./pictures/hearthamem.svg"
import converham from "./pictures/converham.svg"
import checkhamem from "./pictures/checkhamem.svg"
import ppm from "./pictures/ppm.svg"
import Logoem from "./pictures/mainlogonavem.svg";


import Notifdropem from './Homeem/Notifdropem';
import Languagedropem from './Homeem/Languagedropem'
import Modesem from './Homeem/Modesem'
import Popupnavoneem from './Homeem/Popupnavoneem'
import Popupnavtwoem from './Homeem/Popupnavtwoem'
import Popupnavthreeem from './Homeem/Popupnavthreeem'

const Navbarem = () => {
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
                    <img className='max-w-[10rem] w-[70%] py-1' src={Logoem} alt="Company Logo" />
                </Link> 
            </div>

            {/* Right Side */}
            <div className="flex flex-row items-center 
                my-[0.5rem] text-xs font-bold">
                
                

                    <div onClick={() => setNav(!nav)} className='mt-[0.2rem] cursor-pointer mr-3'>
                        <AiOutlineMenu className='text-[#333333] ' size={23}/>
                    </div>

                    {nav ? <div 
                    onClick={() => setNav(!nav)} 
                    className='bg-black/80 fixed w-full h-screen z-[500] top-0 left-0'></div> : ''}
                    
                   { !signedIn ? <div className={nav ? 'z-[501] fixed top-0 right-0 w-[15rem] h-screen bg-white duration-300' : 'fixed top-0 right-[-100%]  bg-white z-10 duration-300'}>
                                <img className="relative w-full" src={menutopem} alt="price" />
                                
                                <img className="absolute top-[3.5rem] right-[3rem] w-[9rem]" src={logowhiteem} alt="price" />

                        <nav className=' arabic'> 
                            <ul className=' flex flex-col pt-[1rem] text-gray-800'>      
                                <Link to="/homeem" onClick={() => setNav(!nav)} >
                                    <li className='text-xl mt-4 flex mr-5'>
                                        <BsFillHouseDoorFill className='arabic mt-1 mr-2 ml-3 text-[1.2rem] text-[#FFCC00]'/>
                                        <p className={`${location.pathname==='/homeem' ?  'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>الرئيسية</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                
                                <Link to='/categoryem' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#4E4E4E]'>
                                        <img className='w-[1.1rem]  mr-2 ml-3' src={pathem} alt="pathem" />
                                        <p className={`${location.pathname==='/categoryem' ?  'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>ابحث عن إعلان</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                <Link to='/' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#4E4E4E]'>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={logoonlyem} alt="Company Logo two" />
                                        <p className='text-[#4E4E4E] ml-2 mt-[0.1rem] text-[0.9rem]'>الدليل الإماراتي</p> 
                                    </li>   
                                </Link>  
                                    <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/proceedem" onClick={() => setNav(!nav)} >
                                    <li className='py-1 mt-[0.1rem] flex mr-5 text-[#4E4E4E]'>
                                        <img className="w-[15px] mr-2 ml-3" src={plusnavem} alt="Company Logo" />
                                        <p className={`${location.pathname==='/proceedem' ?  'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>أضف إعلانك مجاناً</p> 
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
                                <Modesem className=""/>

                            </div>    
                            {/* <p>تواصل معنا</p> */}
                            <Popupnavoneem />
                            {/* <p>عن منصة دليلك</p> */}
                            <Popupnavthreeem />
                            <div className='flex'>
                                <p>احتر اللغة</p>
                                <Languagedropem />
                            </div>
                            <Popupnavtwoem />
                            {/* <p>كن وكيلنا</p> */}
                            <p>البنود و الشروط</p>
                        </div>

                        <div onClick={(e) => {
                            e.preventDefault();
                            setSignedIn(true)}}
                        className='flex justify-center mt-8 ml-[4rem] py-[0.4rem] w-[8rem] bg-[#FFCC00] rounded-full'>
                            <VscSignIn  className='text-[#333333] mr-1' size={15}/>
                            <text className=' text-[0.7rem] font-bold  text-[#333333] text-center cursor-pointer'>
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
                                <img className="relative w-full" src={menutopem} alt="price" />
                                
                                <img className="absolute top-[1rem] right-[5rem] w-[5rem]" src={ppm} alt="ppm" />
                                <div className='absolute right-[4rem] top-[6.5rem] flex'>
                                    <RxExit className='text-[#333333] mt-0.5 mr-1' size={10}/>
                                    <p className='text-[0.6rem] text-white'>signed as<span className='text-[#333333] ml-1'>0102299154424</span></p>
                                </div>

                        <nav className=' arabic'> 
                            <ul className=' flex flex-col pt-[1rem] text-gray-800'>      
                                <Link to="/homeem" onClick={() => setNav(!nav)} >
                                    <li className='text-xl mt-4 flex mr-5'>
                                        <BsFillHouseDoorFill className='arabic mt-1 mr-2 ml-3 text-[1.2rem] text-[#FFCC00]'/>
                                        <p className={`${location.pathname==='/homeem' ?  'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>الرئيسية</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                
                                <Link to='/categoryem' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#FFCC00]'>
                                        <img className='w-[1.1rem]  mr-2 ml-3' src={pathem} alt="pathem" />
                                        <p className={`${location.pathname==='/categoryem' ? 'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>ابحث عن إعلان</p> 
                                    </li>   
                                </Link>  
                                
                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to='/profileem' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#FFCC00]'>
                                        <img className='w-[1rem]  mr-2 ml-3' src={userem} alt="userem" />
                                        <p className={`${location.pathname==='/profileem' ?  'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>ملفي الشخصي</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                
                                <Link to='#' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5 text-[#FFCC00]'>
                                        <img className='w-[1rem]  mr-2 ml-3' src={hearthamem} alt="hearthamem" />
                                        <p className={`${location.pathname==='/heart' ?  'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>المفضلة</p> 
                                    </li>  
                                </Link>  

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>
                                <Link to='/' onClick={() => setNav(!nav)} >
                                    <li className='py-1 flex mr-5'>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={logoonlyem} alt="Company Logo two" />
                                        <p className='text-[#4E4E4E] ml-2 mt-[0.1rem] text-[0.9rem]'>دليل الإعلانات</p> 
                                    </li>   
                                </Link>  
                                    <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="/proceedem" onClick={() => setNav(!nav)} >
                                    <li className='py-1 mt-[0.1rem] flex mr-5 text-[#4E4E4E]'>
                                        <img className="w-[15px] mr-2 ml-3" src={plusnavem} alt="Company Logo" />
                                        <p className={`${location.pathname==='/proceedem' ?  'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>أضف إعلانك مجاناً</p> 
                                    </li> 
                                </Link>    

                                <div className='content-between border-b-[2.3px] w-full mb-[0.1rem]'></div>

                                <Link to="#" onClick={() => setNav(!nav)} >
                                    <li className='py-1  flex mr-5 '>
                                        <img className="w-[1.1rem] mr-2 ml-3" src={checkhamem} alt="checkhamem" />
                                        <p className={`${location.pathname==='#' ?  'text-[#4E4E4E] font-bold': 'text-black font-normal'}  ml-2  text-[0.9rem]`}>عمليات البحث</p> 
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
                                <Modesem className=""/>

                            </div>    
                            {/* <p>تواصل معنا</p> */}
                            <Popupnavoneem />
                            {/* <p>عن منصة دليلك</p> */}
                            <Popupnavthreeem />
                            <div className='flex'>
                                <p>احتر اللغة</p>
                                <Languagedropem />
                            </div>
                            <Popupnavtwoem />
                            {/* <p>كن وكيلنا</p> */}
                            <p>البنود و الشروط</p>
                        </div>

                        <div onClick={(e) => {
                            e.preventDefault();
                            setSignedIn(false)}}
                         className='flex justify-center mt-8 ml-[4rem] py-[0.4rem] w-[8rem] bg-[#FFCC00] rounded-full'>
                                <RxExit className='text-[#333333] mr-1' size={15}/>
                                <text className=' text-[0.7rem] font-bold  text-[#333333] text-center cursor-pointer'>
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

export default Navbarem
