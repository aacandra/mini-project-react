import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigationbar = () => {
    return (
        <div>
            <Container>
        <Navbar variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container> 
      </div>


    )
        
        
    //     <div>
    //      <container>
    //     <Nav defaultActiveKey="/home" as="ul">
    //   <Nav.Item as="li">
    //     <Nav.Link href="/home">Active</Nav.Link>
    //   </Nav.Item>
    //     </Nav>
    //      </container>
    //     </div>)
    }


export default Navigationbar