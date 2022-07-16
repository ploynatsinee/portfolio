// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Intro from '../src/Component/Navbar/Intro/Intro';
import Skill from '../src/Component/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
    </div>
  );
}

export default App;
