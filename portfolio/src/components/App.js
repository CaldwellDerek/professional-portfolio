import Navigation from './navigation';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <Navigation/>
      </header>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
