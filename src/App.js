import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
