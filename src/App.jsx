import { Link } from "react-router-dom";

import "./App.css";
// import Nav from "./Components/Nav";
function App() {
  return (
    <>
      <h5>Hi Welcome to </h5>
      <h1>KETSARIN KHUNRAM</h1>
      {/* <Nav /> */}
      {/* <a href="Home">go home page</a> */}
      <Link to="/home">หน้าหลัก</Link>
    </>
  );
}

export default App;
