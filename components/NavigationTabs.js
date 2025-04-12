// components/NavigationTabs.js
// Norsk dokumentasjon: Navigasjonskomponent for tabs med kategorier, nå uten twin.macro. 
import React, { useState } from 'react';
import styled from 'styled-components';

// Container for tabs
const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  outline: none;
  background-color: ${({ active }) => (active ? '#ff4081' : '#333')};
  color: ${({ active }) => (active ? '#fff' : '#ccc')};
  
  &:hover {
    background-color: ${({ active }) => (active ? '#ff4081' : '#444')};
  }
`;

const NavigationTabs = ({ categories, onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const handleTabClick = (category) => {
    setActiveTab(category);
    onSelectCategory(category);
  };

  return (
    <TabsContainer>
      {categories.map((category) => (
        <TabButton
          key={category}
          active={activeTab === category}
          onClick={() => handleTabClick(category)}
        >
          {category}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default NavigationTabs;
