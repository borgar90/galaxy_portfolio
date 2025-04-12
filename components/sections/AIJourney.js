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
  box-shadow: 0 0 20px #ff00ff55, 0 0 30px #00ffff33;
`;

const AiExploration = () => {
  return (
    <SectionWrapper id="ai-exploration">
      <SectionContent reverse={true}>
        <ImageWrapper>
          <Image
            src="/images/astro.png"
            alt="Utforsker AI som astronaut"
            layout="responsive"
            width={400}
            height={300}
          />
        </ImageWrapper>
        <TextBlock>
          <h2>Forbi skyene!</h2>
          <p>
            Ved å bygge intelligente AI-agenter kan vi utforske løsninger langt over skyene. Jeg kombinerer din kunnskap med kunstig intelligens for å skape systemer som forstår, lærer og hjelper – autonomt.
          </p>
        </TextBlock>
      </SectionContent>
    </SectionWrapper>
  );
};

export default AiExploration;
