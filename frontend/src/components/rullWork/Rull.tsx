import React from 'react';
import './Rull.css';
function Rull(): JSX.Element {
  return (
    <div className="borderRull">
      <div style={{ fontSize: '55px', margin: '100px 0 100px 0',fontWeight:"600"}}>
     КАК МЫ РАБОТАЕМ
      </div>
      <div className="stepper-wrapper">
        <div className="stepper-item completed">
          <div className="step-counter" style={{fontSize:"40px"}}>1</div>
          <img src="client.svg" className="imgStep" />
          <div className="step-name" style={{ fontSize: '35px', color:"#1b9488", fontWeight:"900" }}>
          ЗАБИРАЕМ
          </div>
          <div className="step-name" style={{ width: '350px', fontSize:"19px"}}>
          БЕСПЛАТНАЯ ДОСТАВКА ПО ГОРОДУ СОГЛАСОВЫВАЕМ С ВАМИ ВСЕ РАБОТЫ ПОСЛЕ
            ОСМОТРА ИЗДЕЛИЙ ТЕХНОЛОГОМ
          </div>
        </div>
        <div className="stepper-item completed" style={{display:"flex"}}>
          <div className="step-counter" style={{fontSize:"40px"}}>2</div>
          <img src="brush.svg" className="imgStep" />
          <div className="step-name" style={{ fontSize: '35pxpx', color:"#1b9488", fontWeight:"900", margin:"0 0 0 -160px" }}>
          ВОССТАНАВЛИВАЕМ
          </div>
          <div className="step-name" style={{ width: '350px', fontSize:"19px" }}>
          ОПЛАЧИВАЕТЕ СОГЛАСОВАННЫЕ РАБОТЫ И МЫ ПРИСТУПАЕМ К ИХ ВЫПОЛНЕНИЮ, ПОКА ВЫ ЗАНИМАЕТЕСЬ СВОИМИ ДЕЛАМИ
          </div>
        </div>
        <div className="stepper-item">
          <div className="step-counter" style={{fontSize:"40px"}}>3</div>
          <img src="delevery.svg" className="imgStep" />
          <div className="step-name" style={{ fontSize: '35px', color:"#1b9488", fontWeight:"900" }}>
          ПРИВОЗИМ
          </div>
          <div className="step-name" style={{ width: '350px', fontSize:"19px" }}>
          ОТПРАВЛЯЕМ ФОТО РЕЗУЛЬТАТА ПЕРЕД ОТПРАВКОЙ ГОТОВОГО ЗАКАЗА И ДОСТАВЛЯЕМ ОБРАТНО
          </div>
        </div>
        <div className="stepper-item">
          <div className="step-counter" style={{fontSize:"40px"}}>4</div>
          <img src="application.svg" className="imgStep" />
          <div className="step-name" style={{ fontSize: '35px', color:"#1b9488", fontWeight:"900" }}>
          ГАРАНТИЯ
          </div>
          <div className="step-name" style={{ width: '350px', fontSize:"19px" }}>
          ОКАЗЫВАЕМ ПОСТОЯННУЮ ONLINE ПОДДЕРЖКУ И НЕ БРОСАЕМ ВАС ДАЖЕ ПОСЛЕ ВЫПОЛНЕННЫХ РАБОТ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rull;
