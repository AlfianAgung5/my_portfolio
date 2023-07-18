import logo from "../assets/images/logo.png";

function ProjectCard(props){
    return(
        <>
      <div className="project-card d-flex align-items-start">
        <div className="project-img col-md-4">
          <img src={logo} width={"100%"} height={"100%"}></img>
        </div>
        <div className="order text-light mx-4 col-md-7 mt-2">
          <p>{props.project}</p>
          <h2 className="title-project">{props.title}</h2>
          <p className="mt-4">{props.description}</p>
        </div>
      </div>
        </>
    );
}
export default ProjectCard;