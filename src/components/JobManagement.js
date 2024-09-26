import React, { useState } from 'react';

function JobManagement() {
  const [jobs, setJobs] = useState([
    { id: 1, service: 'Fix leaking pipe', location: '123 Main St', status: 'In Progress' },
    { id: 2, service: 'Install sink', location: '456 Oak Ave', status: 'Pending' }
  ]);

  return (
    <div className="job-management">
      <h2>Job Management</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <p><strong>Service:</strong> {job.service}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Status:</strong> {job.status}</p>
          </li>
        ))}
      </ul>
      <button>View All Jobs</button>
    </div>
  );
}

export default JobManagement;
