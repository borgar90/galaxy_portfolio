// components/shared/PanoramaBackground.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const PanoramaWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

const StaticImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  img {
    height: 100%;
    width: auto;
    min-width: 100%;
    object-fit: cover;
    
  }
`;

// Skyer
const Clouds = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('/images/bakke_bg.png') no-repeat center center;
  animation: floatClouds 60s linear infinite;
  opacity: 0.3;

  @keyframes floatClouds {
    from { background-position-x: 0; }
    to { background-position-x: 1000px; }
  }
`;

const PanoramaBackground = () => {
  return (
    <PanoramaWrapper>
      <StaticImage>
        <Image
          src="/images/bakke_bg.png"
          alt="Panorama"
          layout="fill"
          objectFit="cover"
          objectPosition='bottom center'
          priority
        />
      </StaticImage>
      <Clouds />
    </PanoramaWrapper>
  );
};

export default PanoramaBackground;
