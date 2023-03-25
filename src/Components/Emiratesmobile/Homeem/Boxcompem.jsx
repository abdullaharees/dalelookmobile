import React from 'react'
import cars from "../pictures/cars.svg"

import {AiFillHome} from 'react-icons/ai'
import {SiHomeassistantcommunitystore} from 'react-icons/si' 
import {FaCouch} from 'react-icons/fa'
import {BsCameraFill} from 'react-icons/bs'
import {MdComputer} from 'react-icons/md'
import {FaTools} from 'react-icons/fa'
import {GiWashingMachine} from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'
import {GiCookingPot} from 'react-icons/gi'
import {BsLightbulbFill} from 'react-icons/bs'
import {BsSpeakerFill} from 'react-icons/bs'
import {FaCarAlt} from 'react-icons/fa'

import { Link, useNavigate } from 'react-router-dom'



const Boxcompem = () => {
  return (
    <div>

        <div className='flex items-center justify-center w-full text-lg text-[#333333] mb-3 mt-2 arabic'>
            <p>التصفح عن طريق </p>
            <p className='font-bold mr-2'>الفئة</p>
        </div>

    <div className='flex flex-col justify-center'>
       
        <div className='flex justify-center flex-wrap xl:flex-nowrap'>
            <div className='flex justify-between w-[95%] max-w-[330px] space-x-2'>   
                <Link to='/categoryem'>
                    <div className='py-3 '>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <FaCarAlt className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[2rem]'/>
                        </div>
                        <div className=''>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <AiFillHome className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <SiHomeassistantcommunitystore className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <FaCouch className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
            </div>
                   
            <div className='flex justify-between w-[95%] max-w-[330px] space-x-2'>   
                <Link to='/categoryem'>
                    <div className='py-3 '>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <BsCameraFill className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[2rem]'/>
                        </div>
                        <div className=''>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <MdComputer className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <FaTools className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <GiWashingMachine className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
                       
        <div className='flex justify-center flex-wrap xl:flex-nowrap'>
            <div className='flex justify-between w-[95%] max-w-[330px] space-x-2'>   
                <Link to='/categoryem'>
                    <div className='py-3 '>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <CgGym className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[2rem]'/>
                        </div>
                        <div className=''>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <GiCookingPot className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <BsLightbulbFill className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <BsSpeakerFill className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='flex justify-between w-[95%] max-w-[330px] space-x-2'>   
                <Link to='/categoryem'>
                    <div className='py-3 '>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <FaCarAlt className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[2rem]'/>
                        </div>
                        <div className=''>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <AiFillHome className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <SiHomeassistantcommunitystore className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/categoryem'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#FFCC00] mb-1">
                            <FaCouch className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                              text-[white] text-[1.8rem]'/>
                        </div>
                        <div>    
                            <p className='text-[0.6rem] font-bold text-center'>عنوان التصنيف</p>
                        </div>
                        <div className='flex justify-center text-[9px] text-center'>
                            <p className='mr-1'>إعلان</p>
                            <p className='font-bold'>8,037</p>
                        </div>
                    </div>
                </Link>
            </div>   
        </div> 
        
    </div>

    </div>
  )
}

export default Boxcompem
