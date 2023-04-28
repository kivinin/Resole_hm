import React from 'react';

function TextComp(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#b1fbe2',
        height: '350px',
        color: 'black',
      }}
    >
      <div
        style={{ margin: '50px 0 0 0', fontSize: '50px', fontWeight: '700' }}
      >
        ПРОФЕССИОНАЛЬНАЯ МАСТЕРСКАЯ
      </div>
      <div style={{ fontSize: '25px', width: '950px' }}>
        МЫ СПЕЦИАЛИСТЫ В ВОССТАНОВЛЕНИИ КОЖАНЫХ ИЗДЕЛИЙ. <br />
        ОКАЗЫВАЕМ ВЕСЬ СПЕКТР УСЛУГ ПО ХИМЧИСТКЕ, РЕМОНТУ И РЕСТАВРАЦИИ ОБУВИ,
        СУМОК И КУРТОК.
      </div>
    </div>
  );
}

export default TextComp;
