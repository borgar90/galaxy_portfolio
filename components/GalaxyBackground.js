// components/GalaxyBackground.js
// Norsk dokumentasjon: Interaktiv galaktisk bakgrunn med stjernestøv, glød og fantasy matrix-effekter.
// Bruker @tsparticles/react og @tsparticles/engine med en visuell eksplosjon av farger og dybde.

import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from '@tsparticles/react';
import styled from 'styled-components';

// Stil for å legge partikkellaget bak alt annet innhold
const GalaxyContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(ellipse at center, #0d0221 0%, #000000 100%);
`;

const GalaxyBackground = () => {
  // Initialiserer tsParticles-engine (kun på klient)
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Galaktisk konfigurasjon
  const particlesOptions = {
    fullScreen: { enable: false },
    background: {
      color: 'transparent'
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 200,
        density: { enable: true, area: 1200 }
      },
      color: {
        value: ['#ff0080', '#00ffff', '#8e2de2', '#ffbf00', '#ffffff']
      },
      shape: {
        type: ['circle', 'star', 'polygon', 'triangle', 'edge']
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 4 },
        random: true
      },
      rotate: {
        value: 0,
        direction: 'clockwise',
        animation: {
          enable: true,
          speed: 5,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
        trail: {
          enable: true,
          length: 10,
          fillColor: '#000'
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.1,
        width: 1
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab'
        },
        onClick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 180,
          links: { opacity: 0.5 }
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    detectRetina: true
  };

  return (
    <GalaxyContainer>
      <Particles id="galaxy" init={particlesInit} options={particlesOptions} />
    </GalaxyContainer>
  );
};

export default GalaxyBackground;
