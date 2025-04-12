import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import projectsData from './data/projects.json';

const Section = styled.section`
  background: linear-gradient(to top, #0a0f1f, #1a1f30);
  padding: 6rem 2rem;
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.neonCyan};
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00f2ff;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${({ active }) => (active ? '#00f2ff' : '#1a1f30')};
  color: ${({ active }) => (active ? '#000' : '#fff')};
  padding: 0.6rem 1.4rem;
  border: 2px solid #00f2ff;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #00f2ff;
    color: #000;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #1c2537;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 12px rgba(0, 242, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ image }) => `url(${image}) center / cover no-repeat`};
`;

const CardContent = styled.div`
  padding: 1.4rem;

  h3 {
    color: #00f2ff;
    margin-bottom: 0.6rem;
  }

  p {
    color: #ccc;
    font-size: 1rem;
  }

  a {
    margin-top: 1rem;
    display: inline-block;
    color: #00f2ff;
    text-decoration: underline;
    font-weight: bold;
  }
`;

const Projects = () => {
  const [category, setCategory] = useState('alle');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (category === 'alle') {
      setFiltered(projectsData);
    } else {
      setFiltered(projectsData.filter(p => p.category === category));
    }
  }, [category]);

  const allCategories = ['alle', ...new Set(projectsData.map(p => p.category))];

  return (
    <Section id="projects">
      <Title>Mine Prosjekt</Title>

      <FilterBar>
        {allCategories.map((cat, i) => (
          <FilterButton
            key={i}
            active={category === cat}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </FilterBar>

      <Grid>
        {filtered.map(project => (
          <Card key={project.id}>
            <CardImage image={project.image} />
            <CardContent>
              <h3>{project.title}</h3>
              <p>{project.short_desc}</p>
              <a href={project.link}>Se mer</a>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
