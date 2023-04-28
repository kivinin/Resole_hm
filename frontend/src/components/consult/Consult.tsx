import React from 'react';
import './Consult.css';

function Consult(): JSX.Element {
  return (
    <div className="consult">
      <div className="consultText">
        <div className="textCon">
          Получите бесплатную консультацию технолога в WhatsApp или Telegram
        </div>
        <div className="textCon">Отправьте фото изделий для оценки работ</div>
      </div>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        style={{
          width: '400px',
          height: '70px',
          color: 'black',
          backgroundColor: '#b1fbe2',
          border: 'none',
          fontSize: '25px',
        }}
      >
        Telegram
      </button>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        style={{
          width: '400px',
          height: '70px',
          color: 'black',
          backgroundColor: '#b1fbe2',
          border: 'none',
          fontSize: '25px',
        }}
      >
        WhatsApp
      </button>
    </div>
  );
}

export default Consult;
