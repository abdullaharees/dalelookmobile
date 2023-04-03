import React, {useState, useRef, useEffect} from 'react'

import car from "../pictures/carslider.svg"
import cam from "../pictures/cam.svg"
import location from "../pictures/location.svg"
import time from "../pictures/time.svg"
import { FaHeart, FaRegHeart } from 'react-icons/fa'

import { Link, useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, FreeMode, Pagination, Mousewheel, Keyboard } from "swiper";
import Component from './Component'


const Slidermiddiv = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [like, setLike] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const [target, setTarget] = useState(0);
  const swiperRef = useRef(null)
 

  
return (
  
<div className='flex justify-center w-full'>    
 <div className='flex flex-col w-full justify-center'>

    <div className='flex justify-center'>
        <div className='content-between border-b-[2px] w-[90%] mt-2 mb-1'></div>
    </div>

    <div className='flex arabic mr-6 mt-2'>
        <p className='text-xl text-[#0092A0] text-right mb-2'>الإعلانات </p>
        <p className=' text-xl font-bold text-[#0092A0] text-right mr-1'> المميزة</p>
    </div>


    <div className='bg-white flex justify-between h-[18rem] w-full px-[1rem] rounded-b-sm object-cover'>

        <div className='flex justify-center flex-nowrap w-full h-full'>

        <Swiper
            
            pagination={{
              clickable: true
            }}
            mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            onSwiper={setSwiper}
            direction="horizontal"
            spaceBetween={15}
            slidesPerView={2}

            className="mySwiper slider2 w-full bottom-5 flex justify-center flex-wrap xl:flex-nowrap"
          >
        
          
          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide>   

          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide> 


          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide>  


          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide>  


          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide> 


          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide> 


          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide>  


          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide>  

          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide>  

          <SwiperSlide>
              <Link to='/product'>
                <Component />
              </Link>
          </ SwiperSlide>  
          
        </Swiper>    

        </div>

    </div>

 </div>
</div>   
  )
}

export default Slidermiddiv
