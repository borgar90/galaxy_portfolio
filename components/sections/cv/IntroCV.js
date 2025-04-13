import React from 'react';
import styled from 'styled-components';

const IntroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('/images/purple-nebula.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const Content = styled.div`
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ExploreButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #9b59b6;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const IntroCV = () => {
  return (
    <IntroSection>
      <Content>
        <Title>Borgar</Title>
        <Subtitle>Velkommen til min interaktive CV</Subtitle>
        <ExploreButton>Utforsk mer</ExploreButton>
      </Content>
    </IntroSection>
  );
};

export default IntroCV;
