import { useState, useEffect } from 'react';
import Candidates from './Candidates';
import EditJob from './EditJob';
import DeleteJob from './DeleteJob';

const CurrentJobs = ({current_jobs, reload}) => {

  const jobs = current_jobs.map((job) => (
      <div>
        <div>
          <div>Title: {job.title}</div>
          <div>Salary: {job.salary}</div>
          <div>Description: {job.description}</div>
        </div>
        <EditJob
          id={job.id}
          title={job.title}
          salary={job.salary}
          description={job.description}
          reload={reload}
        />
        <DeleteJob
          id={job.id}
          reload={reload}
        />
        <br />
        <div>
            <Candidates
              job_id={job.id}
              organization_id={job.organization_id}
            />
        </div>
        <hr/>
    </div>
  ));

  return (
    <div>
        <h2>Current Jobs</h2>
        {jobs}
    </div>
  )
};

export default CurrentJobs;
