import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper22.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Swiper22(): JSX.Element {
  return (
    <div className="container" style={{ marginTop: '200px' }}>
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
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="photo10.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo9.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo8.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo7.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo6.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo5.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo4.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo3.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo1.jpg" alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swiper22;
