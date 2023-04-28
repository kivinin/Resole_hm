/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Container, ProgressBar, ScrollContent, Heading } from './Styles';

function ScrollIndicator(): JSX.Element {
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

  return <ProgressBar style={{ width: `${scroll}%` }} />;
}

export default ScrollIndicator;
