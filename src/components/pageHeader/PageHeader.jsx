import React from 'react';
import { motion } from 'motion/react';
import './pageHeader.css';

const PageHeader = ({ title, subtitle, kicker, bgImage }) => {
  return (
    <div className="page-header">
      {bgImage && (
        <div className="page-header__bg-wrap">
          <div className="page-header__bg-overlay"></div>
          <img src={bgImage} alt="" className="page-header__bg-image" />
        </div>
      )}
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-header__content"
        >
          {kicker && <p className="section-kicker">{kicker}</p>}
          <h1 className="page-header__title">{title}</h1>
          {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
          <div className="page-header__line"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
