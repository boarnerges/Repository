import React from 'react';
import { motion } from 'motion/react';
import './expertise.css';

const expertiseData = [
  {
    title: "Software Engineering",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    description: "Architecting scalable systems and resilient full-stack applications."
  },
  {
    title: "Technical Product Management",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
    description: "Bridging product vision with engineering constraints to ship high-impact software."
  },
  {
    title: "AI & Agents",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
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
          <motion.div 
            key={item.title}
            className="expertise-card"
            data-reveal
            style={{ "--reveal-delay": `${index * 100}ms` }}
          >
            <div className="expertise-image-wrap">
              <div className="expertise-overlay"></div>
              <img src={item.image} alt={item.title} />
              <div className="expertise-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
