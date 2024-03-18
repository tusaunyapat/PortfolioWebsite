import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

// Define the Social component outside of the Footer component
const Social = ({ link, icon }) => (
  <a href={link} target="_blank">
    <p className="text-white text-xl px-4">{icon}</p>
  </a>
);

function Footer() {
  return (
    <div className="bg-gray-800 h-12 flex justify-between items-center px-6">
      <p className="text-xl text-white font-bold text-center">AUNYAPAT</p>
      <div className="flex flex-row items-center text-white ">
        <Social icon={<FaGithub />} link="https://www.github.com/tusaunyapat" />
        <Social
          icon={<BsInstagram />}
          link="https://www.instagram.com/tusaunyapat?igsh=MXhnd2c5OHV4ZHBseQ%3D%3D&utm_source=qr"
        />
        <div className="flex flex-col">
          <p className="text-[0.75rem] text-center">Last update</p>
          <p className="text-[0.75rem] text-center">18-03-2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
