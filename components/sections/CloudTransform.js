// components/sections/CloudTransform.js
import React from 'react';
import styled from 'styled-components';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';

const SectionContent = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.softWhite};
  text-align: left;

  h2 {
    color: ${({ theme }) => theme.colors.neonCyan};
    font-size: 2.5rem;
    text-shadow: ${({ theme }) => theme.shadows.neonGlow};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 260px;
  max-width: 400px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px #00ffff55, 0 0 30px #ff00ff33;
`;

const CloudTransform = () => {
  return (
    <SectionWrapper id="cloud-transform">
      <SectionContent reverse={false}>
        <TextBlock>
          <h2>Skap kraft med skyen</h2>
          <p>
            Jeg hjelper deg å bringe data, prosesser og logikk til skyen. Med moderne verktøy og teknologi transformerer vi måten du jobber på – effektivt, sikkert og skalerbart.
          </p>
        </TextBlock>
        <ImageWrapper>
          <Image
            src="/images/cloud.png"
            alt="Mann med skiftenøkkel på sky"
            layout="responsive"
            width={400}
            height={300}
          />
        </ImageWrapper>
      </SectionContent>
    </SectionWrapper>
  );
};

export default CloudTransform;
