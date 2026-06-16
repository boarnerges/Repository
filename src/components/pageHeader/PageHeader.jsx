import React from 'react';
import './pageHeader.css';
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";

const PageHeader = ({ title, subtitle, kicker, bgImage }) => {
  return (
    <div className="page-header">
      {bgImage && (
        <div className="page-header__bg-wrap">
          <div className="page-header__bg-overlay"></div>
          <img src={bgImage} alt="" className="page-header__bg-image" loading="eager" />
        </div>
      )}

      <div className="container" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <BoarnergesLogo />
      </div>

      <div className="container">
        <div 
          className="page-header__content"
        >
          {kicker && <p className="section-kicker">{kicker}</p>}
          <h1 className="page-header__title">{title}</h1>
          {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
          <div className="page-header__line"></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
