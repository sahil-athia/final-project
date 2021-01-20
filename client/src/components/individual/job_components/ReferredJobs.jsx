import { React } from 'react';
import AcceptButton from './AcceptButton';

const ReferredJobs = (props) => {
  const { referredJobs, handleAccept} = props;
  
  const jobList = referredJobs.map((job) => {

    return (
      <div key={job.id}>
        <div>Title: {job.title}</div>
        <div>Description: {job.description}</div>
        <div>Salary: {job.salary}</div>
        <AcceptButton
          id={job.id}
          organization_id={job.organization_id}
          handleAccept={handleAccept}
        />
        <hr />
      </div>
    );

  });
  
  return jobList;
};

export default ReferredJobs;