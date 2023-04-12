import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar className="nav" bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold fs-4">Logo<span className="text-danger">.</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
                <Nav.Link href="#service" className="mx-2">Services</Nav.Link>
                <Nav.Link href="#link" className="mx-2">Portfolio</Nav.Link>
                <Nav.Link href="#projects" className="mx-2">Projects</Nav.Link>
                <Nav.Link href="#link" className="mx-2">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavigationBar