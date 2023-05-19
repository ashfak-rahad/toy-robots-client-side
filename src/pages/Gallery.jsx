import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Gallery = () => {
  return (
    <div className="text-center font-bold text-5xl ">
      <h1 className="py-8 text-black">Robot Gallery</h1>
      <div>
      <div className="container bg-neutral-800 py-6">
     
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8294562/pexels-photo-8294562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8438978/pexels-photo-8438978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/15964921/pexels-photo-15964921/free-photo-of-man-people-woman-festival.jpeg?auto=compress&cs=tinysrgb&w=600" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8294682/pexels-photo-8294682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/7869037/pexels-photo-7869037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler  ">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
      </div>
      
   </div>
  );
};

export default Gallery;
