// components/sections/AboutGrounded.js
import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import PanoramaBackground from '../../shared/PanoramaBackground';

// Bakgrunn med gradient og SVG-fjell/gress
const GroundedSection = styled(SectionWrapper)`
  position: relative;
  min-height: 100%;
  width: 70%;
  margin: 50px auto;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;




const Paragraph = styled.p`
  color: white;
  max-width: 700px;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 6px rgba(0,0,0,0.8); /* lettere outline */
`;


const CTAButton = styled(Link)`
  background: #00f2ff;
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.9rem 2.2rem;
  border-radius: 9999px;
  text-shadow: 0 0 8px white;
  box-shadow: 0 0 25px rgba(0,255,255,0.8);
  transition: 0.3s ease;
  z-index: 3;

  &:hover {
    transform: scale(1.05);
    background: white;
  }
`;
const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.15) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
  pointer-events: none;
`;


const AboutGrounded = () => {
  return (
    <GroundedSection id="about-grounded" >
      <PanoramaBackground />
      <TextOverlay />
      <Content>
        <Paragraph>
          Jeg er en allsidig utvikler med en lidenskap for skyteknologi, brukeropplevelser og kunstig intelligens. Jeg kobler ideer til virkelighet med moderne verktøy og dyp forståelse av både backend og frontend.
        </Paragraph>
        
        <CTAButton href="#cv">Se min interaktive CV</CTAButton>

        
      </Content>
    </GroundedSection>
  );
};

export default AboutGrounded;
