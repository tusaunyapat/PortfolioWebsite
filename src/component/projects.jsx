import React from "react";
import TempImage from "../assets/temp.png";
import CoffeeManPic from "../assets/coffeeman.png";
import Portfolio from "../assets/portfolio.png";

function Projects() {
  const projectData = [
    {
      id: 1,
      name: "CoffeeMan",
      tools: ["Java", "JavaFX", "OOP"],
      description:
        "This project involves developing a complex game using Java and JavaFX with an Object-Oriented Programming (OOP) approach. It was a part of Programming Methodology subject during my time at university.",
      hasGitRepo: true,
      gitRepo: "",
      image: CoffeeManPic,
    },
    {
      id: 2,
      name: "PortFolio",
      tools: ["React", "TailwindCSS"],
      description:
        "This is the website I use it as my portfolio and my personal information.",
      hasGitRepo: true,
      gitRepo: "",
      image: Portfolio,
    },
  ];

  const render = () => {
    return (
      <div className="flex flex-col md:flex-row">
        {projectData.map((proj) => (
          <div
            key={proj.id}
            className="flex flex-col sm:w-4/12 px-4 mr-4 shadow-xl my-2"
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="py-4 rounded-[1rem] h-56"
            />
            <p className="text-lg  font-bold py-1">{proj.name}</p>
            <div className="flex flex-row text-xs  ">
              {proj.tools.map((tool, index) => (
                <p key={index} className="px-3 py-1 border-2 mr-2 rounded-full">
                  {tool}
                </p>
              ))}
            </div>
            <p className="pt-2 text-justify text-sm h-28">{proj.description}</p>
            {proj.hasGitRepo ? (
              <a
                href={proj.gitRepo}
                className="p-2  w-full bg-white border-2 border-primarycom text-primarycom text-center rounded-lg hover:bg-primarycom hover:text-white my-4"
              >
                Repository
              </a>
            ) : null}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex justify-center bg-white  py-10">
      <div className="flex flex-col md:flex-row justify-center w-10/12 ">
        <div className="w-full flex flex-col text-justify justify-center">
          <p className="text-[2rem] font-bold my-3 px-4 border-l-4 border-primary text-start">
            Projects
          </p>
          <div className="flex flex-col justify-center my-10">{render()}</div>
          <div className="flex justify-center">
            {" "}
            {/* Added a flex container for centering */}
            <div className="px-4 py-1  text-center bg-white text-primary rounded-lg border-2 border-primary shadow-xl hover:bg-primary hover:text-white hover:border-primary">
              <p>See All Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
