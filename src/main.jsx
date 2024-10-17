// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// // import Nav from "./Components/Nav.jsx";
// import Home from "./Components/Home.jsx";
// import About from "./Components/About.jsx";
// import Project from "./Components/Project.jsx";
// import Certification from "./Components/Certification.jsx";
// import Contact from "./Components/Contact.jsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { HashRouter as Router, RouterProvider } from "react-router-dom";

// //จะลิงค์ไปหน้าไหนก็เอาหน้านั้นมาใส่
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/project",
//     element: <Project />,
//   },
//   {
//     path: "/certification",
//     element: <Certification />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

//---------------------------------------------
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
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contact" element={<Contact />} /> */}
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

///--------------------------------------
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./Nav.jsx"; // นำเข้า Nav
// import Home from "./Home.jsx";
// import About from "./About.jsx";
// import Project from "./Project.jsx";
// import Certification from "./Certification.jsx";
// import Contact from "./Contact.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/certification" element={<Certification />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/" element={<Home />} />{" "}
//         {/* ให้หน้าแรกแสดงเมื่อเข้าที่ URL หลัก */}
//       </Routes>
//     </Router>
//   </StrictMode>
// );
