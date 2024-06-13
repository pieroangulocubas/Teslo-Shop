'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';
import './slideshow.css';

interface Props{
    images: string[]
    title: string
    className?:string
}

export const ProductMobileSlideShow = ({images,title,className}:Props) => {
  return (
    <div className={className}>
        <Swiper
        style={{
          width:"100vw",
          height:"500px"
        }}
        loop={true}
        pagination
        autoplay={{
          delay:2500
        }}
        modules={[FreeMode,Autoplay,Pagination]}
        className="mySwiper2"
      >
        {
          images.map(image=>(
              <SwiperSlide key={image}>
                  <Image 
                      width={1024}
                      height={800}
                      alt={title}
                      src={`/products/${image}`}
                      className='object-fill'
                      />
              </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};