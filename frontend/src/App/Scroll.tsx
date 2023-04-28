/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
import React, { useState, Fragment } from 'react';
import { Container, ProgressBar, ScrollContent, Heading } from './Styles';

const ScrollIndicator = (): JSX.Element => {
  const [scroll, setScroll] = useState(0);

  const onScroll = (): void => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener('scroll', onScroll);

  return <ProgressBar style={{ width: `${scroll}%` }}></ProgressBar>;
};

export default ScrollIndicator;
