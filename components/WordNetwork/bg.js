// components/WordNetwork/index.js
// Norsk dokumentasjon: Avatar sendes som child til WordNetwork. Stjerner, teknologi-logoer og puls-animasjoner vises programmatisk.

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import NebulaBackground from '../WordNetwork/NebulaBackground';

const Container = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(10,10,30,0.9) 0%, rgba(0,0,0,1) 100%);
  pointer-events: none;
  z-index: 0;
`;

const NetworkCanvas = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: visible;
`;

const Word = styled(motion.div)`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neonCyan};
  text-shadow: 0 0 8px ${({ theme }) => theme.colors.magenta};
  pointer-events: none;
`;

const keywords = ['React', 'Node.js', 'Next.js', 'Tailwind', 'MongoDB', 'UI/UX', 'Docker', 'Python', 'Ruby', 'Rails', 'SEO', 'Fullstack', 'Supabase', '3D Web'];

const LogoNebula = ({ x, y, color, radius = 80 }) => {
  const layers = 5;
  const noisePoints = 20;

  return (
    <>
      {[...Array(layers)].map((_, layer) => {
        const scale = radius * (1 + layer * 0.2);
        const opacity = 0.05 + (0.05 * (layers - layer)) / layers;
        return [...Array(noisePoints)].map((_, i) => {
          const angle = Math.random() * 2 * Math.PI;
          const r = Math.random() * scale;
          const cx = x + Math.cos(angle) * r;
          const cy = y + Math.sin(angle) * r;

          return (
            <circle
              key={`nebula-${layer}-${i}`}
              cx={cx}
              cy={cy}
              r={Math.random() * 20 + 10}
              fill={color}
              opacity={opacity}
              style={{
                filter: 'blur(40px)',
                transform: 'translate3d(0,0,0)',
                transition: 'opacity 0.8s ease-in-out',
              }}
            />
          );
        });
      })}
    </>
  );
};



const generateGridNodes = (cols, rowY) => {
  const nodes = [];
  const screenWidth = window.innerWidth;
  const spacingX = screenWidth / (cols + 1);
  for (let c = 1; c <= cols; c++) {
    const x = spacingX * c;
    const y = rowY;
    nodes.push({ x, y });
  }
  return nodes;
};

const WordNetwork = ({ children }) => {
  const avatarRef = useRef();
  const [activeWord, setActiveWord] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState([]);
  const [glowLines, setGlowLines] = useState([]);
  const [activeNodeIndex, setActiveNodeIndex] = useState(null);
  const [logoPositions, setLogoPositions] = useState([]);
  const [stars, setStars] = useState([]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const newStars = [...Array(150)].map((_, i) => ({
      cx: Math.random() * window.innerWidth,
      cy: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.5,
      fill: ['#ffffff', '#00ffff', '#ff00ff'][i % 3],
      opacity: Math.random() * 0.4 + 0.3,
    }));
  
    setStars(newStars);
  }, []);
  useEffect(() => {
    setLogoPositions([
      { src: '/logos/react.svg', x: 100, y: 100, width: 48, height: 48, glowColor: '#00d8ff' },
      { src: '/logos/javascript.svg', x: window.innerWidth / 2 - 420, y: 110, width: 42, height: 42, glowColor: '#f0db4f' },
      { src: '/logos/typescript.svg', x: window.innerWidth / 2 + 320, y: 110, width: 42, height: 42, glowColor: '#007acc' },
      { src: '/logos/python.svg', x: window.innerWidth - 340, y: 80, width: 48, height: 48, glowColor: '#ffd43b' },
      { src: '/logos/java.svg', x: 300, y: window.innerHeight - 280, width: 78, height: 78, glowColor: '#f89820' },
      { src: '/logos/ruby.svg', x: 140, y: window.innerHeight - 200, width: 48, height: 48, glowColor: '#cc0000' },
      { src: '/logos/rails.svg', x: window.innerWidth - 220, y: window.innerHeight - 300, width: 60, height: 48, glowColor: '#cc0000' }
    ]);
  }, []);
  
  

  useEffect(() => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + window.scrollX;
    const rowY = rect.bottom + 180 + window.scrollY;
    setNodes(generateGridNodes(7, rowY));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!nodes.length || !avatarRef.current) return;

      const word = keywords[Math.floor(Math.random() * keywords.length)];
      const target = nodes[Math.floor(Math.random() * nodes.length)];

      const rect = avatarRef.current.getBoundingClientRect();
      const avatarCenter = {
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + rect.height / 2 + window.scrollY,
      };

      const path = [avatarCenter, { x: target.x, y: avatarCenter.y }, target];

      const id = `${Date.now()}`;
      const newLines = path.map((_, i) => i < path.length - 1 ? {
        from: path[i],
        to: path[i + 1],
        id: `${id}-${i}`
      } : null).filter(Boolean);

      newLines.forEach((line, idx) => {
        setTimeout(() => {
          setGlowLines((prev) => [...prev, line]);
          if (idx === newLines.length - 1) {
            setTimeout(() => {
              setPosition(target);
              setActiveWord(word);
              setActiveNodeIndex(nodes.findIndex(n => n.x === target.x && n.y === target.y));
            }, 400);
          }
        }, idx * 400);
      });

      setTimeout(() => {
        setGlowLines((prev) => prev.filter((line) => !line.id.startsWith(id)));
        setActiveWord(null);
        setActiveNodeIndex(null);
      }, newLines.length * 400 + 1200);
    }, 4000);

    return () => clearInterval(interval);
  }, [nodes]);

  return (
    <>
     
      <Container>
      
        {children && React.cloneElement(children, { ref: avatarRef })}

        <NetworkCanvas>
        
          
            {stars.map((star, i) => (
              <circle
                key={`bg-star-${i}`}
                cx={star.cx}
                cy={star.cy}
                r={star.r}
                fill={star.fill}
                opacity={star.opacity}
              />
            ))}

          {logoPositions.map((logo, i) => (
            <React.Fragment key={`logo-${i}`}>
              <LogoNebula
                x={logo.x + logo.width / 2}
                y={logo.y + logo.height / 2}
                color={logo.glowColor}
              />
              <image
                href={logo.src}
                x={logo.x}
                y={logo.y}
                width={logo.width}
                height={logo.height}
                style={{
                  filter: 'drop-shadow(0 0 6px #00ffff) drop-shadow(0 0 12px #ff00ff)',
                  opacity: 1
                }}
              />
            </React.Fragment>
          ))}

          {/* 🔵 Noder */}
          {nodes.map((node, idx) => (
            <circle
              key={`node-${idx}`}
              cx={node.x}
              cy={node.y}
              r={40 + Math.sin(Date.now() / 1000 + i) * 2}
              fill={idx === activeNodeIndex ? '#ffffff' : '#00ffff'}
              stroke="#ff00ff"
              strokeWidth="0.5"
              style={{
                filter: idx === activeNodeIndex
                  ? 'drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 12px #00ffff)'
                  : 'drop-shadow(0 0 2px #00ffff) drop-shadow(0 0 4px #ff00ff)'
              }}
            />
          ))}

          {/* ⚡ Energi-linjer */}
          {glowLines.map((line) => (
            <line
              key={line.id}
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              stroke="#00ffff"
              strokeWidth="2"
              style={{ filter: 'drop-shadow(0 0 6px #00ffff) drop-shadow(0 0 8px #ff00ff)' }}
            />
          ))}
        </NetworkCanvas>

        {/* 💬 Dynamisk ordvisning */}
        <AnimatePresence>
          {activeWord && (
            <Word
              key={activeWord}
              style={{ top: position.y, left: position.x }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {activeWord}
            </Word>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};

export default WordNetwork;
