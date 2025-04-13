// components/cv/Education.jsx
import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../sections/SectionWrapper';

const EducationSection = styled(SectionWrapper)`
  background: linear-gradient(to top, #1a1a2e, #2c3e50);
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.softWhite};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.neonCyan};
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00f2ff;
`;

const SchoolCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 12px rgba(0,255,255,0.1);
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.neonBlue};
`;

const Degree = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  color: ${({ theme }) => theme.colors.softWhite};
`;

const Year = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.softWhite};
  opacity: 0.7;
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <Title>Utdanning</Title>

      <SchoolCard>
        <SchoolName>Universitetet i Sør-øst Norge, campus Bø</SchoolName>
        <Degree>Bachelor i informatikk</Degree>
        <Year>2022 – 2025</Year>
      </SchoolCard>

      <SchoolCard>
        <SchoolName>GET-Academy</SchoolName>
        <Degree>IT-akademi for Webutvikling</Degree>
        <Year>2021</Year>
      </SchoolCard>
      <SchoolCard>
        <SchoolName>Høgskolen i Buskerud, avd Hønefoss</SchoolName>
        <Degree>Bachelor i dynamisk web-design</Degree>
        <Year>2010-2013</Year>
      </SchoolCard>
      <SchoolCard>
        <SchoolName>Hjalmar Johansen VGS</SchoolName>
        <Degree>VGS, Medier og kommunikasjon</Degree>
        <Year>2006-2009</Year>
      </SchoolCard>
      <SchoolCard>
        <SchoolName>Online kurs</SchoolName>
        <Degree>Alt innen web-utvikling, utvikling, design, Udemy, youtube</Degree>
        <Year>2005-2025</Year>
      </SchoolCard>
      
    </EducationSection>

  );
};

export default Education;
