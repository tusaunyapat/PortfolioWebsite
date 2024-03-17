import React from "react";
import { useState } from "react";

function Footer() {
  return (
    <div className="bg-grey h-12 flex justify-between items-center px-6">
      <p className="text-xl font-bold text-center">AUNYAPAT</p>
      <div className="flex flex-col">
        <p className="text-[0.75rem] text-center">last update</p>
        <p className="text-[0.75rem] text-center">18-03-2024</p>
      </div>
    </div>
  );
}

export default Footer;
