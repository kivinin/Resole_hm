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
    <div id="doposle" className="container">
      <Swiper
        effect="coverflow"
        // eslint-disable-next-line react/jsx-boolean-value
        grabCursor={true}
        // eslint-disable-next-line react/jsx-boolean-value
        centeredSlides={true}
        // eslint-disable-next-line react/jsx-boolean-value
        loop={true}
        slidesPerView="auto"
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
          <img
            src="https://thumb.tildacdn.com/tild3466-3130-4761-b338-313232343335/-/format/webp/7.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thumb.tildacdn.com/tild3265-3130-4461-a136-323830363562/-/format/webp/6.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thumb.tildacdn.com/tild3661-3166-4865-b361-323339346238/-/format/webp/5TXZ-LeuWf4.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thumb.tildacdn.com/tild6661-6432-4338-b636-333837313133/-/format/webp/6Y9Jg_mJeb8.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://solefresh.ru/spb/wp-content/uploads/sites/10/2021/10/%D0%A5%D0%B8%D0%BC%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0_%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BE%D0%BA_34-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://solefresh.ru/spb/wp-content/uploads/sites/10/2021/10/%D0%A5%D0%B8%D0%BC%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0_%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BE%D0%BA_35-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://solefresh.ru/spb/wp-content/uploads/sites/10/2021/10/%D0%A5%D0%B8%D0%BC%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0_%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BE%D0%BA_15-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://solefresh.ru/spb/wp-content/uploads/sites/10/2021/10/%D0%A5%D0%B8%D0%BC%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0_%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BE%D0%BA_11-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thumb.tildacdn.com/tild3739-3364-4763-b936-336437613433/-/format/webp/5.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swiper22;
