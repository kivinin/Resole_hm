
import NotFound from "../components/404/NotFound";
import { Route, Routes } from "react-router";
import React, { useEffect } from 'react';
import './App.css';
import MainPage from '../components/main/MainPage';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SliderPhoto from '../components/features/SliderPhoto/SliderPhoto';
import Video from '../components/features/Video/Video';
import ModalOrder from '../components/Modal/ModalOrder';
import { getService } from '../json/jsonSlice';
import { useAppDispatch } from '../store';
import ServiceList from '../components/services/ServiceList';
import Login from '../components/Auth/Login';



function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />/
        
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
