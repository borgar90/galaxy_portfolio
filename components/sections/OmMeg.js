import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';

const OmContainer = styled(SectionWrapper)`
  background: radial-gradient(ellipse at bottom, rgba(0, 40, 80, 0.5) 0%, rgba(0, 20, 40, 1) 100%);
  border: 1px solid rgba(0, 255, 255, 0.05);
  border-radius: 16px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    align-items: center;
  }
`;

const TextSide = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.softWhite};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.neonBlue};
  text-shadow: 0 0 10px #00ccff;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.softWhite};
`;

const CtaButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neonBlue};
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid ${({ theme }) => theme.colors.neonBlue};
  border-radius: 8px;
  text-shadow: 0 0 6px #00ccff;
  box-shadow: 0 0 15px #00ccff88;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neonBlue};
    color: #000;
    box-shadow: 0 0 30px #00ccff;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 350px;
  margin: 0 auto 2rem;

  @media (min-width: 768px) {
    margin: 0;
  }

  img {
    border-radius: 12px;
    object-fit: cover;
    object-position: center top;
  }
`;

const OmMeg = () => {
  return (
    <OmContainer id="ommeg">
      <ImageWrapper>
        <Image src="/borgar.png" alt="Bilde av meg" width={350} height={450} />
      </ImageWrapper>

      <TextSide>
        <Title>Hvem er jeg?</Title>
        <Paragraph>
          Jeg er en nysgjerrig utvikler med over 18 års erfaring innen web, design, AI og skyteknologi. 
          Jeg kombinerer kreativitet og kode for å bygge fremtidens løsninger – og elsker å hjelpe andre med å få ideene sine opp i skyen.
        </Paragraph>

        <CtaButton href="#cv">🧠 Se min interaktive CV</CtaButton>
      </TextSide>
    </OmContainer>
  );
};

export default OmMeg;
