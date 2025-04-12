// components/Hero.js
// Norsk dokumentasjon: Hero-komponent med neoninspirert overskrift og en bakgrunn som kombinerer "galaxyBackground" med fargerikt overlay.
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const HeroContent = styled.div`
  z-index: 10; /* Sørg for at innhold ligger over partikler og ev. overlay */
  padding: 2rem;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  animation: pulse 3s infinite alternate;

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 20px #ff0080;
    }
    100% {
      transform: scale(1.05);
      box-shadow: 0 0 40px #00ffff;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(255, 0, 128, 0.1),
    transparent 70%
  );
  mix-blend-mode: screen; /* Skaper en neon-lignende glød */
  z-index: 5;
`;

const Hero = () => {
  return (
    <HeroSection>
      {/* Dersom du har et hero-bilde, kan du legge til Next.js Image her 
          Husk at Particlesbakgrunnen ligger i en egen GalaxyBackground-komponent */}
      <Overlay />
      <HeroContent>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Hi, I'm God – Creative Web Developer
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          I create vibrant, futuristic websites with a touch of fantasy and cutting edge technology.<br />
          Jeg skaper visuelle opplevelser som kombinerer kreativitet og solid teknisk bakgrunn.
        </p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
