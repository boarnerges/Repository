import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const navItems = [
  { href: "#home", label: "Home", Icon: AiOutlineHome },
  { href: "#about", label: "About", Icon: AiOutlineUser },
  { href: "#portfolio", label: "Portfolio", Icon: RiServiceFill },
  { href: "#cta", label: "Contact", Icon: BiMessageSquareDetail },
];

const Nav = () => {
  return (
    <nav className="bg-gray-900" aria-label="Primary navigation">
      {navItems.map((item) => {
        const Icon = item.Icon;

        return (
          <a key={item.href} href={item.href} aria-label={item.label}>
            <Icon />
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
