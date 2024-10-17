// import "./Nav.css";
// import Home from "./Home.jsx";
// import About from "./About.jsx";
// import Project from "./Project.jsx";
// import Certification from "./Certification.jsx";
// import Contact from "./Contact.jsx";

// import { Route, Routes, Link } from "react-router-dom";

// function Nav() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/home">หน้าหลัก</Link>
//           </li>
//           <li>
//             <Link to="/about">เกี่ยวกับเรา</Link>
//           </li>
//           <li>
//             <Link to="/Project">ผลงาน</Link>
//           </li>
//           <li>
//             <Link to="/Certification">ใบรับรอง</Link>
//           </li>
//           <li>
//             <Link to="/contact">เรซูเม</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/certification" element={<Certification />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default Nav;

import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">หน้าหลัก</Link>
          </li>
          <li>
            <Link to="/about">เกี่ยวกับเรา</Link>
          </li>
          <li>
            <Link to="/project">ผลงาน</Link>
          </li>
          <li>
            <Link to="/certification">ใบรับรอง</Link>
          </li>
          <li>
            <Link to="/contact">เรซูเม</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
