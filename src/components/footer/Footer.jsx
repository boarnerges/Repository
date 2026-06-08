import React from 'react';
import './footer.css';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <motion.div 
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="footer__logo-text">BOARNERGES</Link>
            <p className="footer__tagline">
              Engineering the future of intent through agentic software, 
              product-led strategy, and precision-engineered systems.
            </p>
            <div className="footer__socials">
              <a href="https://github.com/boarnerges" target="_blank" rel="noreferrer" aria-label="Github"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/owolabi-olusegun/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://x.com/boarnerges_olu" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=olujawo1996@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><Mail size={18} /></a>
            </div>
          </motion.div>

          <motion.div 
            className="footer__nav"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Sitemap</h3>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer__nav"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Capabilities</h3>
            <ul className="footer__links">
              <li><Link to="/ai-automation">AI & Agents</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer__contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Collaboration</h3>
            <p>Ready to architect your next high-impact system?</p>
            <Link to="/contact" className="footer__cta">Start a Conversation</Link>
          </motion.div>
        </div>

        <div className="footer__bottom">
          <motion.div 
            className="footer__copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <small>&copy; {new Date().getFullYear()} Boarnerges. Precision-engineered in Abuja.</small>
          </motion.div>
          <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
