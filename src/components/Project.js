import { Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import Lottie from "lottie-react";
const Project = () => {
  return (
    <Container>
      <h1 className="h1service text-light text-center">Projects</h1>
      <p className="text-center mt-4 text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="project-card d-flex align-items-start">
        <div className="project-img col-md-4"></div>
        <div className="text-light mx-4 col-md-7 mt-2">
          <p>Project #1</p>
          <h2 className="title-project">Giri Makmur Company Profile</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
        </div>
        {/* <div className="text-light mx-4 col-md-2 d-flex flex-row text-center">
            <p className="mx-3">Github</p>
            <p className="mx-3">Codepen</p>
            <p className="mx-3">Website</p>
            </div> */}
      </div>
      {/* <a className="adec" href="#home"> */}
        <div className="project-card d-flex align-items-start">
          <div className="project-img col-md-5 offset-md-1">
            <img src={logo} width={"100%"} height={"100%"}></img>
          </div>
          <div className="text-light col-md-6 mt-2 order-md-first d-flex flex-column">
            <h2 className="">Second projects</h2>
            <p className="p-project justify-self-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            </p>
          </div>
          {/* <div className="text-light mx-4 col-md-2 d-flex flex-column text-center">
            <p>Github</p>
            <p>Codepen</p>
            <p>Website</p>
            </div> */}
        </div>
      {/* </a> */}
      <div className="project-card d-flex align-items-start">
        <div className="project-img col-md-4"></div>
        <div className="text-light mx-4 col-md-7 mt-2">
          <h2 className="">Third projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
        </div>
        {/* <div className="text-light mx-4 col-md-2 d-flex flex-column text-center">
            <p>Github</p>
            <p>Codepen</p>
            <p>Website</p>
            </div> */}
      </div>
    </Container>
  );
};

export default Project;
