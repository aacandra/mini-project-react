import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigationbar = () => {
    return (
        <div>
            <container>
        <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NEXT-STREAM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
      </container> 
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