import { React } from 'react';

const ReferredJobs = (props) => {
  const { referredJobs, handleAccept, buttonContent, setButtonContent} = props;
  
  const jobList = referredJobs.map((job) => {

    return (
      <div>
        <div>id: </div>
        <div>{job.id}</div>
        <div>title: </div>
        <div>{job.title}</div>
        <div>description: </div>
        <div>{job.description}</div>
        <div>salary: </div>
        <div>{job.salary}</div>
        <div>organization_id: </div>
        <div>{job.organization_id}</div>
        <button 
        className="btn"
        type="button"
        disabled={buttonContent === 'ACCEPTED'? true : false}
        onClick={(e) => {
          e.preventDefault();
          handleAccept(job.id, job.organization_id);
          setButtonContent('ACCEPTED')
        }}>
          {buttonContent}
        </button>
        <hr />
      </div>
    );

  });
  
  return jobList;
};

export default ReferredJobs;