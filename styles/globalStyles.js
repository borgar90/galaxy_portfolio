// styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Orbitron:wght@500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.softWhite};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.neonCyan};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.magenta};
      text-shadow: ${({ theme }) => theme.shadows.softGlow};
    }
  }

  ::selection {
    background: ${({ theme }) => theme.colors.magenta};
    color: black;
  }
`;

export default GlobalStyles;
