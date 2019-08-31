import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="footer-text">GET OUR NEWSLETTER TO STAY UP TO DATE</div>
    <div className="footer-form">
      <div className="footer-form-input">
        <input className="footer-input" type="text" placeholder="First Name" />
      </div>
      <div className="footer-form-input">
        <input className="footer-input" type="text" placeholder="Last Name" />
      </div>
      <div className="footer-form-input">
        <input className="footer-input" type="text" placeholder="Email" />
      </div>
      <div className="footer-form-input">
        <button type="button" className="footer-button"><i className="fas fa-arrow-right" /></button>
      </div>
    </div>
    <div className="footer-others">
      <div className="footer-logo">
        <div className="footer-logo-image">
          <img src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/Edward+Consulting+Logo+white.png" alt="footer-img" />
        </div>
        <div className="footer-logo-name">
          <div className="footer-logo-name-main">Edward</div>
          <div className="footer-logo-name-sub">Consulting</div>
        </div>
      </div>
      <div className="footer-social">
        <div className="footer-contact-us">Contact us</div>
        <i className="fab fa-facebook-square" />
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter" />
        <i className="fa fa-envelope" />
      </div>
    </div>
  </div>
);

export default Footer;
