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
    <div className="container">
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
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src="https://bladenbox.nl/wp-content/uploads/2022/02/playboy-02-2022.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vesti.kz/userdata/gallery/gallery_2115/photo_100048.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://basket-01.wb.ru/vol127/part12771/12771784/images/big/1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cv7.litres.ru/pub/c/cover_415/65668977.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://n1s1.hsmedia.ru/8f/eb/69/8feb69eac08ee096cf825dfa0f9d3439/469x600_1_f5dfde7e4c423ffe52df5b33808d4201@846x1083_0xac120003_9420096951648111921.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ae04.alicdn.com/kf/Sca671758b2684c0ab2a61e62c73ec0d1G.jpg_640x640.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUgkN51wKq9OsKXwunIQJ7pdrTOC_6tw2H9yyYj46juG6oE7Kew35XCABquIcC1izTeg&usqp=CAU"
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className="swiper-pagination"> </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Swiper22;
