import React, { useState } from 'react';
import './Video.css';
import video from './video.mp4';
import ModalOrder from '../../Modal/ModalOrder';

function Video(): JSX.Element {
  const [zayavka, setZayavka] = useState(false);
  const clickModal = (): void => {
    setZayavka((prev) => !prev);
  };
  return (
    <div className="intro">
      <div className="video">
        <video className="video__media" src={video} autoPlay muted loop />
      </div>
      <div className="intro__content">
        <div className="container">
          <div className="containerTitle">
            <div className="videoName">ХИМЧИСТКА ОБУВИ </div>
            <div className="videoName" style={{margin:"0 0 40px 0"}}>С ДОСТАВКОЙ</div>
            <div className="videoTitle" >
              БЕСПЛАТНО ЗАБЕРЕМ И ПРИВЕЗЕМ ОБРАТНО
            </div>
            <div className="videoTitle">
           ХИМЧИСТКА, РЕСТОВРАЦИЯ И РЕМОНТ КОЖАНЫХ ИЗДЕЛИЙ
            </div>
            {!zayavka ? (
              <button
                type="button"
                style={{color:"#000000", backgroundColor:"#b1fbe2", borderRadius:"100px", MozBorderRadius:"100px", WebkitBorderRadius:"100px", width:"250px", height:"70px", fontSize:"25px", fontWeight:"500", margin:"40px 0 0 0"}}
                onClick={clickModal}
              >
                Заказать услугу
              </button>
            ) : (
              <ModalOrder clickModal={clickModal} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
