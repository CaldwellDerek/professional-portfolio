import Navigation from './navigation';
import Footer from './footer';
import About from './about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <Navigation/>
      </header>
      <div className="main">
        <About/>
      </div>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
