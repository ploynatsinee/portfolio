// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Intro from '../src/Component/Navbar/Intro/Intro';
import Skill from '../src/Component/Skill/Skill';
import Project from '../src/Component/Project/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
