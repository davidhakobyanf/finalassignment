import React, { useRef } from 'react';
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import Footer from "./component/Footer/Footer";
import About from "./component/About/About";

function App() {
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const aboutRef = useRef(null); // Assuming Footer has some scrollable content
    const footerRef = useRef(null); // Assuming Footer has some scrollable content

    return (
        <div className="App">
            <Navbar
                homeRef={homeRef}
                servicesRef={servicesRef}
                aboutRef={aboutRef}
                footerRef={footerRef}
            />
            <div ref={homeRef}>
                <Home/>
            </div>
            <div ref={servicesRef}>
                <Services/>
            </div>
            <div ref={aboutRef}>
                <About/>
            </div>
            <div ref={footerRef}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
