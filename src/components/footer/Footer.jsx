import React from 'react';
import './footer.css';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <motion.div 
          className="footer__logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="footer__logo-text">BOARNERGES</a>
          <p>Innovating through code and AI automation.</p>
        </motion.div>

        <motion.div 
          className="footer__socials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github"><Github size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
          <a href="mailto:contact@example.com" aria-label="Email"><Mail size={20} /></a>
        </motion.div>

        <motion.div 
          className="footer__copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <small>&copy; {new Date().getFullYear()} Boarnerges. All rights reserved.</small>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
