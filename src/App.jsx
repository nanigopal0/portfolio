import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Feedback from "./Feedback";

function App() {
  return (
    <>
      <NavBar />

      <Home />

      <Footer />
    </>
  );
}

export default App;
