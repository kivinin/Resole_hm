import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function MapYandex(): JSX.Element {
  const defaultState = {
    center: [59.94183922709321, 30.359478205462246],
    zoom: 15,
  };

  return (
    <div>
      <YMaps>
        <Map
          defaultState={defaultState}
          style={{
            width: "1000px",
            height: "300px",
        
          }}
        >
          <Placemark geometry={[59.94183922709321, 30.359478205462246]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default MapYandex;
