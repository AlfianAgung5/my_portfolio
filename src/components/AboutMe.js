import { Navbar, Container, Nav } from "react-bootstrap";
import aboutpic from "../assets/images/logo.png";
const AboutMe = () => {
    const bio = ["Alfian Agung Prasetyo", "08129221039", "alfianagung2000@gmail.com"];

  return (
    <Container>
      <div className="row py-5" >
        <div className="col-lg-5">
            <img src={aboutpic} width={"100%"} height={"600px"} alt="Ini Gambar">

            </img>
        </div>
        <div className="col-lg-5 px-5">
          <h1 className="text-dark text-start">About Me</h1>
          <p className="">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
          <h4 className="pt-2">Name : {bio[0]}</h4>
          <h4 className="pt-4">Phone : {bio[1]}</h4>
          <h4 className="pt-4">Email : {bio[2]}</h4>
          <h2 className="pt-4">My Interest</h2>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
