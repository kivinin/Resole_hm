import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapYandex(): JSX.Element {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [60.998665, 69.062532],
          zoom: 15,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark defaultGeometry={[60.998665, 69.062532]} />
      </Map>
    </YMaps>
  );
}

export default MapYandex;
