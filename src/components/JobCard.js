import React, { useState } from 'react';
import './JobCard.css';

function JobCard({ job, onApply }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <h4>{job.title}</h4>
        <span className="job-type">{job.type}</span>
      </div>
      <p className="company-name"><i className="fas fa-building"></i> {job.company}</p>
      <p className="job-location"><i className="fas fa-map-marker-alt"></i> {job.location}</p>
      <p className="job-salary"><i className="fas fa-money-bill"></i> {job.salary}</p>
      <p className="job-description">{job.description}</p>
      <div className="job-requirements">
        <h6>Requirements:</h6>
        <ul>
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>
      <div className="job-footer">
        <small className="posted-date">Posted: {job.posted}</small>
        <button className="btn btn-primary btn-sm" onClick={() => onApply(job.id)}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard;
