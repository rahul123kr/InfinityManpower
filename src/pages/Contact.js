import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you</p>
      </section>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="contact-info">
              <h4>Contact Information</h4>
              
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h6>Address</h6>
                  <p>G-8, Jinnah Market<br/>Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h6>Phone</h6>
                  <p>+92 (0) 300-XXXXXXX<br/>+92 (0) 51-XXXXXXX</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h6>Email</h6>
                  <p>info@manpower.com<br/>careers@manpower.com</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h6>Business Hours</h6>
                  <p>Monday - Friday: 9 AM - 6 PM<br/>Saturday: 10 AM - 4 PM</p>
                </div>
              </div>

              <h5 className="mt-4">Follow Us</h5>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="contact-form-container">
              <h3>Send us a Message</h3>
              
              {submitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h5>Thank you!</h5>
                  <p>We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="fas fa-paper-plane"></i> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
