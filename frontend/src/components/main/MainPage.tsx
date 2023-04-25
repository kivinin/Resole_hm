import React from 'react';
import Video from '../features/Video/Video';
import SliderPhoto from '../features/SliderPhoto/SliderPhoto';
import ModalOrder from '../Modal/ModalOrder';
import ServiceList from '../services/ServiceList';
import Footer from '../footer/Footer';
import ProductList from '../productCart/ProductList';
import ModalSearchOrder from '../ModalSearchOrder/ModalSearchOrder';

function MainPage(): JSX.Element {
  return (
    <div>
      {/* <h1 style={{ color: "white" }}>Main Page</h1> */}
      <Video />
      <SliderPhoto />
      <ModalOrder />
      <ModalSearchOrder />
      <ServiceList />
      <ProductList />
      <Footer />
    </div>
  );
}

export default MainPage;
