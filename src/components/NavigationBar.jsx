import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style.css"


const NavigationBar = () => {

  const isLogin = localStorage.getItem('session_id')

  
  return (
        <div style={{backgroundColor:'black'}}>
            <Container>
        <Navbar variant="dark" expand="lg">
        <Container>
        <Navbar.Brand  href="/" style={{ fontWeight:'700', fontSize: '24px' }}>
        NEXT
        <span style={{ color: 'rgb(36, 186, 239)', fontSize: '25px' }}>-STREAM</span>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              { !isLogin ? (<Nav.Link href="/login">Login</Nav.Link>) :
                (<Nav.Link href="/Account">Account</Nav.Link>)

              
            }

              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container> 
      </div>


    )
    }


export default NavigationBar