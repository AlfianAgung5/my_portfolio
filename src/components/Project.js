import { Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const Project = (props) => {
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
        <div className="project-img col-md-4">
          <img src={logo} width={"100%"} height={"100%"}></img>
        </div>
        <div className="text-light mx-4 col-md-7 mt-2">
          <p>{props.desc[0].project}</p>
          <h2 className="title-project">{props.desc[0].title}</h2>
          <p className="mt-4">{props.desc[0].description}</p>
          <div className="d-flex justify-content-center mb-4">
            <button>
              {" "}
              <span>Button</span>
            </button>
          </div>
        </div>
        {/* <div className="text-light mx-4 col-md-2 d-flex flex-row text-center">
            <p className="mx-3">Github</p>
            <p className="mx-3">Codepen</p>
            <p className="mx-3">Website</p>
            </div> */}
      </div>
      {/* <a className="adec" href="#home"> */}
      <div className="project-card d-flex align-items-start">
        <div className="project-img col-md-4">
          <img src={logo} width={"100%"} height={"100%"}></img>
        </div>
        <div className="text-light col-md-7 mt-2 order-md-first d-flex flex-column">
          <p>{props.desc[1].project}</p>
          <h2 className="">{props.desc[1].title}</h2>
          <p className="p-project justify-self-center">
            {props.desc[1].description}
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
        <div className="project-img col-md-4">
          <img src={logo} width={"100%"} height={"100%"}></img>
        </div>
        <div className="text-light mx-4 col-md-7 mt-2">
          <p>{props.desc[2].project}</p>
          <h2 className="">{props.desc[2].title}</h2>
          <p>
          {props.desc[2].description}
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
