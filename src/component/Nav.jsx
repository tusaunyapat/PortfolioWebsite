import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FiChevronRight } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

function NavItem({ to, children }) {
  return (
    <li>
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
}

function NavItemMobile({ to, children }) {
  return (
    <li className="px-4 py-3 bg-white">
      <Link to={to}>
        <p style={{ display: "inline-flex", alignItems: "center" }}>
          <FiChevronRight style={{ marginRight: "5px" }} />
          {children}
        </p>
      </Link>
    </li>
  );
}

function Nav() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIsOpened = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="flex flex-col shadow-md">
      <div className="h-12 bg-white flex flex-row justify-between items-center px-4">
        <div className="flex text-md w-8/12 py-4">
          <p className="font-bold">AUNYAPAT</p>
        </div>
        <ul className="md:flex flex-row justify-around w-8/12  hidden">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About Me</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/experience">Experience</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </ul>
        <button className="flex md:hidden p-4" onClick={toggleIsOpened}>
          <FiMenu />
        </button>
      </div>
      <ul className={` ${isOpened ? "flex" : "hidden"} flex-col md:hidden`}>
        <NavItemMobile to="/">Home</NavItemMobile>
        <NavItemMobile to="/about">About Me</NavItemMobile>
        <NavItemMobile to="/projects">Projects</NavItemMobile>
        <NavItemMobile to="/experience">Experience</NavItemMobile>
        <NavItemMobile to="/contact">Contact</NavItemMobile>
      </ul>
    </div>
  );
}

export default Nav;
