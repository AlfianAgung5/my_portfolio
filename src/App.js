import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";
import "./style/portfolio.css";

function App() {
  return (
    <div>
      {/* Hero and Navigation Bar */}
      <div className="hero" id="home">
        <NavigationBar />
        <Hero />
      </div>
      {/* Services Section */}
      <div className="service" id="service">
        <Services />
      </div>
      {/* Projects Section */}
      <div className="project" id="projects">
        <Project />
      </div>
      <div className="aboutme" id="about">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
