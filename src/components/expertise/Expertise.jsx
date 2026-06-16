import React from 'react';
import './expertise.css';

const expertiseData = [
  {
    title: "Software Engineering",
    image: "/images/expertise/expertise-1.jpg",
    description: "Architecting scalable systems and resilient full-stack applications."
  },
  {
    title: "Technical Product Management",
    image: "/images/expertise/expertise-2.jpg",
    description: "Bridging product vision with engineering constraints to ship high-impact software."
  },
  {
    title: "AI & Agents",
    image: "/images/expertise/expertise-3.jpg",
    description: "Designing intelligent systems that reason, act, and execute complex intent."
  }
];

const Expertise = () => {
  return (
    <section className="expertise-section container">
      <div className="expertise-header" data-reveal>
        <p className="section-kicker">Specialization</p>
        <h2>Core focus areas representing my work and interests.</h2>
      </div>

      <div className="expertise-grid">
        {expertiseData.map((item, index) => (
          <div 
            key={item.title}
            className="expertise-card"
            data-reveal
            style={{ "--reveal-delay": `${index * 100}ms` }}
          >
            <div className="expertise-image-wrap">
              <div className="expertise-overlay"></div>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="expertise-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
