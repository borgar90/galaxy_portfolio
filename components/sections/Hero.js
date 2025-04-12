import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import WordNetwork from '../WordNetwork/bg'; // Importer WordNetwork komponenten
import NebulaBackground from '../WordNetwork/NebulaBackground'; // Importer NebulaBackground komponenten
// 🔁 Slagord som rullerer
const slogans = [
  'Koder fremtiden.',
  'Bygger galakser i React.',
  'Transformerer ideer til opplevelser.',
  'Tryller med Next.js & Node.',
];

// 💡 Glødende 3D-heading
const NeonHeading = styled.h1`
  font-size: 4rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.neonCyan};
  text-shadow:
    0 0 2px #00ffff,
    0 0 5px #00ffff,
    0 0 8px #ff00ff,
    0 0 15px #ff00ff;
  transform: perspective(500px) rotateX(6deg);
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;


// 🔮 Fade inn animasjon for slagord
const glow = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const DynamicText = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.softWhite}; /* Endret til lysere farge */
  text-align: center;
  min-height: 3rem;
  animation: ${glow} 0.6s ease-in-out;
  transition: all 0.3s ease-in-out;
  margin-bottom: 3rem;
  text-shadow:
    0 0 4px #ff00ff,
    0 0 8px #00ffff,
    0 0 16px #ff00ff;
  z-index: 3;
`;


// 🤖 Avatar med neon-glød og sirkel
const Avatar = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.neonCyan};
  box-shadow:
    0 0 15px ${({ theme }) => theme.colors.neonCyan},
    0 0 30px ${({ theme }) => theme.colors.violet};
  overflow: hidden;

  img {
   
    object-fit: cover;
  }
`;

// 🌈 CTA-knapp med glow-effekt
const CTAButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.softWhite};
  background: linear-gradient(135deg, #00ffff, #ff00ff); /* hardkodet for kraftigere glow */
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow:
    0 0 10px #00ffff,
    0 0 20px #ff00ff,
    0 0 30px #00ffff;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow:
      0 0 20px #00ffff,
      0 0 40px #ff00ff;
  }

  z-index: 3;
`;


const HeroContainer = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: none;
  box-shadow: none;
  border: none;
  gap: .1rem;
  width: 100%;
  position: relative;
  z-index: 2;
  overflow: hidden;
  margin-bottom: 0;
`;


const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer id="hero" >
           <NebulaBackground /> {/* 🌌 Bakgrunn med ordnettverk */}
          {/* 🌌 Avatar (bytt src med din egen i /public/!) */}
        
          <Avatar data-avatar-center>
            <Image src="/borgar.png" alt="Borgar – profilbilde" width={160} height={160} />
          </Avatar>
          
          {/* 🪐 3D Neon-heading */}
          <NeonHeading>Hei, jeg er Borgar 👑</NeonHeading>

          {/* 🧠 Dynamisk slagord */}
          <DynamicText key={index}>{slogans[index]}</DynamicText>

          {/* 🚀 CTA-knapp til prosjekter */}
          <CTAButton href="#projects">Se mine prosjekter</CTAButton>
   
    </HeroContainer>
  );
};

export default Hero;
