import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="main-footer">
      <Container>
        <Row>
          <Col>
            <img src="E:\Users\asep\Desktop\project web\bootcamp-new\react_mini_project\mini-project-react\src\assets" alt="Logo" width="150" height="50" />
            <h6>FE Batch 12</h6>
            <h6>Bootcamp dibimbing.id</h6>
          </Col>
          <Col>
            <h6>Follow Us</h6>
            <ul>
              <li>
                <a href="https://www.instagram.com/your_account/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/your_account/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.github.com/your_account/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
