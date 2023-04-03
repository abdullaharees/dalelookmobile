import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaHeart, FaRegHeart } from 'react-icons/fa'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

export default function Zoomslider({target, setTarget})  {
    const [target2, setTarget2] = useState(target)
    const [swiper, setSwiper] = useState(null);
    useEffect(() => {
        if(swiper !== null) {
          swiper.slideTo(target2)
        }
      }, [target2])
    
      const swiperRef = useRef(null);
console.log(target, target2)
  return (
    <div className="relative">
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-[10001] text-white font-semibold">
        <p>{target2+1}/10</p>
      </div>

<Swiper
        onSwiper={setSwiper}
        pagination={false}
        modules={[FreeMode, Navigation, Thumbs]}
        direction="horizontal"
        spaceBetween={25}
        navigation={true}
        initialSlide={target}
        // slidesPerView={3}
        onSlideChange={() =>{
          setTarget2(swiperRef.current.realIndex)
        }}
        // onSwiper={(swiper) => console.log(swiper.realIndex)}
        className="mySwiper slider1"
        onBeforeInit={(swiper) => {
      swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>

      </div>
  )
        }