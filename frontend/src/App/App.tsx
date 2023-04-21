import React from 'react';
import './App.css';
import MainPage from '../components/main/MainPage';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SliderPhoto from '../components/features/SliderPhoto/SliderPhoto';
import Map from '../components/map/MapYandex';

function App():JSX.Element {
  return (
    <div className="App">
        <Navbar/>
      <MainPage/>
      <SliderPhoto />
      <Footer/>
    </div>
  );
}

export default App;
