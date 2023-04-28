import React from 'react';
import ModalSvyaz from './ModalSvyaz';

function Svyaz():JSX.Element {
  return (
    <div style={{ display: 'flex', height: '400px' }} className="conSv">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '70%', alignItems: 'center' }}>
        <div style={{ fontSize: '45px', color: 'white', width: '65%', fontWeight: '600' }}>Получите бесплатную консультацию технолога</div>
        <div style={{ fontSize: '45px', color: 'white', width: '65%', fontWeight: '600' }}>
          Заполните форму и наши специалисты свяжутся с вами в течение 30 минут!
        </div>
      </div>
      <div style={{ width: '50%' }}><ModalSvyaz /></div>
    </div>
  );
}

export default Svyaz;
