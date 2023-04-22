import React from 'react';
import './App.css';
import MainPage from '../components/main/MainPage';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SliderPhoto from '../components/features/SliderPhoto/SliderPhoto';
import Video from '../components/features/Video/Video';
import ModalOrder from '../components/Modal/ModalOrder';

// import Map from '../components/map/MapYandex';


function App(): JSX.Element {
  return (
    <div className="App">

      <Navbar />
      <Video />
      <MainPage />
      <SliderPhoto />
      <ModalOrder />
      <Footer />

    </div>
  );
}

export default App;