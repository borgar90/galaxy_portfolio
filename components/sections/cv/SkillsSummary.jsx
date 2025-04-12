// components/cv/SkillsSummary.jsx
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// 🌌 Container med "over himmelen"-stil
const Section = styled.section`
  background: linear-gradient(to bottom, #1a1a2e, #2f2e41);
  padding: 6rem 2rem;
  color: white;
  position: relative;
  z-index: 1;
`;

// 🧠 Seksjonstittel
const Title = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.neonCyan || '#00f2ff'};
  text-shadow: 0 0 10px #00f2ff;
`;

// 💼 Grid med kort for hver ferdighet
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

// 🧩 Ferdighetskort
const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.15);
  }
`;

const Icon = styled.div`
  margin-bottom: 1rem;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 48px;
    width: auto;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.softWhite};
`;

const SkillDesc = styled.p`
  font-size: 0.95rem;
  color: #ccc;
`;

// 💾 Data (kan også flyttes til .json eller hentes eksternt)
const skills = [
  {
    title: 'React & Next.js',
    desc: 'Moderne frontend med fokus på ytelse, UI og brukeropplevelse.',
    icon: '/logos/react.svg',
  },
  {
    title: 'Node.js & Express',
    desc: 'Robuste API-er og backend-logikk bygget med hastighet og struktur.',
    icon: '/logos/javascript.svg',
  },
  {
    title: 'Python & AI',
    desc: 'Automatisering, datastrukturer og AI-modeller for fremtidens løsninger.',
    icon: '/logos/python.svg',
  },
  {
    title: 'Ruby & Rails',
    desc: 'Webutvikling med fokus på effektivitet og konvensjon over konfigurasjon.',
    icon: '/logos/rails.svg',
  },
  {
    title: 'Java',
    desc: 'Enterprise-løsninger og robust programmeringsgrunnmur.',
    icon: '/logos/java.svg',
  },
  {
    title: 'TypeScript',
    desc: 'Tryggere JavaScript og bedre skalering i større kodebaser.',
    icon: '/logos/typescript.svg',
  },
];

const SkillsSummary = () => {
  return (
    <Section id="skills">
      <Title>Kjerneferdigheter</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <Icon>
              <Image src={skill.icon} alt={skill.title} width={48} height={48} />
            </Icon>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillDesc>{skill.desc}</SkillDesc>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default SkillsSummary;
