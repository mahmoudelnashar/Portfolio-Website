import { HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import ThemeToggle from "./components/theme"; 

import aboutmeicon from "./assets/aboutme.svg";
import experienceicon from "./assets/experience.svg";
import githubicon from "./assets/github.svg";
import projectsicon from "./assets/projects.svg";
import linkedinicon from "./assets/linkedin.svg";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/"> <img src={aboutmeicon}/>About Me</Link>
        <Link to="/projects"><img src={projectsicon}/>Projects</Link>
        <Link to="/experience"><img src={experienceicon}/>Experience</Link>
        <a href="https://github.com/mahmoudelnashar" target="_blank"><img src={githubicon}/>Github</a>
        <a href="https://linkedin.com/in/mahmoud-elnashar-53852a2a8/" target="_blank"> <img src={linkedinicon}/>LinkedIn</a>
        <ThemeToggle />
      </div>
      
      
      <div className="content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
