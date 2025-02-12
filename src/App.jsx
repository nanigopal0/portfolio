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
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
