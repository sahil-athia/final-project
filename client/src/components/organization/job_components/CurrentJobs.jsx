import { useState } from 'react';
import Candidates from './Candidates';

const CurrentJobs = ({current_jobs, reload}) => {
  // const [edit, setEdit] = useState(false)
  
  const jobs = current_jobs.map((job) => (
      <div>
        <div>Title: {job.title}</div>
        <div>Salary: {job.salary}</div>
        <div>Description: {job.description}</div>
        <button className="btn" type="button">Edit</button>
        <button className="btn" type="button">Delete</button>
        <br />
        <div>
          <h3>Candidates</h3>
          <div>
            <Candidates
              job_id={job.id}
              organization_id={job.organization_id}
              reload={reload}
            />
          </div>
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