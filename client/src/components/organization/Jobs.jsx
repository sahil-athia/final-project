import { React, useState, useEffect } from 'react';
import CreateJobs from './job_components/CreateJobs';
import CurrentJobs from './job_components/CurrentJobs';

const Jobs = ({organization_id, current_jobs, reload}) => {
  const [newJob, setNewJob] = useState(false);

  const handelClick = () => {
    setNewJob(currentState => !currentState)
  };

  return (
    <>
      {!newJob && <button onClick={handelClick}>Create A New Job</button>}
      {newJob && <CreateJobs
      organization_id={organization_id}
      setNewJob={setNewJob}
      reload={reload}
      />}
      <hr/>
      
      <CurrentJobs
        current_jobs={current_jobs}
        reload={reload}
      />
    </>
  )
  
};

export default Jobs;