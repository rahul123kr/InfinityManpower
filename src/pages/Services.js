import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: 'fas fa-user-check',
      title: 'Candidate Screening',
      description: 'We thoroughly screen and verify all candidates to ensure quality matches for your organization.'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Job Placement',
      description: 'Expert job placement services connecting talented professionals with their ideal opportunities.'
    },
    {
      icon: 'fas fa-building',
      title: 'Staffing Solutions',
      description: 'Flexible staffing solutions including temporary, contract, and permanent placements.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Recruitment Consulting',
      description: 'Strategic recruitment consulting to help companies build high-performing teams.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Training & Development',
      description: 'Professional development programs to enhance skills and career growth of employees.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'HR Outsourcing',
      description: 'Comprehensive HR outsourcing services to manage your human resources efficiently.'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive recruitment and HR solutions tailored to your needs</p>
      </section>

      <div className="container py-5">
        <div className="row">
          {services.map((service, idx) => (
            <div className="col-md-6 col-lg-4 mb-4" key={idx}>
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a href="#" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="service-cta">
        <div className="container text-center">
          <h2>Need a Custom Solution?</h2>
          <p>Contact us to discuss your unique staffing and recruitment needs</p>
          <button className="btn btn-light btn-lg">Get in Touch</button>
        </div>
      </section>
    </div>
  );
}

export default Services;
