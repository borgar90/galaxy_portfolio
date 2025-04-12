// components/sections/AviatorIntro.js
import React from 'react';
import SectionWrapper from './SectionWrapper';
import styled from 'styled-components';
import Image from 'next/image';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 300px;
`;

const StyledImage = styled(Image)`
  border-radius: 12px;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.violet};
  max-width: 300px;
  height: auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.neonCyan};
  text-shadow: ${({ theme }) => theme.shadows.neonGlow};
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.softWhite};
`;

const AviatorIntro = () => (
  <SectionWrapper id="aviator-intro">
    <FlexContainer>
      <StyledImage
        src="/images/aviator.png"
        alt="Meg som aviator"
        width={300}
        height={400}
      />
      <TextBlock>
        <Title>Fra bakken til skyene</Title>
        <Paragraph>
          Reisen min startet som en kreativ utvikler og teknolog, men nå styrer jeg mot skyene – både teknisk og visuelt.
          Med et brennende hjerte for å bygge og fly, tar jeg med visjon, kode og lidenskap til nye høyder.
        </Paragraph>
      </TextBlock>
    </FlexContainer>
  </SectionWrapper>
);

export default AviatorIntro;
