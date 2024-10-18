import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Project from "./Components/Project.jsx";
import Certification from "./Components/Certification.jsx";
import Contact from "./Components/Contact.jsx";
import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// จะลิงค์ไปหน้าไหนก็เอาหน้านั้นมาใส่
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Nav />
              <About />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Nav />
              <Project />
            </>
          }
        />
        <Route
          path="/certification"
          element={
            <>
              <Nav />
              <Certification />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Nav />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
