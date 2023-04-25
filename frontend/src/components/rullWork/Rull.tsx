import React from 'react';
import './Rull.css';
function Rull(): JSX.Element {
  return (
    <div className="borderRull">
      <div style={{ fontSize: '60px', margin: '100px 0 100px 0' }}>
        Как мы работаем
      </div>
      <div className="stepper-wrapper">
        <div className="stepper-item completed">
          <div className="step-counter">1</div>
          <img src="client.svg" className="imgStep" />
          <div className="step-name" style={{ fontSize: '30px' }}>
            Забираем
          </div>
          <div className="step-name" style={{ width: '200px' }}>
            Бесплатная доставка по городу Согласовываем с вами все работы после
            осмотра изделий технологом
          </div>
        </div>
        <div className="stepper-item completed">
          <div className="step-counter">2</div>
          <img src="brush.svg" className="imgStep" />
          <div className="step-name" style={{ fontSize: '30px' }}>
          Восстанавливаем
          </div>
          <div className="step-name" style={{ width: '200px' }}>
          Оплачиваете согласованные работы и мы приступаем к их выполнению, пока вы занимаетесь своими делами
          </div>
        </div>
        <div className="stepper-item">
          <div className="step-counter">3</div>
          <img src="delevery.svg" className="imgStep" />
          <div className="step-name" style={{ fontSize: '30px' }}>
          Привозим
          </div>
          <div className="step-name" style={{ width: '200px' }}>
          Отправляем фото результата перед отправкой готового заказа и доставляем обратно
          </div>
        </div>
        <div className="stepper-item">
          <div className="step-counter">4</div>
          <img src="application.svg" className="imgStep" />
          <div className="step-name" style={{ fontSize: '30px' }}>
          Гарантия
          </div>
          <div className="step-name" style={{ width: '200px' }}>
          Оказываем постоянную online поддержку и не бросаем вас даже после выполненных работ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rull;
