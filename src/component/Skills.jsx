import React from "react";
import { FaCode, FaMicrochip } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

function Skills() {
  const Skill = ({ icon, name }) => {
    return (
      <div className="flex flex-col justify-center items-center w-full sm:w-[32%] bg-gray-200 py-8 my-1 px-2">
        <p className="text-2xl py-2">{icon}</p>
        <p className="text-lg py-2 font-bold">{name}</p>
      </div>
    );
  };
  return (
    <div className="flex justify-center bg-white  py-10">
      <div className="flex flex-col md:flex-row justify-center w-10/12 ">
        <div className="w-full flex flex-col text-justify justify-center">
          <p className="text-[2rem] font-bold my-3 px-4 border-l-4 border-primary text-start">
            Skills
          </p>
          <div className="flex flex-col sm:flex-row justify-between p-6 flex-wrap">
            <Skill icon={<FaCode />} name="Web development" />
            <Skill icon={<GoGraph />} name="Data analytics" />
            <Skill icon={<FaMicrochip />} name="Embedded System" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
