import { useState } from 'react';
import axios from 'axios';
import ShowEmployee from './ShowEmployee';
import Confirm from '../job_components/Confirm';

const CurrentEmployee = ({id, name, email, summary, skills, experience, reload, localReload}) => {
  const SHOW         = "SHOW";
  const CONFIRM      = "CONFIRM";
  const [mode, setMode] = useState(SHOW);

  const deleteJob = (id) => {
    const data = { "id": id, "organization_id": null, "verified": false };
    axios.put(`http://localhost:8080/api/v1/user/${id}`, {data}, {withCredentials: true})
    .then(() => {
      reload(currentState => !currentState);
      setMode(SHOW);
      localReload(currentState => !currentState);
    })
    .catch((err) => console.log(err));
  }

  const deleteCancel = () => {
    setMode(SHOW)
  }

  return(
    <div className="employee-box" key={id}>
      {mode === SHOW && (
        <ShowEmployee
        id={id}
        name={name}
        email={email}
        summary={summary}
        skills={skills}
        experience={experience}
        onDelete={() => setMode(CONFIRM)}
        /> 
      )}
      {mode === CONFIRM && (
        <Confirm
        message="Are you sure you want to remove this employee?"
        deleteConfirm={() => deleteJob(id)}
        deleteCancel={deleteCancel}
      />
      )}
    </div>
  )
};

export default CurrentEmployee;