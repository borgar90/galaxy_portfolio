// components/cv/WorkExperience.jsx
import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../SectionWrapper';

const Section = styled(SectionWrapper)`
  background: linear-gradient(to bottom, #1b1d3a, #121222);
  padding-top: 4rem;
  padding-bottom: 5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.neonCyan};
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 12px #00ffff;
`;

const Job = styled.div`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: rgba(255,255,255,0.03);
  border-left: 4px solid ${({ theme }) => theme.colors.magenta};
  border-radius: 12px;
`;

const Role = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.softWhite};
`;

const Company = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.neonCyan};
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.95rem;
  color: #ccc;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.softWhite};
  margin-top: 1rem;
`;

const WorkExperience = () => {
  return (
    <Section id="work">
      <Title>Arbeidserfaring</Title>

      <Job>
        <Role>Intern Fullstack Utvikler</Role>
        <Company>Ruby on rails dev hos Kaukus</Company>
        <Period>2024</Period>
        <Description>
          Intern utvikler. Jobbet både backend og front end i rails for Kaukus og Rubynor i Skien.
        </Description>
      </Job>

      <Job>
        <Role>Fullstack Utvikler</Role>
        <Company>Freelance & Konsulentprosjekter</Company>
        <Period>2014 – nåværende</Period>
        <Description>
          Utviklet webløsninger for startups og etablerte selskaper, inkludert e-handel, API-er, admin-paneler. Ofte énmannsband, men også team-lead i prosjekter.
        </Description>
      </Job>

      <Job>
        <Role>Webutvikler</Role>
        <Company>Borgar Design & Utvikling</Company>
        <Period>2009 – 2014</Period>
        <Description>
          Leverte skreddersydde nettsider med fokus på SEO, UX og ytelse. Designet også logoer og bedriftsprofiler. Jobbet tett med lokale bedrifter.
        </Description>
      </Job>

      <Job>
        <Role>Bartender og Salg</Role>
        <Company>Diverse arbeidserfaringer</Company>
        <Period>2006 – 2009</Period>
        <Description>
          Jobbet med mennesker, tempo og service. Erfaringen bidro sterkt til mine mellommenneskelige ferdigheter og forståelse for brukerbehov.
        </Description>
      </Job>
    </Section>
  );
};

export default WorkExperience;
