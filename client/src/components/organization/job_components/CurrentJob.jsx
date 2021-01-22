import { useState, useEffect } from 'react';
import Candidates from './Candidates';
import EditJob from './EditJob';
import DeleteJob from './DeleteJob';

const CurrentJob = ({job, reload}) => {
console.log(job)
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
  </div>
  )
};

export default CurrentJob;
