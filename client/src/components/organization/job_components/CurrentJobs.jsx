import CurrentJob from './CurrentJob';

const CurrentJobs = ({current_jobs, reload}) => {

  const jobs = current_jobs.map((job) => {
    return (
    <CurrentJob key={job.id}
      job={job}
      reload={reload}
    />)
  });

  return (
    <div className="show-jobs">
      <h2 className="show-jobs-title">Open Positions</h2>
      <div className="current-jobs">
        {jobs}
      </div>
    </div>

  )
};

export default CurrentJobs;
