import { useState } from 'react';

const CurrentJobs = ({current_jobs}) => {
  // const [edit, setEdit] = useState(false)
  
  const jobs = current_jobs.map((job) => (
      <div>
        <div>Title: {job.title}</div>
        <div>Salary: {job.salary}</div>
        <div>Description: {job.description}</div>
        <button className="btn" type="button">EDIT</button>
        <hr />
      </div>
    ));

  return (
    <div>
      {jobs}
    </div>
  )
};

export default CurrentJobs;