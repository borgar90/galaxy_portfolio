// components/sections/SectionWrapper.js
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 6rem 2rem;
  max-width: 100%;
  margin: 0 auto 6rem auto;
  background: ${({ theme }) => theme.colors.card};
  backdrop-filter: blur(10px);
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.shadowCyan};
`;

export default SectionWrapper;
