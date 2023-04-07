import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style.css"

const NavigationBar = () => {
    return (
        <div style={{backgroundColor:'black'}}>
            <Container>
        <Navbar variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="/">
  <img
    src="./src/assets/logo-nextstream.png"
    alt="Logo Nextstream"
    height="50"
    className="d-inline-block align-top"
  />
</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container> 
      </div>


    )
    }


export default NavigationBar