import React from "react";
import Banner from "../component/Banner";
import About from "../component/About";
import Experience from "../component/Experience";
import Contact from "../component/Contact";
import Projects from "../component/projects";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
