// components/sections/ServicesSection.jsx
import React from 'react';
import styled from 'styled-components';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';

const Container = styled.div`
  background: linear-gradient(to bottom, rgba(10, 20, 40, 0.9), rgba(0, 50, 80, 0.95));
  
  padding: 3rem 1rem;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceBox = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.25);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  }
`;

const ServiceImage = styled(Image)`
  border-radius: 12px;
  margin-bottom: 1rem;
  object-fit: cover;
  object-position: top;
  height: 300px;
  width: 100%;
`;


const Title = styled.h3`
  font-size: 1.6rem;
  color: #aefcff;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.softWhite};
  font-size: 1rem;
`;

const ServicesSection = () => (
  
    <Container>
      <Grid>
        <ServiceBox>
          <ServiceImage src="/images/cloud.png" width={320} height={180} alt="Cloud wrench" />
          <Title>Skytransformasjon</Title>
          <Paragraph>
            Jeg hjelper deg å løfte systemer og data inn i skyen. Optimalisering, migrering og modernisering med kraften fra moderne web.
          </Paragraph>
        </ServiceBox>


        <ServiceBox>
          <ServiceImage src="/images/aviator.png" width={320} height={180} alt="Aviator" />
          <Title>Utforsk nye høyder</Title>
          <Paragraph>
            Enten det er nettsider, apper eller tjenester – jeg er din pilot. Sammen koder vi retningen og skyter mot stjernene.
          </Paragraph>
        </ServiceBox>

        
        <ServiceBox>
          <ServiceImage src="/images/astro.png" width={320} height={180} alt="Astronaut" />
          <Title>AI og Agent-teknologi</Title>
          <Paragraph>
            Med AI kan vi skyte fart. Jeg bygger personlige AI-assistenter og agenter som jobber for deg – alltid tilgjengelig.
          </Paragraph>
        </ServiceBox>
      </Grid>
    </Container>
  
);

export default ServicesSection;
