import React from 'react';
import './JobDetails.css';

function JobDetails() {
  const job = {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'Islamabad, Pakistan',
    salary: '1,00,000 - 1,50,000 PKR',
    type: 'Full-time',
    posted: '2024-02-01',
    description: 'We are looking for an experienced Senior Software Engineer to join our innovative team. You will work on cutting-edge technologies and contribute to the development of scalable applications.',
    requirements: ['5+ years experience', 'JavaScript/TypeScript', 'React.js', 'Node.js', 'MongoDB', 'RESTful APIs'],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with product and design teams',
      'Code reviews and mentoring junior developers',
      'Participate in architectural decisions'
    ]
  };

  return (
    <div className="job-details-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="job-details-card">
              <div className="job-header">
                <h1>{job.title}</h1>
                <span className="job-type">{job.type}</span>
              </div>

              <div className="job-meta">
                <div className="meta-item">
                  <i className="fas fa-building"></i>
                  <span>{job.company}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{job.location}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-money-bill"></i>
                  <span>{job.salary}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-calendar"></i>
                  <span>Posted: {job.posted}</span>
                </div>
              </div>

              <section className="section">
                <h3>About This Job</h3>
                <p>{job.description}</p>
              </section>

              <section className="section">
                <h3>Responsibilities</h3>
                <ul className="responsibilities-list">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </section>

              <section className="section">
                <h3>Requirements</h3>
                <ul className="requirements-list">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </section>

              <div className="apply-section">
                <button className="btn btn-primary btn-lg">
                  <i className="fas fa-paper-plane"></i> Apply Now
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-heart"></i> Save Job
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <div className="company-card">
                <h5>About {job.company}</h5>
                <p>Tech Corp is a leading technology company specializing in innovative software solutions. With a team of 500+ professionals, we deliver cutting-edge solutions to clients worldwide.</p>
                <button className="btn btn-sm btn-primary w-100">
                  <i className="fas fa-arrow-right"></i> View Company
                </button>
              </div>

              <div className="share-card">
                <h5>Share This Job</h5>
                <div className="share-buttons">
                  <button className="btn btn-sm btn-primary">
                    <i className="fab fa-facebook"></i>
                  </button>
                  <button className="btn btn-sm btn-info">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <i className="fab fa-linkedin"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
