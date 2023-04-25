import React from 'react';

function FeedBack(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ fontSize: '60px' }}>отзывы</div>

      <div
        style={{
          width: '560px',
          height: '800px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <iframe
          style={{
            width: '100%',
            height: '100%',
            border: '1px',
            borderRadius: '8px',
            boxSizing: 'border-box',
          }}
          src="https://yandex.ru/maps-reviews-widget/51912465174?comments"
        ></iframe>
        <a
          href="https://yandex.ru/maps/org/khimchistka_obuvi_v_khanty_mansiyske_resol/51912465174/"
          target="_blank"
          style={{
            textDecoration: 'none',
            color: '#b3b3b3',
            fontSize: '10px',
            fontFamily: 'YS',
            padding: '0 20px',
            position: 'absolute',
            bottom: '8px',
            width: '100%',
            textAlign: 'center',
            left: '0',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            maxHeight: '14px',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
          }}
        >
          Химчистка обуви в Ханты- Мансийске Ресол на карте Ханты‑Мансийска —
          Яндекс Карты
        </a>
      </div>
    </div>
  );
}

export default FeedBack;
