import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
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
