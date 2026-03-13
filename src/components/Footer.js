import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>About Manpower</h5>
              <p>Connect quality candidates with top employers across Pakistan. Your trusted recruitment partner.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/jobs">Browse Jobs</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact Info</h5>
              <p><i className="fas fa-phone"></i> +92 (0) 300-XXXX-XXXX</p>
              <p><i className="fas fa-envelope"></i> info@manpower.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Manpower Recruitment. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
