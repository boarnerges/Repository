import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setACtiveNav] = useState("#");
  return (
    <nav className="bg-gray-900">
      <a
        href="#"
        onClick={() => setACtiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setACtiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        onClick={() => setACtiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
      <a
        href="#cta"
        onClick={() => setACtiveNav("#cta")}
        className={activeNav === "#cta" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
