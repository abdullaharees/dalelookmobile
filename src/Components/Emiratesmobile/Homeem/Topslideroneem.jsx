import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./stylesem.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Topslideroneem() {
  return (
    <div className='flex justify-center w-full slider1 swiper-container'>
      <Swiper
        pagination={{
              clickable: true
            }}
        style={{
              "--swiper-navigation-color": "#fff",
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="slider1 swiper-container"
      >
        <SwiperSlide>
            <img className="h-[10rem] w-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img className="h-[10rem] w-full object-cover" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
        </SwiperSlide>

        <SwiperSlide>
            <img className="h-[10rem] w-full object-cover" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
        </SwiperSlide>

        <SwiperSlide>
            <img className="h-[10rem] w-full object-cover" src="https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img className="h-[10rem] w-full object-cover" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" />
        </SwiperSlide>

        <SwiperSlide>
            <img className="h-[10rem] w-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" />
        </SwiperSlide>

        <SwiperSlide>
            <img className="h-[10rem] w-full object-cover" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
        </SwiperSlide>

        <SwiperSlide>
            <img className="h-[10rem] w-full object-cover" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
        </SwiperSlide>

    
      </Swiper>
    </div>
  );
}
