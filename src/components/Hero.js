import {Container} from "react-bootstrap"
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
            <div className="mt-4">
            <button className="radius">
              <span>Download CV</span>
            </button>
            </div>
            </div>
            </div>
        </div>
        </Container>
      );
}

export default Hero