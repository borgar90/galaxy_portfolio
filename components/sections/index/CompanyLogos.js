// components/sections/AviatorIntro.js
import React from 'react';
import SectionWrapper from '../SectionWrapper';
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
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 100px;
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


const logoPaths = [
  { src: '/logos/react.svg', color: '#00d8ff' },
  { src: '/logos/javascript.svg', color: '#f7df1e' },
  { src: '/logos/typescript.svg', color: '#007acc' },
  { src: '/logos/python.svg', color: '#3776ab' },
  { src: '/logos/ruby.svg', color: '#cc0000' },
  { src: '/logos/rails.svg', color: '#d30000' },
  { src: '/logos/java.svg', color: '#f89820' },
];

const CompanyLogos = () => (
  <div
  className="hidden lg:flex flex-row gap-5 justify-around bg-stone-100 m-0 py-4 max-h-[15%] overflow-hidden"
  style={{ position: 'relative', width: '100%' }}
>
      {logoPaths && logoPaths.map((logo, index) => (
        <StyledImage
          key={index}
          src={logo.src}
          alt={`Logo ${index}`}
          width={40}
          height={40}
        />
      ))} 


    </div>
);

export default CompanyLogos;
