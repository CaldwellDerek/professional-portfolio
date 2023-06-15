import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/navigation';
import MobileNavigation from './components/mobile-navigation';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <MobileNavigation/>
    <div className='content'>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
    <Footer/>
  </React.StrictMode>
);
