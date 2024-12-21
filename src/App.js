import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './components/index.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
    </BrowserRouter>
    
  );
}

export default App;
