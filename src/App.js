
import logo from './logo.svg';
import './App.css';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

import Navbar from './components/inc/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
