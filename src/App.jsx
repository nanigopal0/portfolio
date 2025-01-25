import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Me from "./Me";
import Projects from "./Projects";
import Achievments from "./Achievments";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/me" element={<Me />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievments" element={<Achievments />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
