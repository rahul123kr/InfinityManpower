import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Manpower</h1>
        <p>Your Trusted Recruitment Partner Since 2015</p>
      </section>

      <div className="container py-5">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>Manpower is a leading recruitment and staffing company in Pakistan, committed to connecting talented professionals with top employers. With over 8 years of experience, we've successfully placed over 10,000 candidates in various organizations.</p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>Our mission is to bridge the gap between job seekers and employers by providing quality recruitment services that create mutual growth and success. We believe in creating meaningful employment relationships that benefit both candidates and organizations.</p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>To be the most trusted and innovative recruitment platform in South Asia, recognized for our commitment to excellence and client satisfaction.</p>
        </section>

        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="value-card">
                <i className="fas fa-handshake"></i>
                <h5>Integrity</h5>
                <p>We conduct business with honesty and transparency</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="value-card">
                <i className="fas fa-star"></i>
                <h5>Excellence</h5>
                <p>We strive for the highest quality in everything we do</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="value-card">
                <i className="fas fa-users"></i>
                <h5>People First</h5>
                <p>We prioritize the success and satisfaction of our clients</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="value-card">
                <i className="fas fa-lightbulb"></i>
                <h5>Innovation</h5>
                <p>We embrace new ideas and modern recruitment practices</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p>Our experienced team of HR professionals and recruitment specialists is dedicated to delivering exceptional service.</p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="team-member">
                <div className="member-avatar">MH</div>
                <h5>Muhammad Hassan</h5>
                <p>Founder & CEO</p>
                <small>15+ years in recruitment</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-member">
                <div className="member-avatar">AF</div>
                <h5>Ayesha Fatima</h5>
                <p>Head of Operations</p>
                <small>10+ years experience</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-member">
                <div className="member-avatar">UR</div>
                <h5>Usman Raja</h5>
                <p>Lead Recruiter</p>
                <small>8+ years experience</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
