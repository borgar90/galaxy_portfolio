import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(to bottom, #0f0f1f, #1c1c2b);
  padding: 5rem 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.softWhite || '#eee'};
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.neonCyan || '#00ffff'};
  text-shadow: 0 0 12px ${({ theme }) => theme.colors.neonCyan || '#00ffff'};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    background: #1f1f2f;
    border: 1px solid #444;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    border-radius: 8px;

    &:focus {
      border-color: ${({ theme }) => theme.colors.neonCyan || '#00ffff'};
      outline: none;
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.neonCyan || '#00ffff'};
    }
  }

  button {
    background: ${({ theme }) => theme.colors.neonCyan || '#00ffff'};
    color: black;
    font-weight: bold;
    padding: 1rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    box-shadow: 0 0 18px ${({ theme }) => theme.colors.neonCyan || '#00ffff'};

    &:hover {
      background: #fff;
      transform: scale(1.05);
    }
  }
`;

const ContactSection = () => {
  return (
    <Section id="contact">
      <Title>Ta kontakt</Title>
      <Description>
        Har du et prosjekt i tankene? Trenger du hjelp med utvikling, design eller AI? La oss ta en prat.
      </Description>
      <ContactForm onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Navn" required />
        <input type="email" name="email" placeholder="E-post" required />
        <textarea name="message" rows="5" placeholder="Din melding" required />
        <button type="submit">Send melding</button>
      </ContactForm>
    </Section>
  );
};

export default ContactSection;
