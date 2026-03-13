import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Find Your Perfect Job",
      subtitle: "Connect with top employers and advance your career",
      image: "linear-gradient(135deg, #0066cc 0%, #004a99 100%)"
    },
    {
      title: "Trusted by 1000+ Companies",
      subtitle: "Access the largest network of talented professionals",
      image: "linear-gradient(135deg, #00a678 0%, #006b4f 100%)"
    },
    {
      title: "Expert Staffing Solutions",
      subtitle: "Find the right talent for your organization",
      image: "linear-gradient(135deg, #ff6b35 0%, #cc5a2a 100%)"
    },
    {
      title: "Hire Fast, Hire Smart",
      subtitle: "Streamlined recruitment process, guaranteed results",
      image: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="home">
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div 
          className="hero"
          style={{ background: heroSlides[currentSlide].image }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-slide-title">{heroSlides[currentSlide].title}</h1>
            <p className="hero-slide-subtitle">{heroSlides[currentSlide].subtitle}</p>
            <div className="hero-buttons">
              <Link to="/jobs" className="btn btn-primary btn-lg">Browse Jobs</Link>
              <button className="btn btn-outline-light btn-lg">Register Now</button>
            </div>
          </div>
          
          {/* Slider Controls */}
          <button className="slider-btn slider-prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="slider-btn slider-next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Slide Indicators */}
          <div className="slider-indicators">
            {heroSlides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="quick-stats">
        <div className="container">
          <div className="stats-row">
            <div className="stat-item">
              <h3>50,000+</h3>
              <p>Active Job Seekers</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="stat-item">
              <h3>10000+</h3>
              <p>Placements Made</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section-padding">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="feature-card">
                <i className="fas fa-briefcase feature-icon"></i>
                <h4>5000+ Jobs</h4>
                <p>Access thousands of job opportunities across various industries</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="feature-card">
                <i className="fas fa-building feature-icon"></i>
                <h4>Top Companies</h4>
                <p>Join Pakistan's leading companies and multinational corporations</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="feature-card">
                <i className="fas fa-user-tie feature-icon"></i>
                <h4>Expert Support</h4>
                <p>Get professional guidance from experienced recruitment specialists</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="feature-card">
                <i className="fas fa-rocket feature-icon"></i>
                <h4>Quick Hiring</h4>
                <p>Get hired in less time with our streamlined selection process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h4>Talent Search & Recruitment</h4>
                <p>We find the right candidates that match your organization's needs with precision and expertise.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Staffing Solutions</h4>
                <p>Permanent, temporary, and contract staffing solutions tailored to your business requirements.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Training & Development</h4>
                <p>Comprehensive training programs to enhance skills and prepare candidates for roles.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Career Consulting</h4>
                <p>Professional career guidance to help you make the right decisions for your future.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>HR Consulting</h4>
                <p>Strategic HR solutions to optimize your recruitment and workforce management processes.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h4>International Placement</h4>
                <p>Gateway to global opportunities with placements in multiple countries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works section-padding">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Register</h4>
              <p>Create your profile with your skills and qualifications</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Search</h4>
              <p>Browse through thousands of job listings</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Apply</h4>
              <p>Submit your application with one click</p>
            </div>
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Succeed</h4>
              <p>Get your dream job and grow your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="industries section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="industry-card">
                <i className="fas fa-code"></i>
                <h5>IT & Technology</h5>
                <p>Software developers, engineers, QA specialists, and tech support professionals</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="industry-card">
                <i className="fas fa-hospital"></i>
                <h5>Healthcare</h5>
                <p>Doctors, nurses, paramedics, and medical professionals</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="industry-card">
                <i className="fas fa-coins"></i>
                <h5>Finance & Banking</h5>
                <p>Accountants, financial analysts, and banking professionals</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="industry-card">
                <i className="fas fa-store"></i>
                <h5>Retail & E-commerce</h5>
                <p>Sales staff, managers, and customer service representatives</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="industry-card">
                <i className="fas fa-graduation-cap"></i>
                <h5>Education</h5>
                <p>Teachers, trainers, and educational administrators</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="industry-card">
                <i className="fas fa-hotel"></i>
                <h5>Hospitality & Tourism</h5>
                <p>Hotel staff, tour guides, and hospitality professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Jobs Section */}
      <section className="popular-jobs section-padding">
        <div className="container">
          <h2 className="section-title">Popular Jobs</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="job-item">
                <h5>Senior Software Engineer</h5>
                <p className="company">Tech Corp | Islamabad</p>
                <p className="salary">1,00,000 - 1,50,000 PKR</p>
                <p>5+ years experience required. Work with modern tech stack.</p>
                <Link to="/jobs/1" className="btn btn-sm btn-primary">View Details</Link>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="job-item">
                <h5>Full Stack Developer</h5>
                <p className="company">Digital Solutions | Karachi</p>
                <p className="salary">70,000 - 1,00,000 PKR</p>
                <p>MERN stack experience. Join our growing tech team.</p>
                <Link to="/jobs/2" className="btn btn-sm btn-primary">View Details</Link>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="job-item">
                <h5>Marketing Manager</h5>
                <p className="company">Creative Agency | Lahore</p>
                <p className="salary">80,000 - 1,20,000 PKR</p>
                <p>Lead marketing campaigns and manage team. 3+ years experience.</p>
                <Link to="/jobs/3" className="btn btn-sm btn-primary">View Details</Link>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="job-item">
                <h5>Senior HR Executive</h5>
                <p className="company">Corporate Group | Islamabad</p>
                <p className="salary">75,000 - 1,10,000 PKR</p>
                <p>Manage recruitment and employee relations. Strong leadership skills.</p>
                <Link to="/jobs/4" className="btn btn-sm btn-primary">View Details</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/jobs" className="btn btn-primary btn-lg">View All Jobs</Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="stat-box">
                <h3>50,000+</h3>
                <p>Active Candidates</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-box">
                <h3>1000+</h3>
                <p>Registered Companies</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-box">
                <h3>10000+</h3>
                <p>Successful Placements</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stat-box">
                <h3>95%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"Manpower helped me find my dream job! The process was smooth and professional."</p>
                <h6>- Ahmed Khan</h6>
                <small>Software Engineer at Tech Corp</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"Excellent service. We found top talent through Manpower for our team."</p>
                <h6>- Fatima Hassan</h6>
                <small>HR Manager, Tech Solutions</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"Professional approach and great support throughout the hiring process."</p>
                <h6>- Usman Ali</h6>
                <small>Recruitment Head, Innovation Labs</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"Got placed within 2 weeks. The team was extremely supportive and helpful."</p>
                <h6>- Sarah Khan</h6>
                <small>Marketing Manager at Creative Agency</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"Best platform for finding reliable staff. Highly recommended for all companies."</p>
                <h6>- Hassan Raza</h6>
                <small>HR Director, Manufacturing Co.</small>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"Career guidance was exactly what I needed. Thank you for the opportunity!"</p>
                <h6>- Zainab Ahmed</h6>
                <small>Consultant at Financial Services</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="recruitment-process section-padding">
        <div className="container">
          <h2 className="section-title">Our Recruitment Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <h4>Application Submission</h4>
              <p>Submit your application with your resume and cover letter</p>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <h4>Initial Screening</h4>
              <p>Our experts review your qualifications and experience</p>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <h4>Interview Round</h4>
              <p>Technical and HR rounds to assess your skills</p>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <h4>Final Selection</h4>
              <p>Get your offer letter and join your dream company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Why Candidates Love Us</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="benefit-item">
                <i className="fas fa-check-circle"></i>
                <h5>Personalized Support</h5>
                <p>One-on-one guidance throughout your job search journey</p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check-circle"></i>
                <h5>Verified Companies</h5>
                <p>All employers on our platform are verified and trusted</p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check-circle"></i>
                <h5>Skill Development</h5>
                <p>Access free training and certification programs</p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check-circle"></i>
                <h5>Fast Placement</h5>
                <p>Average placement time of just 2-3 weeks</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="benefit-item">
                <i className="fas fa-check-circle"></i>
                <h5>Competitive Salaries</h5>
                <p>Access to high-paying positions in top companies</p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check-circle"></i>
                <h5>Career Growth</h5>
                <p>Continuous mentorship and career advancement opportunities</p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check-circle"></i>
                <h5>Global Network</h5>
                <p>Connect with professionals and opportunities worldwide</p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-check-circle"></i>
                <h5>24/7 Support</h5>
                <p>Round-the-clock customer support for all your queries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="newsletter section-padding">
        <div className="container">
          <div className="newsletter-container">
            <h2>Stay Updated with Latest Job Opportunities</h2>
            <p>Subscribe to our newsletter and get notifications for jobs matching your profile</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                className="form-input"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section-padding">
        <div className="container text-center">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of successful professionals and employers</p>
          <div className="cta-buttons">
            <Link to="/jobs" className="btn btn-light btn-lg">Browse Jobs</Link>
            <button className="btn btn-outline-light btn-lg">Register as Employer</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
