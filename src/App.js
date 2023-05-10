import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";
import "./style/portfolio.css";

function App() {
  const carddesc = [
    { project: "Project #1", title: "Giri Makmur Jaya Company Profile", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { project: "Project #2", title: "Giri Makmur Jaya Company Profile", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { project: "Project #3", title: "Giri Makmur Jaya Company Profile", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];
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
        <Project desc = {carddesc} />
      </div>
      <div className="aboutme" id="about">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
