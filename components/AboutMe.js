// components/AboutMe.js
// Norsk dokumentasjon: Komponent som viser informasjon om deg.
import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me / Om meg</h2>
      <p>
        I am a creative web developer with a passion for building vibrant and futuristic experiences.
        Jeg er en kreativ webutvikler som kombinerer teknisk dyktighet med kunstnerisk visjon.
      </p>
      <style jsx>{`
        .about-me {
          padding: 1rem;
          background-color: #fff;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
