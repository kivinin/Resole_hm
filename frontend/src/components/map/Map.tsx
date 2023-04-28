import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Map.css';

function MapYandex(): JSX.Element {
  return (
    <div id="contacts" style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          backgroundColor: '#b1fbe2',
          justifyContent: 'space-around',
          fontSize: '20px',
          textAlign: 'left',
          color: 'black',
          opacity: '0.8',
        }}
      >
        <div style={{ fontSize: '40px', margin: '20px' }}>Контакты</div>
        <div>
          <div className="textFooter">г. Ханты-Мансийск</div>
          <div className="textFooter">+7 982 410 8293</div>
          <div className="textFooter">@resole86</div>
        </div>
        <div className="textFooter">12.00 - 20.00</div>
        <div className="textFooter" style={{ width: '600px' }}>
          Мы сами забираем и доставляем ваши изделия обратно. <br />
          По данному адресу можно сдать изделия только по предварительной
          договоренности.
        </div>
      </div>

      <div style={{ width: '50%', backgroundColor: 'black' }}>
        <YMaps>
          <Map
            defaultState={{
              center: [60.998665, 69.062532],
              zoom: 15,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
            style={{ width: 'auto', height: '400px' }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
          >
            <Placemark defaultGeometry={[60.998665, 69.062532]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default MapYandex;
