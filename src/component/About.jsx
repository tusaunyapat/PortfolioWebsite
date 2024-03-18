import React from "react";
import Hero from "../assets/hero.png";

function About() {
  return (
    <div className="flex justify-center bg-primary text-white py-20">
      <div className="flex flex-col md:flex-row justify-center w-10/12 ">
        <div className="w-full md:w-8/12 flex flex-col text-justify ">
          <p className="text-[2rem] font-bold my-3 px-4 border-l-4 border-white">
            About Me
          </p>
          <p className="text-xl font-bold pt-4">Hi there! I'm Tus Aunyapat,</p>
          <p className="text-sm">
            <span>
              I am a second-year{" "}
              <span className="font-bold">Computer Engineering student</span> at
              Chulalongkorn University. My studies have led me to explore
              various interesting topics ranging from software and algorithms to
              hardware design. The ability to study and acquire diverse skills
              and knowledge in these areas has been invaluable for my
              development
            </span>
            <br />
            <br />
            <span>
              Currently, I have a special interest in{" "}
              <span className="font-bold">
                web development and data science.
              </span>{" "}
              Technology in these fields is crucial for creating diversity and
              efficiency in work. I am eager to learn more and gain a deeper
              understanding of the technology and applications in this
              expertise.
            </span>
            <br />
            <br />
            <span>
              Apart from academics, we can also meet in problem-solving and
              working together. I believe teamwork and knowledge exchange are
              essential for development and creativity. I hope to{" "}
              <span className="font-bold">
                meet everyone and build good relationships in the future!
              </span>
            </span>
          </p>
        </div>
        <div className="w-full md:w-5/12 hidden md:flex justify-center items-center ">
          <div className="absolute w-48 h-48 rounded-xl bg-blue-500 opacity-25"></div>
          <img src={Hero} alt="Hero Image" className="z-10 " />
        </div>
      </div>
    </div>
  );
}

export default About;
