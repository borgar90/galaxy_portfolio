// components/sections/About.js
import React from 'react';
import SectionWrapper from './SectionWrapper';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.neonCyan};
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadows.neonGlow};
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.softWhite};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  return (
   <>
      <Title>Om meg</Title>
      <Paragraph>
        Jeg er en multidimensjonal utvikler som skaper opplevelser med koder, farger og kreativ kraft. Med 18 års erfaring bygger jeg fremtiden i React, Next, Node, og alt som gløder.
      </Paragraph>
      </>
  );
};

export default About;
