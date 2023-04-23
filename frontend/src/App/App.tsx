import React, { useEffect } from "react";
import "./App.css";
import MainPage from "../components/main/MainPage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import SliderPhoto from "../components/features/SliderPhoto/SliderPhoto";
import Video from "../components/features/Video/Video";
import ModalOrder from "../components/Modal/ModalOrder";
import { getService } from "../json/jsonSlice";
import { getProduct } from "../json/jsonSlice";
import { useAppDispatch } from "../store";
import ServiceList from "../components/services/ServiceList";
import ProductList from "../components/productCart/ProductList";

// import Map from '../components/map/MapYandex';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Video />
      <MainPage />
      <SliderPhoto />
      <ModalOrder />
      <ServiceList />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
