import React, { useState } from "react";

function Experience() {
  const [exp, setExp] = useState([
    {
      id: 1,
      title: "POSN Computer Camp ",
      time: "2020",
      description:
        "I've joined the POSN Computer Camp, learning C++-focused curriculum on data structures and algorithms. Excited to learn and grow!",
    },
    {
      id: 2,
      title: "Entering University",
      time: "2022",
      description:
        "Faculty of Engineering, Computer Engineering. Now, I'm in second year. ",
    },
    {
      id: 3,
      title: "Start learning Web Development",
      time: "2022",
      description:
        "I start learning HTML, CSS, JS and then move to React with Vite. Including with framer motion and tailwindCSS.",
    },
  ]);

  const render = () => {
    return (
      <div className="items-center flex flex-col justify-center py-5">
        <div className="w-11/12">
          {exp.map((event) => (
            <div
              key={event.id}
              className={`mb-8 flex justify-between ${
                event.id % 2 === 0 ? "sm:flex-row-reverse" : ""
              } items-center w-full ${
                event.id % 2 === 0
                  ? "right-timeline"
                  : "left-timeline md:right-timeline"
              }`}
            >
              <div className="order-1 w-5/12 hidden sm:flex "></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full mx-2">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {event.id}
                </h1>
              </div>
              <div className="order-1 bg-grey rounded-lg shadow-xl w-8/12 sm:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-lg">
                  {event.title}
                </h3>
                <p className="text-gray-700 leading-tight text-sm ">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center bg-white  py-10">
      <div className="flex flex-col md:flex-row justify-center w-10/12 ">
        <div className="w-full flex flex-col text-justify">
          <p className="text-[2rem] font-bold my-3 px-4 border-l-4 border-primary text-start">
            Journey and Experience
          </p>
          <div className="flex flex-col justify-center ">{render()}</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
