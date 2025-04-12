// components/ProjectsCrud.js
// Norsk dokumentasjon: Komponent for CRUD-operasjoner på prosjekter, stilisert med Styled Components og Tailwind-klasser.
import React, { useState } from 'react';
import styled from 'styled-components';

// Eksempeldata for prosjekter
const initialProjects = [
  { id: 1, title: 'Project One', category: 'Web', description: 'A amazing web project.' },
  { id: 2, title: 'Project Two', category: 'App', description: 'A wonderful mobile app.' },
];

const Container = styled.div`
  padding: 1.5rem;
  background-color: #f7fafc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background-color: #3182ce;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:hover {
    background-color: #2b6cb0;
  }
`;

const ProjectsCrud = ({ selectedCategory }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({ title: '', category: '', description: '' });

  // Funksjon for å legge til nytt prosjekt
  const addProject = () => {
    const project = { ...newProject, id: Date.now() };
    setProjects([...projects, project]);
    setNewProject({ title: '', category: '', description: '' });
  };

  // Funksjon for å slette et prosjekt
  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Filtrer prosjektene basert på valgt kategori, dersom angitt
  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-4">Projects ({selectedCategory || 'All'})</h2>
      <ProjectList>
        {filteredProjects.map(project => (
          <ProjectItem key={project.id}>
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <small className="text-sm text-gray-600">{project.category}</small>
            <div className="mt-2">
              <Button onClick={() => deleteProject(project.id)}>Delete</Button>
            </div>
          </ProjectItem>
        ))}
      </ProjectList>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Add New Project</h3>
        <Input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Category"
          value={newProject.category}
          onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
        />
        <Textarea
          placeholder="Description"
          rows="3"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <Button onClick={addProject}>Add Project</Button>
      </div>
    </Container>
  );
};

export default ProjectsCrud;
