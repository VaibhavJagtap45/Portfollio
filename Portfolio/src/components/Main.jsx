
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Section1 from './Section1';
import Section2 from './Section2'
import Blogs from './Blogs';

export default function Main() {
  return (
    
    
   <div className="container-fluid mainpage">
    <div className="container  maincont">
        <div className="col-4">
            <Section1/>
        </div>
        <div className="col-8 ">
            <div className="col">
                <Section2/>
            </div>
            <div className="col">
                
                <Routes>
                <Route exact path="../components/About.jsx" element={<About />} />  
                <Route path="../components/Blogs.jsx" element={<Blogs/>} />
                {/* <About/> */}
                {/* <Contact/> */}
                </Routes>
            </div>
        </div>
    </div>
   </div>
   
  
  )
}


