import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import "./style/portfolio.css";
import ProjectContent from "./components/ProjectContent";

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
      {/* <h1 className="h1service text-light text-center">Services</h1>
      <p className="text-center mt-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      {ServicesContent.map(ServicesContent => (
                    <Services 
                        key={ServicesContent.id}
                        role={ServicesContent.role}
                        roletitle={ServicesContent.roletitle}
                        description={ServicesContent.description}
                    />
                ))} */}
        <Services />
      </div>
      {/* Projects Section */}
      <div className="project" id="projects">
      <h1 className="h1service text-light text-center">Projects</h1>
        <p className="text-center mt-3 text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {ProjectContent.map(ProjectContent => (
                    <ProjectCard 
                        key={ProjectContent.id}
                        project={ProjectContent.project}
                        title={ProjectContent.title}
                        description={ProjectContent.description}
                    />
                ))}
        {/* <ProjectCard /> */}
      </div>
      <div className="aboutme" id="about">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
