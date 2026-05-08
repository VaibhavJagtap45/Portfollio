import { Route, Routes } from "react-router-dom";
import About from "./About";
import Blogs from "./Blogs";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Main() {
  return (
    <div className="container-fluid mainpage">
      <div className="container  maincont">
        <div className="col-4">
          <Section1 />
        </div>
        <div className="col-8 ">
          <div className="col">
            <Section2 />
          </div>
          <div className="col">
            <Routes>
              <Route path="../components/About.jsx" element={<About />} />
              <Route path="../components/Blogs.jsx" element={<Blogs />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
