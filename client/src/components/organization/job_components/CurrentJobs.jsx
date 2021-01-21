import { useState, useEffect } from 'react';
import Candidates from './Candidates';
import EditJob from './EditJob';
import DeleteJob from './DeleteJob';

const CurrentJobs = ({current_jobs, reload}) => {

  const jobs = current_jobs.map((job) => {
    return (
      <div className="job-card" key={job.id}>
        <div className="job-info">
          <div>Title: {job.title}</div>
          <div>Salary: {job.salary}</div>
          <div>Description: {job.description}</div>
        </div>
        <div>
          <EditJob
            id={job.id}
            title={job.title}
            salary={job.salary}
            description={job.description}
            reload={reload}
          />
        </div>
        <div>
          <DeleteJob
            id={job.id}
            reload={reload}
          />
        </div>
        <div>
            <Candidates
              job_id={job.id}
              organization_id={job.organization_id}
            />
        </div>
    </div>)
  });

  return (
    <div className="show-jobs">
      <h2>Current Jobs</h2>
      <div className="current-jobs">
          {jobs}
      </div>
    </div>

  )
};

export default CurrentJobs;
