import React, { useState } from 'react';

const jobTypes = [
  { id: 1, name: 'Plumbing', img: 'https://via.placeholder.com/150?text=Plumbing' },
  { id: 2, name: 'Electrician', img: 'https://via.placeholder.com/150?text=Electrician' },
  { id: 3, name: 'Carpentry', img: 'https://via.placeholder.com/150?text=Carpentry' }
];

const jobsList = {
  Plumbing: [{ id: 1, job: 'Fix Leak', location: '123 Main St' }],
  Electrician: [{ id: 2, job: 'Install Socket', location: '456 Oak St' }],
  Carpentry: [{ id: 3, job: 'Build Shelf', location: '789 Pine St' }]
};

function JobTypes() {
  const [selectedJobType, setSelectedJobType] = useState(null);

  const handleJobTypeClick = (type) => {
    setSelectedJobType(type);
  };

  return (
    <div className="job-types">
      <h2>Job Types</h2>
      <div className="job-types-list">
        {jobTypes.map((job) => (
          <div key={job.id} className="job-type" onClick={() => handleJobTypeClick(job.name)}>
            <img src={job.img} alt={job.name} />
            <p>{job.name}</p>
          </div>
        ))}
      </div>

      {selectedJobType && (
        <div className="jobs-available">
          <h3>Available Jobs for {selectedJobType}</h3>
          <ul>
            {jobsList[selectedJobType].map((job) => (
              <li key={job.id}>
                <strong>{job.job}</strong> - {job.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default JobTypes;
