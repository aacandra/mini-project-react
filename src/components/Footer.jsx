import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const Footer = () => {
  return (
    <div className="main-footer">
<section className="main-footer" style={{padding: '30px 20px'}}>
  <div className="container-fluid">
    <div className="row justify-content-lg-between justify-content-center">
      <div className="col-md-3">
        <div className="footer-widget">
          <div className="widget-content">
          <div className="footer-logo"  href="/" style={{ fontWeight:'700', fontSize: '20px' }}>
        NEXT
        <span style={{ color: 'rgb(36, 186, 239)', fontSize: '20px' }}>-STREAM</span>
        </div>
            <div className="footer-about-text">
              <p className="text-light-emphasis">This is mini project with React Library. Created By Asep Candra for FE Bootcamp Dimbimbing.id 2023</p>
            </div>
            <div className="footer-social-icons">
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
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="footer-widget">
          <div className="widget">
            <div className="widget-header">
              <h2 className="widget-title">Genre</h2>
            </div>
            <div className="widget-content footer-menu">
              <ul className="f-link list-unstyled mb-0">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Comedy</a>
                </li>
                <li>
                  <a href="#">Drama</a>
                </li>
                <li>
                  <a href="#">Horror</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="footer-widget">
          <div className="widget">
            <div className="widget-header">
              <h2 className="widget-title">Production</h2>
            </div>
            <div className="widget-content footer-menu">
              <ul className="f-link list-unstyled mb-0">
                <li>
                  <a href="#">2021 Year</a>
                </li>
                <li>
                  <a href="#">2020 Year</a>
                </li>
                <li>
                  <a href="#">2022 Year</a>
                </li>
                <li>
                  <a href="#">2023 Year</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="footer-widget">
          <div className="widget">
            <div className="widget-header">
              <h2 className="widget-title">Display Quality</h2>
            </div>
            <div className="widget-content footer-menu">
              <ul className="f-link list-unstyled mb-0">
                <li>
                  <a href="#">720p HDTV</a>
                </li>
                <li>
                  <a href="#">1080p BluRay</a>
                </li>
                <li>
                  <a href="#">720p BluRay</a>
                </li>
                <li>
                  <a href="#">1080p WEB-DL</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Footer;
