import { React, useState } from 'react';

import ShowPosition from './ShowPosition';
import MakeReference from './MakeReference';

const OpenPosition = ({job, options, handleSubmit}) => {
  const SHOW      = "SHOW";
  const REFERENCE = "REFERENCE";
  const [mode, setMode] = useState(SHOW);

  return (
    <div className="position-card" key={job.id}>
      {mode === SHOW && (
        <ShowPosition
          job={job}
          onReference={() => setMode(REFERENCE)}
        />
      )}
      {mode === REFERENCE && (
        <MakeReference
          job_id={job.id}
          organization_id={job.organization_id}
          offReference={() => setMode(SHOW)}
          options={options}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )
};

export default OpenPosition;
