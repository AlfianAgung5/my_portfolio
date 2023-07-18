import { Container } from "react-bootstrap";

const Services = () => {
  return (
    <Container>
      <h1 className="h1service text-light text-center">Services</h1>
      <p className="text-center mt-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="row d-flex justify-content-evenly mt-5 py-5">
        <div className="col-md-4 card-gap">
          <div class="cardBox mx-auto">
            <div class="card">
              <div class="h4">Web Developer</div>

              <div class="content">
                <div class="h3">How's it goin Fam ?</div>
                <p>
                  This is Pradeep Saran, your tech mate!!! I love you all. Lets
                  make this world a better place for all of us. Keep
                  prospering...Keep learning!!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 card-gap">
          <div class="cardBox mx-auto">
            <div class="card">
              <div class="h4">Graphic Designer</div>

              <div class="content">
                <div class="h3">What Softwares i use ?</div>
                <p>
                  Photoshop
                </p>
                <p>
                  Figma
                </p>
                <p>
                  Corel Draw
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 card-gap">
          <div class="cardBox mx-auto">
            <div class="card">
              <div class="h4">UI/UX Designer</div>

              <div class="content">
                <div class="h3">How's it goin Fam ?</div>
                <p>
                  This is Pradeep Saran, your tech mate!!! I love you all. Lets
                  make this world a better place for all of us. Keep
                  prospering...Keep learning!!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
