import "./App.css";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Error from "./pages/Error";

import About from "./component/About";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Projects from "./component/projects";
import Skills from "./component/Skills";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
