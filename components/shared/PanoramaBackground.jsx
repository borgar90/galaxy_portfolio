// components/shared/PanoramaBackground.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const PanoramaWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
`;




const PanoramaBackground = () => {
  return (
    <PanoramaWrapper>
        <Image
          src="/images/bakke_bg.png"
          alt="Panorama"
          layout="fill"
          objectFit="cover"
          objectPosition='bottom9 center'
          priority
          className='rounded-xl'
        />
     
    </PanoramaWrapper>
  );
};

export default PanoramaBackground;
