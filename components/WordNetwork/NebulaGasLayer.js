// components/WordNetwork/NebulaGasLayer.js
// Norsk dokumentasjon: Render subtil, vibrerende og glødende gasskyer (nebulae) bak stjerner basert på deres farge.

import React from 'react';

const GasCloud = ({ x, y, color, id }) => {
  const layers = 3;
  const points = 10;

  return (
    <g>
      {[...Array(layers)].map((_, l) => {
        const radius = 60 + l * 30;
        const opacity = 0.06 * (layers - l);
        return [...Array(points)].map((_, p) => {
          const angle = Math.random() * Math.PI * 2;
          const dist = radius * (0.3 + Math.random() * 0.7);
          const cx = x + Math.cos(angle) * dist;
          const cy = y + Math.sin(angle) * dist;

          return (
            <circle
              key={`${id}-${l}-${p}`}
              cx={cx}
              cy={cy}
              r={Math.random() * 30 + 20}
              fill={color}
              opacity={opacity}
              style={{ filter: 'blur(45px)', transition: 'opacity 1.5s ease' }}
            />
          );
        });
      })}
    </g>
  );
};

const NebulaGasLayer = ({ stars }) => {
  // Gruppér stjerner etter farge
  const grouped = stars.reduce((acc, star) => {
    if (!acc[star.fill]) acc[star.fill] = [];
    acc[star.fill].push(star);
    return acc;
  }, {});

  return (
    <g>
      {Object.entries(grouped).map(([color, group], idx) => (
        group.map((s, i) => (
          <GasCloud key={`nebula-${idx}-${i}`} x={s.cx} y={s.cy} color={color} id={`n-${idx}-${i}`} />
        ))
      ))}
    </g>
  );
};

export default NebulaGasLayer;
