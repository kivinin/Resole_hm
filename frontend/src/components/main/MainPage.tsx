import React, { useState } from 'react';
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
import TextComp from '../Text/TextComp';
import Header from '../Text/Header';
import Consult from '../consult/Consult';
// import ModalOrder from '../Modal/ModalOrder';

function MainPage(): JSX.Element {
  const [text, setText] = useState("УСЛУГИ")
  const [textp, setTextP] = useState("ТОВАРЫ")
  const [ex, setEx] = useState("ПРИМЕРЫ НАШИХ РАБОТ")
  return (
    <div>
      <Video />
      <TextComp />
      <SliderPhoto />
      <Header text={text}/>
      <ServiceList />
      <Header text={textp}/>
      <ProductList />
      <Header text={ex}/>
      <Swiper22 />
      <Consult/>
      <Rull />
      <MapYandex />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default MainPage;
