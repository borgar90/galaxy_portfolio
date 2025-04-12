import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import dynamic from 'next/dynamic';
// 🔧 Stilsetting
const Wrapper = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #0c0c1d, #151537);
  color: white;
`;

const TimelineBar = styled.div`
  width: 6px;
  height: 400px;
  margin: 0 auto;
  background-color: #e5e5e5;
  transition: background-color 0.3s ease;
`;

const TimelineItem = styled.div`
  margin: 2rem auto;
  text-align: center;
  max-width: 600px;
`;

const Year = styled.h3`
  font-size: 1.5rem;
  color: #53b374;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

// 🔁 Din komponent
const TimelineShowcaseComponent = () => {
  const timelineRef = useRef(null);

  const Timeline = ({ setObserver, callback }) => {
    useEffect(() => {
      if (timelineRef.current) {
        setObserver(timelineRef.current, callback);
      }
    }, [setObserver, callback]);

    return (
      <TimelineBar
        ref={timelineRef}
        className="timeline"
      />
    );
  };

  const onCallback = () => {
    console.log("🌀 Element er i fokus (midt på skjermen)");
    // Du kan trigge animasjoner eller effekter her
  };

  const timelineData = [
    { year: 2005, desc: "Laget min første HTML-side med blinkende tekst." },
    { year: 2006, desc: "Lagde Flash-nettside for togfirma med ActionScript3." },
    { year: 2007, desc: "Begynte å bruke PHP + MySQL." },
    { year: 2008, desc: "Begynte å selge nettsider / lage webshop ." },
    { year: 2008, desc: "Freelancer og WordPress utvikler." },
    { year: 2013, desc: "Bygget Facebook app med cakePHP" },
    { year: 2014, desc: "Driftet webshop som solgte universal-såpe" },
    { year: 2022, desc: "Bygget Sjokoladerating app i react native: expo." },
    { year: 2023, desc: "Bygget sosialt nettverk for sjakk, med next.js TypeScript mongoDB Socket.io." },
    { year: 2025, desc: "AI og 3D på nett. Nye verdener bygges." },
  ];

  return (
    <Wrapper>
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <Year>{item.year}</Year>
          <Description>{item.desc}</Description>
        </TimelineItem>
      ))}
    </Wrapper>
  );
};



const TimelineShowcase = dynamic(() => Promise.resolve(TimelineShowcaseComponent), {
  ssr: false,
});


export default TimelineShowcase;
