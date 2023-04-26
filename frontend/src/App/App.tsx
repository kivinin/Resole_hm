import { Route, Routes } from 'react-router';

import './App.css';
import MainPage from '../components/main/MainPage';
import Navbar from '../components/navbar/Navbar';
import { getService, getProduct } from '../json/jsonSlice';

import { useAppDispatch } from '../store';
import Login from '../components/Auth/Login';
import SerchOrderList from '../components/SerchOrder/SerchOrderList';
import { getServiceOrders } from '../components/SerchOrder/SerchOrderSlice';
import UpdateFormOrderItem from '../components/SerchOrder/UpdateFormOrderItem';
import React, { useEffect, useState, Fragment } from 'react';
import { Container, ProgressBar, ScrollContent, Heading } from './Styles';
import NotFound from '../components/404/NotFound';


// import ServiceList from '../components/services/ServiceList';
// import ProductList from '../components/productCart/ProductList';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getServiceOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener('scroll', onScroll);
  return (
    <div className="App">
   
      
      <Routes>

        <Route path="/" element={<Navbar />}>
          <Route
            path="/serviceorders/edit/:id"
            element={<UpdateFormOrderItem />}
          />
          <Route index element={<MainPage />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/list" element={<SerchOrderList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  
    
    </div>
  );
}

export default App;
