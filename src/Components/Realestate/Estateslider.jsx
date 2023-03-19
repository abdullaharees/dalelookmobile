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

export default function Estateslider({target, setTarget})  {
  const [like, setLike] = useState([]);

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if(swiper !== null) {
      swiper.slideTo(target)
    }
  }, [target])

  const swiperRef = useRef(null);
  return (
    <div className='relative flex flex-col justify-center w-full object-cover h-[15.7rem]'>
      <Swiper
        onSwiper={setSwiper}
        pagination={false}
        modules={[FreeMode, Navigation, Thumbs]}
        direction="horizontal"
        spaceBetween={25}
        navigation={true}

        // slidesPerView={3}
        onSlideChange={() =>{
          setTarget(swiperRef.current.realIndex)
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
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
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
      <div className='z-50 absolute top-3 left-2 border rounded-full p-[0.2rem] bg-white'>
        <p onClick={() => like.includes(1) ? setLike(like.filter(item => item !== 1)) : setLike(prev => [...prev , 1])}>
                            {like.includes(1) && <FaHeart style={{color: 'red'}} className='text-gray-300 cursor-pointer text-[0.7rem]'/>}
                            {!like.includes(1) && <FaRegHeart className=' text-gray-300  cursor-pointer text-[0.7rem] ' />}
                          </p>
      </div>
      <div className="flex justify-between h-[4rem] w-[100%] space-x-1 mt-0.5 overflow-scroll scrollbar-hide">
          <img onClick={e => setTarget(0)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <img onClick={e => setTarget(1)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <img onClick={e => setTarget(2)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <img onClick={e => setTarget(3)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <img onClick={e => setTarget(4)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-5.jpg" />
          <img onClick={e => setTarget(5)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-6.jpg" />
          <img onClick={e => setTarget(6)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-7.jpg" />
          <img onClick={e => setTarget(7)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-8.jpg" />
          <img onClick={e => setTarget(8)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-9.jpg" />
          <img onClick={e => setTarget(9)} className='min-w-[18%] object-cover' src="https://swiperjs.com/demos/images/nature-10.jpg" />

      </div>
      {/* <Swiper
        // onSwiper={setThumbsSwiper}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
      }}
        spaceBetween={5}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper mt-1"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
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
      </Swiper> */}
    </div>
  );
}
