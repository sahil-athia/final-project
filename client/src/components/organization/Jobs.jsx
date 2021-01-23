import { React, useState } from 'react';
import CreateJobs from './job_components/CreateJobs';
import CurrentJobs from './job_components/CurrentJobs';
import '../../sass/Jobs.scss';
import Add from '../../icons/Add.png';
import Createjob from '../../icons/Createjob.jpg';

const Jobs = ({organization_id, current_jobs, reload}) => {
  const [newJob, setNewJob] = useState(false);

  const handelClick = () => {
    setNewJob(currentState => !currentState)
  };

  return (
    <section className="jobs">
      <div className="jobs-top">
        <div className="jobs-top-part1"> </div>
        <div className="jobs-top-part2"> </div>
      </div>
      <div className="create-jobs">
        <img className="create-jobs-img" src={Createjob} alt="Createjob"/>
        {!newJob && 
        <button className="add-btn" onClick={handelClick}>
          <img className="add-btn" src={Add} alt="add"/>
          New Job
        </button>
        }
        {newJob && <CreateJobs
        organization_id={organization_id}
        setNewJob={setNewJob}
        reload={reload}
        />}
      </div>
      <div className="jobs-body">
      <div className="jobs-body-blank"> </div>
      <div className="jobs-body-blank2"> </div>
        <CurrentJobs
          current_jobs={current_jobs}
          reload={reload}
        />
      </div>
    </section>
  )
  
};

export default Jobs;