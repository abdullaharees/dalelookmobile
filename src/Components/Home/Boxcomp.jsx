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
import {GiSuitcase} from 'react-icons/gi'
import {FaPaw} from 'react-icons/fa'
import {FaGuitar} from 'react-icons/fa'
import {FaHandHolding} from 'react-icons/fa'



import { Link, useNavigate } from 'react-router-dom'



const Boxcomp = () => {
  return (
    <div>

        <div className='flex items-center justify-center w-full text-lg text-[#0092A0] mb-3 mt-2 arabic'>
            <p>التصفح عن طريق </p>
            <p className='font-bold mr-2'>الفئة</p>
        </div>

    <div className='flex flex-col justify-center'>
       
        <div className='flex justify-center flex-wrap xl:flex-nowrap'>
            <div className='flex justify-between w-[95%] max-w-[330px] space-x-2'>   
                <Link to='/category'>
                    <div className='py-3 '>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#DB485D] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#0092A0] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#955037] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#3F5C98] mb-1">
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
                <Link to='/category'>
                    <div className='py-3 '>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#AC7BA8] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#F1B043] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#713498] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#D57948] mb-1">
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
                <Link to='/category'>
                    <div className='py-3 '>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#3E4B95] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#106A37] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#C660BA] mb-1">
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#D9534F] mb-1">
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
                <Link to='/category'>
                    <div className='py-3 '>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#B00020] mb-1">
                            <GiSuitcase className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#018786] mb-1">
                            <FaPaw className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#6200EE] mb-1">
                            <FaGuitar className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
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
                
                <Link to='/category'>
                    <div className='py-3'>
                        <div className="py-[2rem] relative w-[100%] rounded-lg cursor-pointer 
                        bg-[#5B9CDB] mb-1">
                            <FaHandHolding className='w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
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

export default Boxcomp
