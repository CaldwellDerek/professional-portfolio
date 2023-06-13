import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/navigation';
// import MobileNavigation from './components/mobile-navigation';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    {/* <MobileNavigation/> */}
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);
