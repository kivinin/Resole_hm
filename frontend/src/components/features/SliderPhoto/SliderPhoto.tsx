import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import './Slider.css';

function SliderPhoto(): JSX.Element {
  const FIRST_IMAGE = {
    imageUrl: 'https://static.tildacdn.com/tild6338-3766-4461-a438-373330386432/__.png',
  };
  const SECOND_IMAGE = {
    imageUrl: 'https://static.tildacdn.com/tild3263-6639-4435-a231-613635323837/__2.png',
  };

  return (
    <div>
      <div className="mainWrapper">
        <div className="contentWrapper">
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </div>
      </div>
    </div>
  );
}

export default SliderPhoto;

// import React from 'react';
// import ReactBeforeSliderComponent from 'react-before-after-slider-component';
// import 'Slider.css';

// const FIRST_IMAGE = {
//   imageUrl: 'https://example.com/.../some-image.jpg',
// };
// const SECOND_IMAGE = {
//   imageUrl: 'https://example.com/.../some-image-2.jpg',
// };
// /* ... */
// <ReactBeforeSliderComponent
//   firstImage={FIRST_IMAGE}
//   secondImage={SECOND_IMAGE}
// />;
