import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/my_picture.jpg";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <p> Hello I'm</p>
        <h1>Olusegun OWOLABI</h1>
        <p className="text-light">FrontEnd Developer</p>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#footer" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
