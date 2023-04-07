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
            <img src="./src/assets/logo-nextstream.png" alt="Logo" width="150" height="50" />
            <h5>We Serve For Beter Future</h5>
          </Col>
          <Col>
            <h5>Follow Us</h5>
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
