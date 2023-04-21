import React from 'react';
import './App.css';
import MainPage from '../components/main/MainPage';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
