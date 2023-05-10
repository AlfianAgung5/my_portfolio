import { Navbar, Container, Nav } from "react-bootstrap"
import Heroimg from "../assets/images/heroimg.json"
import Lottie from "lottie-react"

const Hero = () => {
    return (
        <Container>
        <div className="row align-items-center align-content-center py-5">
        <div className="col-lg-6 d-flex justify-content-center">
            <div style={{width:"90%"}}>
            <Lottie loop={true} animationData={Heroimg} />
            </div>
            </div>
            <div className="text-light col-lg-6 order-md-first">
            <h1 className="hero-description text-sm-center text-md-start">Hello, I am <br></br><span style={{color:"tomato"}}>(Name)</span></h1>
            <p className="hero-description text-sm-center text-md-start text-muted">I am Web Developer and UI/UX Designer</p>
            <div className="hero-btn">
            <a className="btn btn-primary mt-4 me-4">Contact</a>
            <a className="btn btn-primary mt-4">Download CV</a>
            </div>
            </div>
        </div>
        </Container>
      );
}

export default Hero