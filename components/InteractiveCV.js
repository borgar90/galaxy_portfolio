// components/InteractiveCV.js
// Norsk dokumentasjon: En interaktiv CV som demonstrerer kreativitet og teknisk dyktighet.
import React from 'react';

const InteractiveCV = () => {
  return (
    <section className="interactive-cv">
      <h2>Interactive CV</h2>
      <p>
        Here you can interact with my timeline, skills and experiences.
        Her kan du utforske min erfaring, utdanning og ferdigheter på en interaktiv måte.
      </p>
      {/* Her kan du implementere interaktiv visualisering, f.eks. en tidslinje eller grafer */}
      <div className="cv-timeline">
        {/* Dummy timeline data */}
        <ul>
          <li><strong>2020:</strong> Started freelance career</li>
          <li><strong>2021:</strong> Developed major projects in various tech stacks</li>
          <li><strong>2022:</strong> Collaborated in large team projects</li>
        </ul>
      </div>
      <style jsx>{`
        .interactive-cv {
          background: linear-gradient(135deg, #1f1c2c, #928dab);
          color: #fff;
          padding: 2rem;
          border-radius: 8px;
          margin: 1rem 0;
        }
      `}</style>
    </section>
  );
};

export default InteractiveCV;
