// styles/theme.js
// Norsk dokumentasjon: Dette er tema-konfigurasjonen for styled-components.
// Det definerer fargepalett, typografi og globale stiler for vibrant galaxy-oppsett.

const theme = {
  colors: {
    background: '#0d0221',
    backdrop: 'rgba(15, 15, 30, 0.6)',
    card: 'rgba(15, 15, 30, 0.5)',
    border: 'rgba(255, 255, 255, 0.05)',

    white: '#ffffff',
    softWhite: 'rgba(255, 255, 255, 0.9)',

    neonCyan: '#00ffff',
    magenta: '#ff00ff',
    violet: '#8e2de2',
    yellow: '#ffbf00',
    coral: '#ff0080',

    accent1: '#00ffff',
    accent2: '#ff00ff',
    accent3: '#ffbf00',

    shadowCyan: '0 0 30px rgba(0, 255, 255, 0.2)',
    shadowViolet: '0 0 30px rgba(142, 45, 226, 0.2)',
  },

  fonts: {
    heading: `'Orbitron', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  shadows: {
    softGlow: '0 0 10px rgba(0,255,255,0.15)',
    hardGlow: '0 0 20px rgba(255,0,255,0.4)',
    neonGlow: '0 0 25px #00ffff, 0 0 50px #ff00ff',
  },

  gradients: {
    radial: 'radial-gradient(circle at center, #1c0034, #000000)',
    linear: 'linear-gradient(135deg, #8e2de2, #ff0080)',
  },

  borderRadius: {
    default: '16px',
    full: '9999px',
  },

  transitions: {
    fast: 'all 0.2s ease-in-out',
    slow: 'all 0.4s ease-in-out',
  },
};

export default theme;
