import "./App.css";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Error from "./pages/Error";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
