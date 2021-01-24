import { React } from 'react';
import OpenPosition from './OpenPosition'

const OpenPositions = ({options, orgJobs, handleSubmit}) => {
  const headerStyle = {
    color: "rgb(150, 150, 150)",
    fontSize: "250%",
    fontFamily: "Garamond, serif",
    fontWeight: "100"
  }

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
      <div className="show-jobs-title" style={headerStyle}>Open Positions</div>
      <div className="current-jobs">
        {jobList}
      </div>
    </div>
  )
};

export default OpenPositions;