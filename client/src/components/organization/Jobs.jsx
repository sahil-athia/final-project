import { React, useState, useEffect } from 'react';
import CreateJobs from './job_components/CreateJobs';
import CurrentJobs from './job_components/CurrentJobs';
import '../../sass/Jobs.scss';
import Add from '../../icons/Add.png';

const Jobs = ({organization_id, current_jobs, reload}) => {
  const [newJob, setNewJob] = useState(false);

  const handelClick = () => {
    setNewJob(currentState => !currentState)
  };

  return (
    <div className="jobs">
      <div className="create-jobs">
      {!newJob && <>
      <img className="add-btn" src={Add} alt="add"/>
      <button className="add-btn" onClick={handelClick}>Create A New Job</button>
      </>}
      {newJob && <CreateJobs
      organization_id={organization_id}
      setNewJob={setNewJob}
      reload={reload}
      />}
      </div>
      <CurrentJobs
        current_jobs={current_jobs}
        reload={reload}
      />
    </div>
  )
  
};

export default Jobs;