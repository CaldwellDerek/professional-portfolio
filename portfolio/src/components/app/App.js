import Navigation from '../navigation';
import MobileNavigation from '../mobile-navigation';
import About from '../about';
import Projects from '../projects';
// import {BrowserRouter, Routes, Route } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Navigation/>
        <MobileNavigation/>
        <About/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
