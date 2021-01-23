import { React } from 'react';
import Select from 'react-dropdown-select';
import './Modal.css'
import Modal from './Modal'
import OpenPosition from './OpenPosition'

const OpenPositions = ({options, orgJobs, handleSubmit}) => {
  const jobList = orgJobs.map((job) => {
    return (
    <OpenPosition key={job.id}
      job={job}
      options={options}
      handleSubmit={handleSubmit}
    />)
  });
  
  return (
    <div className="show-jobs">
      <div className="show-jobs-title">Open Positions</div>
      <div className="current-jobs">
        {jobList}
      </div>
    </div>
  )
};

export default OpenPositions;