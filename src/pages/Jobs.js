import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import './Jobs.css';

function Jobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'Islamabad, Pakistan',
      salary: '1,00,000 - 1,50,000 PKR',
      type: 'Full-time',
      description: 'We are looking for an experienced Senior Software Engineer to join our innovative team...',
      requirements: ['5+ years experience', 'JavaScript', 'React', 'Node.js']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions',
      location: 'Karachi, Pakistan',
      salary: '70,000 - 1,00,000 PKR',
      type: 'Full-time',
      description: 'Join our team as a Full Stack Developer and work on exciting projects...',
      requirements: ['3+ years experience', 'MERN Stack', 'Database Design']
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Lahore, Pakistan',
      salary: '60,000 - 90,000 PKR',
      type: 'Full-time',
      description: 'Looking for a creative UI/UX Designer to create amazing user experiences...',
      requirements: ['3+ years experience', 'Figma', 'UI Design', 'User Research']
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Cloud Systems',
      location: 'Islamabad, Pakistan',
      salary: '90,000 - 1,30,000 PKR',
      type: 'Full-time',
      description: 'We need a DevOps Engineer to manage our cloud infrastructure...',
      requirements: ['4+ years experience', 'AWS/Azure', 'Docker', 'Kubernetes']
    }
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(job => job.type === selectedType);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, selectedType]);

  const handleApply = (jobId) => {
    alert(`Applied for job ID: ${jobId}`);
  };

  return (
    <div className="jobs-page">
      <section className="jobs-hero">
        <h1>Find Your Dream Job</h1>
        <p>Browse our latest job openings</p>
      </section>

      <div className="container py-5">
        <div className="row">
          {/* Filters */}
          <div className="col-md-3 mb-4">
            <div className="filters-panel">
              <h5>Filters</h5>
              
              <div className="filter-group">
                <label>Search</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job title, company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="filter-group">
                <label>Job Type</label>
                <select
                  className="form-control"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option>All</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>

              <button className="btn btn-primary w-100">
                <i className="fas fa-filter"></i> Apply Filters
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="col-md-9">
            {filteredJobs.length > 0 ? (
              <div>
                <p className="results-count">{filteredJobs.length} jobs found</p>
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} onApply={handleApply} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <h4>No jobs found</h4>
                <p>Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
