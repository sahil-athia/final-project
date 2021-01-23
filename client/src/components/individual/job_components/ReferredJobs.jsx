import { React } from 'react';
import AcceptButton from './AcceptButton';

const ReferredJobs = (props) => {
  const { referredJobs, handleAccept} = props;
  
  const jobList = referredJobs.map((job) => {
    const {id, title, description, salary, organization_id} = job[0];
    return (
      <div key={id}>
        <div>Title: {title}</div>
        <div>Description: {description}</div>
        <div>Salary: {salary}</div>
        <AcceptButton
          id={id}
          organization_id={organization_id}
          handleAccept={handleAccept}
        />
      </div>
    );

  });
  
  return jobList;
};

export default ReferredJobs;