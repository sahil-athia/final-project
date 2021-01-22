import { React, useState } from 'react';
import axios from 'axios';

import ShowJob from './ShowJob';
import EditJob from './EditJob';
import Confirm from './Confirm';
import Candidates from './Candidates';

const CurrentJob = ({job, reload}) => {
  const SHOW         = "SHOW";
  const CONFIRM      = "CONFIRM";
  const EDIT         = "EDIT";
  const CANDIDATES   = "CANDIDATES";
  const [mode, setMode] = useState(SHOW);


  const saveChange = (id, data) => {    
    const state = {...data};
    axios.put(`http://localhost:8080/api/v1/job/${id}`, {state}, {withCredentials: true})
    .then(() => {
      reload(currentState => !currentState)
    })
    .then(() => setMode(SHOW))
    .catch((err) => console.log(err));
  };

  const deleteJob = (id) => {
    axios.delete(`http://localhost:8080/api/v1/job/${id}`)
    .then(() => {
      reload(currentState => !currentState);
      setMode(SHOW);
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className="job-card" key={job.id}>
      {mode === SHOW && (
      <ShowJob
        job={job}
        onDelete={() => setMode(CONFIRM)}
        onEdit={() => setMode(EDIT) }
        onReference={() => setMode(CANDIDATES)}
      />
      )}
      {mode === EDIT && (
        <EditJob
          id={job.id}
          title={job.title}
          salary={job.salary}
          description={job.description}
          onSave={saveChange}
          onCancel={() => setMode(SHOW)}
        />
      )}
      {mode === CONFIRM && (
        <Confirm 
        message="Are you sure you want to delete this job?"
        deleteConfirm={() => deleteJob(job.id)}
        deleteCancel={() => setMode(SHOW)}
        />
      )}
      {mode === CANDIDATES && (
      <Candidates
        job_id={job.id}
        hideCandidates={() => setMode(SHOW)}
      />
      )}
    </div>
  )
};

export default CurrentJob;
