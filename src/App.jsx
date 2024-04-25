// import React from 'react';
import { BrowserRouter, } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import About from './components/about/About';
import Home from './components/home/Index';
// import Project from './components/home/Project';
// import Experience from './components/home/Experience';
// import Contact from './components/home/Contact';
// import ProjectPage from './components/projectPage/Project';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
