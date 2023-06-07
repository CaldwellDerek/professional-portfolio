import Navigation from '../navigation';
import Footer from '../footer';
import About from '../about';
import Contact from '../contact';
import Projects from '../projects';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import close from '../../assets/close-menu.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='dropmenu'>
        <button className="closemenu"type="button">
          <img src={close} alt="close menu" />
        </button>
      </div>
      <Navigation/>
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
