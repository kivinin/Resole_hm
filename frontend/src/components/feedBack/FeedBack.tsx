/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

function FeedBack(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '250px 0 0 0 ',
      }}
    >
      <div style={{ fontSize: '90px', margin: '300px 0 0 0' }}>Отзывы</div>
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
        />
      </div>
    </div>
  );
}

export default FeedBack;
