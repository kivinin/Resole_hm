import React from 'react';
import Video from '../features/Video/Video';
import SliderPhoto from '../features/SliderPhoto/SliderPhoto';
import ServiceList from '../services/ServiceList';
import Footer from '../footer/Footer';
import ProductList from '../productCart/ProductList';
import ModalSearchOrder from '../ModalSearchOrder/ModalSearchOrder';
import Swiper22 from '../Swiper/Swiper22';
import Rull from '../rullWork/Rull';
import FeedBack from '../feedBack/FeedBack';
import MapYandex from '../map/Map';
// import ModalOrder from '../Modal/ModalOrder';

function MainPage(): JSX.Element {
  return (
    <div>
      <Video />
      <SliderPhoto />
      <ModalSearchOrder />
      <ServiceList />
      <ProductList />
      <Swiper22 />
      <Rull />
      <MapYandex />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default MainPage;
