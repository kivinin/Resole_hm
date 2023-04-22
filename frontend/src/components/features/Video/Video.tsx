import React from 'react';
import './Video.css';
import video from './video.mp4';

function Video(): JSX.Element {
  return (
    <div className="intro">
      <div className="video">
        <video className="video__media" src={video} autoPlay muted loop />
      </div>
      <div className="intro__content">
        <div className="container">
          <h1 className="intro__title">NADPIS`</h1>
        </div>
      </div>
    </div>
  );
}

export default Video;
