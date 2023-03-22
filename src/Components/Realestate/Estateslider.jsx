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
import Zoomslider from "./Zoomslider";

export default function Estateslider({target, setTarget})  {
  const [like, setLike] = useState([]);
  const [show, setShow] = useState(false)
  const [swiper, setSwiper] = useState(null);
  const [targetImg, setTargetImg] = useState('')

  useEffect(() => {
    if(swiper !== null) {
      swiper.slideTo(target)
    }
  }, [target])

  const swiperRef = useRef(null);
  return (
    <div className='relative flex flex-col justify-center w-full object-cover h-[15.7rem]'>
    
     { show && <div className="flex justify-center items-center self-center w-full">
        <div onClick={e => setShow(false)} className="bg-black/90 w-[100vw] h-[100vh] opacity-90 fixed top-0 z-[9999]">
        </div>
       <div className="fixed top-1/2 left-1/2 -translate-x-1/2 w-[95%] -translate-y-1/2 z-[10000]">
        <Zoomslider target={target} setTarget={setTarget} />
      </div>
    </div>}
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
          <img onClick={e => {
            setShow(true)
            setTargetImg("https://swiperjs.com/demos/images/nature-1.jpg")
            }} src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-2.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-3.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-4.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-5.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-6.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-7.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-8.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-9.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={e => {
            setTargetImg("https://swiperjs.com/demos/images/nature-10.jpg")
            setShow(true)}
          }  src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>

        


      <div className='z-50 absolute top-3 left-2 border rounded-full p-[0.3rem] bg-white'>
        <p onClick={() => like.includes(1) ? setLike(like.filter(item => item !== 1)) : setLike(prev => [...prev , 1])}>
                            {like.includes(1) && <FaHeart style={{color: 'red'}} className='text-gray-300 cursor-pointer text-[0.9rem]'/>}
                            {!like.includes(1) && <FaRegHeart className=' text-gray-300  cursor-pointer text-[0.9rem] ' />}
                          </p>
      </div>
      <div className="flex justify-between mt-1 w-[100%] space-x-1 overflow-scroll scrollbar-hide">
          <img onClick={e => setTarget(0)} className={`min-w-[20%] object-cover ${target === 0 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <img onClick={e => setTarget(2)} className={`min-w-[20%] object-cover ${target === 2 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <img onClick={e => setTarget(1)} className={`min-w-[20%] object-cover ${target === 1 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <img onClick={e => setTarget(3)} className={`min-w-[20%] object-cover ${target === 3 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <img onClick={e => setTarget(4)} className={`min-w-[20%] object-cover ${target === 4 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-5.jpg" />
          <img onClick={e => setTarget(5)} className={`min-w-[20%] object-cover ${target === 5 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-6.jpg" />
          <img onClick={e => setTarget(6)} className={`min-w-[20%] object-cover ${target === 6 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-7.jpg" />
          <img onClick={e => setTarget(7)} className={`min-w-[20%] object-cover ${target === 7 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-8.jpg" />
          <img onClick={e => setTarget(8)} className={`min-w-[20%] object-cover ${target === 8 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-9.jpg" />
          <img onClick={e => setTarget(9)} className={`min-w-[20%] object-cover ${target === 9 ? 'border-[#0092A0] border-[3px] opacity-[1]' : 'opacity-80'}`} src="https://swiperjs.com/demos/images/nature-10.jpg" />

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
