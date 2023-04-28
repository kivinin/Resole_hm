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
      <a href="https://t.me/Resole86">
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
      </a>
      <a href="https://vk.com/resole86">
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
        VK
      </button>
      </a>
    </div>
  );
}

export default Consult;
