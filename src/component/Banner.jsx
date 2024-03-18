import React from "react";
import Hero from "../assets/hero.png";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-center">
      <div className="relative w-6/12 flex justify-center items-center ">
        <div className="absolute w-60 h-60 rounded-xl bg-blue-500 opacity-25"></div>
        <img src={Hero} alt="Hero Image" className="z-10 w-3/4 p-5" />
      </div>

      <div className="text-center sm:text-left flex flex-col justify-around md:justify-center  items-center sm:items-start  md:w-6/12 w-19/12  py-10 md:py-0">
        <p className="text-[2rem] sm:text-5xl sm:py-3 pt-8 ">
          <span className="font-bold ">Hi, I'm </span>
          <span className="font-bold text-primary">Tus Aunyapat</span>
        </p>

        <p className="text-xl font-bold">A Computer Engineering Student</p>
        <p className="text-md font-bold">
          <span className="font-bold">from </span>
          <span className="font-bold text-primary">
            Chulalongkorn University
          </span>
        </p>
        <div className="flex flex-row justify-start my-4">
          <div className="px-4 py-1 bg-primary text-white rounded-lg shadow-xl border-2 border-primary hover:bg-primarycom hover:text-white hover:border-2 hover:border-primarycom ">
            <p>resume</p>
          </div>
          <div className="px-4 py-1 mx-4 bg-white text-primary rounded-lg border-2 border-primary  shadow-xl hover:bg-primarycom hover:text-white hover:border-primarycom">
            <p>see projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
