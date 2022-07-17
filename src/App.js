// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Intro from '../src/Component/Navbar/Intro/Intro';
import Skill from '../src/Component/Skill/Skill';
import Project from '../src/Component/Project/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route, Link } from "react-router-dom";
import Contact from '../src/Component/Contact/Contact';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Intro />
      <Skill />
      <Project />
      <Contact />
    
    </div>
  );
}

export default App;
