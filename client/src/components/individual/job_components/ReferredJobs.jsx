import { React } from 'react';
import AcceptButton from './AcceptButton';
import './position.scss'

const ReferredJobs = (props) => {

  const { referredJobs, handleAccept} = props;

  const jobList = referredJobs.map((job) => {
    const reference_id = Object.keys(job)[0];
    const {id, title, description, salary} = job[reference_id][0];
    const accepted = job["accepted"];
    
    return (
      <div key={id} className="job-box" >
        <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/10625049341582994876-512.png" alt="job-icon" className="job-icon"></img>
        <div className="job-title">{title}</div>
        <div className="job-description"><em>{description}</em></div>
        <div className="job-salary">{salary}</div>
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