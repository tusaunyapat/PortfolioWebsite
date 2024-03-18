import React from "react";
import Banner from "../component/Banner";
import About from "../component/About";
import Experience from "../component/Experience";
import Contact from "../component/Contact";
import Projects from "../component/projects";
import Skills from "../component/Skills";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
