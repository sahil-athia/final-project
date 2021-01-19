import { useState, useEffect } from 'react';
import Candidates from './Candidates';

const CurrentJobs = ({current_jobs}) => {

  const jobs = current_jobs.map((job) => (
      <div>
        <div>
        <div>Title: {job.title}</div>
        <div>Salary: {job.salary}</div>
        <div>Description: {job.description}</div>
        <button className="btn" type="button">Edit</button>
        <button className="btn" type="button">Delete</button>
        </div>
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
