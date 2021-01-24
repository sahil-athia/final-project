import { React } from 'react';
import AcceptButton from './AcceptButton';

const ReferredJobs = (props) => {
  const { referredJobs, handleAccept} = props;
  const jobList = referredJobs.map((job) => {
    const reference_id = Object.keys(job)[0];
    const {id, title, description, salary} = job[reference_id][0];
    const accepted = job["accepted"];
    return (
      <div key={id}>
        <div>Title: {title}</div>
        <div>Description: {description}</div>
        <div>Salary: {salary}</div>
        <AcceptButton
          reference_id={reference_id}
          handleAccept={handleAccept}
          accepted={accepted}
        />
      </div>
    );
  });
  return jobList;
};

export default ReferredJobs;