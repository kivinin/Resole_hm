import { Route, Routes } from 'react-router';
import React, { useEffect } from 'react';
import './App.css';
import MainPage from '../components/main/MainPage';
import Navbar from '../components/navbar/Navbar';
import { getService, getProduct } from '../json/jsonSlice';
import { useAppDispatch } from '../store';
import NotFound from '../components/404/NotFound';

// import ServiceList from '../components/services/ServiceList';
// import ProductList from '../components/productCart/ProductList';

// import Map from '../components/map/MapYandex';
import Login from '../components/Auth/Login';

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
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />/
        </Route>
        <Route path="/admin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
