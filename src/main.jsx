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
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { HashRouter as Router, RouterProvider } from "react-router-dom";

// //จะลิงค์ไปหน้าไหนก็เอาหน้านั้นมาใส่
// const router = Router([
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

// // createRoot(document.getElementById("root")).render(
// //   <StrictMode>
// //     <RouterProvider router={router} />
// //   </StrictMode>
// // );
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <RouterProvider router={router} />
//     </Router>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Project from "./Components/Project.jsx";
import Certification from "./Components/Certification.jsx";
import Contact from "./Components/Contact.jsx";
import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// จะลิงค์ไปหน้าไหนก็เอาหน้านั้นมาใส่
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/project" element={<Project />} />
    <Route path="/certification" element={<Certification />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </StrictMode>
);
